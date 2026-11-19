import type { Metadata } from "next";
import { Navbar } from "@/components/sites/simplesmile/Navbar";
import { ContactHero } from "@/components/sites/simplesmile/ContactHero";
import { ContactFormSection } from "@/components/sites/simplesmile/ContactFormSection";
import { ContactLocation } from "@/components/sites/simplesmile/ContactLocation";
import { ContactHours } from "@/components/sites/simplesmile/ContactHours";
import { Footer } from "@/components/sites/simplesmile/Footer";

export const metadata: Metadata = {
  title: "Contact Us | Simple Smile Endodontics Stillwater MN",
  description:
    "Contact Simple Smile Endodontics in Stillwater, MN. Call (651) 439-8085 to schedule root canal therapy, apicoectomy, or emergency endodontic care.",
};

export default function ContactUsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <ContactHero />
        <ContactFormSection />
        <ContactLocation />
        <ContactHours />
      </main>
      <Footer />
    </div>
  );
}
