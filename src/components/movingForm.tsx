"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";

const ALBERTA_SW = { lat: 49.0, lng: -120.05 };
const ALBERTA_NE = { lat: 60.0, lng: -109.95 };

function loadGoogleMaps(apiKey: string): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.google?.maps?.places) return Promise.resolve();
  if (window.__shiftrixGoogleMapsPromise) return window.__shiftrixGoogleMapsPromise;

  window.__shiftrixGoogleMapsPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>("script[data-shiftrix-maps]");
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject(new Error("Failed to load Google Maps")));
      return;
    }

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&libraries=places&v=weekly`;
    script.async = true;
    script.defer = true;
    script.dataset.shiftrixMaps = "true";
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load Google Maps"));
    document.head.appendChild(script);
  });

  return window.__shiftrixGoogleMapsPromise;
}

function isAlbertaPlace(place: google.maps.places.PlaceResult): boolean {
  const components = place.address_components ?? [];
  return components.some((c: google.maps.GeocoderAddressComponent) => {
    if (!c.types.includes("administrative_area_level_1")) return false;
    const short = c.short_name?.toUpperCase();
    const long = c.long_name?.toLowerCase();
    return short === "AB" || long === "alberta";
  });
}

function formatAlbertaTown(place: google.maps.places.PlaceResult): string {
  const components = place.address_components ?? [];
  const locality =
    components.find((c: google.maps.GeocoderAddressComponent) => c.types.includes("locality"))?.long_name ||
    components.find((c: google.maps.GeocoderAddressComponent) => c.types.includes("postal_town"))?.long_name ||
    components.find((c: google.maps.GeocoderAddressComponent) =>
      c.types.includes("administrative_area_level_3")
    )?.long_name ||
    place.name ||
    "";

  if (locality) return `${locality}, AB`;
  return place.formatted_address?.replace(/, Canada$/i, "") || place.name || "";
}

type AlbertaTownInputProps = {
  name: "moveFrom" | "moveTo";
  value: string;
  placeholder: string;
  inputClass: string;
  mapsReady: boolean;
  onChange: (value: string) => void;
};

function AlbertaTownInput({
  name,
  value,
  placeholder,
  inputClass,
  mapsReady,
  onChange,
}: AlbertaTownInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const listId = useId();

  useEffect(() => {
    if (!mapsReady || !inputRef.current || !window.google?.maps?.places) return;

    const bounds = new window.google.maps.LatLngBounds(ALBERTA_SW, ALBERTA_NE);
    const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, {
      componentRestrictions: { country: "ca" },
      fields: ["address_components", "formatted_address", "geometry", "name"],
      types: ["(cities)"],
      bounds,
      strictBounds: true,
    });

    autocomplete.setBounds(bounds);
    autocompleteRef.current = autocomplete;

    const listener = autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      if (!place || !place.address_components) return;

      if (!isAlbertaPlace(place)) {
        onChange("");
        if (inputRef.current) inputRef.current.value = "";
        return;
      }

      const town = formatAlbertaTown(place);
      onChange(town);
      if (inputRef.current) inputRef.current.value = town;
    });

    return () => {
      if (listener) window.google?.maps?.event?.removeListener(listener);
      autocompleteRef.current = null;
      // Google attaches a pac-container; remove orphaned listeners only.
    };
  }, [mapsReady, onChange]);

  return (
    <div className="relative">
      <svg
        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-indigo-600 z-[1]"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      <input
        ref={inputRef}
        id={listId}
        name={name}
        type="text"
        autoComplete="off"
        placeholder={placeholder}
        defaultValue={value}
        onChange={(e) => onChange(e.target.value)}
        className={inputClass}
        aria-label={placeholder}
      />
    </div>
  );
}

type QuoteForm = {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  moveFrom: string;
  moveTo: string;
  service: string;
};

const inputClass = "w-full pl-9 pr-3 py-3 rounded-lg border border-gray-200 text-sm text-slate-700 placeholder-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white";

export default function MovingForm() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

  const [quoteForm, setQuoteForm] = useState<QuoteForm>({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    moveFrom: "",
    moveTo: "",
    service: "",
  });

  const [mapsReady, setMapsReady] = useState(false);
  const [mapsError, setMapsError] = useState("");
  const [status, setStatus] = useState<"" | "sending" | "success" | "error">("");
  const [errorMessage, setErrorMessage] = useState("");
  const [formKey, setFormKey] = useState(0);

  useEffect(() => {
    if (!apiKey) {
      setMapsError("Google Maps API key is missing. Add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to .env.local");
      return;
    }

    let cancelled = false;
    loadGoogleMaps(apiKey)
      .then(() => {
        if (!cancelled) setMapsReady(true);
      })
      .catch((err) => {
        if (!cancelled) setMapsError(err instanceof Error ? err.message : "Could not load Google Maps");
      });

    return () => {
      cancelled = true;
    };
  }, [apiKey]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setQuoteForm((prev) => ({ ...prev, [name]: value }));
  };

  const setMoveFrom = useCallback((value: string) => {
    setQuoteForm((prev) => ({ ...prev, moveFrom: value }));
  }, []);

  const setMoveTo = useCallback((value: string) => {
    setQuoteForm((prev) => ({ ...prev, moveTo: value }));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !quoteForm.fullName ||
      !quoteForm.emailAddress ||
      !quoteForm.phoneNumber ||
      !quoteForm.moveFrom ||
      !quoteForm.moveTo ||
      !quoteForm.service

    ) {
      setStatus("error");
      setErrorMessage("Please fill all required fields.");
      return;
    }

    try {
      setStatus("sending");
      setErrorMessage("");

      const emailRes = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "moving",
          name: quoteForm.fullName,
          email: quoteForm.emailAddress,
          phone: quoteForm.phoneNumber,
          service: quoteForm.service,
          moveFrom: quoteForm.moveFrom,
          moveTo: quoteForm.moveTo,
        }),
      });

      if (!emailRes.ok) {
        try {
          const emailErrData = await emailRes.json();
          setStatus("error");
          setErrorMessage(emailErrData.error || `Email API error: ${emailRes.status}`);
        } catch {
          setStatus("error");
          setErrorMessage(`Email API error: ${emailRes.status}`);
        }
        return;
      }

      const emailData = await emailRes.json();
      if (!emailData.success) {
        setStatus("error");
        setErrorMessage(emailData.error || "Failed to send quote request.");
        return;
      }

      setStatus("success");
      setQuoteForm({
        fullName: "",
        phoneNumber: "",
        emailAddress: "",
        moveFrom: "",
        moveTo: "",
        service: "",
      });
      setFormKey((k) => k + 1);
    } catch (err) {
      console.error("Submission error:", err);
      setStatus("error");
      const error = err as Error;
      setErrorMessage(error.message || "Network error. Please try again.");
    }
  };

  return (
      <form onSubmit={handleSubmit} className="flex-1 w-full min-w-0" aria-live="polite">
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-3 mb-3">
          <div className="relative">
            <svg
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-indigo-600"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <input
              name="fullName"
              type="text"
              required
              placeholder="Full Name"
              value={quoteForm.fullName}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div className="relative">
            <svg
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-indigo-600"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <input
              name="phoneNumber"
              type="tel"
              required
              placeholder="Phone Number"
              value={quoteForm.phoneNumber}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div className="relative">
            <svg
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-indigo-600"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <input
              name="emailAddress"
              type="email"
              required
              placeholder="Email Address"
              value={quoteForm.emailAddress}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
        </div>

        <div className="relative mb-3">
          <div className="relative">
            <svg className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>
            </svg>
            <select aria-label="Select Service" name="service" required value={quoteForm.service} onChange={handleChange} className={inputClass}>
              <option value="">Select Service</option>
              <option value="commercial-movers">Commercial Movers</option>
              <option value="residential-movers">Residential Movers</option>
              <option value="full-service-movers">Full Service Movers</option>
              <option value="furniture-movers">Furniture Movers</option>
              <option value="local-movers">Local Movers</option>
              <option value="long-distance-movers">Long Distance Movers</option>
              <option value="man-with-van">man with van</option>
              <option value="piano-movers">Piano Movers</option>
              <option value="specialty-movers">Specialty Movers</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center">
          <AlbertaTownInput
            key={`from-${formKey}`}
            name="moveFrom"
            value={quoteForm.moveFrom}
            placeholder="Move From"
            inputClass={inputClass}
            mapsReady={mapsReady}
            onChange={setMoveFrom}
          />

          <AlbertaTownInput
            key={`to-${formKey}`}
            name="moveTo"
            value={quoteForm.moveTo}
            placeholder="Move To"
            inputClass={inputClass}
            mapsReady={mapsReady}
            onChange={setMoveTo}
          />

        </div>

        <div className="relative mt-3 flex flex-col sm:flex-row justify-between gap-3 items-center">
          <div className="order-2 sm:order-1 flex flex-wrap gap-x-5 gap-y-1.5">
            {["Free, No Obligation Quote", "Fastest Response"].map((label) => (
              <span key={label} className="flex items-center gap-1 text-xs text-slate-700">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-emerald-600"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                {label}
              </span>
            ))}
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="order-1 sm:order-2 inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-70 text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-md transition-colors whitespace-nowrap"
          >
            {status === "sending" ? "Sending…" : "Get My Quote"}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
        

        {mapsError && (
          <p className="mt-2 text-[11px] text-amber-700 bg-amber-50 border border-amber-200 rounded-md px-3 py-2">
            {mapsError}
          </p>
        )}

        {status === "success" && (
          <div className="mt-3 p-3 rounded-md bg-green-50 border border-green-200 text-sm text-green-700">
            ✓ Quote request sent! We&apos;ll get back to you shortly.
          </div>
        )}

        {status === "error" && (
          <div className="mt-3 p-3 rounded-md bg-red-50 border border-red-200 text-sm text-red-700">
            ✗ {errorMessage || "Something went wrong. Please try again."}
          </div>
        )}
      </form>
  );
}
