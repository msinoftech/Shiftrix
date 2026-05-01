import Link from "next/link";
import type { Metadata } from "next";
import { APP_NAME, BASE_URL, contactInfo } from "@/lib/config";
import Script from "next/script";
import ContactForm from "@/components/ContactForm";
import ContactSection from "@/components/ContactSection";
import ServiceCard from "@/components/ServiceCard";

const { phone, address, logo, email } = contactInfo;

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
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      "url": `${BASE_URL}`,
      "name": `${APP_NAME}`,
      "alternateName": `${APP_NAME}`,
      "publisher": { "@id": `${BASE_URL}/#organization` }
    },
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/services/#webpage`,
      "url": `${BASE_URL}/services`,
      "name": "Our Relocation Services in Calgary | Compare & Choose",
      "description": "Explore all the services we offer in Calgary — from local and residential moves to long-distance, commercial, piano, and specialty moving. Find the right relocation service for your move.",
      "isPartOf": { "@id": `${BASE_URL}/services/#website` },
      "about": { "@id": `${BASE_URL}/services/#organization` },
      "breadcrumb": {
        "@type": "BreadcrumbList",
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
      }
    },
    {
      "@type": ["MovingCompany", "Organization"],
      "@id": `${BASE_URL}/services/#organization`,
      "name": `${APP_NAME}`,
      "alternateName": `${APP_NAME}`,
      "url": `${BASE_URL}`,
      "logo": `${logo}`,
      "image": `${logo}`,
      "email": `${email}`,
      "telephone": `${phone}`,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": `${address}`,
        "addressLocality": "Chestermere",
        "addressRegion": "AB",
        "postalCode": "T1X 2W1",
        "addressCountry": "CA"
      },
      "areaServed": [
        "Calgary", "Chestermere", "Airdrie", "Cochrane", "Okotoks", "Langdon", "Strathmore"
      ],
      "description": "Explore all the services we offer in Calgary — from local and residential moves to long-distance, commercial, piano, and specialty moving. Find the right relocation service for your move.",
      "sameAs": [
        "https://www.facebook.com/shiftrix/",
        "https://www.instagram.com/shiftrix_movers/",
        "https://x.com/infoShiftrix",
        "https://www.youtube.com/@infoShiftrix"
      ]
    },
    {
      "@type": "Service",
      "serviceType": "Moving Service",
      "provider": { "@id": `${BASE_URL}/services/#organization` },
      "areaServed": {
        "@type": "City",
        "name": "Calgary"
      },
      "description": "Explore all the services we offer in Calgary — from local and residential moves to long-distance, commercial, piano, and specialty moving. Find the right relocation service for your move."
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
    {/* Schema JSON-LD */}
    <Script id="services-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceschemaData),}}/>

    <section className="bg-gray-50 sm:pt-40 md:pt-40 lg:pt-40 pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-4">
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

    <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="rounded-3xl bg-white drop-shadow-lg p-4 sm:p-6 md:p-6 lg:p-8">
          <div className="relative space-y-3 text-center pb-8">
              <div className="text-2xl md:text-4xl text-gray-900 font-bold">Pick the service you actually need | Book Our Team</div>
              <p>Let our experts take the stress out of your next move with a relocation service tailored to your timeline and budget.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Content */}
            <div className="relative">
                <ContactSection/>
            </div>
            {/* Right Form */}
            <div className="relative">
              <ContactForm />
            </div>
          </div>
      </div>
    </section>
    </>
  );
}