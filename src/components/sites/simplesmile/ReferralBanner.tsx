import Link from "next/link";
import { ArrowRight, ClipboardCheck, HeartPulse, Phone, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Call or request online",
    text: "No referral from your dentist or physician is needed to see Dr. Reeh.",
  },
  {
    icon: HeartPulse,
    title: "Tell us if you are in pain",
    text: "We will work to get you in the same day.",
  },
  {
    icon: ShieldCheck,
    title: "Get specialist care",
    text: "Gentle, precise treatment from an endodontist with 30+ years of experience.",
  },
];

export function ReferralBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-[#f6f8ff] to-[#eef3ff] py-16 sm:py-24 border-b border-[#dfe5f4]">
      <div className="grid-fade pointer-events-none absolute inset-0" />
      <div className="orb orb-a -top-24 left-1/4 w-[28rem] h-[28rem] bg-[#cfe0ff] opacity-70" />
      <div className="orb orb-b top-1/2 -right-24 w-[26rem] h-[26rem] bg-[#e6dcff] opacity-70" />

      <div className="relative max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: message + actions */}
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#3b5bff]/20 bg-white/80 px-3.5 py-1.5 text-[11px] font-mono font-semibold uppercase tracking-wider text-[#3b5bff] shadow-sm backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#3b5bff]" />
              Open access
            </span>

            <h2
              data-animate-text
              className="mt-6 font-heading text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] text-[#14306b]"
            >
              No Referral Needed — Schedule Directly With Our Office
            </h2>

            <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-[#14306b]/80">
              You do not need a referral from your dentist or physician to see Dr. Reeh. Call{" "}
              <a
                href="tel:(651)439-8085"
                className="font-bold text-[#14306b] underline decoration-[#3b5bff]/40 underline-offset-4 hover:decoration-[#3b5bff]"
              >
                (651) 439-8085
              </a>{" "}
              or{" "}
              <Link
                href="/contact-us"
                className="font-bold text-[#14306b] underline decoration-[#3b5bff]/40 underline-offset-4 hover:decoration-[#3b5bff]"
              >
                request an appointment online
              </Link>
              .
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="tel:(651)439-8085"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#14306b] px-7 py-4 text-sm font-mono font-semibold uppercase tracking-wider text-white shadow-lg shadow-[#14306b]/25 hover:bg-[#2744d6]"
              >
                <Phone className="h-4 w-4" />
                (651) 439-8085
              </a>
              <Link
                href="/contact-us"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-[#14306b]/20 bg-white px-7 py-4 text-sm font-mono font-semibold uppercase tracking-wider text-[#14306b] shadow-sm hover:border-[#3b5bff]/40 hover:bg-[#eaf1ff]"
              >
                Request online
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right: timeline of how it works */}
          <div className="lg:col-span-6">
            <div data-reveal-group className="relative space-y-4 sm:space-y-5">
              <div className="absolute left-[2.15rem] top-10 bottom-10 w-px bg-gradient-to-b from-[#3b5bff]/40 via-[#8b5cf6]/30 to-transparent sm:left-[2.4rem]" />
              {steps.map((s, i) => (
                <div
                  key={s.title}
                  className="card-lift grad-border group relative flex items-start gap-4 sm:gap-5 rounded-3xl border border-white bg-white/75 p-5 sm:p-6 shadow-lg shadow-[#14306b]/5 backdrop-blur-xl"
                >
                  <span className="relative flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0075ff] to-[#6d5dfc] text-white shadow-lg shadow-[#3b5bff]/30 transition-transform duration-300 group-hover:scale-105">
                    <s.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-mono font-bold text-[#14306b] shadow">
                      {i + 1}
                    </span>
                  </span>
                  <div className="min-w-0 pt-0.5">
                    <h3 className="font-heading text-xl sm:text-2xl leading-snug text-[#14306b]">{s.title}</h3>
                    <p className="mt-1.5 text-sm sm:text-base leading-relaxed text-[#14306b]/75">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
