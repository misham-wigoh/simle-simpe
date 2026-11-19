"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X, Phone } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className="site-header sticky top-0 z-40 w-full bg-white border-b border-[#dfe5f4] shadow-xs">
      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/images/logo.svg"
              alt="Simple Smile Endodontics"
              width={220}
              height={50}
              className="h-10 sm:h-11 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <Link
              href="/"
              className="px-3 py-2 text-sm font-medium text-[#14306b] hover:text-[#060b1f] rounded-md transition-colors"
            >
              Home
            </Link>

            {/* About Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("about")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-[#14306b] hover:text-[#060b1f] rounded-md transition-colors focus:outline-none"
              >
                <span>About</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#14306b] transition-transform duration-200 group-hover:rotate-180" />
              </button>

              <div
                className={`absolute left-0 mt-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black/5 p-2 transition-all duration-200 ${
                  activeDropdown === "about"
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2 pointer-events-none"
                }`}
              >
                <Link
                  href="/about"
                  className="block px-3 py-2 text-sm font-bold text-[#14306b] hover:bg-[#eaf1ff] rounded-md transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/about/meet-the-doctor"
                  className="block px-3 py-2 text-sm text-[#14306b] hover:bg-[#eaf1ff] rounded-md transition-colors"
                >
                  Meet the Doctor
                </Link>
                <Link
                  href="/about/why-choose-us"
                  className="block px-3 py-2 text-sm text-[#14306b] hover:bg-[#eaf1ff] rounded-md transition-colors"
                >
                  Why Choose Us
                </Link>
                <Link
                  href="/about/tour-the-office"
                  className="block px-3 py-2 text-sm text-[#14306b] hover:bg-[#eaf1ff] rounded-md transition-colors"
                >
                  Tour the Office
                </Link>
                <Link
                  href="/about/testimonials"
                  className="block px-3 py-2 text-sm text-[#14306b] hover:bg-[#eaf1ff] rounded-md transition-colors"
                >
                  Testimonials
                </Link>
              </div>
            </div>

            {/* Services Mega Menu */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-[#14306b] hover:text-[#060b1f] rounded-md transition-colors focus:outline-none"
              >
                <span>Services</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#14306b] transition-transform duration-200 group-hover:rotate-180" />
              </button>

              <div
                className={`absolute -left-36 xl:-left-24 mt-1 w-[880px] rounded-lg shadow-xl bg-white ring-1 ring-black/5 p-6 transition-all duration-200 ${
                  activeDropdown === "services"
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="grid grid-cols-5 gap-6">
                  {/* Endodontics */}
                  <div>
                    <Link
                      href="/services/endodontics"
                      className="block font-heading text-base font-semibold text-[#14306b] hover:text-[#3b5bff] mb-2"
                    >
                      Endodontics
                    </Link>
                    <div className="space-y-1.5">
                      <Link
                        href="/services/endodontics/root-canal-therapy"
                        className="block text-xs text-[#5b6b8f] hover:text-[#14306b] hover:underline"
                      >
                        Root Canal Therapy
                      </Link>
                      <Link
                        href="/services/endodontics/endodontic-retreatment"
                        className="block text-xs text-[#5b6b8f] hover:text-[#14306b] hover:underline"
                      >
                        Endodontic Retreatment
                      </Link>
                    </div>
                  </div>

                  {/* Oral Surgery */}
                  <div>
                    <Link
                      href="/services/oral-surgery"
                      className="block font-heading text-base font-semibold text-[#14306b] hover:text-[#3b5bff] mb-2"
                    >
                      Oral Surgery
                    </Link>
                    <div className="space-y-1.5">
                      <Link
                        href="/services/oral-surgery/apicoectomy"
                        className="block text-xs text-[#5b6b8f] hover:text-[#14306b] hover:underline"
                      >
                        Apicoectomy
                      </Link>
                      <Link
                        href="/services/oral-surgery/cracked-teeth-treatment"
                        className="block text-xs text-[#5b6b8f] hover:text-[#14306b] hover:underline"
                      >
                        Cracked Teeth Treatment
                      </Link>
                    </div>
                  </div>

                  {/* General Dentistry */}
                  <div>
                    <Link
                      href="/services/general-dentistry"
                      className="block font-heading text-base font-semibold text-[#14306b] hover:text-[#3b5bff] mb-2"
                    >
                      General Dentistry
                    </Link>
                    <div className="space-y-1.5">
                      <Link
                        href="/services/general-dentistry/sedation-dentistry"
                        className="block text-xs text-[#5b6b8f] hover:text-[#14306b] hover:underline"
                      >
                        Sedation Dentistry
                      </Link>
                      <Link
                        href="/services/general-dentistry/emergency-dentist"
                        className="block text-xs text-[#5b6b8f] hover:text-[#14306b] hover:underline"
                      >
                        Emergency Dentist
                      </Link>
                      <Link
                        href="/services/general-dentistry/traumatic-injury-treatment"
                        className="block text-xs text-[#5b6b8f] hover:text-[#14306b] hover:underline"
                      >
                        Traumatic Injury Treatment
                      </Link>
                    </div>
                  </div>

                  {/* Restorative Dentistry */}
                  <div>
                    <Link
                      href="/services/restorative-dentistry"
                      className="block font-heading text-base font-semibold text-[#14306b] hover:text-[#3b5bff] mb-2"
                    >
                      Restorative Dentistry
                    </Link>
                    <div className="space-y-1.5">
                      <Link
                        href="/services/restorative-dentistry/dental-implants"
                        className="block text-xs text-[#5b6b8f] hover:text-[#14306b] hover:underline"
                      >
                        Dental Implants
                      </Link>
                      <Link
                        href="/services/restorative-dentistry/periodontics"
                        className="block text-xs text-[#5b6b8f] hover:text-[#14306b] hover:underline"
                      >
                        Periodontics
                      </Link>
                    </div>
                  </div>

                  {/* Dental Technology */}
                  <div>
                    <Link
                      href="/services/technology"
                      className="block font-heading text-base font-semibold text-[#14306b] hover:text-[#3b5bff] mb-2"
                    >
                      Dental Technology
                    </Link>
                    <div className="space-y-1.5">
                      <Link
                        href="/technology/dental-radiology"
                        className="block text-xs text-[#5b6b8f] hover:text-[#14306b] hover:underline"
                      >
                        Dental Radiology & Digital X-Rays
                      </Link>
                      <Link
                        href="/technology/cbct-imaging"
                        className="block text-xs text-[#5b6b8f] hover:text-[#14306b] hover:underline"
                      >
                        3D Cone Beam CT (CBCT)
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#dfe5f4] flex items-center justify-between">
                  <span className="text-xs text-[#5b6b8f]">
                    Over 30 years of specialized endodontic care in Stillwater, MN
                  </span>
                  <Link
                    href="/services"
                    className="inline-flex items-center px-4 py-1.5 text-xs font-mono font-medium tracking-wider uppercase bg-[#14306b] text-[#cfe0ff] rounded hover:bg-[#060b1f] transition-colors"
                  >
                    See all Services
                  </Link>
                </div>
              </div>
            </div>

            {/* Patient Info Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("patient-info")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-[#14306b] hover:text-[#060b1f] rounded-md transition-colors focus:outline-none"
              >
                <span>Patient Info</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#14306b] transition-transform duration-200 group-hover:rotate-180" />
              </button>

              <div
                className={`absolute left-0 mt-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black/5 p-2 transition-all duration-200 ${
                  activeDropdown === "patient-info"
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2 pointer-events-none"
                }`}
              >
                <Link
                  href="/patient-info"
                  className="block px-3 py-2 text-sm font-bold text-[#14306b] hover:bg-[#eaf1ff] rounded-md transition-colors"
                >
                  Patient Info
                </Link>
                <Link
                  href="/patient-info/new-patient-experience"
                  className="block px-3 py-2 text-sm text-[#14306b] hover:bg-[#eaf1ff] rounded-md transition-colors"
                >
                  New Patient Experience
                </Link>
              </div>
            </div>

            <Link
              href="/blog"
              className="px-3 py-2 text-sm font-medium text-[#14306b] hover:text-[#060b1f] rounded-md transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/contact-us"
              className="px-3 py-2 text-sm font-medium text-[#14306b] hover:text-[#060b1f] rounded-md transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="tel:(651)439-8085"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold tracking-wider uppercase bg-[#14306b] text-[#cfe0ff] rounded-md hover:bg-[#060b1f] transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>(651) 439-8085</span>
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#14306b] hover:text-[#060b1f] hover:bg-[#eaf1ff] rounded-full transition-colors"
              aria-label="Visit Simple Smile Endodontics on Facebook"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M22 12.0611C22 6.50451 17.5229 2 12 2C6.47715 2 2 6.50451 2 12.0611C2 17.0828 5.65684 21.2452 10.4375 22V14.9694H7.89844V12.0611H10.4375V9.84452C10.4375 7.32296 11.9305 5.93012 14.2146 5.93012C15.3088 5.93012 16.4531 6.12663 16.4531 6.12663V8.60261H15.1922C13.95 8.60261 13.5625 9.37822 13.5625 10.1739V12.0611H16.3359L15.8926 14.9694H13.5625V22C18.3432 21.2452 22 17.083 22 12.0611Z" />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-[#14306b] hover:bg-[#eaf1ff] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#dfe5f4] bg-white px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-[#14306b] hover:bg-[#eaf1ff] rounded-md"
          >
            Home
          </Link>

          {/* Mobile About Accordion */}
          <div>
            <button
              onClick={() => toggleDropdown("m-about")}
              className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-[#14306b] hover:bg-[#eaf1ff] rounded-md"
            >
              <span>About</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  activeDropdown === "m-about" ? "rotate-180" : ""
                }`}
              />
            </button>
            {activeDropdown === "m-about" && (
              <div className="pl-6 pr-3 py-1 space-y-1 bg-[#f6f8ff] rounded-md">
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1.5 text-sm font-semibold text-[#14306b]"
                >
                  About Overview
                </Link>
                <Link
                  href="/about/meet-the-doctor"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1.5 text-sm text-[#5b6b8f]"
                >
                  Meet the Doctor
                </Link>
                <Link
                  href="/about/why-choose-us"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1.5 text-sm text-[#5b6b8f]"
                >
                  Why Choose Us
                </Link>
                <Link
                  href="/about/tour-the-office"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1.5 text-sm text-[#5b6b8f]"
                >
                  Tour the Office
                </Link>
                <Link
                  href="/about/testimonials"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1.5 text-sm text-[#5b6b8f]"
                >
                  Testimonials
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Services Accordion */}
          <div>
            <button
              onClick={() => toggleDropdown("m-services")}
              className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-[#14306b] hover:bg-[#eaf1ff] rounded-md"
            >
              <span>Services</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  activeDropdown === "m-services" ? "rotate-180" : ""
                }`}
              />
            </button>
            {activeDropdown === "m-services" && (
              <div className="pl-6 pr-3 py-2 space-y-2 bg-[#f6f8ff] rounded-md">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#14306b]">
                    Endodontics
                  </div>
                  <Link
                    href="/services/endodontics/root-canal-therapy"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-sm text-[#5b6b8f]"
                  >
                    Root Canal Therapy
                  </Link>
                  <Link
                    href="/services/endodontics/endodontic-retreatment"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-sm text-[#5b6b8f]"
                  >
                    Endodontic Retreatment
                  </Link>
                </div>

                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#14306b]">
                    Oral Surgery
                  </div>
                  <Link
                    href="/services/oral-surgery/apicoectomy"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-sm text-[#5b6b8f]"
                  >
                    Apicoectomy
                  </Link>
                  <Link
                    href="/services/oral-surgery/cracked-teeth-treatment"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-sm text-[#5b6b8f]"
                  >
                    Cracked Teeth Treatment
                  </Link>
                </div>

                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#14306b]">
                    General & Restorative
                  </div>
                  <Link
                    href="/services/general-dentistry/emergency-dentist"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-sm text-[#5b6b8f]"
                  >
                    Emergency Dentist
                  </Link>
                  <Link
                    href="/services/restorative-dentistry/dental-implants"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-sm text-[#5b6b8f]"
                  >
                    Dental Implants
                  </Link>
                </div>

                <div className="pt-2">
                  <Link
                    href="/services"
                    onClick={() => setMobileMenuOpen(false)}
                    className="inline-block px-3 py-1.5 text-xs font-mono font-medium tracking-wider uppercase bg-[#14306b] text-[#cfe0ff] rounded"
                  >
                    All Services →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Patient Info Accordion */}
          <div>
            <button
              onClick={() => toggleDropdown("m-patient")}
              className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-[#14306b] hover:bg-[#eaf1ff] rounded-md"
            >
              <span>Patient Info</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  activeDropdown === "m-patient" ? "rotate-180" : ""
                }`}
              />
            </button>
            {activeDropdown === "m-patient" && (
              <div className="pl-6 pr-3 py-1 space-y-1 bg-[#f6f8ff] rounded-md">
                <Link
                  href="/patient-info"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1.5 text-sm font-semibold text-[#14306b]"
                >
                  Patient Info
                </Link>
                <Link
                  href="/patient-info/new-patient-experience"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1.5 text-sm text-[#5b6b8f]"
                >
                  New Patient Experience
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/blog"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-[#14306b] hover:bg-[#eaf1ff] rounded-md"
          >
            Blog
          </Link>
          <Link
            href="/contact-us"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-[#14306b] hover:bg-[#eaf1ff] rounded-md"
          >
            Contact
          </Link>

          <div className="pt-4 border-t border-[#dfe5f4] flex flex-col gap-2">
            <a
              href="tel:(651)439-8085"
              className="flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono font-semibold tracking-wider uppercase bg-[#14306b] text-[#cfe0ff] rounded-md"
            >
              <Phone className="w-4 h-4" />
              <span>(651) 439-8085</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
