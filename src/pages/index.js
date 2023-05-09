import { Raleway } from "next/font/google";
//components
import Navbar from "../components/navbar";
import Divider from "../components/divider";
//sections
import HeroSection from "../components/sections/hero";
import DeisgnationSection from "../components/sections/designation";

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
    </main>
  );
}
