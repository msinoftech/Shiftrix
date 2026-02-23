import Link from "next/link";
import Image from "next/image";
import { BASE_URL, contactInfo, socialLinks } from "@/lib/config";
import ContactActions from "./ContactActions";

export default function Footer() {
  const { phone, email, address, logo } = contactInfo;

  // Format phone for tel: link (remove spaces, parentheses, etc.)
  const phoneHref = `tel:${phone.replace(/[^+\d]/g, "")}`;
  const emailHref = `mailto:${email}`;

  // Common data
  const companyInfo = {
    description: "Shiftirix is one of the moving companies in Calgary, helping to relocate hassle-free for over five years. Your move, our commitment to excellence.",
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
        {/* Footer Top */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-10">
          <div>
            <div>
              <div className="mb-4">
                <Link href={`${BASE_URL}`} className="inline-block" aria-label="Home">
                  <Image src={logo} width={150} height={50} alt="shiftrix moved with precision" className="object-contain"/>
                </Link>
              </div>
              <p className="text-md mb-6">{companyInfo.description}</p>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <div>
              <div className="text-lg font-semibold mb-4 text-gray-800">Useful Links</div>
              <ul className="space-y-2">
                {usefulLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} aria-label={link.name} className="hover:text-indigo-800 transition">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Services */}
          <div>
            <div>
              <div className="text-lg font-semibold mb-4 text-gray-800">Services</div>
              <ul className="space-y-2">
                {servicesLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} aria-label={link.name} className="hover:text-indigo-800 transition">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <div>
              <div className="text-lg font-semibold mb-4 text-gray-800">Get in Touch</div>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li>
                  <p className="font-semibold text-gray-700">Office Address:</p>
                  <p className="mt-1">{address}</p>
                </li>
                <li className="flex items-center">
                  {/* Phone Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.5 4.5a1 1 0 01-.5 1.2l-2.3 1.1a11 11 0 005.5 5.5l1.1-2.3a1 1 0 011.2-.5l4.5 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.7 21 3 14.3 3 6V5z"/>
                  </svg>
                  <a href={phoneHref} aria-label="Phone Number" className="hover:text-indigo-800 transition">{phone}</a>
                </li>
                <li className="flex items-center">
                  {/* Email Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <a href={emailHref} aria-label="Email Address" className="hover:text-indigo-800 transition">{email}</a>
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
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-300 py-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row md:justify-between items-center gap-3">
            <p className="text-sm">
              2025 © all reserved to{" "}
              <a
                className="text-indigo-600 hover:text-indigo-800 transition"
                href="https://miraculoussoft.com"
                aria-label="Miraculoussoft Solution"
                target="_blank"
                rel="noopener noreferrer"
              >
                Miraculoussoft Solution
              </a>.
            </p>
          </div>
        </div>
      </div>

      <ContactActions />
    </footer>
  );
}
