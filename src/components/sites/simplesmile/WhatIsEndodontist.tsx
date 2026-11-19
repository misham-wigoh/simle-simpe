import Link from "next/link";
import { Award, Phone, RefreshCw, Stethoscope, Zap } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "A toothache that will not settle",
    text: "Pain that lingers or keeps coming back is the most common reason people call us.",
    tone: "from-[#3b5bff] to-[#8b5cf6]",
  },
  {
    icon: Stethoscope,
    title: "A tooth your dentist wants evaluated",
    text: "Your dentist wants a specialist to take a closer look at the inside of the tooth.",
    tone: "from-[#0075ff] to-[#00b4d8]",
  },
  {
    icon: RefreshCw,
    title: "A root canal still causing trouble",
    text: "A previous root canal that has not healed may be a candidate for retreatment.",
    tone: "from-[#14306b] to-[#3b5bff]",
  },
];

const linkClass =
  "font-bold text-[#14306b] underline decoration-[#3b5bff]/40 underline-offset-4 transition-colors hover:text-[#3b5bff] hover:decoration-[#3b5bff]";

export function WhatIsEndodontist() {
  return (
    <section
      id="what-is-an-endodontist"
      className="relative w-full overflow-hidden bg-white py-16 sm:py-24 border-b border-[#dfe5f4]"
    >
      <div className="orb orb-a -top-32 -left-24 w-96 h-96 bg-[#cfe0ff] opacity-60" />
      <div className="orb orb-b bottom-0 -right-24 w-96 h-96 bg-[#e6dcff] opacity-60" />

      <div className="relative max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left: explanation */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div
              data-animate-text
              className="inline-block text-xs font-mono font-bold tracking-wider uppercase text-[#3b5bff] mb-3"
            >
              Endodontics explained
            </div>
            <h2
              data-animate-text
              className="font-heading text-3xl sm:text-4xl lg:text-[2.6rem] leading-[1.15] text-[#14306b]"
            >
              What Is an Endodontist, and When Should You See One?
            </h2>
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#14306b]/85">
              An endodontist is a dentist who completed extra years of specialty training focused on the
              inside of the tooth. We spend our days on{" "}
              <Link href="/services/endodontics/root-canal-therapy" className={linkClass}>
                root canals
              </Link>
              ,{" "}
              <Link href="/services/endodontics/endodontic-retreatment" className={linkClass}>
                retreatment of root canals that did not heal
              </Link>
              , and microsurgery like{" "}
              <Link href="/services/oral-surgery/apicoectomy" className={linkClass}>
                apicoectomy
              </Link>
              .{" "}
              <Link href="/about/meet-the-doctor" className={linkClass}>
                Dr. Reeh
              </Link>{" "}
              has done this work for more than 30 years.
            </p>

            <div
              data-reveal
              className="card-lift mt-8 inline-flex items-center gap-4 rounded-2xl border border-[#dfe5f4] bg-white/80 p-4 pr-6 shadow-md backdrop-blur-md"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0075ff] to-[#3b5bff] text-white">
                <Award className="h-6 w-6" />
              </span>
              <span>
                <span className="block font-heading text-3xl leading-none text-[#14306b]">30+</span>
                <span className="mt-1 block text-xs font-mono font-semibold uppercase tracking-wider text-[#5b6b8f]">
                  Years with Dr. Reeh
                </span>
              </span>
            </div>
          </div>

          {/* Right: reason cards */}
          <div className="lg:col-span-7">
            <p className="mb-5 text-sm font-mono font-semibold uppercase tracking-wider text-[#5b6b8f]">
              Most people come to us for one of three reasons
            </p>

            <div data-reveal-group className="space-y-4 sm:space-y-5">
              {reasons.map((r, i) => (
                <div
                  key={r.title}
                  className="card-lift grad-border group relative flex items-start gap-5 rounded-3xl border border-[#dfe5f4] bg-white p-5 sm:p-7 shadow-md"
                >
                  <span
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${r.tone} text-white shadow-lg shadow-[#3b5bff]/25 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}
                  >
                    <r.icon className="h-6 w-6" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-heading text-xl sm:text-2xl leading-snug text-[#14306b]">
                      {r.title}
                    </h3>
                    <p className="mt-1.5 text-sm sm:text-base leading-relaxed text-[#14306b]/75">
                      {r.text}
                    </p>
                  </div>
                  <span className="font-mono text-3xl font-bold text-[#14306b]/10 transition-colors group-hover:text-[#3b5bff]/30">
                    0{i + 1}
                  </span>
                </div>
              ))}

              {/* Referral note */}
              <div className="relative overflow-hidden rounded-3xl bg-[#060b1f] p-6 sm:p-8 text-white shadow-xl">
                <div className="orb orb-b -top-16 -right-10 w-64 h-64 bg-[#3b5bff] opacity-40" />
                <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-md text-base sm:text-lg leading-relaxed text-[#cfe0ff]">
                    You do not need a referral to call us. If you are in pain, tell us when you call and we
                    will work to get you in the same day.
                  </p>
                  <a
                    href="tel:(651)439-8085"
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-mono font-semibold uppercase tracking-wider text-[#14306b] hover:bg-[#eaf1ff]"
                  >
                    <Phone className="h-4 w-4" />
                    (651) 439-8085
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
