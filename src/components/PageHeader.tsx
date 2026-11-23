import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type PageHeaderProps = {
  eyebrow?: {
    from: string;
    to: string;
  };
  heading: string;
  paragraphs: ReactNode[];
  cta?: {
    href: string;
    label: string;
    ariaLabel?: string;
  };
  image: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    priority?: boolean;
  };
};

export default function PageHeader({ eyebrow, heading, paragraphs, cta, image }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden pt-40 pb-14 md:pb-24">
      <div className="container relative mx-auto px-4">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="order-2 lg:order-1">
            {eyebrow && (
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
                <span>{eyebrow.from}</span>
                <span className="mx-2 text-indigo-400" aria-hidden>→</span>
                <span>{eyebrow.to}</span>
              </div>
            )}

            <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-[2.65rem]">{heading}</h1>

            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-gray-600 sm:text-base">
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {cta && (
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href={cta.href}
                  aria-label={cta.ariaLabel ?? cta.label}
                  className="group/btn inline-flex justify-center items-center gap-2.5 bg-gradient-to-br from-indigo-800 to-indigo-500 text-white px-6 py-3.5 rounded-xl font-medium text-sm shadow-lg shadow-indigo-500/25 hover:shadow-indigo-600/35 hover:-translate-y-0.5 transition-all duration-300"
                >
                  {cta.label}
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            )}
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-3 rounded-[2rem] border border-indigo-200/60 sm:-inset-4"
              />
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width ?? 720}
                height={image.height ?? 560}
                priority={image.priority ?? true}
                className="relative z-10 aspect-[5/4] w-full rounded-tl-[2.75rem] rounded-tr-xl rounded-bl-xl rounded-br-[2.75rem] object-cover shadow-[0_30px_60px_-35px_rgba(49,46,129,0.55)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
