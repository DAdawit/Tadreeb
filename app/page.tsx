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
import { getHeroSections, getSocialMediaLinks } from "@/services/user";

export default async function Home() {
  const { data } = await getHeroSections();
  const links = await getSocialMediaLinks();
  // console.log(links);

  return (
    <main>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      {/* <pre>{JSON.stringify(links, null, 2)}</pre> */}
      <Carosole carosoles={data} links={links} />
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
