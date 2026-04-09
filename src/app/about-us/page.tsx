import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import { APP_NAME, BASE_URL, contactInfo } from "@/lib/config";
import AboutSection from "@/components/AboutSection";
import CounterSection from "@/components/CounterSection";
import { TbTargetArrow } from "react-icons/tb";
import { GiSemiClosedEye } from "react-icons/gi";
import { GiCheckMark } from "react-icons/gi";

const { phone, address } = contactInfo;

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
        "logo": `${BASE_URL}/shiftrix-logo-black.png`,
        "foundingDate": "2020",
        "founder": {
          "@type": "Person",
          "name": `${APP_NAME} Team`,
        },
        "description": "Shiftrix, a professional moving company known for reliability and care, make every move as simple as possible through trust, planning, and client-first service.",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": `${phone}`,
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

      <section className="relative sm:pt-40 md:pt-40 lg:pt-40 pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <AboutSection
            image={`${BASE_URL}/shiftrix-mover-and-packer.jpg`}
            title="More Than Movers-Your Relocation Partners"
            content={`Shiftrix started in Calgary as a small, dedicated moving team that grew into a professional moving company known for reliability and care. We make every move as simple as possible through trust, planning, and client-first service. From the consultation to the final delivery, we prioritise clear communication, careful handling, and efficient execution. We do more than move your belongings—we help you start the next chapter of your life.`}
            listTitle=""
            listItems={[]}
            showLink={false}
            titleClassName="text-3xl text-gray-900 md:text-4xl font-bold mb-4"
          />
        </div>
      </section>

      <CounterSection
        counters={counters}
      />

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Images */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <Image src={`${BASE_URL}/about-image.jpg`} alt="Our Success Story & Growth" width={600} height={400} className="w-full h-full object-cover"/>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl md:text-4xl font-bold">Our Success Story & Growth</h2>
            <p>Our mission is rooted in providing seamless, stress-free moving experiences tailored to your unique needs, ensuring that every step of your relocation is handled with care, efficiency, and professionalism.</p>
            
            <div className="relative space-y-4">
              <div className="flex items-start flex-col sm:flex-row gap-4 relative transform transition-all px-3 py-3 bg-white rounded-xl shadow hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="icon-box flex sm:justify-start p-3 rounded-full bg-gradient-to-br from-indigo-800 to-indigo-500"><TbTargetArrow className="text-white text-5xl"/></div>
                <div className="mission-vision-content">
                  <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">We are committed to providing exceptional moving services you can trust. Whether your move is residential or commercial, large or small, we maintain the same high standards. We ensure Your belongings are protected through expert packing, secure transport, and careful handling.</p>
                </div>
              </div>

              <div className="flex items-start sm:flex-row flex-col gap-4 relative transform transition-all px-3 py-3 bg-white rounded-xl shadow hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="icon-box flex p-3 rounded-full bg-gradient-to-br from-indigo-800 to-indigo-500"><GiSemiClosedEye className="text-white text-5xl"/></div>
                <div className="mission-vision-content">
                  <h3 className="text-xl font-semibold text-gray-900">Our Vision</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Our vision is simple. Moving should be easy, affordable, and stress-free. Whether you are moving your home, your business, or going long-distance or to a neighbourhood, you should always feel confident and supported.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">

          <div className="space-y-3">
            <h2 className="text-2xl md:text-4xl font-bold">Our Core Values</h2>
            <p>When you move with Shiftrix, you’re working with a team that understands how important this moment is for you. We treat your move with the care it deserves.</p>
            
            <div className="relative">
              <ul className="grid sm:grid-cols-1 space-y-3">
                  <li className="flex gap-2 px-3 py-3 bg-white rounded-xl shadow hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                    <GiCheckMark className="bg-indigo-600 text-white w-5 h-5 min-w-5 min-h-5 p-1 rounded-sm"/>
                    <div>
                      <h5 className="font-semibold">Integrity Above All</h5>
                      <p>No hidden fees. No surprises. No excuses. We offer fair pricing and clear communication.</p>
                    </div>
                  </li>
                  <li className="flex gap-2 px-3 py-3 bg-white rounded-xl shadow hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                    <GiCheckMark className="bg-indigo-600 text-white w-5 h-5 min-w-5 min-h-5 p-1 rounded-sm" />
                    <div>
                      <h5 className="font-semibold">Care in Every Detail</h5>
                      <p>We treat every item with the respect and attention it deserves.</p>
                    </div>
                  </li>
                  <li className="flex gap-2 px-3 py-3 bg-white rounded-xl shadow hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                    <GiCheckMark className="bg-indigo-600 text-white w-5 h-5 min-w-5 min-h-5 p-1 rounded-sm"/>
                    <div>
                      <h5 className="font-semibold">Reliability You Can Trust</h5>
                      <p>When we give you an estimate, we stick to it. For us, reliability is a promise we keep with every move, every day.</p>
                    </div>
                  </li>
                  <li className="flex gap-2 px-3 py-3 bg-white rounded-xl shadow hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                    <GiCheckMark className="bg-indigo-600 text-white w-5 h-5 min-w-5 min-h-5 p-1 rounded-sm"/>
                    <div>
                      <h5 className="font-semibold">Clients-First Mindset</h5>
                      <p>Our team is well-trained and truly passionate. They are friendly, professional, and treated with respect.</p>
                    </div>
                  </li>
                  <li className="flex gap-2 px-3 py-3 bg-white rounded-xl shadow hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                    <GiCheckMark className="bg-indigo-600 text-white w-5 h-5 min-w-5 min-h-5 p-1 rounded-sm"/>
                    <div>
                      <h5 className="font-semibold">Continuous Innovation</h5>
                      <p>We invest in technology, training, and better processes. Real-time tracking, digital inventory, and flexible scheduling are standard for us.</p>
                    </div>
                  </li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <Image src={`${BASE_URL}/real-stories-real-movers.jpg`} alt="Real Stories, Real Moves" width={600} height={400} className="w-full h-full object-cover"/>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}