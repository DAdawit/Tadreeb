"use client";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

import React from "react";
import { fetchLatestCourses } from "@/services/user";
import LatestCoursesList from "../LoopComponents/LatestCoursesList";
import { Spinner } from "@/assets/icons/Spinner";

const UpcomingCourses = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["fetchCategories"],
    queryFn: fetchLatestCourses,
  });
  return (
    <div className="max-w-6xl mx-auto  xll:max-w-7xl xll:mx-auto mb-8 px-5">
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

      <h1 className="text-gray-400 font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl xll:text-4xl">
        Upcoming Training Programs
      </h1>
      <div className="relative overflow-x-auto  mt-8">
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
            {data && Array.isArray(data) && data.length === 0 && (
              <p>There is no upcomming course.</p>
            )}
            {data &&
              Array.isArray(data) &&
              data.map((course, index) => (
                <LatestCoursesList key={index} index={index} course={course} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UpcomingCourses;
