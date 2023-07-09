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
import SkillsSection from "@components/sections/skills";
import FooterSection from "@components/sections/footer";
import ContactSection from "@components/sections/contact";
import CarrierSection from "@components/sections/carrier";
import VideoSection from "@components/sections/videos";

const raleway = Raleway({ subsets: ["latin"] });
//components

//data
import data from "@public/data/data.json";

export default function Home() {
  return (
    <main
      className="px-[3rem] sm:px-[6rem] md:px-[12rem] lg:px-[14rem] overflow-hidden snap-y main-container"
      style={raleway.style}
    >
      {/* nav section */}

      <Navbar />
      {/* hero section */}
      {data?.personal?.show && <HeroSection />}

      <Divider />
      {data?.designation?.show && <DeisgnationSection />}

      <Divider />
      {data?.about?.show && <BioSection />}

      {data?.skills?.show && <SkillsSection />}

      {data?.carrier?.show && <CarrierSection />}

      {data?.portfolio?.show && <PortfolioSection />}
      {data?.videos?.show && <VideoSection />}
      {data?.testimonials?.show && <TestimonialSection />}
      {data?.contact?.show && <ContactSection />}

      <FooterSection />
    </main>
  );
}
