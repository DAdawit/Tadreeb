import CourseHero from "@/components/Course/CourseHero";
import CourseSchedule from "@/components/Course/CourseSchedule";
import Description from "@/components/Course/Description";
import React from "react";

const page = () => {
  return (
    <div>
      <CourseHero />
      <CourseSchedule />
      <Description />
    </div>
  );
};

export default page;
