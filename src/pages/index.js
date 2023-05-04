import { Inter } from "next/font/google";
import Navbar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });
//components

export default function Home() {
  return (
    <main>
      <Navbar />
    </main>
  );
}
