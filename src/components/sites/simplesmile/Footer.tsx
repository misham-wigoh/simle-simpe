import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-white border-t border-[#dfe5f4] text-[#14306b]">
      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-10 lg:gap-8">
          {/* Col 1 & 2: Clinic Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.svg"
                alt="Simple Smile Endodontics"
                width={220}
                height={55}
                className="h-11 w-auto object-contain"
              />
            </Link>

            <div className="space-y-4 text-xs sm:text-sm text-[#14306b]/85">
              <div>
                <span className="font-bold text-[#14306b] block mb-1">Address:</span>
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  13941 60th St N,
                  <br />
                  Stillwater, MN 55082
                </a>
              </div>

              <div>
                <span className="font-bold text-[#14306b] block mb-1">Phone:</span>
                <a href="tel:(651)439-8085" className="hover:underline text-[#3b5bff] font-medium">
                  (651) 439-8085
                </a>
              </div>

              <div>
                <span className="font-bold text-[#14306b] block mb-1">Office Hours:</span>
                <p>
                  Mon - Thurs: 8AM-5PM
                  <br />
                  Fri: 8AM-1PM
                  <br />
                  Sat - Sun: Closed
                </p>
              </div>

              <div>
                <span className="font-bold text-[#14306b] block mb-1">Email:</span>
                <a
                  href="mailto:info@simplesmileendo.com"
                  className="hover:underline text-[#3b5bff] font-medium"
                >
                  info@simplesmileendo.com
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Main Nav Links */}
          <div className="space-y-3">
            <span className="font-bold text-xs font-mono uppercase tracking-wider text-[#14306b] block mb-4">
              Navigation
            </span>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/" className="hover:text-[#3b5bff] font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#3b5bff] font-medium">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#3b5bff] font-medium">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/patient-info" className="hover:text-[#3b5bff] font-medium">
                  Patient Info
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#3b5bff] font-medium">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-[#3b5bff] font-medium">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Endodontics & Oral Surgery */}
          <div className="space-y-6">
            <div className="space-y-3">
              <Link
                href="/services/endodontics"
                className="font-bold text-xs font-mono uppercase tracking-wider text-[#14306b] block mb-2 hover:text-[#3b5bff]"
              >
                Endodontics
              </Link>
              <ul className="space-y-2 text-xs sm:text-sm text-[#5b6b8f]">
                <li>
                  <Link href="/services/endodontics/root-canal-therapy" className="hover:text-[#14306b]">
                    Root Canal Therapy
                  </Link>
                </li>
                <li>
                  <Link href="/services/endodontics/endodontic-retreatment" className="hover:text-[#14306b]">
                    Endodontic Retreatment
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <Link
                href="/services/oral-surgery"
                className="font-bold text-xs font-mono uppercase tracking-wider text-[#14306b] block mb-2 hover:text-[#3b5bff]"
              >
                Oral Surgery
              </Link>
              <ul className="space-y-2 text-xs sm:text-sm text-[#5b6b8f]">
                <li>
                  <Link href="/services/oral-surgery/apicoectomy" className="hover:text-[#14306b]">
                    Apicoectomy
                  </Link>
                </li>
                <li>
                  <Link href="/services/oral-surgery/cracked-teeth-treatment" className="hover:text-[#14306b]">
                    Cracked Teeth Treatment
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Col 5: General Dentistry */}
          <div className="space-y-3">
            <Link
              href="/services/general-dentistry"
              className="font-bold text-xs font-mono uppercase tracking-wider text-[#14306b] block mb-4 hover:text-[#3b5bff]"
            >
              General Dentistry
            </Link>
            <ul className="space-y-2 text-xs sm:text-sm text-[#5b6b8f]">
              <li>
                <Link href="/services/general-dentistry/sedation-dentistry" className="hover:text-[#14306b]">
                  Sedation Dentistry
                </Link>
              </li>
              <li>
                <Link href="/services/general-dentistry/emergency-dentist" className="hover:text-[#14306b]">
                  Emergency Dentist
                </Link>
              </li>
              <li>
                <Link href="/services/general-dentistry/traumatic-injury-treatment" className="hover:text-[#14306b]">
                  Traumatic Injury Treatment
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 6: Restorative Dentistry */}
          <div className="space-y-3">
            <Link
              href="/services/restorative-dentistry"
              className="font-bold text-xs font-mono uppercase tracking-wider text-[#14306b] block mb-4 hover:text-[#3b5bff]"
            >
              Restorative
            </Link>
            <ul className="space-y-2 text-xs sm:text-sm text-[#5b6b8f]">
              <li>
                <Link href="/services/restorative-dentistry/dental-implants" className="hover:text-[#14306b]">
                  Dental Implants
                </Link>
              </li>
              <li>
                <Link href="/services/restorative-dentistry/periodontics" className="hover:text-[#14306b]">
                  Periodontics
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 7: Dental Technology */}
          <div className="space-y-3">
            <Link
              href="/services/technology"
              className="font-bold text-xs font-mono uppercase tracking-wider text-[#14306b] block mb-4 hover:text-[#3b5bff]"
            >
              Technology
            </Link>
            <ul className="space-y-2 text-xs sm:text-sm text-[#5b6b8f]">
              <li>
                <Link href="/technology/dental-radiology" className="hover:text-[#14306b]">
                  Dental Radiology & Digital X-Rays
                </Link>
              </li>
              <li>
                <Link href="/technology/cbct-imaging" className="hover:text-[#14306b]">
                  3D Cone Beam CT (CBCT)
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-[#dfe5f4] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5b6b8f]">
          <div>© {new Date().getFullYear()} Simple Smile Endodontics. All rights reserved.</div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link href="/privacy-policy" className="hover:text-[#14306b]">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#14306b]">
              Terms Of Use
            </Link>
            <Link href="/accessibility-statement" className="hover:text-[#14306b]">
              Accessibility Statement
            </Link>
          </div>

          <div className="flex items-center gap-4 text-[#14306b]">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-[#3b5bff] transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M22 12.0611C22 6.50451 17.5229 2 12 2C6.47715 2 2 6.50451 2 12.0611C2 17.0828 5.65684 21.2452 10.4375 22V14.9694H7.89844V12.0611H10.4375V9.84452C10.4375 7.32296 11.9305 5.93012 14.2146 5.93012C15.3088 5.93012 16.4531 6.12663 16.4531 6.12663V8.60261H15.1922C13.95 8.60261 13.5625 9.37822 13.5625 10.1739V12.0611H16.3359L15.8926 14.9694H13.5625V22C18.3432 21.2452 22 17.083 22 12.0611Z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/watch?v=UY6YhOfrm0U"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:text-[#3b5bff] transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                />
              </svg>
            </a>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Maps"
              className="hover:text-[#3b5bff] transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
