"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { testimonial } from "@/lib/types";

interface TestimonialsSectionProps {
  subheading?: string;
  heading?: string;
  testimonials: testimonial[];
}

const GAP = 24;

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ subheading, heading, testimonials }) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [pageCount, setPageCount] = useState(1);

  const measure = useCallback(() => {
    const scroller = scrollerRef.current;
    const card = scroller?.querySelector<HTMLElement>("[data-slide]");
    if (!scroller || !card) return;

    const step = card.offsetWidth + GAP;
    const visible = Math.max(1, Math.round((scroller.clientWidth + GAP) / step));
    const pages = Math.max(1, testimonials.length - visible + 1);
    const nextIndex = Math.min(pages - 1, Math.round(scroller.scrollLeft / step));

    setPageCount(pages);
    setIndex(nextIndex);
  }, [testimonials.length]);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const scrollToIndex = (next: number) => {
    const scroller = scrollerRef.current;
    const card = scroller?.querySelector<HTMLElement>("[data-slide]");
    if (!scroller || !card) return;

    const bounded = Math.max(0, Math.min(pageCount - 1, next));
    scroller.scrollTo({ left: bounded * (card.offsetWidth + GAP), behavior: "smooth" });
    setIndex(bounded);
  };

  const canSlide = pageCount > 1;

  return (
    <section className="py-10 md:py-20 bg-gradient-to-br from-gray-50 to-white" aria-roledescription="carousel" aria-label={heading || "Testimonials"}>
      <div className="container mx-auto px-4">
        <div className="space-y-3 text-center pb-8">
          {subheading && (
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">{subheading}</div>
          )}
          {heading && (
            <h2 className="text-2xl md:text-4xl font-bold">{heading}</h2>
          )}
        </div>

        <div
          ref={scrollerRef}
          onScroll={measure}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((item) => (
            <div
              key={item.name}
              data-slide
              className="snap-start shrink-0 w-full lg:w-[calc((100%-1.5rem)/2)] xl:w-[calc((100%-3rem)/3)]"
            >
              <div className="group relative h-full rounded-2xl overflow-hidden bg-white p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <svg className="w-10 h-10 text-indigo-800" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <div className="mt-4 italic">&quot;{item.content}&quot;</div>
                <div className="mt-6 flex items-center gap-4">
                  <div className="font-semibold text-gray-900">{item.name}</div>
                </div>
                <div className="absolute -bottom-4 -right-4 h-20 w-20 bg-indigo-800/80 rounded-full blur-2xl transition"></div>
              </div>
            </div>
          ))}
        </div>

        {canSlide && (
          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => scrollToIndex(index - 1)}
              disabled={index === 0}
              aria-label="Previous testimonials"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-indigo-100 bg-white text-indigo-700 shadow-sm transition hover:bg-indigo-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-indigo-700"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial slides">
              {Array.from({ length: pageCount }, (_, page) => (
                <button
                  key={page}
                  type="button"
                  role="tab"
                  aria-label={`Show testimonial slide ${page + 1}`}
                  aria-selected={page === index}
                  onClick={() => scrollToIndex(page)}
                  className={`h-2.5 rounded-full transition-all ${page === index ? "w-6 bg-indigo-600" : "w-2.5 bg-indigo-200 hover:bg-indigo-400"}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => scrollToIndex(index + 1)}
              disabled={index >= pageCount - 1}
              aria-label="Next testimonials"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-indigo-100 bg-white text-indigo-700 shadow-sm transition hover:bg-indigo-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-indigo-700"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
