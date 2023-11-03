"use client";
import ConfirmApprove from "@/common/ConfirmApprove";
import ConfirmDelete from "@/common/ConfirmDelete";
import React, { useState } from "react";
import EditSeedDialog from "../../EditSeedDialog";
import { CourseType, FormatType, TrainingType } from "@/Types";
import api from "@/app/axios";
import { notify } from "@/app/toast";
import EditTrainingFormat from "./EditCourse";
import EditTraining from "./EditCourse";
import Link from "next/link";
import EditCourse from "./EditCourse";

type PropType = {
  course: CourseType;
  index: number;
  refetch: () => void;
};

const CoursesList: React.FC<PropType> = ({ course, index, refetch }) => {
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
            href={`/admin/trainings/${course.id}`}
            className="hover:text-primary"
          >
            {course.title}
          </Link>
        </td>
        <td className="px-6 py-4 row-span-2">
          {course.start_date}- {course.end_date}
        </td>
        <td className="px-6 py-4 row-span-2">
          <div>{course?.venue.name}</div>
        </td>
        <td className="px-6 py-4 row-span-2">
          <div>${course?.fee}</div>
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
            fee={course.fee}
            description={course.description}
            course_outline={course.course_outline}
            start_date={course.start_date}
            end_date={course.end_date}
            venue_id={String(course.venue_id)}
            format_id={String(course.format_id)}
            training_id={String(course.training_id)}
          />
        </td>
      </tr>
    </>
  );
};

export default CoursesList;
