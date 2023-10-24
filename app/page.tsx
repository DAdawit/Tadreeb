import Footer from "@/common/Footer";
import AboutUs from "@/components/Home/AboutUs";
import Certificates from "@/components/Home/Certificates";
import Courses from "@/components/Home/Courses";
import Hero from "@/components/Home/Hero";
import Hero2 from "@/components/Home/Hero2";
import Services from "@/components/Home/Services";
import UpcomingCourses from "@/components/Home/UpcomingCourses";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <Hero2 /> */}
      <Services />
      <Courses />
      <UpcomingCourses />
      <Certificates />
      <AboutUs />
    </main>
  );
}
