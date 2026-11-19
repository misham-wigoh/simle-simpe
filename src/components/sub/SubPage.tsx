import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, ChevronRight, Phone, Plus } from "lucide-react";
import { Navbar } from "@/components/sites/simplesmile/Navbar";
import { Footer } from "@/components/sites/simplesmile/Footer";
import { PHONE, PHONE_HREF, getPage, type SubPage } from "@/lib/site-content";

const btnPrimary =
  "inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-mono font-semibold tracking-wider uppercase rounded-md transition-colors";

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */
function Hero({ page }: { page: SubPage }) {
  return (
    <section className="relative isolate overflow-hidden bg-[#060b1f] text-white">
      <div className="orb orb-a -top-32 -left-24 w-[28rem] h-[28rem] bg-[#0075ff]" data-parallax="30" />
      <div className="orb orb-b top-1/4 -right-32 w-[30rem] h-[30rem] bg-[#8b5cf6]" data-parallax="-40" />
      <div className="grid-fade absolute inset-0 opacity-40 invert" aria-hidden />

      <div className="relative max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-16 lg:pb-24">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-[#cfe0ff]/80">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 opacity-60" aria-hidden />
          <Link href={page.crumbHref} className="hover:text-white transition-colors">{page.crumb}</Link>
          <ChevronRight className="w-3.5 h-3.5 opacity-60" aria-hidden />
          <span className="text-white" aria-current="page">{page.title}</span>
        </nav>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <h1
              data-animate-text
              className="font-heading text-4xl sm:text-5xl lg:text-[3.6rem] leading-[1.08] text-[#eaf1ff] text-balance"
            >
              {page.title}
            </h1>
            <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-[#eaf1ff]/85">{page.lead}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={PHONE_HREF} className={`${btnPrimary} bg-[#cfe0ff] text-[#060b1f] hover:bg-white`}>
                <Phone className="w-3.5 h-3.5" /> {PHONE}
              </a>
              <Link
                href="/contact-us"
                className={`${btnPrimary} border border-[#cfe0ff]/40 text-[#eaf1ff] hover:bg-white/10`}
              >
                Request an appointment <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="grad-brand-frame rounded-[1.75rem] p-[1.5px]">
              <div data-animate-image className="relative aspect-[4/3] sm:aspect-[5/4] overflow-hidden rounded-[1.7rem] bg-[#14306b]">
                <Image
                  src={page.img}
                  alt={page.imgAlt}
                  fill
                  priority
                  sizes="(min-width:1024px) 40vw, 100vw"
                  className={`object-cover ${page.path.includes("doctor") ? "object-top" : "object-center"}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060b1f]/55 via-transparent to-transparent" />
                {page.chip && (
                  <div className="absolute left-4 bottom-4 inline-flex items-center gap-2 rounded-full bg-white/85 backdrop-blur-md px-3.5 py-2 text-xs font-semibold text-[#14306b] shadow-lg">
                    <span className="relative flex h-2 w-2">
                      <span className="ring-pulse absolute inset-0 rounded-full bg-[#3b5bff]" />
                      <span className="relative h-2 w-2 rounded-full bg-[#3b5bff]" />
                    </span>
                    {page.chip}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {page.facts && (
          <dl data-reveal-group className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {page.facts.map((f) => (
              <div key={f.label} className="rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-sm px-5 py-4">
                <dt className="text-xs text-[#cfe0ff]/70">{f.label}</dt>
                <dd className="mt-1 font-heading text-lg text-[#eaf1ff]">{f.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Pieces                                                              */
/* ------------------------------------------------------------------ */
function ShotCard({ page, large = false }: { page: SubPage; large?: boolean }) {
  const isDoctor = page.path.includes("doctor");
  return (
    <Link
      href={page.path}
      className={`card-lift grad-border group relative flex flex-col justify-end overflow-hidden rounded-2xl bg-[#14306b] ${
        large ? "min-h-[24rem] md:col-span-2 md:row-span-2 md:min-h-[34rem]" : "min-h-[18.5rem] md:min-h-[20.5rem]"
      }`}
    >
      <Image
        src={page.img}
        alt=""
        fill
        sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
        className={`object-cover transition-transform duration-700 group-hover:scale-105 ${
          isDoctor ? "object-top" : "object-center"
        }`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#060b1f]/95 via-[#060b1f]/50 to-transparent" />
      <div className="relative p-6 sm:p-7 text-white">
        <h3 className={`font-heading text-[#eaf1ff] ${large ? "text-3xl sm:text-4xl" : "text-xl sm:text-2xl"} text-balance`}>
          {page.title}
        </h3>
        <p className={`mt-2 text-sm text-white/85 leading-relaxed ${large ? "max-w-md" : "line-clamp-2"}`}>
          {page.lead}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-[#cfe0ff]">
          Learn more
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}

function CtaCard({ className = "" }: { className?: string }) {
  return (
    <div className={`spin-border rounded-2xl ${className}`}>
      <div className="relative rounded-[calc(1rem-1.5px)] m-[1.5px] bg-[#0b1738] p-6 text-white">
        <h3 className="font-heading text-2xl text-[#eaf1ff] leading-snug">In pain, or just have a question?</h3>
        <p className="mt-3 text-sm text-white/80 leading-relaxed">
          No referral needed. Call as early in the day as you can and we will work to see you the same day.
        </p>
        <a href={PHONE_HREF} className={`${btnPrimary} mt-5 w-full bg-[#cfe0ff] text-[#060b1f] hover:bg-white`}>
          <Phone className="w-3.5 h-3.5" /> {PHONE}
        </a>
        <Link
          href="/contact-us"
          className="mt-3 block text-center text-xs font-mono font-semibold uppercase tracking-wider text-[#cfe0ff] hover:text-white"
        >
          Or request online
        </Link>
      </div>
    </div>
  );
}

function Steps({ page }: { page: SubPage }) {
  if (!page.steps) return null;
  return (
    <div className="mt-16">
      <h2 className="font-heading text-2xl sm:text-3xl text-[#14306b] text-balance">{page.stepsTitle ?? "How it works"}</h2>
      <ol data-reveal-group className="mt-8 relative space-y-6 before:absolute before:left-[1.1rem] before:top-2 before:bottom-2 before:w-px before:bg-[#cfe0ff]">
        {page.steps.map((s, i) => (
          <li key={s.title} className="relative pl-14">
            <span className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full bg-[#14306b] text-[#cfe0ff] text-sm font-mono font-semibold ring-4 ring-white tabular-nums">
              {i + 1}
            </span>
            <h3 className="text-lg font-bold text-[#14306b]">{s.title}</h3>
            <p className="mt-1 text-[#14306b]/80 leading-relaxed">{s.text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

function Faqs({ page }: { page: SubPage }) {
  if (!page.faqs?.length) return null;
  return (
    <section className="bg-[#f6f8ff] border-y border-[#dfe5f4] py-16 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl sm:text-4xl text-[#14306b] text-center text-balance">Common questions</h2>
        <div data-reveal-group className="mt-10 space-y-3">
          {page.faqs.map((f) => (
            <details key={f.q} className="group rounded-2xl border border-[#dfe5f4] bg-white open:shadow-md open:border-[#3b5bff]/30 transition-shadow">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5 text-left font-bold text-[#14306b] [&::-webkit-details-marker]:hidden">
                {f.q}
                <Plus className="w-5 h-5 shrink-0 text-[#3b5bff] transition-transform duration-300 group-open:rotate-45" aria-hidden />
              </summary>
              <p className="px-5 pb-5 sm:px-6 sm:pb-6 text-[#14306b]/85 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Related({ page }: { page: SubPage }) {
  const items = (page.related ?? []).map(getPage).filter((p): p is SubPage => Boolean(p));
  if (!items.length) return null;
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl sm:text-4xl text-[#14306b] text-balance">Keep exploring</h2>
        <div data-reveal-group className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((p) => (
            <ShotCard key={p.path} page={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section className="relative isolate overflow-hidden bg-[#14306b] py-16 sm:py-20 text-white">
      <div className="orb orb-a -top-20 left-1/4 w-[22rem] h-[22rem] bg-[#3b5bff]" />
      <div className="orb orb-b -bottom-24 right-10 w-[22rem] h-[22rem] bg-[#8b5cf6] opacity-40" />
      <div className="relative max-w-3xl mx-auto px-4 text-center">
        <h2 data-animate-text className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[#eaf1ff] text-balance">
          Ready to feel better? Let&rsquo;s get you in.
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={PHONE_HREF} className={`${btnPrimary} bg-[#cfe0ff] text-[#060b1f] hover:bg-white`}>
            <Phone className="w-3.5 h-3.5" /> {PHONE}
          </a>
          <Link href="/contact-us" className={`${btnPrimary} border border-[#cfe0ff]/40 hover:bg-white/10`}>
            Request an appointment
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Bodies                                                              */
/* ------------------------------------------------------------------ */
function Prose({ page }: { page: SubPage }) {
  return (
    <>
      {page.overviewTitle && (
        <h2 className="font-heading text-2xl sm:text-4xl text-[#14306b] leading-tight text-balance">{page.overviewTitle}</h2>
      )}
      <div className="mt-6 space-y-5 text-base sm:text-lg leading-relaxed text-[#14306b]/85 max-w-[68ch]">
        {page.overview.map((t) => (
          <p key={t}>{t}</p>
        ))}
      </div>
    </>
  );
}

function TreatmentBody({ page }: { page: SubPage }) {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <article className="lg:col-span-8">
          <Prose page={page} />
          {page.signs && (
            <div className="mt-12 rounded-2xl bg-[#eaf1ff] p-6 sm:p-8">
              <h2 className="font-heading text-2xl text-[#14306b] text-balance">{page.signsTitle}</h2>
              <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                {page.signs.map((s) => (
                  <li key={s} className="flex gap-3 text-[#14306b]/90 leading-snug">
                    <Check className="w-5 h-5 shrink-0 text-[#3b5bff] mt-0.5" aria-hidden />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <Steps page={page} />
        </article>
        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-28 space-y-6">
            <CtaCard />
            {page.children === undefined && page.crumbHref !== "/about" && (
              <nav aria-label="More in this section" className="rounded-2xl border border-[#dfe5f4] p-5">
                <Link href={page.crumbHref} className="flex items-center justify-between font-bold text-[#14306b] hover:text-[#3b5bff]">
                  All {page.crumb} <ArrowRight className="w-4 h-4" />
                </Link>
              </nav>
            )}
          </div>
        </aside>
      </div>
    </section>
  );
}

function CategoryBody({ page }: { page: SubPage }) {
  const kids = (page.children ?? []).map(getPage).filter((p): p is SubPage => Boolean(p));
  return (
    <>
      <section className="bg-white pt-16 sm:pt-24">
        <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <Prose page={page} />
          </div>
        </div>
      </section>
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div
            data-reveal-group
            className={`grid grid-cols-1 gap-5 ${
              kids.length === 3 ? "md:grid-cols-3 md:auto-rows-[20.5rem]" : "md:grid-cols-2"
            }`}
          >
            {kids.map((k, i) => (
              <ShotCard key={k.path} page={k} large={i === 0 && kids.length === 3} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function AboutBody({ page }: { page: SubPage }) {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
        {page.overview.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <article className="lg:col-span-8">
              <Prose page={page} />
              <Steps page={page} />
            </article>
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <CtaCard />
              </div>
            </aside>
          </div>
        )}

        {page.gallery && (
          <div data-reveal-group className="mt-12 columns-1 sm:columns-2 lg:columns-3 gap-4 [&>*]:mb-4">
            {page.gallery.map((src, i) => (
              <div
                key={src}
                className={`relative overflow-hidden rounded-2xl bg-[#eaf1ff] break-inside-avoid ${
                  i % 3 === 0 ? "aspect-[4/5]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={src}
                  alt={`Simple Smile Endodontics office, view ${i + 1}`}
                  fill
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        )}

        {page.quotes && (
          <div data-reveal-group className="columns-1 md:columns-2 gap-5 [&>*]:mb-5">
            {page.quotes.map((q) => (
              <figure key={q.name} className="break-inside-avoid rounded-2xl border border-[#dfe5f4] bg-[#f6f8ff] p-6 sm:p-8 card-lift">
                <div className="flex gap-0.5 text-[#3b5bff]" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} viewBox="0 0 20 20" className="w-4 h-4 fill-current" aria-hidden>
                      <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.8 4.8 17.6l1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="mt-4 text-[#14306b]/90 leading-relaxed">&ldquo;{q.quote}&rdquo;</blockquote>
                <figcaption className="mt-5 font-bold text-[#14306b]">{q.name}</figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function BlogBody({ page }: { page: SubPage }) {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 text-lg leading-[1.75] text-[#14306b]/90">
          {page.overview.map((t) => (
            <p key={t}>{t}</p>
          ))}
        </div>
        <div className="mt-12">
          <CtaCard />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
export function SubPageView({ page }: { page: SubPage }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {page.kind === "blog" ? (
          <>
            <Hero page={{ ...page, chip: `${page.readTime}`, facts: undefined }} />
            <BlogBody page={page} />
          </>
        ) : (
          <>
            <Hero page={page} />
            {page.kind === "category" && <CategoryBody page={page} />}
            {(page.kind === "treatment" || page.kind === "info") && <TreatmentBody page={page} />}
            {page.kind === "about" && <AboutBody page={page} />}
            <Faqs page={page} />
          </>
        )}
        <Related page={page} />
        <Closing />
      </main>
      <Footer />
    </div>
  );
}
