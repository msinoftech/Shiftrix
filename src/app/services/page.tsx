import Link from "next/link";
import type { Metadata } from "next";
import { APP_NAME, BASE_URL, contactInfo } from "@/lib/config";
import Script from "next/script";
//import ContactForm from "@/components/ContactForm";
//import ContactSection from "@/components/ContactSection";
import ServiceCard from "@/components/ServiceCard";
import MovingForm from "@/components/movingForm";

const { phone } = contactInfo;
const phoneHref = `tel:${phone.replace(/[^+\d]/g, "")}`;

export const metadata: Metadata = {
  title: `Our Relocation Services in Calgary | Compare & Choose`,
  description: "Explore all the services we offer in Calgary — from local and residential moves to long-distance, commercial, piano, and specialty moving. Find the right relocation service for your move.",
  keywords: [ "mover", "freight forwarding", "supply chain", "shipping", "customs brokerage", "cargo", "global transport", "shiftrix",],
  alternates: {
    canonical: `${BASE_URL}/services`,
  },
  openGraph: {
    title: `Our Relocation Services in Calgary | Compare & Choose`,
    description: "Explore all the services we offer in Calgary — from local and residential moves to long-distance, commercial, piano, and specialty moving. Find the right relocation service for your move.",
    url: `${BASE_URL}/services`,
    type: "website",
    siteName: `${APP_NAME}`,
    locale: "en-CA",
    images: [
      {
        url: `${BASE_URL}/shiftrix-mover-and-packer.jpg`,
        width: 1200,
        height: 630,
        alt: "Last-Minute Relocation Services in Calgary",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: `${BASE_URL}`,
    creator: `${BASE_URL}`,
    title: `Our Relocation Services in Calgary | Compare & Choose`,
    description: "Explore all the services we offer in Calgary — from local and residential moves to long-distance, commercial, piano, and specialty moving. Find the right relocation service for your move.",
    images: `${BASE_URL}/shiftrix-mover-and-packer.jpg`,
  },
};

// Schema Data
const serviceschemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${BASE_URL}/services/#webpage`,
      "url": `${BASE_URL}/services`,
      "name": "Our Relocation Services in Calgary | Compare & Choose",
      "description": "Explore residential, commercial, local, long-distance, furniture, piano, full-service, specialty, and man with a van moving services in Calgary from Shiftrix Moving Services.",
      "isPartOf": {
        "@id": `${BASE_URL}/#website`
      },
      "about": {
        "@id": `${BASE_URL}/#business`
      },
      "mainEntity": {
        "@id": `${BASE_URL}/#services`
      },
      "breadcrumb": {
        "@id": `${BASE_URL}/services/#breadcrumb`
      },
      "inLanguage": "en-CA"
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${BASE_URL}/services/#breadcrumb`,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": `${BASE_URL}`
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": `${BASE_URL}/services`
        }
      ]
    },
    {
      "@type": "OfferCatalog",
      "@id": `${BASE_URL}/#services`,
      "name": "Shiftrix Moving and Relocation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@id": `${BASE_URL}/services/commercial-movers/#service`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@id": `${BASE_URL}/services/residential-movers/#service`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@id": `${BASE_URL}/services/full-service-movers/#service`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@id": `${BASE_URL}/services/furniture-movers/#service`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@id": `${BASE_URL}/services/local-movers/#service`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@id": `${BASE_URL}/services/long-distance-movers/#service`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@id": `${BASE_URL}/services/man-with-a-van/#service`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@id": `${BASE_URL}/services/piano-movers/#service`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@id": `${BASE_URL}/services/specialty-movers/#service`
          }
        }
      ]
    }
  ]
};

