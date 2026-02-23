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

const { phone } = contactInfo;

export const metadata: Metadata = {
  title: `${APP_NAME} - Trusted Moving Company in Calgary`,
  description: "Shiftrix, one of the trusted Calgary-based full-service moving companies for complete solutions for homes and offices, with over 5 years of hands-on experience,",
  keywords: [ "moving companies, moving agency, moving services, local moving companies, affordable moving companies calgary, packing and moving companies, reputable moving companies, same day moving companies, reliable moving company"],
  alternates: {
    canonical: `${BASE_URL}`,
  },
  openGraph: {
    title: `${APP_NAME} - Trusted Moving Company in Calgary`,
    description: "Shiftrix, one of the trusted Calgary-based full-service moving companies for complete solutions for homes and offices, with over 5 years of hands-on experience,",
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
    title: `${APP_NAME} - Trusted Moving Company in Calgary`,
    description: "Shiftrix, one of the trusted Calgary-based full-service moving companies for complete solutions for homes and offices, with over 5 years of hands-on experience,",
    images: `${BASE_URL}/shiftrix-mover-and-packer.jpg`,
  },
};

export default function HomePage() {

  const homeschemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "url": `${BASE_URL}`,
        "name": `${APP_NAME}`,
        "description": "Shiftrix, one of the trusted Calgary-based full-service moving companies for complete solutions for homes and offices, with over 5 years of hands-on experience,",
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${BASE_URL}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        }
      },
      {
        "@type": "WebPage",
        "url": `${BASE_URL}`,
        "name": `Home - ${APP_NAME}`,
        "inLanguage": "en-CA",
        "description": "Shiftrix, one of the trusted Calgary-based full-service moving companies for complete solutions for homes and offices, with over 5 years of hands-on experience,",
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
        "logo": `${BASE_URL}/shiftrix-logo-black.png`,
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": `${phone}`,
          "contactType": "service",
          "areaServed": "Canada",
          "availableLanguage": ["en","fr"]
        },
        "sameAs": [
          "https://www.facebook.com/shiftrix",
          "https://x.com/infoShiftrix",
          "https://www.instagram.com/shiftrix_movers",
          "https://www.youtube.com/@infoShiftrix"
        ]
      },
      {
        "@type": "LocalBusiness",
        "name": `${APP_NAME}`,
        "url": `${BASE_URL}/locations/calgary`,
        "telephone": `${phone}`,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Calgary",
          "addressRegion": "AB",
          "addressCountry": "CA"
        },
        "serviceType": "Moving services Company"
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
        <div className="absolute inset-0 -z-10 animate-gradient bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-indigo-100 via-white to-indigo-100"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <h2 className="text-2xl text-gray-900 md:text-4xl font-bold text-center">Full-Service Moving Agency for Stress-Free Relocation</h2>
            <p className="mt-4 mx-auto">Shiftrix is one of the trusted full-service moving companies in Calgary, offering complete solutions from packing to delivery. Enjoy a smooth, safe relocation experience for home or office with our professional team, who treat your belongings like their own.</p>
          </div>

          <div className="relative mt-12">
            <ServiceCard />
          </div>

          <div className="text-center mt-12">
            <Link href={`${BASE_URL}/services`} aria-label="View All Services" className="inline-flex items-center gap-2 hover:text-indigo-800 hover:scale-103 transition-transform duration-300 font-medium">View All Services →</Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AboutSection
              image="/shiftrix-mover-and-packer.jpg"
              title="What Makes Shiftrix Different From Other Moving Companies"
              content={`Shiftrix is a Calgary-based moving company delivering reliable, complete moving solutions for homes and offices. With over 5 years of hands-on experience, our professional team plans, packs, loads, and transports with care and efficiency. Shiftrix focuses on punctuality, clear communication, and safe handling to make every move smooth and stress-free. Choose us among the trusted Calgary moving services that treat your belongings like their own, offer fair, transparent pricing, and provide professional support at every step.`}
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
          <h2 className="text-2xl text-gray-900 md:text-4xl font-bold text-center">Explore our blog for expert tips and advice</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {blogs.slice(0, 3).map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href={`${BASE_URL}/blog`} aria-label="View All Blogs" className="inline-flex items-center gap-2 text-gray-600 hover:text-indigo-800 hover:scale-103 transition">View All Blogs →</Link>
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-7xl mx-auto px-4 pb-20">
          <div className="rounded-3xl bg-white drop-shadow-lg p-4 sm:p-6 md:p-6 lg:p-8">
            <div className="relative text-center pb-8">
                <div className="text-2xl text-gray-900 md:text-4xl font-bold">Plan Your Next Move with our team | Book Today</div>
                <p className="mt-3">Plan your next move with our expert team and get a customised moving service that fits your schedule and budget.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Content */}
              <div className="relative">
                <div className="mt-6">
                  <ContactSection/>
                </div>
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
          <div className="relative text-center pb-8">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 text-center">Frequently Asked Questions</h2>
            </div>

            <FaqSection
              title="How does Shiftrix make moving services affordable?"
              content={`Shiftrix is a local moving agency in Calgary where you can hire expert movers directly, without paying any commission or broker fees. Also, our professionals are familiar with the routes and traffic, so they can optimise routes more effectively, saving money and time.`}
            />
            <FaqSection
              title="Does Shiftrix provide the same-day moving service in Calgary?"
              content={`Yes, if our team and trucks are available to meet your needs. Whether arising from last-minute lease changes or unexpected events. We welcome and assist every client; same-day scheduling depends on our current booking capacity and the size of your move.`}
            />
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
