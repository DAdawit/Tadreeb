import Footer from "@/common/Footer";
import AboutUs from "@/components/Home/AboutUs";
import Certificates from "@/components/Home/Certificates";
import Courses from "@/components/Home/Courses";
import Hero from "@/components/Home/Hero";
import Trainings from "@/components/Home/Trainings";
import UpcomingCourses from "@/components/Home/UpcomingCourses";

export default function Home() {
  return (
    <main>
      <Hero />
      <div></div>
      <Trainings />
      <Courses />
      <UpcomingCourses />
      <Certificates />
      <AboutUs />
    </main>
  );
}
