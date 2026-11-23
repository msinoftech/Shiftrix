"use client";
import { useState } from "react";
import { contactInfo } from "@/lib/config";
import Link from "next/link";

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  moveDate: string;
  message: string;
};

const SERVICE_OPTIONS = [
  { value: "commercial-movers", label: "Commercial Movers" },
  { value: "residential-movers", label: "Residential Movers" },
  { value: "full-service-movers", label: "Full Service Movers" },
  { value: "furniture-movers", label: "Furniture Movers" },
  { value: "local-movers", label: "Local Movers" },
  { value: "long-distance-movers", label: "Long Distance Movers" },
  { value: "man-with-van", label: "Man With Van" },
  { value: "piano-movers", label: "Piano Movers" },
  { value: "specialty-movers", label: "Specialty Movers" },
] as const;

type ContactFormProps = {
  service?: string;
};

function resolveDefaultService(service?: string): string {
  if (!service) return "";
  return SERVICE_OPTIONS.some((opt) => opt.value === service) ? service : "";
}

const ContactForm = ({ service }: ContactFormProps) => {
  const { phone  } = contactInfo;

  const phoneHref = `tel:${phone.replace(/[^+\d]/g, "")}`;
  const defaultService = resolveDefaultService(service);
  const today = new Date().toISOString().slice(0, 10);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: defaultService,
    moveDate: "",
    message: "",
  });

  const [status, setStatus] = useState<"" | "sending" | "success" | "error">("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.moveDate || !formData.message) {
      setStatus("error");
      setErrorMessage("Please fill all required fields.");
      return;
    }

    try {
      setStatus("sending");
      setErrorMessage("");

      // Send email via API (includes lead saving on server side)
      const emailRes = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "contact",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          moveDate: formData.moveDate,
          message: formData.message,
        }),
      });

      // Check email API response
      if (!emailRes.ok) {
        try {
          const emailErrData = await emailRes.json();
          setStatus("error");
          setErrorMessage(emailErrData.error || `Email API error: ${emailRes.status}`);
        } catch {
          setStatus("error");
          setErrorMessage(`Email API error: ${emailRes.status}`);
        }
      } else {
        const emailData = await emailRes.json();
        if (!emailData.success) {
          setStatus("error");
          setErrorMessage(emailData.error || "Failed to send email.");
        } else {
          setStatus("success");
          setErrorMessage("");
          // Clear form fields after successful submission
          setFormData({
            name: "",
            email: "",
            phone: "",
            service: defaultService,
            moveDate: "",
            message: "",
          });
        }
      }

    } catch (err) {
      console.error("Submission error:", err);
      setStatus("error");
      const error = err as Error;
      setErrorMessage(error.message || "Network error. Please try again.");
    }
  };


  return (
    <>

    <form onSubmit={handleSubmit} className="space-y-4 w-full" aria-live="polite">
      
      <input name="name" type="text" required placeholder="Full Name" value={formData.name} onChange={handleChange} className="block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-600"/>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3">
        <input name="phone" type="tel" inputMode="tel" placeholder="Phone" value={formData.phone} onChange={handleChange} className="block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-600"/>
        <input name="email" type="email" required placeholder="Email" value={formData.email} onChange={handleChange} className="block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-600"/>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3">
        <select aria-label="Select Service" name="service" required value={formData.service} onChange={handleChange} className="block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          <option value="">Select Service</option>
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <input name="moveDate" type="date" required min={today} aria-label="Preferred Moving Date" value={formData.moveDate} onChange={handleChange} className="block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"/>
      </div>

      <textarea name="message" rows={4} required placeholder="How can we help?" value={formData.message} onChange={handleChange} className="block w-full border rounded-xl border-gray-200 bg-white px-4 py-3 text-sm placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-600"/>
      
      <div className="block sm:flex items-center justify-between items-center justify-between gap-3">
        <button type="submit" disabled={status === "sending"} className="group/btn inline-flex items-center gap-2 bg-gradient-to-br from-indigo-800 to-indigo-500 text-white px-4 py-3 rounded-xl font-medium text-sm shadow-lg shadow-indigo-500/25 hover:shadow-indigo-600/35 hover:-translate-y-0.5 transition-all duration-300" aria-disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Request Quote"}
          <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
        </button>
      </div>

      {status === "success" && (
        <div className="mt-2 p-3 rounded-md bg-green-50 border border-green-200 text-sm text-green-700">
          ✓ Email sent successfully! We&apos;ll get back to you shortly.
        </div>
      )}
      
      {status === "error" && (
        <div className="mt-2 p-3 rounded-md bg-red-50 border border-red-200 text-sm text-red-700">
          ✗ {errorMessage || "Oops — something went wrong. Please try again or contact us directly."}
        </div>
      )}
    </form>
    </>
  );
};

export default ContactForm;