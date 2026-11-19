"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Phone, ArrowRight, ShieldCheck, Check } from "lucide-react";

interface FaqItem {
  id: string;
  tag: string;
  question: string;
  answer: React.ReactNode;
}

const faqs: FaqItem[] = [
  {
    id: "01",
    tag: "Direct Scheduling",
    question: "Do I need a referral to see an endodontist in Stillwater?",
    answer: (
      <div className="space-y-3">
        <p className="leading-relaxed text-[#14306b]/85">
          <strong className="text-[#14306b] font-semibold">No. You do not need a referral.</strong> You can call Simple Smile Endodontics directly at{" "}
          <a
            href="tel:(651)439-8085"
            className="font-bold underline text-[#14306b] hover:text-[#3b5bff] transition-colors"
          >
            (651) 439-8085
          </a>{" "}
          and schedule an appointment.
        </p>
        <p className="text-sm text-[#5b6b8f] leading-relaxed">
          If your family dentist referred you, we coordinate directly with their office and send them a detailed digital report with your 3D radiographs immediately following treatment.
        </p>
      </div>
    ),
  },
  {
    id: "02",
    tag: "Emergency Care",
    question: "Do you treat dental emergencies and severe tooth pain the same day?",
    answer: (
      <div className="space-y-3">
        <p className="leading-relaxed text-[#14306b]/85">
          <strong className="text-[#14306b] font-semibold">Yes. We reserve dedicated emergency time every day.</strong> We provide{" "}
          <Link
            href="/services/general-dentistry/emergency-dentist"
            className="font-semibold underline text-[#14306b] hover:text-[#3b5bff] transition-colors"
          >
            same-day emergency dental treatment
          </Link>{" "}
          for severe toothaches, facial swelling, cracked teeth, and dental trauma.
        </p>
        <p className="text-sm text-[#5b6b8f] leading-relaxed">
          Please call as early in the day as you can so our clinical team can plan your visit and get you out of pain right away.
        </p>
      </div>
    ),
  },
  {
    id: "03",
    tag: "Comfort & Sedation",
    question: "Will I be comfortable during my root canal treatment?",
    answer: (
      <div className="space-y-3">
        <p className="leading-relaxed text-[#14306b]/85">
          <strong className="text-[#14306b] font-semibold">Modern root canals are virtually pain-free.</strong> Dr. Ernest Reeh brings more than 30 years of endodontic expertise and uses precision local anesthesia to ensure your tooth and surrounding tissues are completely numb before any work begins.
        </p>
        <p className="text-sm text-[#5b6b8f] leading-relaxed">
          We explain every step in plain language, and we offer nitrous oxide (laughing gas), oral conscious sedation, and IV sedation options for patients who feel anxious. Most patients tell us the procedure was far easier than they feared.
        </p>
      </div>
    ),
  },
  {
    id: "04",
    tag: "Regional Access",
    question: "Do you see patients traveling from Western Wisconsin?",
    answer: (
      <div className="space-y-3">
        <p className="leading-relaxed text-[#14306b]/85">
          <strong className="text-[#14306b] font-semibold">Yes, regularly.</strong> Our Stillwater office is located right off Highway 36, just minutes across the St. Croix River.
        </p>
        <p className="text-sm text-[#5b6b8f] leading-relaxed">
          Many of our patients travel to us from Hudson, New Richmond, Somerset, and across Western Wisconsin, as well as throughout the eastern Twin Cities metro.
        </p>
      </div>
    ),
  },
  {
    id: "05",
    tag: "Insurance & Payments",
    question: "How does dental insurance and financing work at your clinic?",
    answer: (
      <div className="space-y-3">
        <p className="leading-relaxed text-[#14306b]/85">
          <strong className="text-[#14306b] font-semibold">We work with most major dental insurance plans.</strong> Our front office staff will verify your coverage, estimate your benefits, and submit all claims on your behalf.
        </p>
        <p className="text-sm text-[#5b6b8f] leading-relaxed">
          For any out-of-pocket balance, we partner with CareCredit and Cherry to offer 0% interest and low monthly financing plans. Visit our{" "}
          <Link
            href="/patient-info"
            className="font-semibold underline text-[#14306b] hover:text-[#3b5bff] transition-colors"
          >
            patient financing options
          </Link>{" "}
          to learn more.
        </p>
      </div>
    ),
  },
  {
    id: "06",
    tag: "Recovery & Healing",
    question: "What is recovery like? When can I return to normal activities?",
    answer: (
      <div className="space-y-3">
        <p className="leading-relaxed text-[#14306b]/85">
          <strong className="text-[#14306b] font-semibold">Most patients return to work or school the next day.</strong> Because the inflamed nerve has been treated, the deep throbbing ache will be gone.
        </p>
        <p className="text-sm text-[#5b6b8f] leading-relaxed">
          Mild soreness when chewing is normal for a few days while surrounding tissues heal and can be managed easily with standard over-the-counter pain relievers. We provide complete written aftercare instructions before you head home.
        </p>
      </div>
    ),
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="endodontist-faq"
      className="w-full bg-[#f6f8ff] py-16 sm:py-24 border-y border-[#dfe5f4] relative"
    >
      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column (8 cols): FAQ Title + Animated Accordion List */}
          <article className="lg:col-span-8">
            <div className="mb-8">
              <div
                data-animate-text
                className="inline-block text-xs font-mono font-bold tracking-wider uppercase text-[#3b5bff] mb-2"
              >
                Common Questions
              </div>
              <h2
                data-animate-text
                className="font-heading text-2xl sm:text-4xl text-[#14306b] leading-tight text-balance"
              >
                Frequently Asked Questions About Seeing an Endodontist
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#14306b]/80 leading-relaxed max-w-[65ch]">
                Direct scheduling, insurance clarity, and pain-free treatment. Here is everything you need to know about your specialist visit with Dr. Ernest Reeh.
              </p>
            </div>

            {/* Accordion List with GSAP blur-and-rise entrance animation */}
            <div data-reveal-group className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openIndex === idx;

                return (
                  <div
                    key={faq.id}
                    className={`transition-all duration-300 ${
                      isOpen
                        ? "spin-border rounded-2xl shadow-lg shadow-[#3b5bff]/10"
                        : "rounded-2xl border border-[#dfe5f4] bg-white hover:border-[#3b5bff]/40 hover:shadow-sm"
                    }`}
                  >
                    <div
                      className={`relative rounded-[calc(1rem-1.5px)] ${
                        isOpen ? "m-[1.5px] bg-white" : "bg-white"
                      } overflow-hidden`}
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full flex items-start justify-between gap-4 p-5 sm:p-6 text-left focus:outline-none cursor-pointer"
                        aria-expanded={isOpen}
                      >
                        <div className="space-y-1.5 flex-1 pr-2">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs font-bold text-[#3b5bff] px-2 py-0.5 rounded-full bg-[#eaf1ff]">
                              {faq.id}
                            </span>
                            <span className="text-[11px] font-mono uppercase tracking-wider font-semibold text-[#5b6b8f]">
                              {faq.tag}
                            </span>
                          </div>
                          <h3 className="font-heading text-lg sm:text-xl text-[#14306b] font-medium leading-snug">
                            {faq.question}
                          </h3>
                        </div>

                        {/* Animated Plus-to-X Icon matching Apicoectomy FAQ */}
                        <div
                          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                            isOpen
                              ? "bg-[#14306b] text-white rotate-45 shadow-sm"
                              : "bg-[#eaf1ff] text-[#3b5bff] hover:bg-[#3b5bff] hover:text-white"
                          }`}
                        >
                          <Plus className="w-4 h-4 stroke-[2.5]" />
                        </div>
                      </button>

                      {/* Smooth Collapsible Answer Grid */}
                      <div
                        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base leading-relaxed text-[#14306b]/85 border-t border-[#dfe5f4]/60">
                            {faq.answer}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Reassurance Pill Bar */}
            <div className="mt-8 rounded-2xl bg-[#eaf1ff] p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-[#14306b]/90">
                <div className="w-8 h-8 rounded-full bg-white text-[#3b5bff] flex items-center justify-center shrink-0 shadow-2xs">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span>
                  <strong>Care from a True Specialist:</strong> Dr. Ernest Reeh brings over 30 years of gentle, precision care to Stillwater, MN.
                </span>
              </div>
              <Link
                href="/about/meet-the-doctor"
                className="shrink-0 inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#14306b] hover:text-[#3b5bff] transition-colors"
              >
                <span>About Dr. Reeh</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>

          {/* Right Column (4 cols): Sticky Rotating Conic Gradient Card (spin-border) */}
          <aside className="lg:col-span-4 self-stretch">
            <div className="sticky top-28 space-y-6">
              {/* Rotating Conic Gradient Animated Card */}
              <div className="spin-border rounded-2xl shadow-xl shadow-[#3b5bff]/15">
                <div className="relative rounded-[calc(1rem-1.5px)] m-[1.5px] bg-[#0b1738] p-6 sm:p-7 text-white">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] font-mono tracking-wider text-[#cfe0ff] mb-4">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    Open For Direct Calls
                  </div>

                  <h3 className="font-heading text-2xl text-[#eaf1ff] leading-snug">
                    In pain, or just have a question?
                  </h3>

                  <p className="mt-3 text-sm text-white/80 leading-relaxed">
                    No referral needed. Call as early in the day as you can and we will work to see you the same day.
                  </p>

                  <a
                    href="tel:(651)439-8085"
                    className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-mono font-semibold tracking-wider uppercase rounded-md bg-[#cfe0ff] text-[#060b1f] hover:bg-white transition-colors shadow-md"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#060b1f]" />
                    <span>(651) 439-8085</span>
                  </a>

                  <Link
                    href="/contact-us"
                    className="mt-3 block text-center text-xs font-mono font-semibold uppercase tracking-wider text-[#cfe0ff] hover:text-white transition-colors"
                  >
                    Or request online →
                  </Link>

                  <div className="mt-6 pt-5 border-t border-white/10 space-y-2 text-xs text-white/75">
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>No referral required to schedule</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Same-day emergency evaluations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>CareCredit &amp; Cherry 0% financing</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Helper */}
              <nav aria-label="Quick links" className="rounded-2xl border border-[#dfe5f4] bg-white p-5 space-y-3">
                <span className="text-[11px] font-mono uppercase tracking-wider font-bold text-[#5b6b8f] block">
                  Helpful Resources:
                </span>
                <Link
                  href="/services/oral-surgery/apicoectomy"
                  className="flex items-center justify-between text-xs font-semibold text-[#14306b] hover:text-[#3b5bff] transition-colors"
                >
                  <span>Apicoectomy Root-End Surgery</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#3b5bff]" />
                </Link>
                <Link
                  href="/services/general-dentistry/emergency-dentist"
                  className="flex items-center justify-between text-xs font-semibold text-[#14306b] hover:text-[#3b5bff] transition-colors"
                >
                  <span>Emergency Tooth Pain Relief</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#3b5bff]" />
                </Link>
                <Link
                  href="/patient-info"
                  className="flex items-center justify-between text-xs font-semibold text-[#14306b] hover:text-[#3b5bff] transition-colors"
                >
                  <span>Payment Plans &amp; Insurance</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#3b5bff]" />
                </Link>
              </nav>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