export default function ServicesPage() {
  return (
    <>
    {/* Schema JSON-LD */}
    <Script id="services-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceschemaData),}}/>

    <section className="bg-gray-50 sm:pt-40 md:pt-40 lg:pt-40 pt-40 pb-10 md:pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-4 text-center pb-8">
          <h1 className="text-2xl md:text-4xl font-bold">Our All Relocation Services in Calgary — Choose now Which One Is Right for You?</h1>
          <p>Some moves arrive with little warning — a lease that isn't renewed, a sudden job transfer, or an unexpected life change that can't wait. Whatever the circumstances, Shiftrix is ready to help. Our team handles relocations of every scale and type: a few essential items or an entire property, a single room or a full office floor. Regardless of your timeline or the size of your move, we coordinate every detail so you can focus on settling in.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard key="commercial-movers"
              link={`${BASE_URL}/services/commercial-movers`}
              heading="Commercial Movers"
              content="Let us handle your office, retail, clinic, or warehouse move with unmatched attention and expertise when it's time to relocate your business."
            />
            <ServiceCard
              link={`${BASE_URL}/services/residential-movers`}
              heading="Residential Movers"
              content="Moving to a new apartment, condo, or house doesn't have to be a waste of your time or out of your budget."
            />
            <ServiceCard
              link={`${BASE_URL}/services/full-service-movers`}
              heading="Full-Service Movers"
              content="Whether you’re relocating a single piece of furniture, a small apartment, or a large home, Shiftrix, one of the leading full-service moving companies."
            />
            <ServiceCard
              link={`${BASE_URL}/services/furniture-movers`}
              heading="Furniture Movers"
              content="At Shiftrix, we provide professional furniture moving services for both residential and commercial."
            />
            <ServiceCard
              link={`${BASE_URL}/services/local-movers`}
              heading="Local Movers"
              content="Shiftrix makes local moving easy and stress-free, whether it's moving to a new home across town or relocating the office."
            />
            <ServiceCard
              link={`${BASE_URL}/services/long-distance-movers`}
              heading="Long Distance Movers"
              content="At Shiftrix, you will find what you are looking for in long-distance movers, whether you are a professional, a family, or a business."
            />
            <ServiceCard
              link={`${BASE_URL}/services/man-with-a-van`}
              heading="Man With A Van"
              content="Shiftrix helps families, students, professionals, and businesses move. You can book our man with a van service for same-day or scheduled moves"
            />
            <ServiceCard
              link={`${BASE_URL}/services/piano-movers`}
              heading="Piano Movers"
              content="We use specialised equipment and secure transport to safely and efficiently move pianos in condos, apartments, and homes in Calgary and nearby areas."
            />
            <ServiceCard
              link={`${BASE_URL}/services/specialty-movers`}
              heading="Specialty Movers"
              content="With over a decade of experience handling delicate instruments, fine art, and high-value belongings, Shiftrix is one of Calgary&apos;s leading professional speciality movers."
            />
        </div>
      </div>
    </section>

    <section className="py-10 md:py-20">
        <div className="container mx-auto px-4">
            <div className="relative overflow-hidden rounded-2xl dark-sec bg-gradient-to-br from-indigo-950 via-indigo-900 to-indigo-700 text-white shadow-xl">
                <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-6 sm:p-8 md:p-10 lg:p-12 items-center">
                    {/* left Content */}
                    <div className="space-y-6 max-w-xl">
                        <div className="space-y-3 text-white">
                            <p className="text-sm font-semibold text-indigo-200 uppercase">Free Relocation Services quote</p>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Get a Free and No-Obligation Quote</h2>
                            <p>Move with a clear, guaranteed price instead of an estimate. Send us the details, and we will reach out to you soon, usually within one hour.</p>
                        </div>

                        <ul className="space-y-3">
                            {[
                                "Final price sealed in writing with details before you okay.",
                                "Calgary relocation services are willing to talk it through.",
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-3 text-indigo-50">
                                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
                                        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                    <span className="leading-snug">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <Link href={phoneHref} aria-label="Call Shiftrix for a relocation services quote" className="inline-flex items-center gap-3 rounded-md border border-white/25 bg-white/10 px-4 py-3 backdrop-blur-sm transition hover:bg-white/15">
                            <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-br from-indigo-500 to-indigo-400 text-white">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
                                    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                                </svg>
                            </span>
                            <span className="flex flex-col text-left">
                                <span className="text-xs text-indigo-200">Prefer to talk?</span>
                                <span className="text-sm font-semibold tracking-wide">+1 (403) 472-9110</span>
                            </span>
                        </Link>
                    </div>
                    
                    {/* right Content */}
                    <div className="w-full lg:max-w-md lg:ml-auto">
                        <div className="rounded-xl bg-white text-slate-900 shadow-2xl px-5 py-6 sm:px-6 sm:py-7">
                            <div className="mb-5 space-y-1">
                                <h3 className="text-xl font-bold leading-tight">Request your free quote</h3>
                                <p className="text-sm text-slate-600">Quick form. No hidden charges.</p>
                            </div>
                            <MovingForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}