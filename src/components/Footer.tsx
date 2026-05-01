import Link from "next/link";
import Image from "next/image";
import { APP_NAME, BASE_URL, contactInfo, socialLinks } from "@/lib/config";
import ContactActions from "./ContactActions";

export default function Footer() {
  const { phone, email, address, logo } = contactInfo;

  // Format phone for tel: link (remove spaces, parentheses, etc.)
  const phoneHref = `tel:${phone.replace(/[^+\d]/g, "")}`;
  const emailHref = `mailto:${email}`;

  // Common data
  const companyInfo = {
    description: `${APP_NAME} is a trusted moving company in Calgary, delivering smooth, hassle-free residential and commercial relocations backed by over five years of experience - with precision, professionalism, and a commitment.`,
  };

  const usefulLinks = [
    { name: "Home", href: `${BASE_URL}` },
    { name: "About", href: `${BASE_URL}/about-us` },
    { name: "Services", href: `${BASE_URL}/services` },
    { name: "Blog", href: `${BASE_URL}/blog` },
    { name: "Contact", href: `${BASE_URL}/contact-us` },
  ];

  const servicesLinks = [
    { name: "Commercial Movers", href: `${BASE_URL}/services/commercial-movers` },
    { name: "Residential Movers", href: `${BASE_URL}/services/residential-movers` },
    { name: "Furniture Movers", href: `${BASE_URL}/services/furniture-movers` },
    { name: "Local Movers", href: `${BASE_URL}/services/local-movers` },
    { name: "Piano Movers", href: `${BASE_URL}/services/piano-movers` },
  ];



  return (
    <footer className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-10">
          <div>
            <div className="space-y-3">
              <Link href={`${BASE_URL}`} className="inline-block" aria-label="Home">
                <Image src={logo} width={150} height={45} alt="shiftrix moved with precision" className="object-contain"/>
              </Link>
              <p>{companyInfo.description}</p>
            </div>
          </div>

          {/* Useful Links */}
          <div className="space-y-3">
            <div className="text-lg font-semibold text-gray-800">Useful Links</div>
            <ul className="space-y-1">
              {usefulLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} aria-label={link.name} className="hover:text-indigo-800 transition">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <div className="text-lg font-semibold text-gray-800">Services</div>
            <ul className="space-y-1">
              {servicesLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} aria-label={link.name} className="hover:text-indigo-800 transition">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <div className="text-lg font-semibold text-gray-800">Get in Touch</div>
            <ul className="space-y-1">
              <li>
                <strong className="block text-gray-800">Office Address:</strong>
                <p>{address}</p>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="#615fff">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <a href={emailHref} aria-label="Email Address" className="hover:text-indigo-800 transition">{email}</a>
              </li>
              <li className="flex items-center">
                <svg className="h-6 w-6 mr-2 text-indigo-600" viewBox="-2.4 -2.4 28.80 28.80" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z" fill="#615fff"></path> </g></svg>
                <a href={phoneHref} aria-label="Phone Number" className="hover:text-indigo-800 transition">{phone}</a>
              </li>
            </ul>
            <div className="flex items-center space-x-4 mt-5">
              {socialLinks.map((item) => (
                <a
                  key={item.link}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.ariaLabel}
                  className="text-gray-900 hover:text-indigo-800"
                  dangerouslySetInnerHTML={{ __html: item.icon }}
                />
              ))}
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-300 py-4">
          <div className="relative">
            <p>© 2025 {APP_NAME} Moving Services. All rights reserved. | Calgary, AB</p>
          </div>
        </div>
      </div>

      <ContactActions />
    </footer>
  );
}