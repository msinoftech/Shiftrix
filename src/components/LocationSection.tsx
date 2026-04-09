"use client";
import React from "react";
interface LocationSectionProps {
  mapUrl: string;
}

const LocationSection: React.FC<LocationSectionProps> = ({ mapUrl }) => {
  return (
    <section className="relative">
      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
          <div>
            <div className="relative overflow-hidden">
              <iframe src={mapUrl} width="100%" height="460" style={{ border: 0 }} allowFullScreen loading="lazy" className="rounded-md" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;