"use client";

import { Star } from "lucide-react";

const reviews = [
  {
    quote:
      "“I have been visiting Simple Smile Endodontics for several years now and am very pleased of the service they provide. Dr. Ernest Reeh is extremely knowledgeable of his craft, he takes time to not only investigate the problem and if necessary, adds state of the art technology on circular x-ray machines and other devices and explains in full details of his plan and procedure...”",
    name: "Rita M.",
  },
  {
    quote:
      "“My husband has had two visits to Simple Smile Endodontics, and both were positive experiences. Dr. Reeh and his staff are professional, yet caring and friendly. It was very easy to schedule an appointment quickly, and my husband’s procedures went smoothly and without any issues. He had both a root canal and two extractions. We highly recommend Dr. Reeh!”",
    name: "Susan S.",
  },
  {
    quote:
      "“I was pretty apprehensive as I arrived for a molar root canal treatment. The various experiences of friends had put me in a very anxious state of mind. I was immediately met by the friendly and professional staff persons. Shortly I was led to the room where the procedure was to take place. I was envisioning some kind of torture chamber but instead was greeted by a bright and pleasant...”",
    name: "Everson D.",
  },
  {
    quote:
      "“I had never had a root canal and was feeling a bit anxious. It turns out it was a “non-event.” Outside of getting numbed up, there wasn’t an ounce of pain. It was actually kind of boring to stare up at the ceiling for an hour while they masterfully worked on my tooth. I would highly recommend the team at Simple Smile Endodontics. They were able to squeeze me in on short notice and did a great job on the actual dental work.”",
    name: "Jeff H.",
  },
  {
    quote:
      "“After suffering a few days over the weekend with a BAD toothache, I went to Dr. Reeh and had a root canal. It was a really nice office and he and his staff were wonderful. I highly recommend going to visit them with any special dental needs you have.”",
    name: "Debra G.",
  },
];

export function PatientReviews() {
  // Duplicate for seamless infinite marquee loop
  const marqueeList = [...reviews, ...reviews];

  return (
    <section className="w-full bg-[#f6f8ff] py-16 sm:py-24 overflow-hidden border-b border-[#dfe5f4]">
      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="text-center max-w-2xl mx-auto">
          <div data-animate-text className="inline-block text-xs font-mono font-bold tracking-wider uppercase text-[#3b5bff] mb-2">
            Patient Stories
          </div>
          <h2 data-animate-text className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] text-[#14306b] leading-tight">
            What Our Patients Say
          </h2>
        </div>
      </div>

      {/* Infinite Marquee Loop */}
      <div className="relative w-full overflow-hidden">
        {/* Left and right fade gradients */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 z-10 bg-gradient-to-r from-[#f6f8ff] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 z-10 bg-gradient-to-l from-[#f6f8ff] to-transparent" />

        <div className="animate-marquee flex gap-6 px-4">
          {marqueeList.map((item, idx) => (
            <div
              key={idx}
              className="w-[320px] sm:w-[400px] shrink-0 bg-white rounded-2xl p-6 sm:p-8 shadow-md card-lift border border-[#dfe5f4] flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-4 text-[#3b5bff]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#3b5bff]" />
                  ))}
                </div>

                <p className="text-sm sm:text-base text-[#14306b]/90 leading-relaxed italic line-clamp-6">
                  {item.quote}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#dfe5f4] flex items-center justify-between">
                <span className="font-semibold text-sm sm:text-base text-[#14306b]">
                  {item.name}
                </span>
                <span className="text-xs font-mono text-[#00b4d8] font-medium">
                  Verified Patient
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
