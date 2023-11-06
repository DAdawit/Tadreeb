"use client";
import ConfirmApprove from "@/common/ConfirmApprove";
import ConfirmDelete from "@/common/ConfirmDelete";
import React, { useState } from "react";
import { CoursSearch, CourseType, FormatType, TrainingType } from "@/Types";
import api from "@/app/axios";
import { notify } from "@/app/toast";
import Link from "next/link";
import { useParams } from "next/navigation";

type PropType = {
  course: CoursSearch;
  index: number;
};

const CourseSearchReasultList: React.FC<PropType> = ({ course, index }) => {
  return (
    <>
      <tr
        className={
          (index + 1) % 2 == 0
            ? "bg-[#F3F3F3] h-10 text-[#595959] text-base xll:text-xl"
            : "bg-[#E7E7E7] h-10 text-[#595959] text-base xll:text-xl"
        }
      >
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap border-2 border-white"
        >
          {index + 1}
        </th>

        <td className="px-6 py-4 row-span-2 border-2 border-white">
          <Link
            // href="#"
            href={`/trainings/${course?.training?.id}/courses/schedules/${course.id}`}
            className="hover:text-primary"
          >
            {course.title}
          </Link>
        </td>
        <td className="px-6 py-4 row-span-2 border-2 border-white text-base">
          {course.start_date}- {course.end_date}
        </td>

        <td className="px-6 py-4 row-span-2 border-2 border-white">
          <div>{course?.format.name}</div>
        </td>
        <td className="px-6 py-4 row-span-2 border-2 border-white ">
          <div>{course?.training?.name}</div>
        </td>
        <td className="px-6 py-4 row-span-2 border-2 border-white">
          <div>{course?.venue.name}</div>
        </td>
        <td className="px-6 py-4 row-span-2 border-2 border-white">
          <div>${course?.fee}</div>
        </td>
      </tr>
    </>
  );
};

export default CourseSearchReasultList;
