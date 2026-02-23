import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GiCheckMark } from "react-icons/gi";

interface AboutSectionProps {
  image?: string;
  title: string;
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
  content,
  showImage = true,
  showLink = true,
  linkText = "About us",
  linkUrl = `/about`,
  imageClassName = "w-full rounded-lg overflow-hidden",
  titleClassName = "text-2xl md:text-3xl lg:text-4xl xl:text-4xl text-gray-900 font-bold mb-4",
  contentStyle,
  listTitle = "Your Truck dispatchers do all of the back-office work, including:",
  listItems = [
    "Experienced and reliable movers",
    "Skilled professionals with proven experience",
    "Tailored solutions for every customer",
  ],
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

      {/* Left column: Image */}
      {showImage && image && (
        <div className="order-1 lg:order-1">
          <figure className={imageClassName}>
            <Image src={image} alt="Shiftrix moving companies" width={600} height={400} loading="lazy" className="w-full object-cover"/>
          </figure>
        </div>
      )}

      {/* Right column: Content */}
      <div className={showImage ? "order-2 lg:order-2" : "col-span-1"}>
        <div className="rounded-lg" style={contentStyle}>
          <h2 className={titleClassName}>{title}</h2>
          <div className="space-y-4 text-md">
            {content.split("\n").map((paragraph, index) => (
              <p key={index} className="leading-relaxed">
                {paragraph.trim()}
              </p>
            ))}
          </div>

          {/* Dynamic List Section */}
          {listItems.length > 0 && (
            <>
              {listTitle && (
                <h3 className="text-md mt-3 md:text-md  font-bold">{listTitle}</h3>
              )}
              <ul className="mt-4 grid sm:grid-cols-1 gap-2">
                {listItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <GiCheckMark />{item}
                  </li>
                ))}
              </ul>
            </>
          )}

          {/* Dynamic Link */}
          {showLink && (
            <div className="mt-4 flex flex-wrap gap-4">
              <Link href={linkUrl} aria-label={linkText} className="inline-flex items-center gap-2 bg-gradient-to-br from-indigo-800 to-indigo-500 text-white px-6 py-3 rounded-md font-medium shadow-lg transition-transform transform">{linkText}</Link>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default AboutSection;
