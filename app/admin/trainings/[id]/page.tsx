"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchTrainingCourses } from "@/services/admin";
import { useParams } from "next/navigation";
import PageTitle from "@/common/PageTitle";
import Link from "next/link";
import CoursesList from "@/components/Admin/Courses/CoursesList";
import { Spinner } from "@/assets/icons/Spinner";

const Page = () => {
  const { id } = useParams();
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["fetchTrainingCourses", id],
    queryFn: () => fetchTrainingCourses(id as string),
  });

  return (
    <div className="min-h-screeen py-8 container mx-auto px-5">
      <PageTitle title={`${data?.name}`} />
      <div className="container mx-auto px-5 flex justify-end py-5">
        <Link
          href={`/admin/trainings/${id}/addCourse`}
          className="px-5 py-2 bg-primary text-white rounded-full"
        >
          Add course
        </Link>
      </div>
      <div className="relative overflow-x-auto">
        <table className="text-center w-full mt-8 overflow-x-auto">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                No
              </th>
              <th scope="col" className="px-6 py-3">
                Course
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Venue
              </th>
              <th scope="col" className="px-6 py-3">
                Certificate
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? <Spinner /> : null}
            <>
              {data && data?.courses.total === 0 && (
                <p>You have not added any Courses for this Training yet!.</p>
              )}
              {data?.courses.data &&
                Array.isArray(data.courses.data) &&
                data.courses.data.map((course, index) => (
                  <CoursesList
                    key={index}
                    course={course}
                    index={index}
                    refetch={refetch}
                  />
                ))}
            </>
          </tbody>
        </table>
      </div>

      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
};

export default Page;
