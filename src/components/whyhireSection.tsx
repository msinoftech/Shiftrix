import React from "react";
import Image from "next/image";
import { whyhire } from "@/lib/types";

interface WhyHireSectionProps {
  subheading?: string;
  heading?: string;
  description?: string;
  items: whyhire[];
}

const WhyHireSection: React.FC<WhyHireSectionProps> = ({ subheading, heading, description, items }) => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="space-y-3 text-center pb-8">
          {subheading && (
            <div className="text-xs font-semibold tracking-widest text-indigo-800 uppercase mb-2">{subheading}</div>
          )}
          {heading && (
            <h2 className="text-2xl md:text-4xl font-bold">{heading}</h2>
          )}
          {description && (
            <p>{description}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.title} className="rounded-2xl shadow-md hover:shadow-lg transition p-6 bg-white text-center space-y-3 hover:-translate-y-1">
              <div className="relative w-20 h-20 mx-auto">
                <div className="h-20 w-20 rounded-full bg-gradient-to-br from-indigo-800 to-indigo-500 text-white grid place-content-center font-bold">
                  <Image src={item.image} alt={item.title} width={45} height={45} className="filter brightness-0 invert object-contain"/>
                </div>
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHireSection;
