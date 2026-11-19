import type { Metadata } from "next";
import { Navbar } from "@/components/sites/simplesmile/Navbar";
import { ContactHero } from "@/components/sites/simplesmile/ContactHero";
import { ContactFormSection } from "@/components/sites/simplesmile/ContactFormSection";
import { ContactLocation } from "@/components/sites/simplesmile/ContactLocation";
import { ContactHours } from "@/components/sites/simplesmile/ContactHours";
import { Footer } from "@/components/sites/simplesmile/Footer";

export const metadata: Metadata = {
  title: "Contact Us — Schedule an Appointment",
  description:
    "Contact Simple Smile Endodontics in Stillwater, MN. Call (651) 439-8085 to schedule root canal therapy, apicoectomy, dental implants, or same-day emergency endodontic care. Located at 13941 60th St N, Stillwater, MN 55082.",
  alternates: { canonical: "https://www.simplesmileendo.com/contact-us" },
  openGraph: {
    title: "Contact Us — Simple Smile Endodontics Stillwater MN",
    description: "Schedule an appointment: (651) 439-8085. 13941 60th St N, Stillwater, MN 55082. Mon–Thu 7:30 AM – 4:30 PM.",
    url: "https://www.simplesmileendo.com/contact-us",
  },
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
