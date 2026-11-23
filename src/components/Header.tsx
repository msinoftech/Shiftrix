"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { contactInfo, socialLinks } from "@/lib/config";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Topbar from "@/components/TopBar";

const SERVICE_LINKS = [
  { name: "Commercial Movers", href: "/services/commercial-movers" },
  { name: "Residential Movers", href: "/services/residential-movers" },
  { name: "Full-Service Movers", href: "/services/full-service-movers" },
  { name: "Furniture Movers", href: "/services/furniture-movers" },
  { name: "Local Movers", href: "/services/local-movers" },
  { name: "Long Distance Movers", href: "/services/long-distance-movers" },
  { name: "Man With A Van", href: "/services/man-with-a-van" },
  { name: "Piano Movers", href: "/services/piano-movers" },
  { name: "Specialty Movers", href: "/services/specialty-movers" },
];

const NAV = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about-us" },
  { name: "Services", href: "/services", children: SERVICE_LINKS },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact-us" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesHovering, setServicesHovering] = useState(false);
  const [servicesMenuClosed, setServicesMenuClosed] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const { logo, phone } = contactInfo;
  const phoneHref = `tel:${phone.replace(/[^+\d]/g, "")}`;
  const pathname = usePathname();
  const isHome = pathname === "/";
  const servicesMenuOpen = servicesHovering && !servicesMenuClosed;
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  const closeServicesMenu = () => {
    setServicesMenuClosed(true);
    if (typeof document !== "undefined" && document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  // Detect scroll to toggle sticky header
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  // Close menus on route change
  useEffect(() => {
    setOpen(false);
    setMobileServicesOpen(false);
    setServicesMenuClosed(true);
    setServicesHovering(false);
  }, [pathname]);

  return (
    <header ref={headerRef} className={`w-full absolute top-0 left-0 z-[1000] ${isHome ? "" : "border-b border-gray-900/5"}`}>
      <Topbar />

      {/* Sticky Header */}
      <div ref={stickyRef} className={`transition-all duration-300 ${scrolled ? "fixed top-0 left-0 w-full bg-white shadow-md py-3 z-[1000]" : "relative bg-transparent py-2"}`}>
        <div className="container mx-auto px-4">
          <div className="relative flex items-center justify-between">
            {/* Logo */}
            <Link href="/" aria-label="Home" className="flex">
              <div className="relative">
                <Image src={logo} alt="shiftrix moved with precision" width={230} height={60} className="object-contain" />
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8 mx-auto" aria-label="Primary">
              {NAV.map((item) => {
                const active = isActive(item.href);
                const hasChildren = Boolean(item.children?.length);

                if (!hasChildren) {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-label={item.name}
                      aria-current={active ? "page" : undefined}
                      className={`relative group font-medium hover:text-indigo-800 ${active ? "text-indigo-800" : "text-gray-900"}`}
                    >
                      {item.name}
                      <span className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-br from-indigo-800 to-indigo-500 transition-all duration-300 ${active ? "w-full" : "w-0 group-hover:w-full"}`} />
                    </Link>
                  );
                }

                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => {
                      setServicesHovering(true);
                      setServicesMenuClosed(false);
                    }}
                    onMouseLeave={() => {
                      setServicesHovering(false);
                      setServicesMenuClosed(false);
                    }}
                  >
                    <Link
                      href={item.href}
                      aria-label={item.name}
                      aria-current={active ? "page" : undefined}
                      aria-haspopup="menu"
                      aria-expanded={servicesMenuOpen}
                      onClick={closeServicesMenu}
                      className={`relative font-medium hover:text-indigo-800 inline-flex items-center gap-1.5 py-2 ${
                        active || servicesMenuOpen ? "text-indigo-800" : "text-gray-900"
                      }`}
                    >
                      {item.name}
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesMenuOpen ? "rotate-180" : ""}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span
                        className={`absolute left-0 bottom-1 h-[2px] bg-gradient-to-br from-indigo-800 to-indigo-500 transition-all duration-300 ${
                          active || servicesMenuOpen ? "w-full" : "w-0"
                        }`}
                      />
                    </Link>

                    <div
                      role="menu"
                      aria-label="Services submenu"
                      className={`absolute left-1/2 -translate-x-1/2 top-full z-[1100] min-w-[240px] transition-opacity duration-150 ease-out ${
                        servicesMenuOpen
                          ? "opacity-100 visible pointer-events-auto"
                          : "opacity-0 invisible pointer-events-none"
                      }`}
                    >
                      <div className="rounded-lg border border-gray-200 bg-white shadow-lg overflow-hidden">
                        {item.children!.map((child) => {
                          const childActive = pathname === child.href;
                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              role="menuitem"
                              aria-current={childActive ? "page" : undefined}
                              onClick={closeServicesMenu}
                              className={`block px-4 py-2.5 text-sm transition-colors ${
                                childActive
                                  ? "text-indigo-800 bg-indigo-50 font-medium"
                                  : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-800"
                              }`}
                            >
                              {child.name}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                href={phoneHref}
                aria-label="Schedule a Call"
                className="group/btn hidden md:inline-flex items-center gap-2.5 bg-gradient-to-br from-indigo-800 to-indigo-500 text-white px-6 py-2.5 rounded-xl font-medium text-sm shadow-lg shadow-indigo-500/25 hover:shadow-indigo-600/35 hover:-translate-y-0.5 transition-all duration-300"
              >
                Quick a Call
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>
              </Link>


              {/* Mobile Toggle */}
              <button onClick={() => setOpen(!open)} className="lg:hidden inline-flex items-center cursor-pointer justify-center rounded-md text-indigo-800" aria-label="Toggle menu" aria-expanded={open}>
                {open ? (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                    <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                    <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div className={`lg:hidden fixed inset-0 z-[999999] ${open ? "pointer-events-auto" : "pointer-events-none"}`}>
        <div onClick={() => setOpen(false)} aria-label="Close menu overlay" className={`absolute inset-0 bg-black/50 backdrop-blur-[7px] transition-opacity duration-300 cursor-pointer ${open ? "opacity-100" : "opacity-0"}`} />

        <div className={`absolute right-0 top-0 h-screen w-[90%] max-w-sm bg-[#f5f5f7] border-l border-gray-200 shadow-xl transition-transform duration-300 ease-out flex flex-col ${open ? "translate-x-0" : "translate-x-full"}`}>
          <div className="px-3 py-3 border-b border-gray-200 flex items-center justify-between">
            <Link href="/" aria-label="Home" className="flex" onClick={() => setOpen(false)}>
              <Image src={logo} alt="shiftrix moved with precision" width={140} height={42} className="object-contain"/>
            </Link>
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-gray-600 cursor-pointer">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <div className="px-3 py-3 flex-1 overflow-y-auto">
            <nav className="flex flex-col" aria-label="Mobile">
              {NAV.map((item) => {
                const active = isActive(item.href);
                const hasChildren = Boolean(item.children?.length);

                if (!hasChildren) {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-label={item.name}
                      aria-current={active ? "page" : undefined}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between py-4 border-b border-gray-200 ${active ? "text-indigo-600" : "text-slate-900"}`}
                    >
                      <span className={`pl-1 ${active ? "border-l-[3px] border-indigo-500" : ""}`}>{item.name}</span>
                      <svg className={`w-5 h-5 ${active ? "text-indigo-500" : "text-gray-400"}`} viewBox="0 0 24 24" fill="none">
                        <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  );
                }

                return (
                  <div key={item.href} className="border-b border-gray-200">
                    <div className={`flex items-center justify-between ${active ? "text-indigo-600" : "text-slate-900"}`}>
                      <Link
                        href={item.href}
                        aria-label={item.name}
                        aria-current={active ? "page" : undefined}
                        onClick={() => setOpen(false)}
                        className={`py-4 pl-1 ${active ? "border-l-[3px] border-indigo-500" : ""}`}
                      >
                        {item.name}
                      </Link>
                      <button
                        type="button"
                        aria-label="Toggle services submenu"
                        aria-expanded={mobileServicesOpen}
                        className="text-gray-500 cursor-pointer"
                        onClick={() => setMobileServicesOpen((prev) => !prev)}
                      >
                        <svg
                          className={`w-5 h-5 transition-transform duration-200 ${mobileServicesOpen ? "rotate-90" : ""} ${active ? "text-indigo-500" : "text-gray-400"}`}
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-out ${
                        mobileServicesOpen ? "max-h-[480px] opacity-100 pb-2" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="ml-3 flex flex-col">
                        {/* <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className={`py-2.5 text-sm ${pathname === item.href ? "text-indigo-600 font-medium" : "text-slate-700"}`}
                        >
                          All Services
                        </Link> */}
                        {item.children!.map((child) => {
                          const childActive = pathname === child.href;
                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              aria-current={childActive ? "page" : undefined}
                              onClick={() => setOpen(false)}
                              className={`py-2 text-sm ${childActive ? "text-indigo-600 font-medium" : "text-slate-700"}`}
                            >
                              {child.name}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </nav>

            <div className="pt-6">
              <p className="text-xs tracking-wider font-semibold text-gray-500 mb-4">FOLLOW US</p>
              <div className="flex items-center gap-4 text-slate-600">
                {socialLinks.map((item, i) => (
                  <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" aria-label={item.ariaLabel} className="text-slate-600" dangerouslySetInnerHTML={{ __html: item.icon }}/>
                ))}
              </div>
            </div>
          </div>

          <div className="px-5 py-4 border-t border-gray-200 bg-[#f5f5f7]">
            <div className="flex flex-col gap-3">
              <Link href={phoneHref} role="button" aria-label="Schedule a Call" onClick={() => setOpen(false)} className="inline-flex items-center justify-center gap-2 bg-gradient-to-br from-indigo-800 to-indigo-500 text-white px-6 py-3 rounded-md font-medium text-center shadow-lg hover:bg-indigo-800 transition-transform transform">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>
                Quick a Call
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
