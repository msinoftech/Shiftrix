import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import { APP_NAME, BASE_URL, contactInfo } from "@/lib/config";
import AboutSection from "@/components/AboutSection";
import CounterSection from "@/components/CounterSection";
import { TbTargetArrow } from "react-icons/tb";
import { GiSemiClosedEye } from "react-icons/gi";
import { GiCheckMark } from "react-icons/gi";

const { phone, address, logo, email } = contactInfo;

export const metadata: Metadata = {
  title: `${APP_NAME} - Your Relocation Partners in Calgary`,
  description: "Shiftrix, a professional moving company known for reliability and care, make every move as simple as possible through trust, planning, and client-first service.",
  keywords: [],
  alternates: {
    canonical: `${BASE_URL}/about-us`,
  },
  openGraph: {
    title: `${APP_NAME} - Your Relocation Partners in Calgary`,
    description: "Shiftrix, a professional moving company known for reliability and care, make every move as simple as possible through trust, planning, and client-first service.",
    url: `${BASE_URL}/about-us`,
    type: "website",
    siteName: `${APP_NAME}`,
    locale: "en-CA",
    images: [
      {
        url: `${BASE_URL}/about-company.jpg`,
        width: 1200,
        height: 630,
        alt: "Your Relocation Partners in Calgary",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: `${BASE_URL}`,
    creator: `${BASE_URL}`,
    title: `About Us - ${APP_NAME}`,
    description: "Shiftrix, a professional moving company known for reliability and care, make every move as simple as possible through trust, planning, and client-first service.",
    images: `${BASE_URL}/about-company.jpg`,
  },
};

export default function about() {

const aboutSchemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "url": `${BASE_URL}/about-us`,
      "name": `About Us - ${APP_NAME}`,
      "inLanguage": "en-CA",
      "description": "Shiftrix, a professional moving company known for reliability and care, make every move as simple as possible through trust, planning, and client-first service.",
      "isPartOf": {
        "@type": "WebSite",
        "url": `${BASE_URL}`,
        "name": `${APP_NAME}`,
      },
    },
    {
      "@type": "Organization",
      "name": `${APP_NAME}`,
      "url": `${BASE_URL}`,
      "logo": `${logo}`,
      "foundingDate": "2025",
      "founder": {
        "@type": "Person",
        "name": `${APP_NAME}`,
      },
      "description": "Shiftrix, a professional moving company known for reliability and care, make every move as simple as possible through trust, planning, and client-first service.",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": `${phone}`,
        "email": `${email}`,
        "contactType": "Customer Support",
        "areaServed": "Canada",
        "availableLanguage": ["en", "fr"],
      },
      "sameAs": [
        "https://www.facebook.com/shiftrix",
        "https://x.com/infoShiftrix",
        "https://www.instagram.com/shiftrix_movers",
        "https://www.youtube.com/@infoShiftrix"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": `${address}`,
        "addressRegion": "AB",
        "addressCountry": "CA",
      },
    },
    {
      "@type": "AboutPage",
      "name": `About Us - ${APP_NAME}`,
      "url": `${BASE_URL}/about-us`,
      "primaryImageOfPage": `${BASE_URL}/about-company.jpg`,
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": `Home`,
            "item": `${BASE_URL}`,
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": `About Us`,
            "item": `${BASE_URL}/about-us`,
          },
        ],
      },
    },
  ],
};

