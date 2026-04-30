import type { Metadata } from "next";
import Script from "next/script";
import { APP_NAME, BASE_URL, contactInfo  } from "@/lib/config";
import Link from "next/link";

import { blogs } from "@/lib/data";
import { testimonials } from "@/lib/testimonials";
import { whyhireus } from "@/lib/whyhireus";

import BlogCard from "@/components/BlogCard";
import ContactForm from "@/components/ContactForm";
import ContactSection from "@/components/ContactSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import WhyHireSection from "@/components/whyhireSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import HeroLayout from "@/components/HeroLayout";
import ServiceCard from "@/components/ServiceCard";

const { phone, logo, email, address } = contactInfo;

export const metadata: Metadata = {
  title: `Moving Company Calgary | Local & Long Distance Movers | ${APP_NAME}`,
  description: "Looking for a trusted moving company in Calgary? Shiftrix offers professional residential, commercial, and long-distance moving services. Get a free quote today.",
  keywords: [ "moving companies, moving agency, moving services, local moving companies, affordable moving companies calgary, packing and moving companies, reputable moving companies, same day moving companies, reliable moving company"],
  alternates: {
    canonical: `${BASE_URL}`,
  },
  openGraph: {
    title: `Moving Company Calgary | Local & Long Distance Movers | ${APP_NAME}`,
    description: "Looking for a trusted moving company in Calgary? Shiftrix offers professional residential, commercial, and long-distance moving services. Get a free quote today.",
    url: `${BASE_URL}`,
    type: "website",
    siteName: `${APP_NAME}`,
    locale: "en-CA",
    images: [
      {
        url: `${BASE_URL}/shiftrix-mover-and-packer.jpg`,
        width: 1200,
        height: 630,
        alt: "Trusted Moving Company in Calgary",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: `${BASE_URL}`,
    creator: `${BASE_URL}`,
    title: `Moving Company Calgary | Local & Long Distance Movers | ${APP_NAME}`,
    description: "Looking for a trusted moving company in Calgary? Shiftrix offers professional residential, commercial, and long-distance moving services. Get a free quote today.",
    images: `${BASE_URL}/shiftrix-mover-and-packer.jpg`,
  },
};

export default function HomePage() {

  const homeschemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.shiftrix.ca/#website",
        "url": "https://www.shiftrix.ca",
        "name": "Shiftrix",
        "publisher": {
          "@id": "https://www.shiftrix.ca/#organization"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://www.shiftrix.ca/#webpage",
        "url": "https://www.shiftrix.ca",
        "name": "Trusted Moving Company in Calgary | Shiftrix",
        "description": "Looking for a trusted moving company in Calgary? Shiftrix offers professional residential, commercial, and long-distance moving services. Get a free quote today.",
        "isPartOf": {
          "@id": "https://www.shiftrix.ca/#website"
        },
        "about": {
          "@id": "https://www.shiftrix.ca/#organization"
        },
        "mainEntity": {
          "@id": "https://www.shiftrix.ca/#faq"
        }
      },
      {
        "@type": [
          "MovingCompany",
          "LocalBusiness"
        ],
        "@id": "https://www.shiftrix.ca/#organization",
        "name": "Shiftrix",
        "url": "https://www.shiftrix.ca",
        "logo": "https://www.shiftrix.ca/shiftrix-logo.png",
        "image": "https://www.shiftrix.ca/shiftrix-logo.png",
        "email": "info.shiftrix@gmail.com",
        "telephone": "+1-403-472-9110",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "120 Dawson Wharf View",
          "addressLocality": "Chestermere",
          "addressRegion": "AB",
          "postalCode": "T1X 2W1",
          "addressCountry": "CA"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 51.0501,
          "longitude": -113.8290
        },
        "areaServed": [
          { "@type": "City", "name": "Calgary" },
          { "@type": "City", "name": "Chestermere" },
          { "@type": "City", "name": "Airdrie" },
          { "@type": "City", "name": "Cochrane" },
          { "@type": "City", "name": "Okotoks" }
        ],
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "08:00",
            "closes": "20:00"
          }
        ],
        "priceRange": "$$",
        "sameAs": [
          "https://www.facebook.com/shiftrix/",
          "https://www.instagram.com/shiftrix_movers/",
          "https://x.com/infoShiftrix",
          "https://www.youtube.com/@infoShiftrix"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "87"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "John M"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5"
            },
            "reviewBody": "Excellent moving service in Calgary. Very professional and careful with our belongings."
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Sarah L"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5"
            },
            "reviewBody": "Highly recommend Shiftrix for residential moves. On-time and affordable."
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.shiftrix.ca/#service",
        "serviceType": "Moving Services",
        "provider": {
          "@id": "https://www.shiftrix.ca/#organization"
        },
        "areaServed": {
          "@type": "City",
          "name": "Calgary"
        },
        "description": "Professional, customized moving services including residential, commercial, and long-distance moves."
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.shiftrix.ca/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Are moving services affordable at Shiftrix?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Shiftrix provides affordable moving services without broker fees, ensuring direct contact with professional movers."
            }
          },
          {
            "@type": "Question",
            "name": "Does Shiftrix offer same-day moving?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, same-day moving is available depending on team and truck availability."
            }
          }
        ]
      }
    ]
  };

  return (
      <>
      {/* Add Structured Data for Home Page */}
      <Script id="homepage-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeschemaData, null, 2),}}/>

      <HeroLayout />

      <StatsSection />

      <section className="relative overflow-hidden py-20">        
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-4 text-center">
            <h2 className="text-2xl md:text-4xl font-bold">Customized Moving Services for Every Relocation Need</h2>
            <p>As a trusted moving agency, our team has a strong track record of 5+ years providing tailored relocation solutions in Calgary, from careful packing and secure loading to safe transportation and on-time delivery. We focus on efficiency, safety, and customer satisfaction.</p>
          </div>

          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <ServiceCard
              link={`${BASE_URL}/services/commercial-movers`}
              heading="Commercial Movers"
              content="Let us handle your office, retail, clinic, or warehouse move with unmatched attention and expertise when it's time to relocate your business."
              button="Discover more →"
            />
            <ServiceCard
              link={`${BASE_URL}/services/residential-movers`}
              heading="Residential Movers"
              content="Moving to a new apartment, condo, or house doesn't have to be a waste of your time or out of your budget."
              button="Discover more →"
            />
            <ServiceCard
              link={`${BASE_URL}/services/full-service-movers`}
              heading="Full-Service Movers"
              content="Whether you’re relocating a single piece of furniture, a small apartment, or a large home, Shiftrix, one of the leading full-service moving companies."
              button="Discover more →"
            />
            <ServiceCard
              link={`${BASE_URL}/services/furniture-movers`}
              heading="Furniture Movers"
              content="At Shiftrix, we provide professional furniture moving services for both residential and commercial."
              button="Discover more →"
            />
            <ServiceCard
              link={`${BASE_URL}/services/local-movers`}
              heading="Local Movers"
              content="Shiftrix makes local moving easy and stress-free, whether it's moving to a new home across town or relocating the office."
              button="Discover more →"
            />
            <ServiceCard
              link={`${BASE_URL}/services/long-distance-movers`}
              heading="Long Distance Movers"
              content="At Shiftrix, you will find what you are looking for in long-distance movers, whether you are a professional, a family, or a business."
              button="Discover more →"
            />
          </div>

          <div className="text-center mt-12">
            <Link href={`${BASE_URL}/services`} aria-label="View All Services" className="inline-flex items-center gap-2 font-medium hover:text-indigo-800 hover:scale-103 transition-transform duration-300">View All Services →</Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
         <div className="max-w-7xl mx-auto px-4">
            <AboutSection
              image="/shiftrix-mover-and-packer.jpg"
              title="The Professional Moving Company Calgary Trusts"
              content={`Shiftrix is a Calgary-based moving company that delivers reliable, comprehensive moving solutions for homes and offices. With over 5 years of hands-on experience, our professional movers provide a custom solution for every relocation, including planning, packing, loading, and transporting, with care and efficiency as you expect from any reliable moving agency. We treat your belongings like our own and ensure a seamless experience via transparent pricing, professional support, and consistent service.`}
              listTitle=""
              listItems={[]}
              linkText="About us"
              linkUrl={`${BASE_URL}/about-us`}
              imageClassName="rounded-2xl overflow-hidden shadow-2xl"
            />
         </div>
      </section>

      <ProcessSection />

      <WhyHireSection
        subheading=""
        heading="Why Choose Shiftrix for Moving in Calgary?"
        description=""
        items={whyhireus}
      />

      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-3 text-center pb-8">
            <h2 className="text-2xl md:text-4xl font-bold">Explore our blog for expert tips and advice</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogs.slice(0, 3).map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          <div className="text-center mt-6">
            <Link href={`${BASE_URL}/blog`} aria-label="View All Blogs" className="inline-flex items-center gap-2 hover:text-indigo-800 hover:scale-103 transition-transform duration-300 font-medium">View All Blogs →</Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-20">
          <div className="rounded-3xl bg-white drop-shadow-lg p-4 sm:p-6 md:p-6 lg:p-8">
            <div className="space-y-3 text-center pb-8">
                <div className="text-2xl text-gray-900 md:text-4xl font-bold">Plan Your Next Move with our team | Book Today</div>
                <p>Plan your next move with our expert team and get a customised moving service that fits your schedule and budget.</p>
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

      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
            <div className="space-y-3 text-center pb-8">
              <h2 className="text-2xl md:text-4xl font-bold">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-3">
              <FaqSection
                title="Are moving services affordable at Shiftrix?"
                content={`At Shiftrix, you are in direct contact with professional movers. Shiftrix is the only moving agency in Calgary that allows residents to hire an experienced crew without paying any commission or broker fee. Apart from this, our regular crew, owned transport, and logistics give us leverage for better negotiation.`}
              />
              <FaqSection
                title="Does Shiftrix provide the same-day moving service in Calgary?"
                content={`Yes, our moving agency facilitates in Calgary. Only if our team and trucks are available to meet your needs, whether arising from last-minute lease changes or unexpected events. We welcome and assist every client; same-day scheduling depends on our current booking capacity and the size of your move.`}
              />
            </div>
            
        </div>
      </section>

      <TestimonialsSection
        subheading=""
        heading="What Our Clients Say"
        testimonials={testimonials}
      />
      </>
  );
}
