import Image from "next/image";
import Link from "next/link";

export function FinancingOptions() {
  return (
    <section className="w-full bg-white py-16 sm:py-24 border-b border-[#dfe5f4]">
      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: 4 Logos Grid */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div data-reveal-group className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="flex items-center justify-center p-6 bg-[#f6f8ff] card-lift rounded-xl border border-[#dfe5f4] shadow-2xs h-28">
                <Image
                  src="/sites/simplesmile/67ab8694bc98e7d30aa27b70_Care%20Credit.svg"
                  alt="CareCredit Dental Financing"
                  width={140}
                  height={50}
                  className="max-h-12 w-auto object-contain"
                />
              </div>

              <div className="flex items-center justify-center p-6 bg-[#f6f8ff] card-lift rounded-xl border border-[#dfe5f4] shadow-2xs h-28">
                <Image
                  src="/sites/simplesmile/67ab86a3a0b2d39659dbb57e_Cherry.svg"
                  alt="Cherry Payment Plans"
                  width={140}
                  height={50}
                  className="max-h-10 w-auto object-contain"
                />
              </div>

              <div className="flex items-center justify-center p-6 bg-[#f6f8ff] card-lift rounded-xl border border-[#dfe5f4] shadow-2xs h-28">
                <Image
                  src="/sites/simplesmile/67ab86c12f7c107453b1cf33_Dental%20Insurance.svg"
                  alt="Dental Insurance Accepted"
                  width={140}
                  height={50}
                  className="max-h-12 w-auto object-contain"
                />
              </div>

              <div className="flex items-center justify-center p-6 bg-[#f6f8ff] card-lift rounded-xl border border-[#dfe5f4] shadow-2xs h-28">
                <Image
                  src="/sites/simplesmile/67ab86d0cb8a883f8952a2b7_insurance-2.svg"
                  alt="Major Insurance Providers"
                  width={140}
                  height={50}
                  className="max-h-12 w-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div data-animate-text className="inline-block text-xs font-mono font-bold tracking-wider uppercase text-[#3b5bff]">
              Insurance &amp; Payment
            </div>
            <h2 data-animate-text className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] text-[#14306b] leading-tight">
              Flexible Payment and Financing Options
            </h2>
            <p data-animate-text className="text-base sm:text-lg text-[#14306b]/85 leading-relaxed">
              At Simple Smile Endodontics, we make quality care accessible with flexible payment options.
              We accept most insurance plans and major credit cards and offer financing through CareCredit
              and Cherry. Additionally, we offer a discount for payments made in cash or by check.
            </p>
            <div className="pt-2">
              <Link
                href="/patient-info/new-patient-experience"
                className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-mono font-semibold tracking-wider uppercase bg-[#14306b] text-[#cfe0ff] hover:bg-[#060b1f] rounded-md transition-colors shadow-sm"
              >
                Learn More About our Payment Options
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
