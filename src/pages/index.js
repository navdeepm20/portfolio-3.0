import { Raleway } from "next/font/google";
//components
import Navbar from "../components/navbar";
//sections
import HeroSection from "../components/sections/hero";

const raleway = Raleway({ subsets: ["latin"] });
//components

export default function Home() {
  return (
    <main className="px-[14rem]" style={raleway.style}>
      {/* nav section */}
      <Navbar />
      {/* hero section */}
      <HeroSection />
    </main>
  );
}
