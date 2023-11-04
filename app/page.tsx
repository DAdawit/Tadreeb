import Footer from "@/common/Footer";
import AboutUs from "@/components/Home/AboutUs";
import Certificates from "@/components/Home/Certificates";
import Courses from "@/components/Home/CategoryTrainings";
import Hero from "@/components/Home/Hero";
import Trainings from "@/components/Home/Trainings";
import UpcomingCourses from "@/components/Home/UpcomingCourses";
import CategoryTrainings from "@/components/Home/CategoryTrainings";

export default function Home() {
  return (
    <main>
      {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}

      <Hero />
      <div></div>
      <Trainings />
      <CategoryTrainings />
      <UpcomingCourses />
      <Certificates />
      <AboutUs />
    </main>
  );
}
