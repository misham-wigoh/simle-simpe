import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/sites/simplesmile/Navbar";
import { Footer } from "@/components/sites/simplesmile/Footer";
import { blogPosts } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Dental Health Blog — Patient Guides & Articles",
  description:
    "Plain-language answers about root canals, tooth pain, endodontic procedures, and oral health from Simple Smile Endodontics in Stillwater, MN.",
  alternates: { canonical: "https://www.simplesmileendo.com/blog" },
  openGraph: {
    title: "Dental Health Blog | Simple Smile Endodontics",
    description: "Educational guides on root canals, tooth pain, and endodontic care.",
    url: "https://www.simplesmileendo.com/blog",
  },
};

export default function BlogIndex() {
  const [lead, ...rest] = blogPosts;
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 bg-[#f6f8ff]">
        <section className="relative isolate overflow-hidden bg-[#060b1f] text-white">
          <div className="orb orb-a -top-32 -left-24 w-[26rem] h-[26rem] bg-[#0075ff]" />
          <div className="orb orb-b top-1/3 -right-32 w-[28rem] h-[28rem] bg-[#8b5cf6]" />
          <div className="relative max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <h1 data-animate-text className="font-heading text-4xl sm:text-5xl lg:text-[3.6rem] leading-[1.08] text-[#eaf1ff] max-w-3xl text-balance">
              Straight answers about your teeth
            </h1>
            <p className="mt-6 max-w-xl text-lg text-[#eaf1ff]/85 leading-relaxed">
              Short, plain-language guides from our team on root canals, tooth pain and what to expect.
            </p>
          </div>
        </section>

        <section className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <div data-reveal-group className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[lead, ...rest].map((p, i) => (
              <Link
                key={p.path}
                href={p.path}
                className={`card-lift grad-border group relative flex flex-col justify-end overflow-hidden rounded-2xl bg-[#14306b] ${
                  i === 0 ? "md:col-span-2 min-h-[26rem]" : "min-h-[20rem]"
                }`}
              >
                <Image src={p.img} alt={p.imgAlt || p.title} fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060b1f]/95 via-[#060b1f]/50 to-transparent" />
                <div className="relative p-6 sm:p-8 text-white">
                  <p className="text-xs text-[#cfe0ff]/80">{p.readTime}</p>
                  <h2 className={`mt-2 font-heading text-[#eaf1ff] text-balance ${i === 0 ? "text-3xl sm:text-4xl max-w-2xl" : "text-2xl"}`}>
                    {p.title}
                  </h2>
                  <p className="mt-3 max-w-xl text-sm text-white/85 leading-relaxed">{p.lead}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-[#cfe0ff]">
                    Read article <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
