import React from "react";
import { FaFileInvoiceDollar, FaHandsHelping, FaBoxes, FaTruck } from "react-icons/fa";

interface ProcessStep {
  number: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Get Your Quote Free",
    desc: "Request a transparent, no-obligation estimate for your move, on your schedule and within a reasonable budget.",
    icon: <FaFileInvoiceDollar className="text-4xl text-indigo-700" />,
  },
  {
    number: "02",
    title: "Pack and Prepare",
    desc: "Our team arrives with quality supplies to pack and secure your belongings, ensuring everything stays safe.",
    icon: <FaHandsHelping className="text-4xl text-indigo-700" />,
  },
  {
    number: "03",
    title: "Load and Transport",
    desc: "We carefully load your items and transport them efficiently to your new destination.",
    icon: <FaBoxes className="text-4xl text-indigo-700" />,
  },
  {
    number: "04",
    title: "Unload and Reassemble",
    desc: "We place furniture and boxes where you prefer and help you settle into your new home.",
    icon: <FaTruck className="text-4xl text-indigo-700" />,
  },
];

const ProcessSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-indigo-800 to-indigo-500 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative px-4">
        <h3 className="text-2xl md:text-4xl font-bold text-center text-white">Our Moving Solutions Tailored to Your Needs</h3>

        {/* Step Container */}
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-12 mt-12 md:gap-6 z-10">
          <div className="hidden md:block absolute top-15 left-0 right-0 -translate-y-1/2 w-full pointer-events-none z-0 px-8">
            <svg viewBox="0 0 1200 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto opacity-60" preserveAspectRatio="none">
              <path 
                d="M150 60 C225 25, 300 25, 375 60 C450 95, 525 95, 600 60 C675 25, 750 25, 825 60 C900 95, 975 95, 1050 60" 
                stroke="url(#gradient)" 
                strokeWidth="3" 
                strokeDasharray="8 8" 
                fill="none"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#a5b4fc" />
                  <stop offset="1" stopColor="#c7d2fe" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          {processSteps.map((step, index) => (
            <div key={step.number} className="relative text-center flex-1">
              <div className="relative flex items-center justify-center mx-auto w-32 h-32 rounded-full bg-white p-2 shadow-md hover:shadow-2xl transition duration-300">
                <div className="relative flex items-center justify-center mx-auto w-26 h-26 rounded-full p-2 transition duration-300 border-2 border-dotted border-indigo-300 ">{step.icon}
                <div className="absolute -top-2 -right-2 bg-indigo-900 text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shadow-md">{step.number}</div></div>
              </div>
              <h3 className="mt-6 text-lg md:text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-gray-300 text-sm md:text-base leading-relaxed max-w-xs mx-auto">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;