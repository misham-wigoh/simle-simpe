"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { VideoModal } from "./VideoModal";

export function StandardsTestimonials() {
  const [activeTab, setActiveTab] = useState<"tab1" | "tab2">("tab1");
  const [videoModalId, setVideoModalId] = useState<string | null>(null);

  return (
    <section className="w-full bg-[#eaf1ff] py-16 sm:py-24 border-b border-[#dfe5f4]">
      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div data-animate-text className="inline-block text-xs font-mono font-bold tracking-wider uppercase text-[#3b5bff] mb-3">
            Expert Care That Leaves a Mark
          </div>
          <h2 data-animate-text className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] text-[#14306b] leading-tight">
            Observers &amp; Experts on Our Standards
          </h2>
          <p data-animate-text className="mt-3 text-base sm:text-lg text-[#14306b]/85">
            A Practice That Inspires – From Future Dentists to Esteemed Peers.
          </p>

          {/* Tab Selector Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => setActiveTab("tab1")}
              className={`px-5 py-3 rounded-lg text-sm sm:text-base font-semibold transition-all duration-200 text-left sm:text-center w-full sm:w-auto ${
                activeTab === "tab1"
                  ? "bg-[#14306b] text-[#cfe0ff] shadow-md"
                  : "bg-white/80 text-[#14306b] hover:bg-white hover:text-[#060b1f]"
              }`}
            >
              Caroline shares her experience with Dr. Reeh&apos;s care
            </button>
            <button
              onClick={() => setActiveTab("tab2")}
              className={`px-5 py-3 rounded-lg text-sm sm:text-base font-semibold transition-all duration-200 text-left sm:text-center w-full sm:w-auto ${
                activeTab === "tab2"
                  ? "bg-[#14306b] text-[#cfe0ff] shadow-md"
                  : "bg-white/80 text-[#14306b] hover:bg-white hover:text-[#060b1f]"
              }`}
            >
              Why Dr. Marc refers his patients to Simple Smile Endodontics
            </button>
          </div>
        </div>

        {/* Tab Content Cards */}
        <div className="max-w-5xl mx-auto">
          {activeTab === "tab1" && (
            <div className="bg-[#14306b] rounded-2xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-12 text-white animate-in fade-in duration-300">
              {/* Video Thumbnail */}
              <div
                onClick={() => setVideoModalId("A85s0BuHflc")}
                className="md:col-span-5 relative group cursor-pointer aspect-video md:aspect-auto h-full min-h-[260px] overflow-hidden"
              >
                <Image
                  src="/images/stock/testimonial-1.jpg"
                  alt="Caroline Dental Student Observer Testimonial"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 flex items-center justify-center transition-colors">
                  <div className="w-14 h-14 rounded-full bg-[#3b5bff] text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 ml-0.5 fill-current" />
                  </div>
                </div>
              </div>

              {/* Quote Content */}
              <div className="md:col-span-7 p-6 sm:p-10 flex flex-col justify-center">
                <blockquote className="font-heading text-lg sm:text-xl lg:text-2xl text-[#eaf1ff] leading-relaxed italic">
                  &ldquo;He showed me so many interesting aspects of his work, and I was amazed—it was a
                  completely different side of dentistry that I hadn’t been exposed to before. After that day,
                  I knew I wanted to explore it further. I realized this could be a path I truly saw myself
                  pursuing, so I made the decision to take it seriously. Now, I’m applying to dental school and
                  excited for what’s ahead.&rdquo;
                </blockquote>
                <div className="mt-6 pt-4 border-t border-white/20 flex items-center justify-between">
                  <span className="font-mono text-xs text-[#cfe0ff] uppercase tracking-wider">
                    Caroline — Dental Student Observer
                  </span>
                  <button
                    onClick={() => setVideoModalId("A85s0BuHflc")}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#cfe0ff] hover:underline"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" /> Watch Story
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "tab2" && (
            <div className="bg-[#14306b] rounded-2xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-12 text-white animate-in fade-in duration-300">
              {/* Video Thumbnail */}
              <div
                onClick={() => setVideoModalId("UY6YhOfrm0U")}
                className="md:col-span-5 relative group cursor-pointer aspect-video md:aspect-auto h-full min-h-[260px] overflow-hidden"
              >
                <Image
                  src="/images/stock/testimonial-2.jpg"
                  alt="Dr. Marc Referring Dentist Testimonial"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 flex items-center justify-center transition-colors">
                  <div className="w-14 h-14 rounded-full bg-[#3b5bff] text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 ml-0.5 fill-current" />
                  </div>
                </div>
              </div>

              {/* Quote Content */}
              <div className="md:col-span-7 p-6 sm:p-10 flex flex-col justify-center">
                <blockquote className="font-heading text-lg sm:text-xl lg:text-2xl text-[#eaf1ff] leading-relaxed italic">
                  &ldquo;I had met Dr. Reeh and Dr. Reeh had promised me 23 years ago which is amazing that he
                  says Marc if you call our office before noon of that day i will do everything I can to see
                  your patient to get them out of pain that day and he made me that promise 23 years ago and I
                  have to honestly say he&apos;s been able to follow through on that every time we&apos;ve called
                  it&apos;s been amazing.&rdquo;
                </blockquote>
                <div className="mt-6 pt-4 border-t border-white/20 flex items-center justify-between">
                  <span className="font-mono text-xs text-[#cfe0ff] uppercase tracking-wider">
                    Dr. Marc — Referring Dentist (23-Year Colleague)
                  </span>
                  <button
                    onClick={() => setVideoModalId("UY6YhOfrm0U")}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#cfe0ff] hover:underline"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" /> Watch Story
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <VideoModal
        isOpen={videoModalId !== null}
        onClose={() => setVideoModalId(null)}
        videoId={videoModalId || ""}
        title="Peer and Student Video Testimonial"
      />
    </section>
  );
}
