"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import { VideoModal } from "./VideoModal";

export function MeetDoctor() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="w-full bg-[#f6f8ff] py-16 sm:py-24 border-b border-[#dfe5f4]">
      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column Content */}
          <div className="lg:col-span-6 space-y-6">
            <div data-animate-text className="inline-block text-xs font-mono font-bold tracking-wider uppercase text-[#3b5bff]">
              Expert Care, Delivered with Heart
            </div>

            <h2 data-animate-text className="font-heading text-3xl sm:text-4xl lg:text-[3rem] text-[#14306b] leading-tight">
              Meet Dr. Ernest Reeh
            </h2>

            <h3 className="text-xl sm:text-2xl font-bold text-[#14306b]/95 leading-snug">
              Dr. Ernest Reeh has over{" "}
              <span className="text-[#3b5bff] font-extrabold underline decoration-[#3b5bff]/40">
                30 years
              </span>{" "}
              of experience in endodontics.
            </h3>

            <p data-animate-text className="text-base sm:text-lg text-[#14306b]/85 leading-relaxed">
              Our patients’ care and comfort are Dr. Reeh’s primary concerns. He explains patients’ needs
              in a calming way that they understand. Dr. Reeh also enjoys the conversations he has with
              his patients and uses humor when appropriate to help them relax and eliminate their anxiety.
              He has even been known to draw pictures or write upside down so he can talk face-to-face with
              patients about their treatment plans. He has created a calming, soothing office environment
              and hired team members who are understanding and compassionate.
            </p>

            <div className="pt-2">
              <Link
                href="/about/meet-the-doctor"
                className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-mono font-semibold tracking-wider uppercase bg-[#14306b] text-[#cfe0ff] hover:bg-[#060b1f] rounded-md transition-colors shadow-sm"
              >
                Learn More About Dr. Reeh
              </Link>
            </div>
          </div>

          {/* Right Column Image & Video Group */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Doctor Main Image */}
              <div data-animate-image className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white aspect-[4/3] sm:aspect-[4/3] lg:aspect-[5/4]">
                <Image
                  src="/images/stock/doctor.jpg"
                  alt="Dr. Ernest Reeh - Simple Smile Endodontics"
                  fill
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className="w-full h-full object-cover object-top rounded-xl"
                  priority
                />
              </div>

              {/* Video Lightbox Badge Card */}
              <div
                onClick={() => setVideoOpen(true)}
                className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-8 w-44 sm:w-56 cursor-pointer group rounded-xl overflow-hidden shadow-2xl border-2 border-white bg-black transition-transform duration-300 hover:scale-105"
              >
                <div className="relative aspect-video w-full">
                  <Image
                    src="/images/stock/video-thumb-doctor.jpg"
                    alt="Watch Modern Dental Clinic Tour"
                    fill
                    sizes="(max-width: 640px) 180px, 224px"
                    className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#3b5bff] text-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                      <Play className="w-4 h-4 sm:w-5 sm:h-5 ml-0.5 fill-current" />
                    </div>
                  </div>
                </div>
                <div className="bg-[#060b1f] px-3 py-1.5 text-center">
                  <span className="text-[11px] font-mono font-medium tracking-wider uppercase text-[#cfe0ff]">
                    Watch Clinic Tour
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <VideoModal
        isOpen={videoOpen}
        onClose={() => setVideoOpen(false)}
        videoId="UY6YhOfrm0U"
        title="Modern Dental Clinic Tour - Simple Smile Endodontics"
      />
    </section>
  );
}
