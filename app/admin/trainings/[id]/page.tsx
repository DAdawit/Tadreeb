"use client";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchTrainingCourses } from "@/services/admin";
import { useParams } from "next/navigation";
import PageTitle from "@/common/PageTitle";
import Link from "next/link";
import CoursesList from "@/components/Admin/Courses/CoursesList";
import { Spinner } from "@/assets/icons/Spinner";
import PaginationComponent from "@/common/Pagination/Pagination";

const Page = () => {
  const { id } = useParams();
  const [current_page, setCurrentPage] = useState<number>(1);

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["fetchTrainingCourses", id, current_page],
    queryFn: () => fetchTrainingCourses(id as string, current_page as number),
  });

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  return (
    <div className="min-h-screeen py-8 container mx-auto px-5">
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

      <PageTitle title={`${data?.name}`} />
      <div className="container mx-auto px-5 flex justify-between py-5">
        <Link
          href={`/admin/trainings`}
          className="text-gray-500 text-lg underline underline-offset-2"
        >
          back
        </Link>
        <Link
          href={`/admin/trainings/${id}/addCourse?category=${data?.category_id}`}
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

      <PaginationComponent
        count={data?.courses?.last_page}
        page={data?.courses.current_page}
        handleChange={handlePageChange}
      />
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
};

export default Page;
