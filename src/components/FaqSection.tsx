"use client";
import React from "react";

interface FaqSectionProps {
  title: string;
  content?: string;
}

const FaqSection: React.FC<FaqSectionProps> = ({
  title,
  content,
}) => {
  return (
    <section id="faq" className="mb-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col gap-4">
          <details className="group rounded-2xl shadow-md p-5 bg-white transition-all duration-200">
            <summary className="text-gray-900 cursor-pointer font-semibold list-none flex items-center justify-between">{title}
              <span className="text-gray-900 text-md font-bold group-open:rotate-45 transition-transform">
                +
              </span>
            </summary>
            <div className="mt-4 text-gray-600 text-md prose">
              {content && (
                <div className="text-gray-600" dangerouslySetInnerHTML={{ __html: content }} />
              )}
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
