import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GiCheckMark } from "react-icons/gi";

type TitleTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface AboutSectionProps {
  image?: string;
  title: string;
  titleTag?: TitleTag;
  content: string;
  showImage?: boolean;
  showLink?: boolean;
  linkText?: string;
  linkUrl?: string;
  imageClassName?: string;
  titleClassName?: string;
  contentStyle?: React.CSSProperties;
  listTitle?: string;
  listItems?: string[];
}

const AboutSection: React.FC<AboutSectionProps> = ({
  image,
  title,
  titleTag: TitleTag = "h2",
  content,
  showImage = true,
  showLink = true,
  linkText = "About us",
  linkUrl = `/about`,
  imageClassName = "",
  titleClassName = "",
  contentStyle,
  listTitle = "Your Truck dispatchers do all of the back-office work, including:",
  listItems = [
    "Experienced and reliable movers",
    "Skilled professionals with proven experience",
    "Tailored solutions for every customer",
  ],
}) => {
  return (
    <div
      className={`grid grid-cols-1 gap-10 lg:gap-16 items-center ${
        showImage && image ? "lg:grid-cols-2" : ""
      }`}
    >
      {showImage && image && (
        <div className="relative order-1 group">
          <div
            aria-hidden
            className="absolute -inset-4 sm:-inset-6 rounded-[2rem] bg-gradient-to-br from-indigo-100 via-indigo-50 to-transparent opacity-80"
          />
          <div
            aria-hidden
            className="absolute -bottom-6 -right-4 sm:-right-8 h-40 w-40 rounded-full bg-indigo-500/20 blur-3xl animate-float-slow"
          />
          <div
            aria-hidden
            className="absolute -top-4 -left-4 h-28 w-28 rounded-full bg-indigo-800/10 blur-2xl animate-float-reverse"
          />

          <div
            aria-hidden
            className="absolute inset-x-6 -bottom-3 top-8 rounded-[1.75rem] border-2 border-indigo-200/70 -z-0 translate-x-3 translate-y-3"
          />

          <figure
            className={`relative z-10 overflow-hidden rounded-[1.75rem] shadow-[0_25px_60px_-25px_rgba(55,48,163,0.45)] ring-1 ring-indigo-100/80 ${imageClassName}`}
          >
            <Image
              src={image}
              alt="Shiftrix moving companies"
              width={720}
              height={560}
              loading="lazy"
              className="w-full h-full min-h-[280px] sm:min-h-[360px] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-indigo-950/25 via-transparent to-transparent"
            />
          </figure>
        </div>
      )}

      <div className={`relative order-2 ${showImage && image ? "" : "max-w-3xl"}`}>
        <div className="absolute -left-3 top-1 bottom-1 w-1 rounded-full bg-gradient-to-b from-indigo-800 via-indigo-500 to-indigo-300 hidden sm:block" />

        <div className="sm:pl-6" style={contentStyle}>
          
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">About Us</p>

          <TitleTag
            className={
              titleClassName ||
              "text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight tracking-tight mb-5"
            }
          >
            {title}
          </TitleTag>

          <div className="space-y-4 text-gray-600 leading-relaxed text-[15px] sm:text-base">
            {content.split("\n").map((paragraph, index) => (
              <p key={index}>{paragraph.trim()}</p>
            ))}
          </div>

          {listItems.length > 0 && (
            <div className="mt-6">
              {listTitle && <h3 className="font-semibold text-gray-900 mb-3">{listTitle}</h3>}
              <ul className="grid gap-2.5">
                {listItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-700">
                      <GiCheckMark className="text-[10px]" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {showLink && (
            <div className="mt-8">
              <Link
                href={linkUrl}
                aria-label={linkText}
                className="group/btn inline-flex items-center gap-2.5 bg-gradient-to-br from-indigo-800 to-indigo-500 text-white px-6 py-3.5 rounded-xl font-medium text-sm shadow-lg shadow-indigo-500/25 hover:shadow-indigo-600/35 hover:-translate-y-0.5 transition-all duration-300"
              >
                {linkText}
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
