"use client";
import AboutUs from "@/components/Home/AboutUs";
import Certificates from "@/components/Home/Certificates";
import Trainings from "@/components/Home/Trainings";
import UpcomingCourses from "@/components/Home/UpcomingCourses";
import CategoryTrainings from "@/components/Home/CategoryTrainings";
import Carosole from "@/components/Home/Carosole";
import { getHeroSections, getSocialMediaLinks } from "@/services/user";
import { useQuery } from "@tanstack/react-query";

// const { data } = await getHeroSections();
// const links = await getSocialMediaLinks();
import { HeroType, Links } from "@/Types";
type CarosoleProps = {
  data: HeroType[];
  links: Links;
};
const Home: React.FC = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["getHeroSections"],
    queryFn: getHeroSections,
  });

  return (
    <main>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      {/* <pre>{JSON.stringify(links, null, 2)}</pre> */}
      <Carosole carosoles={data} />
      <Trainings />
      <CategoryTrainings />
      <UpcomingCourses />
      <Certificates />
      <AboutUs />
    </main>
  );
};

export default Home;
