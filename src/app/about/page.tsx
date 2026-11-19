import type { Metadata } from "next";
import { Navbar } from "@/components/sites/simplesmile/Navbar";
import { MeetDoctor } from "@/components/sites/simplesmile/MeetDoctor";
import { StandardsTestimonials } from "@/components/sites/simplesmile/StandardsTestimonials";
import { WhyChooseUs } from "@/components/sites/simplesmile/WhyChooseUs";
import { ClinicAtmosphere } from "@/components/sites/simplesmile/ClinicAtmosphere";
import { Footer } from "@/components/sites/simplesmile/Footer";

export const metadata: Metadata = {
  title: "About Dr. Ernest Reeh & Our Stillwater Practice",
  description:
    "Meet Dr. Ernest Reeh — over 30 years of gentle, expert endodontic care. Learn about our advanced technology, compassionate team, and Top Dentist recognition at Simple Smile Endodontics in Stillwater, MN.",
  alternates: { canonical: "https://www.simplesmileendo.com/about" },
  openGraph: {
    title: "About Dr. Ernest Reeh & Our Stillwater Practice | Simple Smile Endodontics",
    description:
      "Meet Dr. Ernest Reeh — 30+ years of gentle endodontic care. Advanced 3D CBCT imaging, compassionate team, Top Dentist since 2007.",
    url: "https://www.simplesmileendo.com/about",
    images: [{ url: "https://www.simplesmileendo.com/images/stock/doctor.jpg", width: 1000, height: 1250, alt: "Dr. Ernest Reeh — Endodontist" }],
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <MeetDoctor />
        <WhyChooseUs />
        <StandardsTestimonials />
        <ClinicAtmosphere />
      </main>
      <Footer />
    </div>
  );
}
