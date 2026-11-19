"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, CheckCircle, Star } from "lucide-react";

export function ContactHero() {
  return (
    <section className="w-full bg-[#060b1f] text-white pt-14 pb-16 sm:pt-20 sm:pb-24 px-4 sm:px-6 lg:px-8 border-b border-[#14306b]">
      <div className="max-w-[76rem] mx-auto">
        {/* Title */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1
            data-animate-text
            className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-white font-normal tracking-tight leading-tight"
          >
            Contact Simple Smile Endodontics
          </h1>

          {/* Quick Action Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="tel:(651)439-8085"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white text-xs sm:text-sm font-medium transition-all duration-200"
            >
              <Phone className="w-3.5 h-3.5 text-[#cfe0ff]" />
              <span>(651) 439-8085</span>
            </a>
            <a
              href="#contact-form"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#cfe0ff] hover:bg-[#eaf1ff] text-[#060b1f] text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm"
            >
              <CheckCircle className="w-3.5 h-3.5 text-[#060b1f]" />
              <span>Online Form</span>
            </a>
          </div>
        </div>

        {/* Dual Portrait Cards */}
        <div className="relative mt-12 sm:mt-16 max-w-2xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 items-stretch">
            {/* Left Card: Woman on phone */}
            <div className="relative rounded-3xl overflow-hidden aspect-[3/4] shadow-2xl border border-white/10 bg-[#14306b] group">
              <Image
                src="/images/stock/contact-woman-phone.jpg"
                alt="Patient scheduling care by phone with Simple Smile Endodontics"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 340px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

              {/* Floating Rating Badge */}
              <div className="absolute bottom-4 right-4 z-20 bg-white text-slate-900 rounded-full px-3.5 py-1 shadow-xl flex items-center gap-1.5 text-xs font-bold border border-slate-100">
                <span>5.0</span>
                <Star className="w-3.5 h-3.5 fill-[#7aa2ff] text-[#7aa2ff]" />
              </div>
            </div>

            {/* Right Card: Smiling man with phone */}
            <div className="relative rounded-3xl overflow-hidden aspect-[3/4] shadow-2xl border border-white/10 bg-[#14306b] group">
              <Image
                src="/images/stock/contact-man-phone.jpg"
                alt="Patient contacting Simple Smile Endodontics online"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 340px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Descriptive Statement */}
        <div className="mt-12 sm:mt-16 max-w-2xl mx-auto text-center">
          <p
            data-animate-text
            className="font-heading text-lg sm:text-xl lg:text-2xl text-white/95 leading-relaxed font-normal"
          >
            Need expert endodontic care? Have questions about your treatment? We&apos;re here to help!
            Reach out to Simple Smile Endodontics today to schedule an appointment or{" "}
            <Link
              href="/services"
              className="text-white/80 hover:text-white underline underline-offset-4 decoration-white/40 hover:decoration-white transition-colors"
            >
              learn more about our specialized dental services
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
