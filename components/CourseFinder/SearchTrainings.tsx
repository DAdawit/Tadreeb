import Link from "next/link";
import React from "react";
import LatestCoursesList from "../LoopComponents/LatestCoursesList";
import { CourseType, CourseWithScheduleType, LatestCoursesType } from "@/Types";
type PropType = {
  data: CourseWithScheduleType | undefined;
};

const SearchTrainings: React.FC<PropType> = (data) => {
  return (
    <div className="max-w-6xl mx-auto  xll:max-w-7xl xll:mx-auto my-16">
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

      <div className="flex gap-x-3">
        <h1 className="text-gray-400 font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl xll:text-4xl">
          Search Tranings
        </h1>
        <input type="text" placeholder="Search Courses" />
      </div>
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
        <tbody>
          {/* {courses &&
            courses.map((course, index) => (
              <LatestCoursesList key={index} index={index} course={course} />
            ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default SearchTrainings;
