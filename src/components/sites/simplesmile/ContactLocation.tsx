"use client";

import { MapPin, Navigation, Car, Accessibility } from "lucide-react";

export function ContactLocation() {
  return (
    <section className="w-full bg-white text-slate-900 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
      <div className="max-w-[76rem] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Map */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 aspect-[16/10] sm:aspect-[16/10] bg-slate-100">
              <iframe
                title="Simple Smile Endodontics Clinic Location Map"
                src="https://maps.google.com/maps?q=13941+60th+St+N,+Stillwater,+MN+55082&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Address Bar */}
              <div className="absolute top-3 left-3 right-3 sm:right-auto sm:max-w-xs bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-md border border-slate-100 flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-[#3b5bff] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading text-xs font-bold text-slate-900">
                    Simple Smile Endodontics
                  </h4>
                  <p className="text-[11px] text-slate-600 leading-tight">
                    13941 60th St N, Stillwater, MN 55082
                  </p>
                  <a
                    href="https://www.google.com/maps"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-[11px] font-semibold text-[#14306b] hover:underline"
                  >
                    <span>View on Google Maps</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Location Details */}
          <div className="lg:col-span-5 space-y-5">
            <h2
              data-animate-text
              className="font-heading text-3xl sm:text-4xl text-slate-900 font-normal leading-tight"
            >
              Our Location
            </h2>
            <p data-animate-text className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Conveniently located at 13941 60th St N in Stillwater, MN. Our modern specialty
              practice provides gentle, high-precision endodontic care and root canal treatments in a calming,
              accessible environment for patients throughout Stillwater and the Twin Cities metro area.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#eaf1ff] text-[#14306b] flex items-center justify-center shrink-0 mt-0.5">
                  <Car className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Complimentary On-Site Parking</h4>
                  <p className="text-xs text-slate-500">Dedicated, free parking lot located directly in front of the clinic entrance.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#eaf1ff] text-[#14306b] flex items-center justify-center shrink-0 mt-0.5">
                  <Accessibility className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Ground-Floor Accessibility</h4>
                  <p className="text-xs text-slate-500">Fully ADA accessible building with zero stairs or elevators required.</p>
                </div>
              </div>
            </div>

            <div className="pt-3">
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#14306b] text-white hover:bg-[#060b1f] transition-colors text-xs font-mono font-semibold uppercase tracking-wider shadow-sm"
              >
                <Navigation className="w-3.5 h-3.5 text-[#cfe0ff]" />
                <span>Get Driving Directions</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
