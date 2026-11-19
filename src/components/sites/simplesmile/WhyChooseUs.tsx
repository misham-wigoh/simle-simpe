"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface FeatureItem {
  id: string;
  num: string;
  tag: string;
  preheading: string;
  title: string;
  desc: string;
  linkHref: string;
  linkLabel: string;
  imgSrc: string;
  imgAlt: string;
  badgeSrc?: string;
  badgeAlt?: string;
}

const features: FeatureItem[] = [
  {
    id: "advanced-technology",
    num: "01",
    tag: "Advanced Technology",
    preheading: "Why Choose Simple Smile Endodontics?",
    title: "Advanced Technology",
    desc: "With digital imaging and modern techniques, we ensure accurate diagnoses and minimally invasive treatments. Our cutting-edge tools provide precise, efficient, and comfortable care.",
    linkHref: "/services/technology",
    linkLabel: "Explore Our Dental Technology",
    imgSrc: "/images/stock/why-tech.jpg",
    imgAlt: "Modern Dental Technology & Cone Beam 3D Imaging",
  },
  {
    id: "personalized-care",
    num: "02",
    tag: "Personalized Care",
    preheading: "Why Choose Simple Smile Endodontics?",
    title: "Compassionate and Personalized Care",
    desc: "As soon as you enter our office, our caring team is here to make you feel welcome, informed, and at ease. We take the time to listen to your concerns, explain your treatment options clearly, and ensure you never feel rushed or pressured.",
    linkHref: "/about",
    linkLabel: "Learn About Our Patient Philosophy",
    imgSrc: "/images/stock/why-expertise.jpg",
    imgAlt: "Compassionate Dental Care Team",
  },
  {
    id: "trusted-excellence",
    num: "03",
    tag: "Trusted Excellence",
    preheading: "Why Choose Simple Smile Endodontics?",
    title: "Calming Environment & Trusted Excellence",
    desc: "Enjoy a relaxing, stress-free experience in our comforting clinic, where we combine exceptional care with a trusted reputation as a Top Dentist, recognized by Mpls.St.Paul Magazine and topDentists since 2007.",
    linkHref: "/about/meet-the-doctor",
    linkLabel: "Meet Dr. Ernest Reeh",
    imgSrc: "/images/stock/why-comfort.jpg",
    imgAlt: "Calming Dental Clinic Reception & Operatory",
    badgeSrc: "/images/award-badge.svg",
    badgeAlt: "Top Dentists Recognized Excellence Award",
  },
];

export function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-white border-b border-[#dfe5f4]"
      aria-label="Why Choose Simple Smile Endodontics"
    >
      <div className="relative">
        {features.map((item, idx) => {
          // Dynamic ascending z-index so subsequent layers slide seamlessly on top of prior layers
          const zIndex = 10 + idx * 10;

          return (
            <div
              key={item.id}
              id={item.id}
              style={{ zIndex }}
              className={`sticky top-20 min-h-[calc(100vh-5rem)] flex flex-col justify-center bg-white border-t border-[#dfe5f4] shadow-[0_-16px_36px_rgba(20,48,107,0.07)] py-8 sm:py-12 lg:py-16 transition-shadow will-change-[transform]`}
            >
              <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 w-full">
                {/* Layer Tab Header Line */}
                <div className="flex items-center gap-3.5 sm:gap-4 mb-6 sm:mb-8 lg:mb-10 pb-3 border-b border-[#dfe5f4]/80">
                  <span className="font-heading text-lg sm:text-xl font-bold text-[#14306b] tracking-tight">
                    {item.num}
                  </span>
                  <span className="text-sm sm:text-base font-medium text-[#14306b]/90 tracking-normal">
                    {item.tag}
                  </span>
                </div>

                {/* Layer Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 xl:gap-16 items-center">
                  {/* Left Column Text */}
                  <div className="lg:col-span-6 space-y-4 sm:space-y-5">
                    <div className="inline-block text-xs sm:text-[13px] font-semibold tracking-[0.16em] uppercase text-[#14306b]/80">
                      {item.preheading}
                    </div>

                    <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.65rem] xl:text-[2.85rem] text-[#14306b] leading-[1.16]">
                      {item.title}
                    </h2>

                    <p className="text-base sm:text-lg text-[#14306b]/80 leading-relaxed max-w-xl">
                      {item.desc}
                    </p>

                    {item.badgeSrc && (
                      <div className="pt-1">
                        <Image
                          src={item.badgeSrc}
                          alt={item.badgeAlt ?? "Award Recognition"}
                          width={180}
                          height={95}
                          className="h-12 sm:h-14 w-auto object-contain"
                        />
                      </div>
                    )}

                    <div className="pt-2 sm:pt-3">
                      <Link
                        href={item.linkHref}
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.12em] text-[#14306b] hover:text-[#3b5bff] group transition-colors"
                      >
                        <span>{item.linkLabel}</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column Arched Editorial Image */}
                  <div className="lg:col-span-6">
                    <div className="relative rounded-2xl lg:rounded-l-full lg:rounded-r-2xl overflow-hidden shadow-xl border border-[#dfe5f4]/80 bg-[#f4f7fd] h-[280px] sm:h-[380px] lg:h-[440px] xl:h-[480px] w-full">
                      <Image
                        src={item.imgSrc}
                        alt={item.imgAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 600px"
                        className="object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
