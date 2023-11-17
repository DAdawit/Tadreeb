"use client";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { fetchTrainingCourses } from "@/services/admin";
import Description from "@/common/Description";
import Link from "next/link";
import ScheduleHero from "@/common/Heros/ScheduleHero";
import BookCourse from "@/common/BookCourse";
import PaginationComponent from "@/common/Pagination/Pagination";
import dayjs from "dayjs";
const Page = () => {
  const { training } = useParams();
  const { id } = useParams();
  const [current_page, setCurrentPage] = useState<number>(1);

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["fetchTrainingCourses", training, current_page],
    queryFn: () =>
      fetchTrainingCourses(training as string, current_page as number),
  });

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  return (
    <div>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <ScheduleHero title={data && data?.name} />
      <div className="container mx-auto px-5">
        <div className="max-w-6xl mx-auto  xll:max-w-7xl xll:mx-auto my-16 ">
          <h1 className="text-gray-400 font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl xll:text-4xl">
            Upcoming Executive {data?.name} Programs
          </h1>
          <table className="text-center w-full mt-8 overflow-x-auto">
            <thead className="bg-secondary h-10">
              <tr className="text-white">
                <th className="border-r-2 border-gray-50">Program Title</th>
                <th className="border-r-2 border-gray-50">Location</th>
                <th className="border-r-2 border-gray-50">Start Date</th>
                <th className="border-r-2 border-gray-50">End Date</th>
                <th className="border-r-2 border-gray-50">Book Now</th>
              </tr>
            </thead>
            {data && data.courses.total === 0 && (
              <p>No Courses added for this training yet!.</p>
            )}
            <tbody>
              {data &&
                Array.isArray(data.courses.data) &&
                data.courses.data.map((course, index) => (
                  <tr
                    key={course.id}
                    className={
                      (index + 1) % 2 == 0
                        ? "bg-[#F3F3F3] h-10 text-[#595959] text-base xll:text-xl"
                        : "bg-[#E7E7E7] h-10 text-[#595959] text-base xll:text-xl"
                    }
                  >
                    <td className="border-2 border-white">
                      <Link
                        href={`/trainings/${training}/courses/schedules/${course.id}`}
                        className="hover:text-primary text-center"
                      >
                        {course.title}
                      </Link>
                    </td>
                    <td className="border-2 border-white text-center">
                      {course.venue.name}
                    </td>
                    <td className="border-2 border-white text-center">
                      {dayjs(course?.start_date).format("MMM-D-YYYY")}
                    </td>
                    <td className="border-2 border-white text-center">
                      {dayjs(course?.end_date).format("MMM-D-YYYY")}
                    </td>
                    <td className="border-2 border-white h-full bg-primary">
                      <BookCourse
                        title={course.title}
                        course_id={String(course.id)}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        {(data?.courses.next_page_url !== null ||
          data?.courses.prev_page_url !== null) && (
          <PaginationComponent
            count={data?.courses?.last_page}
            page={data?.courses.current_page}
            handleChange={handlePageChange}
          />
        )}

        <Description description={data?.description} />
      </div>
    </div>
  );
};

export default Page;
