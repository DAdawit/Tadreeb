import Footer from "@/common/Footer";
import AboutUs from "@/components/Home/AboutUs";
import Certificates from "@/components/Home/Certificates";
import Courses from "@/components/Home/CategoryTrainings";
import Hero from "@/components/Home/Hero";
import Trainings from "@/components/Home/Trainings";
import UpcomingCourses from "@/components/Home/UpcomingCourses";
import CategoryTrainings from "@/components/Home/CategoryTrainings";
import api from "./axios";
import Carosole from "@/components/Home/Carosole";

async function getHeroSections() {
  const res = await fetch("http://127.0.0.1:8000/api/hero-section", {
    next: {
      revalidate: 10,
    },
  });
  return res.json();
}

export default async function Home() {
  const { data } = await getHeroSections();
  console.log(data);

  return (
    <main>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <Carosole carosoles={data} />
      {/* <Hero /> */}
      <div></div>
      <Trainings />
      <CategoryTrainings />
      <UpcomingCourses />
      <Certificates />
      <AboutUs />
    </main>
  );
}
