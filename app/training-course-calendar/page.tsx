"use client";
import { Spinner } from "@/assets/icons/Spinner";
import SearchTrainings from "@/components/CourseFinder/SearchTrainings";
import LatestCoursesList from "@/components/LoopComponents/LatestCoursesList";
import Description from "@/components/TrainingCourseCalendar/Description";
import TrainingCoursCalenderHero from "@/components/TrainingCourseCalendar/TrainingCoursCalenderHero";
import { fetchCoursesWithSchedule } from "@/services/user";
import { useQuery } from "@tanstack/react-query";

import React from "react";

const Page = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["fetchCourseSchedules"],
    queryFn: fetchCoursesWithSchedule,
  });
  return (
    <div>
      <TrainingCoursCalenderHero />

      <div className="max-w-6xl mx-auto  xll:max-w-7xl xll:mx-auto my-16">
        <h1 className="mt-5 text-2xl xll:text-3xl">NOVEMBER 2023</h1>
        <table className="text-center w-full mt-8 overflow-x-auto">
          <thead className="bg-secondary h-10">
            <tr className="text-white">
              <th className="border-r-2 border-gray-50">Program Title</th>
              <th className="border-r-2 border-gray-50">Location</th>
              <th className="border-r-2 border-gray-50">Start Date</th>
              <th className="border-r-2 border-gray-50">End Date</th>
            </tr>
          </thead>
          {isLoading ? <Spinner /> : null}
          <tbody>
            {data &&
              data.data &&
              Array.isArray(data.data) &&
              data.total === 0 && <p>There is no course.</p>}
            {data &&
              Array.isArray(data.data) &&
              data.data.map((course, index) => (
                <LatestCoursesList key={index} index={index} course={course} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
