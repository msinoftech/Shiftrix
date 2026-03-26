import Link from "next/link";
import type { Metadata } from "next";
import { APP_NAME, BASE_URL, contactInfo } from "@/lib/config";
import Script from "next/script";
import ContactForm from "@/components/ContactForm";
import ContactSection from "@/components/ContactSection";

const { phone, address } = contactInfo;

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
      "@type": "WebPage",
      "@id": `${BASE_URL}/services/#webpage`,
      "url": `${BASE_URL}/services`,
      "name": "Our Relocation Services in Calgary | Compare & Choose",
      "description": "Explore Shiftrix's professional moving services in Calgary. We specialize in residential, commercial, and long-distance moves with over 5 years of hands-on experience.",
      "keywords": "Relocation Services in Calgary ",
      "isPartOf": { "@id": `${BASE_URL}/#website` },
      "about": { "@id": `${BASE_URL}/#organization` },
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
    }
  ],
};

export default function ServicesPage() {
  return (
    <>
    {/* Schema JSON-LD */}
    <Script id="services-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceschemaData),}}/>

    <section className="bg-gray-50 sm:pt-40 md:pt-40 lg:pt-40 pt-40 pb-12">
      <div className="max-w-7xl mx-auto px-4 pt-6 sm:pt-6 md:pt-6 lg:pt-6">
        <div className="text-center pb-12">
          <h1 className="text-2xl text-gray-900 md:text-4xl font-bold">Our All Relocation Services in Calgary — Choose now Which One Is Right for You?</h1>
          <p className="mt-4 text-md">Some moves arrive with little warning — a lease that isn't renewed, a sudden job transfer, or an unexpected life change that can't wait. Whatever the circumstances, Shiftrix is ready to help. Our team handles relocations of every scale and type: a few essential items or an entire property, a single room or a full office floor. Regardless of your timeline or the size of your move, we coordinate every detail so you can focus on settling in.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Service 1 */}
          <div className="relative group bg-gradient-to-br via-indigo-100 to-indigo-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
            <Link href={`${BASE_URL}/services/commercial-movers`} aria-label="Commercial Movers">
            <div className="relative md:items-stretch z-10 mb-6">
              <div className="p-6 pb-8">
                <div className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-800 transition-colors">Commercial Movers</div>
                <p className="text-md">Let us handle your office, retail, clinic, or warehouse move with unmatched attention and expertise when it&apos;s time to relocate your business.</p>
                <div className="flex item-end justify-end my-4">
                  <span className="gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-br from-indigo-500 to-indigo-500 rounded-full shadow group-hover:from-indigo-800 hover:to-indigo-500 transition-all">Discover more →</span>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 w-full -z-0 [--gradient-start:#c7d2fe] [--gradient-mid:#a5b4fc] [--gradient-end:#ddd6fe] transition-all duration-300">
              <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="w-full opacity-80 transition-all duration-300">
                <path fill="url(#waveGradient1)" d="M0,224L30,192C60,160,120,96,180,74.7C240,53,300,75,360,101.3C420,128,480,160,540,176C600,192,660,192,720,170.7C780,149,840,107,900,96C960,85,1020,107,1080,138.7C1140,171,1200,213,1260,213.3C1320,213,1380,171,1410,149.3L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
                ></path>
                <defs>
                  <linearGradient id="waveGradient1" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="var(--gradient-start)" />
                    <stop offset="50%" stopColor="var(--gradient-mid)" />
                    <stop offset="100%" stopColor="var(--gradient-end)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            </Link>
          </div>

          {/* Service 2 */}
          <div className="relative group bg-gradient-to-br via-indigo-100 to-indigo-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
            <Link href={`${BASE_URL}/services/residential-movers`} aria-label="Residential Movers">
            <div className="relative md:items-stretch z-10 mb-6">
              <div className="p-6 pb-8">
                <div className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-800 transition-colors">Residential Movers</div>
                <p className="text-md">Moving to a new apartment, condo, or house doesn&apos;t have to be a waste of your time or out of your budget.</p>
                <div className="flex item-end justify-end my-4">
                  <span className="gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-br from-indigo-500 to-indigo-500 rounded-full shadow group-hover:from-indigo-800 hover:to-indigo-500 transition-all">Discover more →</span>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 w-full -z-0 [--gradient-start:#c7d2fe] [--gradient-mid:#a5b4fc] [--gradient-end:#ddd6fe] transition-all duration-300">
              <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="w-full opacity-80 transition-all duration-300">
                <path fill="url(#waveGradient2)" d="M0,224L30,192C60,160,120,96,180,74.7C240,53,300,75,360,101.3C420,128,480,160,540,176C600,192,660,192,720,170.7C780,149,840,107,900,96C960,85,1020,107,1080,138.7C1140,171,1200,213,1260,213.3C1320,213,1380,171,1410,149.3L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
                ></path>
                <defs>
                  <linearGradient id="waveGradient2" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="var(--gradient-start)" />
                    <stop offset="50%" stopColor="var(--gradient-mid)" />
                    <stop offset="100%" stopColor="var(--gradient-end)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            </Link>
          </div>

          {/* Service 3 */}
          <div className="relative group bg-gradient-to-br via-indigo-100 to-indigo-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
            <Link href={`${BASE_URL}/services/full-service-movers`} aria-label="Full-Service Movers">
            <div className="relative md:items-stretch z-10 mb-6">
              <div className="p-6 pb-8">
                <div className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-800 transition-colors">Full-Service Movers</div>
                <p className="text-md">Whether you’re relocating a single piece of furniture, a small apartment, or a large home, Shiftrix, one of the leading full-service moving companies,</p>
                <div className="flex item-end justify-end my-4">
                  <span className="gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-br from-indigo-500 to-indigo-500 rounded-full shadow group-hover:from-indigo-800 hover:to-indigo-500 transition-all">Discover more →</span>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 w-full -z-0 [--gradient-start:#c7d2fe] [--gradient-mid:#a5b4fc] [--gradient-end:#ddd6fe] transition-all duration-300">
              <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="w-full opacity-80 transition-all duration-300">
                <path fill="url(#waveGradient3)" d="M0,224L30,192C60,160,120,96,180,74.7C240,53,300,75,360,101.3C420,128,480,160,540,176C600,192,660,192,720,170.7C780,149,840,107,900,96C960,85,1020,107,1080,138.7C1140,171,1200,213,1260,213.3C1320,213,1380,171,1410,149.3L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
                ></path>
                <defs>
                  <linearGradient id="waveGradient3" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="var(--gradient-start)" />
                    <stop offset="50%" stopColor="var(--gradient-mid)" />
                    <stop offset="100%" stopColor="var(--gradient-end)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            </Link>
          </div>

          {/* Service 4 */}
          <div className="relative group bg-gradient-to-br via-indigo-100 to-indigo-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
            <Link href={`${BASE_URL}/services/furniture-movers`} aria-label="Furniture Movers">
            <div className="relative md:items-stretch z-10 mb-6">
              <div className="p-6 pb-8">
                <div className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-800 transition-colors">Furniture Movers</div>
                <p className="text-md">At Shiftrix, we provide professional furniture moving services for both residential and commercial.</p>
                <div className="flex item-end justify-end my-4">
                  <span className="gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-br from-indigo-500 to-indigo-500 rounded-full shadow group-hover:from-indigo-800 hover:to-indigo-500 transition-all">Discover more →</span>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 w-full -z-0 [--gradient-start:#c7d2fe] [--gradient-mid:#a5b4fc] [--gradient-end:#ddd6fe] transition-all duration-300">
              <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="w-full opacity-80 transition-all duration-300">
                <path fill="url(#waveGradient4)" d="M0,224L30,192C60,160,120,96,180,74.7C240,53,300,75,360,101.3C420,128,480,160,540,176C600,192,660,192,720,170.7C780,149,840,107,900,96C960,85,1020,107,1080,138.7C1140,171,1200,213,1260,213.3C1320,213,1380,171,1410,149.3L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
                ></path>
                <defs>
                  <linearGradient id="waveGradient4" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="var(--gradient-start)" />
                    <stop offset="50%" stopColor="var(--gradient-mid)" />
                    <stop offset="100%" stopColor="var(--gradient-end)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            </Link>
          </div>

          {/* Service 5 */}
          <div className="relative group bg-gradient-to-br via-indigo-100 to-indigo-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
            <Link href={`${BASE_URL}/services/local-movers`} aria-label="Local Movers">
            <div className="relative md:items-stretch z-10 mb-6">
              <div className="p-6 pb-8">
                <div className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-800 transition-colors">Local Movers</div>
                <p className="text-md">Shiftrix makes local moving easy and stress-free, whether it&apos;s moving to a new home across town or relocating the office.</p>
                <div className="flex item-end justify-end my-4">
                  <span className="gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-br from-indigo-500 to-indigo-500 rounded-full shadow group-hover:from-indigo-800 hover:to-indigo-500 transition-all">Discover more →</span>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 w-full -z-0 [--gradient-start:#c7d2fe] [--gradient-mid:#a5b4fc] [--gradient-end:#ddd6fe] transition-all duration-300">
              <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="w-full opacity-80 transition-all duration-300">
                <path fill="url(#waveGradient5)" d="M0,224L30,192C60,160,120,96,180,74.7C240,53,300,75,360,101.3C420,128,480,160,540,176C600,192,660,192,720,170.7C780,149,840,107,900,96C960,85,1020,107,1080,138.7C1140,171,1200,213,1260,213.3C1320,213,1380,171,1410,149.3L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
                ></path>
                <defs>
                  <linearGradient id="waveGradient5" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="var(--gradient-start)" />
                    <stop offset="50%" stopColor="var(--gradient-mid)" />
                    <stop offset="100%" stopColor="var(--gradient-end)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            </Link>
          </div>

          {/* Service 6 */}
          <div className="relative group bg-gradient-to-br via-indigo-100 to-indigo-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
            <Link href={`${BASE_URL}/services/long-distance-movers`} aria-label="Long Distance Movers">
            <div className="relative md:items-stretch z-10 mb-6">
              <div className="p-6 pb-8">
                <div className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-800 transition-colors">Long Distance Movers</div>
                <p className="text-md">At Shiftrix, you will find what you are looking for in long-distance movers, whether you are a professional, a family, or a business.</p>
                <div className="flex item-end justify-end my-4">
                  <span className="gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-br from-indigo-500 to-indigo-500 rounded-full shadow group-hover:from-indigo-800 hover:to-indigo-500 transition-all">Discover more →</span>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 w-full -z-0 [--gradient-start:#c7d2fe] [--gradient-mid:#a5b4fc] [--gradient-end:#ddd6fe] transition-all duration-300">
              <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="w-full opacity-80 transition-all duration-300">
                <path fill="url(#waveGradient6)" d="M0,224L30,192C60,160,120,96,180,74.7C240,53,300,75,360,101.3C420,128,480,160,540,176C600,192,660,192,720,170.7C780,149,840,107,900,96C960,85,1020,107,1080,138.7C1140,171,1200,213,1260,213.3C1320,213,1380,171,1410,149.3L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
                ></path>
                <defs>
                  <linearGradient id="waveGradient6" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="var(--gradient-start)" />
                    <stop offset="50%" stopColor="var(--gradient-mid)" />
                    <stop offset="100%" stopColor="var(--gradient-end)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            </Link>
          </div>

          {/* Service 7 */}
          <div className="relative group bg-gradient-to-br via-indigo-100 to-indigo-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
            <Link href={`${BASE_URL}/services/man-with-a-van`} aria-label="Man With A Van">
            <div className="relative md:items-stretch z-10 mb-6">
              <div className="p-6 pb-8">
                <div className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-800 transition-colors">Man With A Van</div>
                <p className="text-md">Shiftrix helps families, students, professionals, and businesses move. You can book our man with a van service for same-day or scheduled moves</p>
                <div className="flex item-end justify-end my-4">
                  <span className="gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-br from-indigo-500 to-indigo-500 rounded-full shadow group-hover:from-indigo-800 hover:to-indigo-500 transition-all">Discover more →</span>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 w-full -z-0 [--gradient-start:#c7d2fe] [--gradient-mid:#a5b4fc] [--gradient-end:#ddd6fe] transition-all duration-300">
              <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="w-full opacity-80 transition-all duration-300">
                <path fill="url(#waveGradient7)" d="M0,224L30,192C60,160,120,96,180,74.7C240,53,300,75,360,101.3C420,128,480,160,540,176C600,192,660,192,720,170.7C780,149,840,107,900,96C960,85,1020,107,1080,138.7C1140,171,1200,213,1260,213.3C1320,213,1380,171,1410,149.3L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
                ></path>
                <defs>
                  <linearGradient id="waveGradient7" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="var(--gradient-start)" />
                    <stop offset="50%" stopColor="var(--gradient-mid)" />
                    <stop offset="100%" stopColor="var(--gradient-end)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            </Link>
          </div>

          {/* Service 8 */}
          <div className="relative group bg-gradient-to-br via-indigo-100 to-indigo-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
            <Link href={`${BASE_URL}/services/piano-movers`} aria-label="Piano Movers">
            <div className="relative md:items-stretch z-10 mb-6">
              <div className="p-6 pb-8">
                <div className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-800 transition-colors">Piano Movers</div>
                <p className="text-md">We use specialised equipment and secure transport to safely and efficiently move pianos in condos, apartments, and homes in Calgary and nearby areas.</p>
                <div className="flex item-end justify-end my-4">
                  <span className="gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-br from-indigo-500 to-indigo-500 rounded-full shadow group-hover:from-indigo-800 hover:to-indigo-500 transition-all">Discover more →</span>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 w-full -z-0 [--gradient-start:#c7d2fe] [--gradient-mid:#a5b4fc] [--gradient-end:#ddd6fe] transition-all duration-300">
              <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="w-full opacity-80 transition-all duration-300">
                <path fill="url(#waveGradient8)" d="M0,224L30,192C60,160,120,96,180,74.7C240,53,300,75,360,101.3C420,128,480,160,540,176C600,192,660,192,720,170.7C780,149,840,107,900,96C960,85,1020,107,1080,138.7C1140,171,1200,213,1260,213.3C1320,213,1380,171,1410,149.3L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
                ></path>
                <defs>
                  <linearGradient id="waveGradient8" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="var(--gradient-start)" />
                    <stop offset="50%" stopColor="var(--gradient-mid)" />
                    <stop offset="100%" stopColor="var(--gradient-end)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            </Link>
          </div>

          {/* Service 9 */}
          <div className="relative group bg-gradient-to-br via-indigo-100 to-indigo-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
            <Link href={`${BASE_URL}/services/specialty-movers`} aria-label="Specialty Movers">
            <div className="relative md:items-stretch z-10 mb-6">
              <div className="p-6 pb-8">
                <div className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-800 transition-colors">Specialty Movers</div>
                <p className="text-md">With over a decade of experience handling delicate instruments, fine art, and high-value belongings, Shiftrix is one of Calgary&apos;s leading professional speciality movers.</p>
                <div className="flex item-end justify-end my-4">
                  <span className="gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-br from-indigo-500 to-indigo-500 rounded-full shadow group-hover:from-indigo-800 hover:to-indigo-500 transition-all">Discover more →</span>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 w-full -z-0 [--gradient-start:#c7d2fe] [--gradient-mid:#a5b4fc] [--gradient-end:#ddd6fe] transition-all duration-300">
              <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="w-full opacity-80 transition-all duration-300">
                <path fill="url(#waveGradient9)" d="M0,224L30,192C60,160,120,96,180,74.7C240,53,300,75,360,101.3C420,128,480,160,540,176C600,192,660,192,720,170.7C780,149,840,107,900,96C960,85,1020,107,1080,138.7C1140,171,1200,213,1260,213.3C1320,213,1380,171,1410,149.3L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
                ></path>
                <defs>
                  <linearGradient id="waveGradient9" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="var(--gradient-start)" />
                    <stop offset="50%" stopColor="var(--gradient-mid)" />
                    <stop offset="100%" stopColor="var(--gradient-end)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            </Link>
          </div>

        </div>
      </div>
    </section>

    <section id="contact" className="max-w-7xl mx-auto px-4 py-12">
        <div className="rounded-3xl bg-white drop-shadow-lg p-4 sm:p-6 md:p-6 lg:p-8">
          <div className="relative text-center pb-8">
              <div className="text-2xl text-gray-900 md:text-4xl font-bold">Pick the service you actually need | Book Our Team</div>
              <p className="mt-3">Let our experts take the stress out of your next move with a relocation service tailored to your timeline and budget.</p>
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
    </>
  );
}
