import Link from "next/link";
import { ArrowRight, Phone, Siren, Stethoscope, Zap, Droplets } from "lucide-react";

const cases = [
  { icon: Zap, label: "Severe tooth pain" },
  { icon: Droplets, label: "Swelling" },
  { icon: Stethoscope, label: "Tooth injuries" },
];

export function EmergencyBanner() {
  return (
    <section className="w-full bg-white py-14 sm:py-20 border-b border-[#dfe5f4]">
      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div data-reveal className="spin-border rounded-[2rem] p-[1.5px] shadow-2xl shadow-[#3b5bff]/20">
          <div className="relative overflow-hidden rounded-[calc(2rem-1.5px)] bg-[#060b1f] p-7 sm:p-10 lg:p-14 text-white">
            <div className="orb orb-a -top-32 -left-20 w-[26rem] h-[26rem] bg-[#0075ff] opacity-35" />
            <div className="orb orb-b -bottom-40 right-0 w-[30rem] h-[30rem] bg-[#8b5cf6] opacity-30" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.07)_1px,transparent_0)] [background-size:24px_24px]" />

            <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
              {/* Left: message */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-5">
                  <span className="relative flex h-16 w-16 shrink-0 items-center justify-center">
                    <span className="ring-pulse absolute inset-0 rounded-full border border-rose-400/70" />
                    <span className="ring-pulse absolute inset-0 rounded-full border border-rose-400/50 [animation-delay:1.2s]" />
                    <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-[#8b5cf6] shadow-lg shadow-rose-500/30">
                      <Siren className="h-7 w-7 text-white" />
                    </span>
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-[11px] font-mono font-semibold uppercase tracking-wider text-[#cfe0ff] backdrop-blur-md">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-rose-400" />
                    </span>
                    Emergency care
                  </span>
                </div>

                <h2
                  data-animate-text
                  className="mt-7 font-heading text-4xl sm:text-5xl lg:text-[3.3rem] leading-[1.08] text-white"
                >
                  We offer same day emergency treatment.
                </h2>

                <ul className="mt-8 flex flex-wrap gap-3">
                  {cases.map((c) => (
                    <li
                      key={c.label}
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-sm text-[#e6eeff] backdrop-blur-md"
                    >
                      <c.icon className="h-4 w-4 text-[#7fb0ff]" />
                      {c.label}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: action panel */}
              <div className="lg:col-span-5">
                <div className="rounded-3xl border border-white/15 bg-white/[0.07] p-6 sm:p-8 backdrop-blur-xl">
                  <p className="text-sm leading-relaxed text-[#cfe0ff]/90">
                    Call as early in the day as you can so we can plan your visit.
                  </p>
                  <a
                    href="tel:(651)439-8085"
                    className="mt-3 flex items-center gap-3 font-heading text-3xl sm:text-4xl text-white transition-colors hover:text-[#cfe0ff]"
                  >
                    <Phone className="h-6 w-6 text-[#7fb0ff]" />
                    (651) 439-8085
                  </a>

                  <Link
                    href="/services/general-dentistry/emergency-dentist"
                    className="group mt-7 flex w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-mono font-semibold uppercase tracking-wider text-[#14306b] shadow-lg shadow-black/20 hover:bg-[#eaf1ff]"
                  >
                    Learn More Emergency Dentistry
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
