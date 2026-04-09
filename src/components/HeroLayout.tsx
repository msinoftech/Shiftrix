import Link from "next/link";
import ContactForm from "./ContactForm";
import { BASE_URL  } from "@/lib/config";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-indigo-50 sm:pt-40 md:pt-40 lg:pt-40 pt-40 pb-20">
      <div className="absolute -top-32 -left-32 h-96 w-96 bg-indigo-500/30 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 bg-indigo-500/30 rounded-full blur-3xl animate-float-reverse"></div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 items-center gap-12">

          {/* Left Column */}
          <div className="w-full space-y-4">
            <p className="text-sm font-semibold text-indigo-800 uppercase tracking-widest">Ready for Your Plan Next Move?</p>

            <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold">
              Fast and Efficient Moving<span className="bg-clip-text text-transparent bg-gradient-to-br from-indigo-800 to-indigo-500">{" "}Services in Calgary</span>
            </h1>

            <p>Among Calgary’s top moving companies, Shiftrix ensures every relocation is stress-free, smooth, safe, and on time.</p>

            <div className="flex flex-wrap gap-4">
              <Link href={`${BASE_URL}/contact-us`} aria-label="Contact Us" role="button" className="inline-flex items-center gap-2 bg-gradient-to-br from-indigo-800 to-indigo-500 text-white px-6 py-3 rounded-md font-medium shadow-lg hover:bg-indigo-800 transition-transform transform">Contact Us</Link>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 text-gray-700">
              {["Professional", "Affordable", "Trusted"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="h-2 w-2 bg-indigo-500 rounded-full"></span>
                    {item}
                  </div>
                )
              )}
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-full">
              <div className="absolute -top-6 -right-6 h-24 w-24 bg-indigo-00/10 rounded-full blur-3xl animate-float"></div>
              <div className="absolute -bottom-6 -left-6 h-24 w-24 bg-indigo-500/20 rounded-full blur-3xl animate-float"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2">
                <div className="p-8">
                  <div className="text-xl text-gray-900 font-semibold">Book Here</div>
                  <p>Top-Rated Moving Services Near You</p>
                  <div className="mt-6"><ContactForm /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}