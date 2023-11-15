"use client";
import { useState } from "react";
import { Spinner } from "@/assets/icons/Spinner";
import CourseCalenderHero from "@/common/Heros/CourseCalenderHero";
import ScheduleHero from "@/common/Heros/ScheduleHero";
import LatestCoursesList from "@/components/LoopComponents/LatestCoursesList";
import { fetchCoursesWithSchedule } from "@/services/user";
import { useQuery } from "@tanstack/react-query";

import React from "react";
import PaginationComponent from "@/common/Pagination/Pagination";

const Page = () => {
  const [current_page, setCurrentPage] = useState<number>(1);

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["fetchCoursesWithSchedule", current_page],
    queryFn: () => fetchCoursesWithSchedule(current_page as number),
  });

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  return (
    <div>
      <CourseCalenderHero title="Training Course Calendar" />
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

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
      {(data?.next_page_url !== null || data?.prev_page_url !== null) && (
        <PaginationComponent
          count={data?.last_page}
          page={data?.current_page}
          handleChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default Page;
