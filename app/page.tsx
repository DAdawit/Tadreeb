import Courses from "@/components/Home/Courses";
import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Courses />
    </main>
  );
}
