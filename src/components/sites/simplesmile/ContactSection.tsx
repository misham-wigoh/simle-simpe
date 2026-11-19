"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, ArrowRight, CheckCircle2 } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    smsConsent: false,
    privacyConsent: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacyConsent) {
      alert("Please agree to the Privacy Policy and Terms of Use.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact-us" className="w-full bg-[#060b1f] py-16 sm:py-24 text-white">
      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div data-animate-text className="inline-block text-xs font-mono font-bold tracking-wider uppercase text-[#cfe0ff] mb-3">
            Get in Touch
          </div>
          <h2 data-animate-text className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] text-white leading-tight">
            Contact Us For an Appointment
          </h2>
          <p data-animate-text className="mt-4 text-base sm:text-lg text-[#eaf1ff]/90 leading-relaxed">
            Get expert endodontic care in a comfortable setting. Contact us now to share your information
            and learn more about your treatment options.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Form */}
          <div data-reveal className="lg:col-span-6 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-10 backdrop-blur-md">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                <CheckCircle2 className="w-14 h-14 text-[#00b4d8] mx-auto" />
                <h3 className="font-heading text-2xl text-white">Thank You!</h3>
                <p className="text-base text-[#eaf1ff]/90">
                  Your submission has been received. Our team will contact you shortly to confirm your
                  appointment.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      message: "",
                      smsConsent: false,
                      privacyConsent: false,
                    });
                  }}
                  className="mt-4 inline-flex items-center px-4 py-2 text-xs font-mono uppercase tracking-wider bg-[#14306b] text-[#cfe0ff] rounded hover:bg-[#2a4a9a]"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#eaf1ff] mb-2">
                    Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#cfe0ff] focus:border-transparent text-sm"
                    placeholder="Your Full Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#eaf1ff] mb-2">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#cfe0ff] focus:border-transparent text-sm"
                    placeholder="name@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#eaf1ff] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#cfe0ff] focus:border-transparent text-sm"
                    placeholder="Type your message..."
                  />
                </div>

                <div className="space-y-3 pt-2 text-xs text-white/80">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.smsConsent}
                      onChange={(e) => setFormData({ ...formData, smsConsent: e.target.checked })}
                      className="mt-1 rounded border-white/30 text-[#14306b] focus:ring-[#cfe0ff] h-4 w-4 shrink-0"
                    />
                    <span>
                      By checking this box, you agree to receive SMS care related updates from{" "}
                      <span className="text-[#cfe0ff] font-medium">Simple Smile Endodontics</span> at
                      the phone number provided. Message frequency may vary. Message and data rates may
                      apply. Reply STOP to opt out or HELP for help. Consent is not a condition of purchase.
                    </span>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={formData.privacyConsent}
                      onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
                      className="mt-1 rounded border-white/30 text-[#14306b] focus:ring-[#cfe0ff] h-4 w-4 shrink-0"
                    />
                    <span>
                      I have read and agree to the{" "}
                      <Link href="/privacy-policy" className="underline text-[#cfe0ff]">
                        Privacy Policy
                      </Link>{" "}
                      and{" "}
                      <Link href="/terms" className="underline text-[#cfe0ff]">
                        Terms Of Use
                      </Link>{" "}
                      *
                    </span>
                  </label>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center py-3.5 px-6 rounded-md font-mono font-bold text-sm uppercase tracking-wider bg-[#14306b] text-[#cfe0ff] hover:bg-[#2a4a9a] transition-colors shadow-lg disabled:opacity-50"
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Contact Cards + Clinic Photo */}
          <div className="lg:col-span-6 space-y-6">
            <div data-reveal-group className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Office Address */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3 card-lift">
                <div className="flex items-center gap-2 text-[#cfe0ff]">
                  <MapPin className="w-5 h-5 text-[#cfe0ff]" />
                  <h3 className="font-heading text-lg font-medium text-white">Office</h3>
                </div>
                <p className="text-sm text-white/90 leading-relaxed">
                  13941 60th St N,
                  <br />
                  Stillwater, MN 55082
                </p>
                <div>
                  <a
                    href="https://www.google.com/maps"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-[#cfe0ff] hover:text-white"
                  >
                    <span>Get Directions</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3 card-lift">
                <div className="flex items-center gap-2 text-[#cfe0ff]">
                  <Phone className="w-5 h-5 text-[#cfe0ff]" />
                  <h3 className="font-heading text-lg font-medium text-white">Phone</h3>
                </div>
                <p className="text-sm text-white/90 leading-relaxed">
                  (651) 439-8085
                </p>
                <div>
                  <a
                    href="tel:(651)439-8085"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-[#cfe0ff] hover:text-white"
                  >
                    <span>Call Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Building Photo */}
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9] shadow-xl border border-white/10">
              <Image
                src="/images/stock/contact-building.jpg"
                alt="Simple Smile Endodontics Building in Stillwater MN"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
