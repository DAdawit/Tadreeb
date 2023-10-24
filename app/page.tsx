import Footer from "@/common/Footer";
import AboutUs from "@/components/Home/AboutUs";
import AboutUs2 from "@/components/Home/AboutUs2";
import Certificates from "@/components/Home/Certificates";
import Courses from "@/components/Home/Courses";
import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import UpcomingCourses from "@/components/Home/UpcomingCourses";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Courses />
      <UpcomingCourses />
      <Certificates />
      {/* <AboutUs2 /> */}
      <AboutUs />
    </main>
  );
}
