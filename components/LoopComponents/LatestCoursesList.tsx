"use client";
import { LatestCoursesType } from "@/Types";
import Link from "next/link";
import React from "react";
import dayjs from "dayjs";
type PropType = {
  course: LatestCoursesType | undefined;
  index: number;
};

const LatestCoursesList: React.FC<PropType> = ({ course, index }) => {
  return (
    <tr
      className={
        (index + 1) % 2 == 0
          ? "bg-[#F3F3F3] h-10 text-[#595959] text-base xll:text-xl text-start"
          : "bg-[#E7E7E7] h-10 text-[#595959] text-base xll:text-xl"
      }
    >
      <td className="border-2 border-white pl-5">
        <Link
          href={`/trainings/${course?.training_id}/courses/schedules/${course?.id}`}
          className="hover:text-primary whitespace-nowrap"
        >
          {course?.title}
        </Link>
      </td>
      <td className="border-2 border-white whitespace-nowrap text-center">
        {course?.venue.name}
      </td>
      <td className="border-2 border-white whitespace-nowrap text-center">
        {dayjs(course?.start_date).format("MMM-D-YYYY")}
      </td>
      <td className="border-2 border-white whitespace-nowrap text-center">
        {dayjs(course?.end_date).format("MMM-D-YYYY")}
      </td>
    </tr>
  );
};

export default LatestCoursesList;
