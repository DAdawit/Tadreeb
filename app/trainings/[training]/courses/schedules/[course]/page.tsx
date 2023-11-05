"use client";
import CourseSchedule from "@/components/Schedule/CourseSchedule";
import React from "react";
import { useParams } from "next/navigation";
import { fetchCourseSchedules } from "@/services/admin";
import { useQuery } from "@tanstack/react-query";
import Description from "@/common/Description";
import CourseOutLine from "@/common/CourseOutLine";
import ScheduleHero from "@/common/Heros/ScheduleHero";
// import Description from "@/common/Description";

const Page = () => {
  const { course } = useParams();
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["fetchCourseSchedules", course],
    queryFn: () => fetchCourseSchedules(course as string),
  });
  return (
    <div>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <ScheduleHero title={data?.title} />
      <CourseSchedule schedules={data?.schedules} />
      <Description description={data?.description} />
      <CourseOutLine description={data?.course_outline} />
    </div>
  );
};

export default Page;
