import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

const services = [
  {
    title: "Root Canal Therapy",
    desc: "Save your natural teeth with expert, pain-relieving treatment.",
    link: "/services/endodontics/root-canal-therapy",
    img: "/images/stock/service-root-canal.jpg",
  },
  {
    title: "Dental Implants",
    desc: "Restore missing teeth with durable, long-lasting implants.",
    link: "/services/restorative-dentistry/dental-implants",
    img: "/images/stock/service-implants.jpg",
  },
  {
    title: "Endodontic Retreatment",
    desc: "Resolve issues from previous root canals with expert care.",
    link: "/services/endodontics/endodontic-retreatment",
    img: "/images/stock/service-retreatment.jpg",
  },
  {
    title: "Apicoectomy",
    desc: "Precise microsurgical treatment to preserve your tooth.",
    link: "/services/oral-surgery/apicoectomy",
    img: "/images/stock/service-surgery.jpg",
  },
  {
    title: "Cracked Teeth Treatment",
    desc: "Specialized care to prevent further damage and tooth loss.",
    link: "/services/oral-surgery/cracked-teeth-treatment",
    img: "/images/stock/service-cracked-teeth.jpg",
  },
];

export function FeaturedServices() {
  return (
    <section className="w-full bg-[#eaf1ff] py-16 sm:py-24 border-b border-[#dfe5f4]">
      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div data-animate-text className="inline-block text-xs font-mono font-bold tracking-wider uppercase text-[#3b5bff] mb-2">
            Our Featured Services
          </div>
          <h2 data-animate-text className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] text-[#14306b] leading-tight">
            Specialized Endodontic &amp; Restorative Care
          </h2>
        </div>

        {/* 6-Card Grid */}
        <div data-reveal-group className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="card-lift grad-border group relative rounded-2xl overflow-hidden shadow-md min-h-[340px] flex flex-col justify-end p-6 sm:p-8"
            >
              {/* Background Image */}
              <Image
                src={item.img}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#060b1f]/95 via-[#060b1f]/60 to-transparent transition-opacity group-hover:opacity-90" />

              {/* Text & Action */}
              <div className="relative z-10 text-white space-y-2">
                <h3 className="font-heading text-xl sm:text-2xl text-[#eaf1ff] font-medium">
                  {item.title}
                </h3>
                <p className="text-sm text-white/90 leading-relaxed">
                  {item.desc}
                </p>
                <div className="pt-2">
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-[#cfe0ff] hover:text-white transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* 6th Card: Ready to Restore Your Smile CTA */}
          <div className="card-lift grad-border group relative rounded-2xl overflow-hidden shadow-md min-h-[340px] flex flex-col justify-end p-6 sm:p-8 bg-[#14306b]">
            <Image
              src="/images/stock/service-emergency.jpg"
              alt="Ready To Restore Your Smile"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
              className="object-cover opacity-30 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060b1f] via-[#14306b]/80 to-transparent" />

            <div className="relative z-10 text-white space-y-4">
              <h3 data-animate-text className="font-heading text-2xl sm:text-3xl text-[#cfe0ff] font-medium leading-tight">
                Ready To Restore Your Smile?
              </h3>
              <p data-animate-text className="text-sm text-white/90 leading-relaxed">
                Contact our friendly team today to schedule your consultation or same-day emergency visit.
              </p>
              <div>
                <a
                  href="tel:6514398085"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-semibold tracking-wider uppercase bg-[#cfe0ff] text-[#060b1f] hover:bg-white rounded-md transition-colors shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
