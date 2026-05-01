"use client";

import React, { useState } from "react";

export interface FaqItem {
  title: string;
  content?: string;
}

interface FaqSectionProps {
  items?: FaqItem[];
}

export const FaqSection = ({ items = [] }: FaqSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const safeItems = Array.isArray(items) ? items : [];

  if (safeItems.length === 0) return null;

  return (
    <div className="flex flex-col gap-4">
      {safeItems.map((item: FaqItem, index: number) => {
        const isOpen = openIndex === index;
        return (
          <div key={`${item.title}-${index}`} className="faq-block-inner">
            <details open={isOpen} className="group overflow-hidden rounded-2xl border border-gray-200/70 bg-white/95 shadow-[0_10px_35px_-18px_rgba(17,24,39,0.35)] transition-all duration-300 open:border-indigo-500">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-6 py-5 text-left marker:content-none" onClick={(e) => { e.preventDefault(); setOpenIndex((prev) => (prev === index ? null : index));}}>
                <h3 className="text-base font-semibold leading-relaxed text-gray-900 group-open:text-indigo-500">{item.title}</h3>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-300 bg-gray-50 text-lg font-semibold text-gray-700 transition-all duration-300 group-open:rotate-45 group-open:border-indigo-500 group-open:bg-indigo-500/10 group-open:text-indigo-500">+</span>
              </summary>
              <div className="border-t border-gray-100 px-6 pb-6 pt-4 text-sm leading-7 text-gray-600 md:text-base">
                {item.content && (
                  <div className="prose prose-sm max-w-none text-gray-600 prose-p:my-0 md:prose-base" dangerouslySetInnerHTML={{ __html: item.content }}/>
                )}
              </div>
            </details>
          </div>
        );
      })}
    </div>
  );
};

export default FaqSection;
