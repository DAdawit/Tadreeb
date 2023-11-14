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
import Loader from "@/common/Loader/loader";
type CarosoleProps = {
  data: HeroType[];
  links: Links;
};
const Home: React.FC = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["getHeroSections"],
    queryFn: getHeroSections,
  });

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <main>
      {!isLoading && (
        <>
          <Carosole carosoles={data} />
          <Trainings />
          <CategoryTrainings />
          <UpcomingCourses />
          <Certificates />
          <AboutUs />
        </>
      )}
    </main>
  );
};

export default Home;
