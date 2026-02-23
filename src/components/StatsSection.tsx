import React from "react";

const StatsSection = () => {
  const stats = [
    { value: "450+", label: "Satisfied Clients" },
    { value: "20+", label: "Movers And Packers" },
    { value: "500+", label: "Completed Projects" },
    { value: "10+", label: "Trucks and Vans" },
  ];

  return (
    <section className="bg-indigo-100 py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((item, index) => (
          <div key={index} className="rounded-2xl bg-white p-6 shadow-md transition transform hover:-translate-y-1">
            <p className="text-3xl font-extrabold text-gray-900">{item.value}</p>
            <p className="text-md mt-1">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
