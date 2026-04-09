"use client";
import React, { useEffect, useRef } from "react";

interface FaqSectionProps {
  title: string;
  content?: string;
}

const FaqSection: React.FC<FaqSectionProps> = ({
  title,
  content,
}) => {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const currentDetails = detailsRef.current;
    if (!currentDetails) return;

    const faqBlock = currentDetails.closest(".faq-block");
    const faqContainer = faqBlock?.parentElement;
    if (!faqContainer) return;

    const faqItems = Array.from(
      faqContainer.querySelectorAll(".faq-block .faq-block-inner > details")
    ) as HTMLDetailsElement[];

    if (faqItems.length > 0 && !faqItems.some((item) => item.open) && faqItems[0] === currentDetails) {
      currentDetails.open = true;
    }
  }, []);

  const handleToggle = () => {
    const currentDetails = detailsRef.current;
    if (!currentDetails || !currentDetails.open) return;

    const faqBlock = currentDetails.closest(".faq-block");
    const faqContainer = faqBlock?.parentElement;
    if (!faqContainer) return;

    const faqItems = Array.from(
      faqContainer.querySelectorAll(".faq-block .faq-block-inner > details")
    ) as HTMLDetailsElement[];

    faqItems.forEach((item) => {
      if (item !== currentDetails) {
        item.open = false;
      }
    });
  };

  return (
    <div className="faq-block">
      <div className="faq-block-inner">
        <details ref={detailsRef} onToggle={handleToggle} className="group overflow-hidden rounded-2xl border border-gray-200/70 bg-white/95 shadow-[0_10px_35px_-18px_rgba(17,24,39,0.35)] transition-all duration-300 open:border-indigo-500">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-6 py-5 text-left marker:content-none">
            <h3 className="text-base font-semibold leading-relaxed text-gray-900 group-open:text-indigo-500">{title}</h3>
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-300 bg-gray-50 text-lg font-semibold text-gray-700 transition-all duration-300 group-open:rotate-45 group-open:border-indigo-500 group-open:bg-indigo-500/10 group-open:text-indigo-500">+</span>
          </summary>
          <div className="border-t border-gray-100 px-6 pb-6 pt-4 text-sm leading-7 text-gray-600 md:text-base">
            {content && (
              <div className="prose prose-sm max-w-none text-gray-600 prose-p:my-0 md:prose-base" dangerouslySetInnerHTML={{ __html: content }}/>
            )}
          </div>
        </details>
      </div>
    </div>
  );
};

export default FaqSection;