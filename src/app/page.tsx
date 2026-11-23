import type { Metadata } from "next";
import Script from "next/script";
import { APP_NAME, BASE_URL, contactInfo  } from "@/lib/config";
import Link from "next/link";

import MovingForm from "@/components/movingForm";
import { getLatestBlogs } from "@/lib/data";
import { testimonials } from "@/lib/testimonials";
import { whyhireus } from "@/lib/whyhireus";

import BlogCard from "@/components/BlogCard";
//import ContactForm from "@/components/ContactForm";
//import ContactSection from "@/components/ContactSection";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import WhyHireSection from "@/components/whyhireSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { FaqSection } from "@/components/FaqSection";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";


const { phone, email, address } = contactInfo;
const phoneHref = `tel:${phone.replace(/[^+\d]/g, "")}`;
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

const faqItems = [
    {
      title: "Are moving services affordable at Shiftrix?",
      content: "At Shiftrix, you are in direct contact with professional movers. Shiftrix is the only moving agency in Calgary that allows residents to hire an experienced crew without paying any commission or broker fee. Apart from this, our regular crew, owned transport, and logistics give us leverage for better negotiation.",
    },
    {
      title: "Does Shiftrix provide the same-day moving service in Calgary?",
      content: "Yes, our moving agency facilitates in Calgary. Only if our team and trucks are available to meet your needs, whether arising from last-minute lease changes or unexpected events. We welcome and assist every client; same-day scheduling depends on our current booking capacity and the size of your move.",
    }
];

const homeschemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MovingCompany",
      "@id": `${BASE_URL}/#business`,
      "name": `${APP_NAME}`,
      "legalName": "Shiftrix Moved With Precision",
      "alternateName": "Shiftrix Moving Agency",
      "slogan": "Moved With Precision",
      "url": `${BASE_URL}`,
      "description": "Shiftrix offers a full-service moving solution in Calgary to move residential, commercial, furniture, piano, or other specialty items locally or long-distance.",
      "telephone": `${phone}`,
      "email": `${email}`,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": `${address}`,
        "addressLocality": "Chestermere",
        "addressRegion": "AB",
        "addressCountry": "CA"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "opens": "07:00",
        "closes": "20:00"
      },
      "hasMap": "https://share.google/Q4pzFp8VuABlI5y94",
      "sameAs": [
        "https://share.google/Q4pzFp8VuABlI5y94",
        "https://www.instagram.com/shiftrix_movers/",
        "https://www.facebook.com/shiftrix/",
        "https://x.com/infoShiftrix",
        "https://www.youtube.com/@infoShiftrix"
      ],
      "areaServed": [
        {
          "@type": "City",
          "name": "Calgary"
        },
        {
          "@type": "City",
          "name": "Airdrie"
        },
        {
          "@type": "City",
          "name": "Chestermere"
        },
        {
          "@type": "City",
          "name": "Strathmore"
        },
        {
          "@type": "City",
          "name": "Okotoks"
        },
        {
          "@type": "City",
          "name": "Cochrane"
        },
        {
          "@type": "City",
          "name": "Red Deer"
        },
        {
          "@type": "City",
          "name": "Lethbridge"
        },
        {
          "@type": "City",
          "name": "Edmonton"
        },
        {
          "@type": "City",
          "name": "Medicine Hat"
        },
        {
          "@type": "City",
          "name": "Grande Prairie"
        }
      ],
        "hasOfferCatalog": {
        "@id": `${BASE_URL}/#services`
      }
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      "url": `${BASE_URL}`,
      "name": "Shiftrix Moving Services",
      "alternateName": "Shiftrix",
      "publisher": {
        "@id": `${BASE_URL}/#business`
      },
      "inLanguage": "en-CA"
    },
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/#webpage`,
      "url": `${BASE_URL}`,
      "name": "Moving Company Calgary | Local & Long Distance Movers | Shiftrix",
      "description": "Professional moving services in Calgary for residential, commercial, local, long-distance and furniture moves. Get a free moving quote from Shiftrix.",
      "isPartOf": {
        "@id": `${BASE_URL}/#website`
      },
      "about": {
        "@id": `${BASE_URL}/#business`
      },
      "mainEntity": {
        "@id": `${BASE_URL}/#business`
      },
      "inLanguage": "en-CA"
    },
    {
      "@type": "OfferCatalog",
      "@id": `${BASE_URL}/#services`,
      "name": "Shiftrix Moving Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "@id": `${BASE_URL}/services/commercial-movers/#service`,
            "name": "Commercial Moving Services",
            "url": `${BASE_URL}/services/commercial-movers`,
            "provider": {
              "@id": `${BASE_URL}/#business`
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "@id": `${BASE_URL}/services/residential-movers/#service`,
            "name": "Residential Moving Services",
            "url": `${BASE_URL}/services/residential-movers`,
            "provider": {
              "@id": `${BASE_URL}/#business`
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "@id": `${BASE_URL}/services/full-service-movers/#service`,
            "name": "Full-Service Moving",
            "url": `${BASE_URL}/services/full-service-movers`,
            "provider": {
              "@id": `${BASE_URL}/#business`
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "@id": `${BASE_URL}/services/furniture-movers/#service`,
            "name": "Furniture Moving Services",
            "url": `${BASE_URL}/services/furniture-movers`,
            "provider": {
              "@id": `${BASE_URL}/#business`
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "@id": `${BASE_URL}/services/local-movers/#service`,
            "name": "Local Moving Services",
            "url": `${BASE_URL}/services/local-movers`,
            "provider": {
              "@id": `${BASE_URL}/#business`
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "@id": `${BASE_URL}/services/long-distance-movers/#service`,
            "name": "Long-Distance Moving Services",
            "url": `${BASE_URL}/services/long-distance-movers`,
            "provider": {
              "@id": `${BASE_URL}/#business`
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "@id": `${BASE_URL}/services/piano-movers/#service`,
            "name": "Piano Moving Services",
            "url": `${BASE_URL}/services/piano-movers`,
            "provider": {
              "@id": `${BASE_URL}/#business`
            }
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

      <HeroSection />

      <section className="relative overflow-hidden py-10 md:py-20">        
        <div className="container mx-auto px-4">
          <div className="space-y-4 max-w-5xl mx-auto text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">Services</p>
            <h2 className="text-2xl md:text-4xl font-bold">Customized Moving Services for Every Relocation Need</h2>
            <p>As a trusted moving agency, our team has a strong track record of 5+ years providing tailored relocation solutions in Calgary, from careful packing and secure loading to safe transportation and on-time delivery. We focus on efficiency, safety, and customer satisfaction.</p>
          </div>

          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <ServiceCard
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
          </div>

          <div className="text-center mt-12">
            <Link href={`${BASE_URL}/services`} aria-label="View All Services" className="inline-flex items-center gap-2 font-medium hover:text-indigo-800 hover:scale-103 transition-transform duration-300">View All Services →</Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-14 md:py-24">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--brand-indigo-50),_transparent_55%),radial-gradient(ellipse_at_bottom_right,_#eef2ff,_transparent_50%)]"
        />
        <div
          aria-hidden
          className="absolute top-1/4 -left-24 h-72 w-72 rounded-full bg-indigo-400/15 blur-3xl animate-float-slow"
        />
        <div
          aria-hidden
          className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-indigo-600/10 blur-3xl animate-float-reverse"
        />
        <div className="container relative mx-auto px-4">
          <AboutSection
            image="/shiftrix-mover-and-packer.jpg"
            title="The Professional Moving Company Calgary Trusts"
            content={`Shiftrix is a Calgary-based moving company that delivers reliable, comprehensive moving solutions for homes and offices. With over 5 years of hands-on experience, our professional movers provide a custom solution for every relocation, including planning, packing, loading, and transporting, with care and efficiency as you expect from any reliable moving agency. We treat your belongings like our own and ensure a seamless experience via transparent pricing, professional support, and consistent service.`}
            listTitle=""
            listItems={[]}
            linkText="About us"
            linkUrl={`${BASE_URL}/about-us`}
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

      <section className="relative py-10 md:py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-3 text-center pb-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">latest blogs</p>
            <h2 className="text-2xl md:text-4xl font-bold">Explore our blog for expert tips and advice</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {getLatestBlogs(4).map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          <div className="text-center mt-6">
            <Link href={`${BASE_URL}/blog`} aria-label="View All Blogs" className="inline-flex items-center gap-2 hover:text-indigo-800 hover:scale-103 transition-transform duration-300 font-medium">View All Blogs →</Link>
          </div>
        </div>
      </section>

      {/* <section className="pb-10 md:pb-20">
        <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="rounded-3xl bg-white drop-shadow-lg p-4 sm:p-6 md:p-6 lg:p-8">
                <div className="space-y-3 text-center pb-8">
                    <div className="text-2xl text-gray-900 md:text-4xl font-bold">Plan Your Next Move with our team | Book Today</div>
                    <p>Plan your next move with our expert team and get a customised moving service that fits your schedule and budget.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative">
                    <ContactSection/>
                  </div>

                  <div className="relative">
                    <ContactForm />
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="pb-10 md:pb-20">
        <div className="container mx-auto px-4">
            <div className="relative overflow-hidden rounded-2xl dark-sec bg-gradient-to-br from-indigo-950 via-indigo-900 to-indigo-700 text-white shadow-xl">
                <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-6 sm:p-8 md:p-10 lg:p-12 items-center">
                    {/* left Content */}
                    <div className="space-y-6 max-w-xl">
                        <div className="space-y-3 text-white">
                            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-200">Free Quote</p>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Get a Free and No-Obligation Quote</h2>
                            <p>Move with a clear, guaranteed price instead of an estimate. Send us the details, and we will reach out to you soon, usually within one hour.</p>
                        </div>

                        <ul className="space-y-3">
                            {[
                                "Final price sealed in writing with details before you okay.",
                                "Calgary Moving Company are willing to talk it through.",
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

                        <Link href={phoneHref} aria-label="Call Shiftrix for a long-distance moving quote" className="inline-flex items-center gap-3 rounded-md border border-white/25 bg-white/10 px-4 py-3 backdrop-blur-sm transition hover:bg-white/15">
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
                    <div className="w-full lg:max-w-xl lg:ml-auto">
                        <div className="rounded-xl bg-white text-slate-900 shadow-2xl px-5 py-6 sm:px-6 sm:py-7">
                            <div className="mb-5 space-y-1">
                                <h3 className="text-xl font-bold leading-tight">Request your free quote</h3>
                                <p className="text-sm text-slate-600">Quick form. No hidden charges.</p>
                            </div>
                            <MovingForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
              <div className="space-y-3 text-center pb-8">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">FAQs</p>
                <h2 className="text-2xl md:text-4xl font-bold">Frequently Asked Questions</h2>
              </div>

              <div className="space-y-3">
                <FaqSection items={faqItems} />
              </div>
              
          </div>
        </div>
      </section>

      <TestimonialsSection
        subheading="Testimonials"
        heading="What Our Clients Say"
        testimonials={testimonials}
      />
    </>
  );
}
