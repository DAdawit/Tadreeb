"use client";
import ConfirmDelete from "@/common/ConfirmDelete";
import React, { useState } from "react";
import { CourseType } from "@/Types";
import api from "@/app/axios";
import { notify } from "@/app/toast";

import Link from "next/link";
import EditCourse from "./EditCourse";
import { useParams } from "next/navigation";

type PropType = {
  course: CourseType;
  index: number;
  refetch: () => void;
};

const CoursesList: React.FC<PropType> = ({ course, index, refetch }) => {
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(false);

  const [deleteError, setdeleteError] = useState<string>("");
  const confirm = (id: string) => {
    setdeleteError("");
    setLoading(true);
    api
      .delete(`/courses/${id}`)
      .then((res) => {
        notify("Course deleted successfully", "success");
        setLoading(false);
        refetch();
      })
      .catch((err) => {
        console.log(err.message);
        setdeleteError(err.message);
        setLoading(false);
        notify(err.message, "error");
      });
  };
  return (
    <>
      <tr key={index} className="bg-white border-b">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
        >
          {index + 1}
        </th>

        <td className="px-6 py-4 row-span-2">
          <Link
            href={`/admin/trainings/${id}/schedules/${course.id}`}
            className="hover:text-primary whitespace-nowrap"
          >
            {course.title}
          </Link>
        </td>
        <td className="px-6 py-4 row-span-2 whitespace-nowrap">
          {course.start_date}- {course.end_date}
        </td>
        <td className="px-6 py-4 row-span-2">
          <div>{course?.venue.name}</div>
        </td>
        <td className="px-6 py-4 row-span-2">
          <div>{course?.certificate.name}</div>
        </td>

        <td className="px-6 py-4 col-span-2 flex gap-2">
          <ConfirmDelete
            confirm={confirm}
            id={String(course.id)}
            text="Are you sure you went to delete !"
            loading={loading}
          />
          <EditCourse
            refetch={refetch}
            id={String(course.id)}
            title={course.title}
            description={course.description}
            course_outline={course.course_outline}
            start_date={course.start_date}
            end_date={course.end_date}
            venue_id={String(course.venue_id)}
            format_id={String(course.format_id)}
            training_id={String(course.training_id)}
            certificate_id={String(course.certificate_id)}
          />
        </td>
      </tr>
    </>
  );
};

export default CoursesList;
