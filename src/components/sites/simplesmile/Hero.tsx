"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Star, ArrowRight, Sparkles, Award, ShieldCheck, Clock, MapPin } from "lucide-react";
import dynamic from "next/dynamic";

const HeroCarousel = dynamic(
  () => import("@/components/animations/HeroCarousel").then((m) => m.HeroCarousel),
  {
    ssr: false,
    loading: () => <div className="w-full aspect-[4/3] md:aspect-[2/1] max-h-[620px]" />,
  },
);

export function Hero() {
  return (
    <header className="relative w-full overflow-hidden bg-[#060b1f] text-white">
      {/* Background Video with Poster Fallback */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/stock/hero-poster.jpg"
          className="w-full h-full object-cover opacity-35 scale-105"
        >
          <source
            src="/img/hero-bg.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#060b1f]/85 via-[#14306b]/60 to-[#060b1f]/95" />
        <div className="orb orb-a -top-24 -left-24 w-[26rem] h-[26rem] bg-[#0075ff]" data-parallax="40" />
        <div className="orb orb-b top-1/3 -right-32 w-[30rem] h-[30rem] bg-[#8b5cf6]" data-parallax="-60" />
        <div className="orb orb-a bottom-0 left-1/3 w-[22rem] h-[22rem] bg-[#00b4d8] opacity-40" data-parallax="30" />
      </div>

      <div className="relative z-10 max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-16 lg:pb-24">
        {/* Main Hero Layer: Left & Right Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column: Headline, Narrative, and Calls to Action */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Pill Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#cfe0ff] text-xs font-semibold tracking-wider uppercase shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-[#60a5fa]" />
              <span>Specialty Endodontics · Stillwater, MN</span>
            </div>

            {/* Main Title */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[3.85rem] leading-[1.12] text-[#f4f7fd] tracking-tight">
              Endodontist in Stillwater, MN
            </h1>

            {/* Subheading */}
            <h2 className="font-heading text-xl sm:text-2xl lg:text-[1.65rem] font-normal text-[#b9d2ff] leading-snug">
              Gentle &amp; Precise Root Canal Therapy and Dental Implants
            </h2>

            {/* Service Area Paragraph */}
            <p className="text-sm sm:text-base text-[#eaf1ff]/85 leading-relaxed max-w-xl">
              Serving Stillwater, Oak Park Heights, Bayport, Lake Elmo, Grant, Mahtomedi, Marine on
              St. Croix, Afton, Hugo, Woodbury, Oakdale, and Cottage Grove, MN, plus Hudson,
              New Richmond, and Somerset, WI.
            </p>

            {/* Action Buttons: Button-in-Button Island Architecture */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="tel:(651)439-8085"
                className="group inline-flex items-center gap-3 px-6 py-3.5 text-xs sm:text-sm font-mono font-semibold tracking-wider uppercase bg-[#14306b] hover:bg-[#204494] text-white rounded-full transition-all duration-300 shadow-lg shadow-[#14306b]/40 border border-white/15"
              >
                <span className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center transition-transform group-hover:scale-110">
                  <Phone className="w-4 h-4 text-[#cfe0ff]" />
                </span>
                <span>(651) 439-8085</span>
              </a>

              <Link
                href="/contact-us"
                className="group inline-flex items-center gap-3 px-6 py-3.5 text-xs sm:text-sm font-mono font-semibold tracking-wider uppercase bg-white hover:bg-[#eaf1ff] text-[#060b1f] rounded-full transition-all duration-300 shadow-lg shadow-white/10"
              >
                <span>Contact Our Team</span>
                <span className="w-8 h-8 rounded-full bg-[#060b1f]/10 flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <ArrowRight className="w-4 h-4 text-[#060b1f]" />
                </span>
              </Link>
            </div>

            {/* Trust Proof Badges Strip */}
            <div className="pt-4 border-t border-white/15 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-white/80">
              {/* Google Reviews Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/15 backdrop-blur-sm">
                <span className="font-mono font-bold text-white">5.0</span>
                <div className="flex items-center text-amber-300">
                  <Star className="w-3.5 h-3.5 fill-amber-300" />
                </div>
                <span className="text-white/80 text-xs">Google Reviews</span>
              </div>

              {/* Award Recognition */}
              <div className="inline-flex items-center gap-1.5 text-white/90">
                <Award className="w-4 h-4 text-[#60a5fa]" />
                <span className="text-xs sm:text-sm">Top Dentist Recognized</span>
              </div>

              {/* Same-Day Emergency Relief */}
              <div className="inline-flex items-center gap-1.5 text-white/90">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-xs sm:text-sm">Same-Day Emergencies</span>
              </div>
            </div>
          </div>

          {/* Right Column: Double-Bezel Floating Clinic Showcase Card */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            {/* Ambient Backlight Glow */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#3b5bff]/30 via-[#8b5cf6]/25 to-transparent rounded-[2.5rem] blur-2xl opacity-70 pointer-events-none" />

            {/* Double-Bezel Outer Shell */}
            <div className="relative p-2 rounded-[2rem] bg-gradient-to-b from-white/20 via-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-[0_24px_50px_rgba(0,0,0,0.5)]">
              {/* Double-Bezel Inner Core */}
              <div className="rounded-[calc(2rem-0.5rem)] bg-[#0c1836]/90 border border-white/10 p-5 sm:p-6 space-y-5 text-white">
                {/* Doctor Mini Profile Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#3b5bff] shadow-md shrink-0">
                      <Image
                        src="/images/stock/doctor.jpg"
                        alt="Dr. Ernest Reeh"
                        fill
                        priority
                        className="object-cover object-top"
                      />
                    </div>
                    <div>
                      <div className="font-heading text-base font-semibold text-white">
                        Dr. Ernest Reeh, DDS
                      </div>
                      <div className="text-xs text-[#b9d2ff]">
                        Endodontist · Over 30 Yrs Experience
                      </div>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Accepting Patients
                  </span>
                </div>

                {/* Modern Operatory Visual Preview */}
                <div className="relative rounded-xl overflow-hidden aspect-[16/10] border border-white/15 shadow-lg group">
                  <Image
                    src="/images/stock/clinic-1.jpg"
                    alt="Simple Smile Endodontics Stillwater Operatory"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060b1f]/90 via-transparent to-black/30" />

                  {/* Badges on image */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-medium text-white flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-amber-300" />
                    <span>Top Dentist Since 2007</span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white/90">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#60a5fa]" />
                      <span>Stillwater, MN Clinic</span>
                    </span>
                    <span className="text-[11px] text-white/70">
                      Modern 3D CBCT Imaging
                    </span>
                  </div>
                </div>

                {/* 3 Highlights Bento Grid */}
                <div className="grid grid-cols-3 gap-2 text-center pt-1">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-base font-bold text-[#b9d2ff]">3D CBCT</div>
                    <div className="text-[10px] text-white/70 leading-tight mt-0.5">
                      Precision Scans
                    </div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-base font-bold text-emerald-300">Same-Day</div>
                    <div className="text-[10px] text-white/70 leading-tight mt-0.5">
                      Urgent Care
                    </div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-base font-bold text-[#cfe0ff]">No Referral</div>
                    <div className="text-[10px] text-white/70 leading-tight mt-0.5">
                      Direct Booking
                    </div>
                  </div>
                </div>

                {/* Clinic Schedule & Fast Appointment Bar */}
                <div className="pt-2 flex items-center justify-between text-xs text-white/80 border-t border-white/10">
                  <div className="flex items-center gap-1.5 text-white/75">
                    <Clock className="w-3.5 h-3.5 text-[#60a5fa]" />
                    <span>Mon–Thu: 7:30 AM – 4:30 PM</span>
                  </div>

                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-1 font-mono font-bold text-[11px] uppercase tracking-wider text-[#93c5fd] hover:text-white transition-colors"
                  >
                    <span>Request Visit</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3D image carousel (three.js) */}
        <div className="relative z-0 pointer-events-none mt-2 sm:mt-6 lg:mt-8 -mb-8 sm:-mb-16 lg:-mb-24 -mx-4 sm:-mx-6 lg:-mx-8">
          <HeroCarousel />
        </div>

        {/* Hero Mission Statement Card */}
        <div data-fade-trigger className="relative z-10 mt-0 max-w-4xl mx-auto pt-8 border-t border-white/15">
          <h2 data-fade-words className="font-heading text-xl sm:text-2xl lg:text-3xl text-center text-white/95 leading-relaxed font-normal">
            Simple Smile Endodontics is a specialty endodontist practice in Stillwater, MN providing
            root canal therapy, endodontic surgery, and dental implants for patients across Stillwater
            and the Greater Twin Cities community.
          </h2>
        </div>
      </div>
    </header>
  );
}
