import SearchTrainings from "@/components/CourseFinder/SearchTrainings";
import Description from "@/components/TrainingCourseCalendar/Description";
import TrainingCoursCalenderHero from "@/components/TrainingCourseCalendar/TrainingCoursCalenderHero";
import React from "react";

const page = () => {
  return (
    <div>
      <TrainingCoursCalenderHero />
      <Description />
      <SearchTrainings />
    </div>
  );
};

export default page;
