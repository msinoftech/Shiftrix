"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { contactInfo, socialLinks } from "@/lib/config";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Topbar from "@/components/TopBar";

const NAV = [
  { name: "Home", href: "/" },
  { name: "About", href: `/about-us` },
  { name: "Services", href: `/services` },
  { name: "Blog", href: `/blog` },
  { name: "Contact", href: `/contact-us` },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const { logo, phone } = contactInfo;
  const phoneHref = `tel:${phone.replace(/[^+\d]/g, "")}`;
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isMobileActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Detect scroll to toggle sticky header
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  // Dynamically calculate total header height (including sticky section)
  useEffect(() => {
    const calcHeight = () => {
      const headerH = headerRef.current?.offsetHeight || 0;
      const stickyH = stickyRef.current?.offsetHeight || 0;
      setHeaderHeight(scrolled ? stickyH : headerH);
    };

    calcHeight();
    const resizeObserver = new ResizeObserver(calcHeight);
    if (headerRef.current) resizeObserver.observe(headerRef.current);
    if (stickyRef.current) resizeObserver.observe(stickyRef.current);

    window.addEventListener("resize", calcHeight);
    window.addEventListener("scroll", calcHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", calcHeight);
      window.removeEventListener("scroll", calcHeight);
    };
  }, [scrolled]);

  return (
    <header ref={headerRef} className={`w-full absolute top-0 left-0 z-[1000] ${ isHome ? "" : "border-b border-gray-900/5" }`}>
      <Topbar />

      {/* Sticky Header */}
      <div ref={stickyRef} className={`transition-all duration-300 ${ scrolled ? "fixed top-0 left-0 w-full bg-white shadow-md py-3 z-[1000]" : "relative bg-transparent py-2"}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative flex items-center justify-between">
            {/* Logo */}
            <Link href="/" aria-label="Home" className="flex">
              <div className="relative">
                <Image src={logo} alt="shiftrix moved with precision" width={150} height={45} className="object-contain"/>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8 mx-auto">
              {NAV.map((item) => (
                <Link key={item.href} href={item.href} aria-label={item.name} className="relative group font-medium text-gray-900 hover:text-indigo-800">
                  {item.name}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-br from-indigo-800 to-indigo-500 transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link href={phoneHref} role="button" aria-label="Schedule a Call" className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-md bg-gradient-to-br from-indigo-800 to-indigo-500 text-white hover-shadow-md">Schedule a Call
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="rgba(255,255,255, 1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>

              {/* Mobile Toggle */}
              <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center cursor-pointer justify-center rounded-md text-indigo-800" aria-label="Toggle menu">
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
      <div className={`md:hidden fixed inset-0 z-[999999] ${ open ? "pointer-events-auto" : "pointer-events-none"}`}>
        <div onClick={() => setOpen(false)} aria-label="Close menu overlay" className={`absolute inset-0 bg-black/50 backdrop-blur-[7px] transition-opacity duration-300 cursor-pointer ${ open ? "opacity-100" : "opacity-0"}`} />

        <div className={`absolute right-0 top-0 h-screen w-[90%] max-w-sm bg-[#f5f5f7] border-l border-gray-200 shadow-xl transition-transform duration-300 ease-out flex flex-col ${ open ? "translate-x-0" : "translate-x-full"}`}>
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
            <nav className="flex flex-col">
              {NAV.map((item) => (
                <Link key={item.href} href={item.href} aria-label={item.name} onClick={() => setOpen(false)} className={`flex items-center justify-between py-4 border-b border-gray-200 ${isMobileActive(item.href) ? "text-indigo-600" : "text-slate-900"}`}>
                  <span className={`pl-1 ${isMobileActive(item.href) ? "border-l-[3px] border-indigo-500" : ""}`}>{item.name}</span>
                  <svg className={`w-5 h-5 ${isMobileActive(item.href) ? "text-indigo-500" : "text-gray-400"}`} viewBox="0 0 24 24" fill="none">
                    <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              ))}
            </nav>

            <div className=" pt-6">
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
              <Link href={phoneHref} role="button" aria-label="Schedule a Call" onClick={() => setOpen(false)} className="inline-flex items-center justify-center gap-2 bg-gradient-to-br from-indigo-800 to-indigo-500 text-white px-6 py-3 rounded-md font-medium text-center shadow-lg hover:bg-indigo-800 transition-transform transform">Schedule a Call</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}