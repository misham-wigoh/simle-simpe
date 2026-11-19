import Image from "next/image";

const clinicImages = [
  {
    src: "/images/stock/clinic-1.jpg",
    alt: "Simple Smile Endodontics Consultation Operatory",
  },
  {
    src: "/images/stock/clinic-2.jpg",
    alt: "Warm & Calming Office Reception",
  },
  {
    src: "/images/stock/clinic-3.jpg",
    alt: "Modern Treatment Suite",
  },
  {
    src: "/images/stock/clinic-4.jpg",
    alt: "Advanced Endodontic Microscope Equipment",
  },
  {
    src: "/images/stock/clinic-5.jpg",
    alt: "Comfortable Patient Experience",
  },
];

export function ClinicAtmosphere() {
  return (
    <section className="w-full bg-[#14306b] text-white overflow-hidden border-b border-[#060b1f]">
      <div data-scatter className="relative">
        <div className="orb orb-a top-20 -left-20 w-[24rem] h-[24rem] bg-[#0075ff] opacity-30" data-parallax="50" />
        <div className="orb orb-b bottom-10 -right-24 w-[26rem] h-[26rem] bg-[#8b5cf6] opacity-30" data-parallax="-50" />
        {/* Content fades + scales out as the images scatter (scroll-scrubbed) */}
        <div data-scatter-content className="sticky top-16 z-0 will-change-[opacity,transform]">
          <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-6 sm:pt-28 sm:pb-8">
            <div className="max-w-3xl mx-auto text-center ">
          <div data-animate-text className="inline-block text-xs font-mono font-bold tracking-wider uppercase text-[#cfe0ff] mb-3">
            Creating Smiles, Building Trust
          </div>
          <h2 data-animate-text className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] text-white leading-tight">
            Welcome to Our Clinic: Where Comfort Meets Expertise
          </h2>
          <p data-animate-text className="mt-4 text-base sm:text-lg text-[#eaf1ff]/90">
            See the welcoming atmosphere and the smiles we’re honored to create.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-mono font-semibold tracking-wider uppercase bg-[#eaf1ff] text-[#060b1f] hover:bg-white rounded-md transition-colors shadow-md"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M22 12.0611C22 6.50451 17.5229 2 12 2C6.47715 2 2 6.50451 2 12.0611C2 17.0828 5.65684 21.2452 10.4375 22V14.9694H7.89844V12.0611H10.4375V9.84452C10.4375 7.32296 11.9305 5.93012 14.2146 5.93012C15.3088 5.93012 16.4531 6.12663 16.4531 6.12663V8.60261H15.1922C13.95 8.60261 13.5625 9.37822 13.5625 10.1739V12.0611H16.3359L15.8926 14.9694H13.5625V22C18.3432 21.2452 22 17.083 22 12.0611Z" />
              </svg>
              <span>Join Our Community!</span>
            </a>
          </div>
        </div>

          </div>
        </div>

        {/* Scattering image stack */}
        <div className="relative z-10 h-[420px] sm:h-[520px] lg:h-[567px] overflow-hidden">
          {clinicImages.map((img, idx) => (
            <div
              key={idx}
              data-scatter-img={idx + 1}
              className="absolute left-1/2 top-1/2 -ml-[min(17vw,9.5rem)] -mt-[min(17vw,9.5rem)] w-[min(34vw,19rem)] aspect-square rounded-xl overflow-hidden shadow-xl will-change-transform"
              style={idx === 0 ? { transform: "translateY(30px)" } : undefined}
            >
              <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 40vw, 304px" className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
