import type { Metadata } from "next";
import { Navbar } from "@/components/sites/simplesmile/Navbar";
import { MeetDoctor } from "@/components/sites/simplesmile/MeetDoctor";
import { StandardsTestimonials } from "@/components/sites/simplesmile/StandardsTestimonials";
import { WhyChooseUs } from "@/components/sites/simplesmile/WhyChooseUs";
import { ClinicAtmosphere } from "@/components/sites/simplesmile/ClinicAtmosphere";
import { Footer } from "@/components/sites/simplesmile/Footer";

export const metadata: Metadata = {
  title: "About Simple Smile Endodontics | Dr. Ernest Reeh | Stillwater, MN",
  description:
    "Learn about Dr. Ernest Reeh and Simple Smile Endodontics. Over 30 years of gentle, expert endodontic care and root canal therapy in Stillwater, MN.",
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
