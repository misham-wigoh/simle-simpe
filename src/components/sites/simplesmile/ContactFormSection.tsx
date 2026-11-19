"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Phone, ArrowUpRight, CheckCircle2, Clock } from "lucide-react";

export function ContactFormSection() {
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
    <section id="contact-form" className="w-full bg-[#0b1738] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[76rem] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div
                data-animate-text
                className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#cfe0ff] mb-2"
              >
                GET IN TOUCH
              </div>
              <h2
                data-animate-text
                className="font-heading text-3xl sm:text-4xl text-white font-normal leading-tight"
              >
                Contact Us
              </h2>
              <p data-animate-text className="mt-2 text-sm sm:text-base text-white/80 leading-relaxed">
                Whether you need an appointment or have questions, our team is ready to assist you.
              </p>
            </div>

            {submitted ? (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-10 text-center space-y-4 animate-in fade-in duration-300">
                <CheckCircle2 className="w-12 h-12 text-[#cfe0ff] mx-auto" />
                <h3 className="font-heading text-2xl text-white">Thank You!</h3>
                <p className="text-sm text-white/85 max-w-md mx-auto">
                  Your message has been received. A member of our team will be in touch shortly to assist you.
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
                  className="mt-2 inline-flex items-center px-5 py-2 text-xs font-semibold rounded-md bg-[#cfe0ff] text-[#060b1f] hover:bg-[#eaf1ff] transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-medium text-white/90 mb-1.5">
                    Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white text-slate-900 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#cfe0ff] border border-transparent shadow-xs"
                    placeholder="Your Full Name"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-medium text-white/90 mb-1.5">
                    Email *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white text-slate-900 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#cfe0ff] border border-transparent shadow-xs"
                    placeholder="name@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-medium text-white/90 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white text-slate-900 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#cfe0ff] border border-transparent shadow-xs resize-y"
                    placeholder="Your message..."
                  />
                </div>

                <div className="space-y-3 pt-2 text-xs text-white/75">
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.smsConsent}
                      onChange={(e) => setFormData({ ...formData, smsConsent: e.target.checked })}
                      className="mt-0.5 rounded border-white/30 text-[#0b1738] focus:ring-[#cfe0ff] h-4 w-4 shrink-0"
                    />
                    <span className="leading-relaxed">
                      By checking this box, you agree to receive SMS care related updates from{" "}
                      <span className="text-[#cfe0ff] font-medium">Simple Smile Endodontics</span> at
                      the phone number provided. Message frequency may vary. Message and data rates may
                      apply. Reply STOP to opt out or HELP for help. Consent is not a condition of purchase.
                    </span>
                  </label>

                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={formData.privacyConsent}
                      onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
                      className="mt-0.5 rounded border-white/30 text-[#0b1738] focus:ring-[#cfe0ff] h-4 w-4 shrink-0"
                    />
                    <span className="leading-relaxed">
                      I have read and agree to the{" "}
                      <Link href="/privacy-policy" className="underline text-[#cfe0ff] hover:text-white">
                        Privacy Policy
                      </Link>{" "}
                      and{" "}
                      <Link href="/terms" className="underline text-[#cfe0ff] hover:text-white">
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
                    className="inline-flex items-center justify-center px-7 py-2.5 rounded-md font-semibold text-xs uppercase tracking-wider bg-[#cfe0ff] hover:bg-[#eaf1ff] text-[#060b1f] transition-all shadow-sm hover:shadow disabled:opacity-50"
                  >
                    {loading ? "Sending..." : "Send"}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6 lg:pt-10">
            {/* Office Address */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#cfe0ff]">
                <MapPin className="w-4 h-4 text-[#cfe0ff]" />
                <h3 className="font-heading text-lg font-medium text-white">Office</h3>
              </div>
              <p className="text-sm text-white/85 leading-relaxed pl-6">
                13941 60th St N,
                <br />
                Stillwater, MN 55082
              </p>
              <div className="pl-6 pt-1">
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#cfe0ff] hover:text-white transition-colors"
                >
                  <span>Get Directions</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-2 pt-2 border-t border-white/10">
              <div className="flex items-center gap-2 text-[#cfe0ff]">
                <Phone className="w-4 h-4 text-[#cfe0ff]" />
                <h3 className="font-heading text-lg font-medium text-white">Phone</h3>
              </div>
              <p className="text-sm text-white/85 leading-relaxed pl-6">
                (651) 439-8085
              </p>
              <div className="pl-6 pt-1">
                <a
                  href="tel:(651)439-8085"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#cfe0ff] hover:text-white transition-colors"
                >
                  <span>Call Now</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Hours summary note */}
            <div className="space-y-2 pt-2 border-t border-white/10">
              <div className="flex items-center gap-2 text-[#cfe0ff]">
                <Clock className="w-4 h-4 text-[#cfe0ff]" />
                <h3 className="font-heading text-lg font-medium text-white">Availability</h3>
              </div>
              <p className="text-xs text-white/75 leading-relaxed pl-6">
                Direct appointments &amp; same-day dental emergency evaluations available. We recommend
                calling early in the day for immediate care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
