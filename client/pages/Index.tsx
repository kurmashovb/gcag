import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { BenefitsSection } from "@/components/benefits-section";
import { HowWeWorkSection } from "@/components/how-we-work-section";
import { ContactSection } from "@/components/contact-section";

export default function Index() {
  return (
    <div className="w-full">
      <HeroSection />
      <ServicesSection />
      <BenefitsSection />
      <HowWeWorkSection />
      <ContactSection />
    </div>
  );
}
