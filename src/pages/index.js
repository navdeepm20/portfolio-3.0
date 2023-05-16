import { Raleway } from "next/font/google";
//components
import Navbar from "../components/navbar";
import Divider from "../components/divider";
//sections
import HeroSection from "../components/sections/hero";
import DeisgnationSection from "@components/sections/designation";
import BioSection from "@components/sections/bio";
import PortfolioSection from "@components/sections/portfolio";
import TestimonialSection from "@components/sections/testimonials";
import SkilsSection from "@components/sections/skills";
import FooterSection from "@components/sections/footer";
import ContactSection from "@components/sections/contact";
import CarrierSection from "@components/sections/carrier";

const raleway = Raleway({ subsets: ["latin"] });
//components

export default function Home() {
  return (
    <main className="px-[14rem] overflow-hidden" style={raleway.style}>
      {/* nav section */}
      <Navbar />
      {/* hero section */}
      <HeroSection />
      <Divider />
      <DeisgnationSection />
      <Divider />
      <BioSection />
      <SkilsSection />
      <CarrierSection />
      <PortfolioSection />
      <TestimonialSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
