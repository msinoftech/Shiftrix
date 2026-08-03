"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BASE_URL } from "@/lib/config";
import MovingForm from "./movingForm";

function CitiesScrollBar({ cities }: { cities: string[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(maxScroll > 4 && el.scrollLeft < maxScroll - 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });

    const resizeObserver = new ResizeObserver(updateScrollState);
    resizeObserver.observe(el);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      resizeObserver.disconnect();
    };
  }, [updateScrollState, cities]);

  const scrollByAmount = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = Math.max(180, Math.floor(el.clientWidth * 0.6));
    el.scrollBy({ left: direction === "right" ? amount : -amount, behavior: "smooth" });
  };

  return (
    <div className="w-full 2xl:w-fit relative bg-white shadow-sm z-20 py-4 sm:py-6 px-4 rounded-2xl">
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 min-w-0">
        <span className="flex items-center gap-1.5 font-semibold text-indigo-600 shrink-0 text-sm">
          <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Areas We Serve
        </span>

        <div className="flex items-center gap-2 min-w-0 w-full sm:flex-1">
          <div
            ref={scrollRef}
            className="flex-1 min-w-0 overflow-x-auto scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="flex items-center flex-nowrap text-sm text-slate-600 whitespace-nowrap pr-2">
              {cities.map((city, i) => (
                <span key={city} className="inline-flex items-center shrink-0">
                  {i > 0 && <span className="mx-2 sm:mx-4 text-gray-300 select-none">|</span>}
                  <span>{city}</span>
                </span>
              ))}
            </div>
          </div>

          {(canScrollLeft || canScrollRight) && (
            <div className="flex items-center gap-1.5 shrink-0">
              {canScrollLeft && (
                <button
                  type="button"
                  onClick={() => scrollByAmount("left")}
                  aria-label="Scroll cities left"
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>
              )}
              {canScrollRight && (
                <button
                  type="button"
                  onClick={() => scrollByAmount("right")}
                  aria-label="Show more cities"
                  className="inline-flex items-center gap-1 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors px-3 py-1.5 text-xs font-semibold whitespace-nowrap"
                >
                  More
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const trustBadges = [
    {
      icon: (
        <svg className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      label: "Licensed & Insured",
    },
    {
      icon: (
        <svg className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      ),
      label: "Affordable Pricing",
    },
    {
      icon: (
        <svg className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      label: "Careful Handling & Packing",
    },
    {
      icon: (
        <svg className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: "On-Time Guarantee",
    },
  ];  

  const cities = ["Calgary", "Airdrie", "Chestermere", "Strathmore", "Okotoks", "Cochrane", "Red Deer", "Lethbridge", "Edmonton", "Medicine Hat", "Grande Prairie"];

  return (
    <>
      <section className="relative pt-40 md:pt-40 pb-12 md:pb-16 flex flex-col items-center justify-center">
        {/* Full-bleed hero photo */}
        <Image src="/hero-banner-1.3.webp" alt="" fill className="hidden md:block object-cover w-full h-full object-center"/>

        {/* overlay */}
        <div className="w-full xl:w-1/2 h-full absolute inset-0 bg-gradient-to-r from-white via-white/85 via-70% md:via-70% lg:via-50% xl:via-80% 2xl:via-70% to-transparent" />
        {/* <div className="w-full h-35 absolute bottom-0 bg-gradient-to-t from-[#eef2f8] via-[#eef2f8]/90 via-60% to-transparent" /> */}

        {/* content */}
        <div className="w-full flex flex-col justify-between space-y-6">

            <div className="relative z-20 w-full container-fluid mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 xl:grid-cols-12 gap-4">
                <div className="relative space-y-6 lg:space-y-16 pt-2 lg:col-span-7 xl:col-span-8 ">
                    
                    <div className="proudly-logo">
                        <Image src="/alberta-logo.png" alt="Shiftrix Logo" width={250} height={250} />
                    </div>

                    <div className="lg:max-w-xl lg:pr-12 2xl:pr-0 space-y-4">
                        <p className="text-[11px] sm:text-xs font-bold tracking-[0.18em] text-indigo-600 uppercase">Calgary Moving Experts You Can Trust</p>

                        <h1 className="text-[2rem] sm:text-4xl md:text-[2.75rem] xl:text-[3.1rem] font-extrabold leading-[1.12] text-slate-900">
                        Reliable &amp; Affordable Moving{" "}
                        <span className="text-indigo-600">Services</span> in{" "}
                        <span className="text-indigo-600">Calgary,</span> Alberta
                        </h1>

                        <p>From homes to businesses, we make every move smooth, safe, and stress-free. Trusted by hundreds of families and companies across Calgary &amp; Alberta.</p>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                            {trustBadges.map((badge) => (
                                <div key={badge.label} className="flex flex-col items-center gap-1.5 text-center">
                                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-indigo-50 text-indigo-600">{badge.icon}</div>
                                    <span className="text-sm font-semibold text-slate-800">{badge.label}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col min-[480px]:flex-row flex-wrap gap-3">
                            <Link href={`${BASE_URL}/contact-us`} aria-label="Get a Free Quote" className="inline-flex w-full min-[480px]:w-auto items-center justify-center gap-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-colors text-[15px]">
                                Get a Free Quote
                                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/20">
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                                </span>
                            </Link>
                            <Link href={`${BASE_URL}/services`} aria-label="Our Services" className="inline-flex w-full min-[480px]:w-auto items-center justify-center gap-2 border border-gray-300 bg-white hover:border-indigo-500 text-slate-700 hover:text-indigo-700 font-semibold px-5 py-3 rounded-lg transition-colors text-[15px]">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                                Our Services
                            </Link>
                        </div>

                        <div className="flex flex-wrap items-center gap-3">
                            <div className="flex items-center gap-2 rounded-lg shadow-sm bg-white/90 px-3 py-2">
                                <svg className="w-5 h-5 shrink-0 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                                <div>
                                    <div className="flex items-center gap-0.5">
                                        {[1, 2, 3, 4, 5].map((s) => (
                                        <svg key={s} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        ))}
                                    </div>
                                    <p className="text-[10px] text-gray-500 leading-tight">4.9 Rated on Customers</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 rounded-lg shadow-sm bg-white/90 px-3 py-2">
                                <div className="flex -space-x-2">
                                {["bg-indigo-500", "bg-sky-400", "bg-violet-500"].map((c, i) => (
                                    <div
                                    key={i}
                                    className={`w-7 h-7 rounded-full ${c} border-2 border-white flex items-center justify-center text-white text-[9px] font-bold`}
                                    >
                                    {["A", "B", "C"][i]}
                                    </div>
                                ))}
                                </div>
                                <div>
                                <p className="text-xs font-bold text-slate-800 leading-tight">500+</p>
                                <p className="text-[10px] text-gray-500 leading-tight">Happy Customers</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 rounded-lg shadow-sm bg-white/90 px-3 py-2">
                                <div className="flex items-center justify-center w-7 h-7 rounded-full bg-indigo-50 shrink-0">
                                <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                </div>
                                <div>
                                <p className="text-xs font-bold text-slate-800 leading-tight">99%</p>
                                <p className="text-[10px] text-gray-500 leading-tight">Satisfaction</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="relative z-20 lg:col-span-5 xl:col-span-4">
                    <div className="pb-4">
                        <div className="relative z-20 pb-0 w-full lg:max-w-md ml-auto">
                            <div className="bg-indigo-200 backdrop-blur-xl rounded-2xl shadow-xl px-5 py-8">
                                <div className="flex flex-col lg:items-start gap-4 lg:gap-5">
                                    <div className="flex items-center gap-6 shrink-0 lg:w-[350px] lg:pt-1 lg:pr-4">
                                        <div>
                                            <div className="text-xl font-bold text-slate-900 leading-tight">Get Your Free Moving Quote</div>
                                            <p>Quick. Easy. No hidden charges.</p>
                                        </div>
                                    </div>

                                    <MovingForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cities bar */}
            <div className="w-full container-fluid mx-auto px-4 sm:px-6 lg:px-8 xl:px-20">
                <CitiesScrollBar cities={cities} />
            </div>

        </div>

      </section>
    </>
  );
}
