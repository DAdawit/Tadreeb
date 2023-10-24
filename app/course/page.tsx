import Description from "@/components/Category/Description";
import ExecutiveTraining from "@/components/Category/ExecutiveTraining";
import CourseHero from "@/components/Course/CourseHero";
import React from "react";

const page = () => {
  return (
    <div>
      <CourseHero />
      <ExecutiveTraining />
      <Description />
    </div>
  );
};

export default page;
