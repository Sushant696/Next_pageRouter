import { Inter } from "next/font/google";
import Couter from "@/components/counter";
import Navbar from "@/components/UI/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Couter />
      <Navbar />
    </main>
  );
}
