import type { Metadata } from "next";
import Script from "next/script";
import { APP_NAME, BASE_URL, contactInfo,  } from "@/lib/config";
import ContactSection from "@/components/ContactSection";
import ContactForm from "@/components/ContactForm";
import LocationSection from "@/components/LocationSection";

const { phone, address, logo, email } = contactInfo;

export const metadata: Metadata = {
  title: `Contact Us - ${APP_NAME}`,
  description: "Shiftrix Mover, your trusted mover and dispatch support partner in the USA. Our dedicated dispatchers are ready to empower truck owners and fleet companies. Reach out to us today.",
  keywords: ["mover", "shiftrix", "Contact us"],
  alternates: {
    canonical: `${BASE_URL}/contact-us`,
  },
  openGraph: {
    title: `Contact Us - ${APP_NAME}`,
    description: "Shiftrix Mover, your trusted mover and dispatch support partner in the USA. Our dedicated dispatchers are ready to empower truck owners and fleet companies. Reach out to us today.",
    url: `${BASE_URL}/contact-us`,
    type: "website",
    siteName: `${APP_NAME}`,
    locale: "en-CA",
    images: [
      {
        url: `${BASE_URL}/shiftrix-mover-and-packer.jpg`,
        width: 1200,
        height: 630,
        alt: `${APP_NAME} - Contact Us`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: `${BASE_URL}`,
    creator: `${BASE_URL}`,
    title: `Contact Us - ${APP_NAME}`,
    description: "Shiftrix Mover, your trusted mover and dispatch support partner in the USA. Our dedicated dispatchers are ready to empower truck owners and fleet companies. Reach out to us today.",
    images: `${BASE_URL}/shiftrix-mover-and-packer.jpg`,
  },
};

// Schema Data for Contact Page
const contactSchemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/contact-us/#webpage`,
      "url": `${BASE_URL}/contact-us`,
      "name": `Contact Us - ${APP_NAME}`,
      "inLanguage": "en-CA",
      "description": "Shiftrix Mover, your trusted mover and dispatch support partner in the USA. Our dedicated dispatchers are ready to empower truck owners and fleet companies. Reach out to us today.",
      "isPartOf": {
        "@type": "WebSite",
        "url": `${BASE_URL}`,
        "name": `${APP_NAME}`,
      },
    },
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      "name": `${APP_NAME}`,
      "url": `${BASE_URL}`,
      "logo": `${logo}`,
      "foundingDate": "2025",
      "founder": {
        "@type": "Person",
        "name": `${APP_NAME}`,
      },
      "description": "Shiftrix Mover, your trusted mover and dispatch support partner in the USA. Our dedicated dispatchers are ready to empower truck owners and fleet companies. Reach out to us today.",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": `${phone}`,
        "email": `${email}`,
        "contactType": "Customer Support",
        "areaServed": "Canada",
        "availableLanguage": ["en"],
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
      "@type": "ContactPage",
      "name": `Contact Us - ${APP_NAME}`,
      "url": `${BASE_URL}/contact-us`,
      "primaryImageOfPage": `${logo}`,
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `${BASE_URL}`,
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": `Contact Us`,
            "item": `${BASE_URL}/contact-us`,
          },
        ],
      },
    },
  ],
};

export default function Contact() {
  return (
    <>
      {/* Inject JSON-LD Schema */}
      <Script
        id="contact-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchemaData) }}
      />

      <section className="relative bg-gray-50 sm:pt-40 md:pt-40 lg:pt-40 pt-40 pb-10 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto overflow-hidden rounded-3xl bg-white shadow-xl shadow-indigo-100/70">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative bg-gradient-to-br from-indigo-800 to-indigo-500 p-8 md:p-10">
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-indigo-100">Get in touch</p>
                <h1 className="mt-3 text-2xl md:text-3xl font-bold leading-tight !text-white">Talk with a Calgary mover</h1>
                <p className="mt-3 text-indigo-100">Call, email, or send the form. We’ll answer your questions and help you plan the next step.</p>
                <div className="mt-8">
                  <ContactSection />
                </div>
              </div>
              <div className="p-8 md:p-10">
                <h2 className="text-2xl font-bold text-slate-900">Request Quote</h2>
                <p className="mt-2 mb-6 text-gray-600">Share your service and preferred moving date. We’ll get back to you shortly.</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <LocationSection
        mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214332.196409201!2d-114.01018745746924!3d51.03700219431434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53717c38a9874c5b%3A0x9b7a0721ca1f9429!2s120%20Dawson%20wharf%20Vw%2C%20Chestermere%2C%20AB%20T1X%202W1%2C%20Canada!5e0!3m2!1sen!2sin!4v1767070473936!5m2!1sen!2sin"
      />
    </>
  );
}