const counters = [
  {
    icon: `${BASE_URL}/delivery.svg`,
    counter_value: 150,
    caption: "Deliveries",
  },
  {
    icon: `${BASE_URL}/clients.svg`,
    counter_value: 75,
    caption: "Clients",
  },
  {
    icon: `${BASE_URL}/city-map.svg`,
    counter_value: 30,
    caption: "Cities Covered",
  },
  {
    icon: `${BASE_URL}/medal.svg`,
    counter_value: 25,
    caption: "Awards",
  },
];

  return (
    <>
      {/* Schema added to the <head> */}
      <Script id="about-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchemaData) }}/>

      <section className="relative sm:pt-40 md:pt-40 lg:pt-40 pt-40 pb-10 md:pb-20">
        <div className="container mx-auto px-4">
          <AboutSection
            titleTag="h1"
            image={`/shiftrix-mover-and-packer.jpg`}
            title="More Than Movers-Your Relocation Partners"
            content={`Shiftrix started in Calgary as a small, dedicated moving team that grew into a professional moving company known for reliability and care. We make every move as simple as possible through trust, planning, and client-first service. From the consultation to the final delivery, we prioritise clear communication, careful handling, and efficient execution. We do more than move your belongings—we help you start the next chapter of your life.`}
            listTitle=""
            listItems={[]}
            showLink={true}
            linkText="Get a free quote"
            linkUrl={`${BASE_URL}/contact-us`}
            titleClassName="text-3xl text-gray-900 md:text-4xl font-bold mb-4"
          />
        </div>
      </section>

      <CounterSection
        counters={counters}
      />

      <section className="relative overflow-hidden bg-slate-50 py-14 md:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[linear-gradient(135deg,rgba(238,242,255,0.9)_0%,rgba(248,250,252,0)_65%)]"/>

        <div className="container relative mx-auto px-4">
          <div className="mb-10 max-w-4xl md:mb-14">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">Since Calgary</p>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-4xl">Our Success Story & Growth</h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-indigo-700 to-indigo-400" />
            <p className="mt-5">Our mission is rooted in providing seamless, stress-free moving experiences tailored to your unique needs, ensuring that every step of your relocation is handled with care, efficiency, and professionalism.</p>
          </div>

          <div className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Image panel */}
            <div className="relative lg:col-span-5">
              <div className="relative h-full min-h-[320px] overflow-hidden rounded-[1.25rem] bg-slate-900 md:min-h-[420px]">
                <Image
                  src={`/about-image.jpg`}
                  alt="Our Success Story & Growth"
                  width={720}
                  height={900}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <p className="text-sm font-medium text-indigo-200">Built on trust</p>
                  <p className="mt-1 text-lg font-semibold text-white sm:text-xl">
                    Careful moves. Clear communication. Steady growth.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission / Vision panels */}
            <div className="grid gap-5 sm:gap-6 lg:col-span-7">
              <article className="group mission-box relative overflow-hidden rounded-[1.25rem] border border-indigo-100 bg-white p-6 sm:p-8 transition-all duration-300 hover:border-indigo-200 hover:shadow-[0_20px_40px_-28px_rgba(55,48,163,0.45)]">
                <div className="flex items-start justify-between gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-700 ring-1 ring-indigo-100 transition-colors duration-300 group-hover:bg-indigo-600 group-hover:text-white group-hover:ring-indigo-600">
                    <TbTargetArrow className="text-2xl" />
                  </div>
                  <span className="select-none text-5xl font-bold leading-none text-indigo-50 transition-colors duration-300 group-hover:text-indigo-100 sm:text-6xl">
                    01
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-gray-900 sm:text-2xl">Our Mission</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-[15px]">
                  We are committed to providing exceptional moving services you can trust. Whether your move is residential or commercial, large or small, we maintain the same high standards. We ensure Your belongings are protected through expert packing, secure transport, and careful handling.
                </p>
              </article>

              <article className="group vission-box relative overflow-hidden rounded-[1.25rem] border border-slate-200 bg-slate-900 p-6 text-white sm:p-8 transition-all duration-300 hover:shadow-[0_20px_40px_-24px_rgba(15,23,42,0.7)]">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-indigo-500/20 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="relative flex items-start justify-between gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/15">
                    <GiSemiClosedEye className="text-2xl" />
                  </div>
                  <span className="select-none text-5xl font-bold leading-none text-white/10 sm:text-6xl">
                    02
                  </span>
                </div>
                <h3 className="relative mt-5 text-xl font-semibold text-white sm:text-2xl">Our Vision</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-slate-300 sm:text-[15px]">
                  Our vision is simple. Moving should be easy, affordable, and stress-free. Whether you are moving your home, your business, or going long-distance or to a neighbourhood, you should always feel confident and supported.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-14 md:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-indigo-100/60 blur-3xl"
        />

        <div className="container relative mx-auto px-4">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Image companion */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={`/real-stories-real-movers.jpg`}
                  alt="Real Stories, Real Moves"
                  width={720}
                  height={900}
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <p className="mt-4 text-sm text-gray-500">
                Real stories. Real moves. Values that guide every delivery.
              </p>
            </div>

            {/* Values timeline */}
            <div className="lg:col-span-7">
              <div className="mb-10 max-w-xl">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">What we stand for</p>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-4xl">Our Core Values</h2>
                <p className="mt-4">When you move with Shiftrix, you’re working with a team that understands how important this moment is for you. We treat your move with the care it deserves.</p>
              </div>

              <ul className="relative space-y-0 border-l border-indigo-200/80 pl-0">
                {[
                  {
                    title: "Integrity Above All",
                    text: "No hidden fees. No surprises. No excuses. We offer fair pricing and clear communication.",
                  },
                  {
                    title: "Care in Every Detail",
                    text: "We treat every item with the respect and attention it deserves.",
                  },
                  {
                    title: "Reliability You Can Trust",
                    text: "When we give you an estimate, we stick to it. For us, reliability is a promise we keep with every move, every day.",
                  },
                  {
                    title: "Clients-First Mindset",
                    text: "Our team is well-trained and truly passionate. They are friendly, professional, and treated with respect.",
                  },
                  {
                    title: "Continuous Innovation",
                    text: "We invest in technology, training, and better processes. Real-time tracking, digital inventory, and flexible scheduling are standard for us.",
                  },
                ].map((item, index) => (
                  <li key={item.title} className="group relative border-b border-slate-100 py-6 pl-10 last:border-b-0 sm:pl-12">
                    <span
                      aria-hidden
                      className="absolute left-0 top-7 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 border-indigo-200 bg-white text-xs font-bold text-indigo-700 shadow-sm transition-all duration-300 group-hover:border-indigo-600 group-hover:bg-indigo-600 group-hover:text-white"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-indigo-700 sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600 sm:text-[15px]">
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}