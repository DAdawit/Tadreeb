"use client";
import CourseSchedule from "@/components/Schedule/CourseSchedule";
import { useState } from "react";
import { useParams } from "next/navigation";
import { fetchCourseSchedules } from "@/services/admin";
import { useQuery } from "@tanstack/react-query";
import Description from "@/common/Description";
import CourseOutLine from "@/common/CourseOutLine";
import ScheduleHero from "@/common/Heros/ScheduleHero";
import BookCourse from "@/common/BookCourse";
import PaginationComponent from "@/common/Pagination/Pagination";
// import Description from "@/common/Description";
import { usePDF } from "react-to-pdf";
import Link from "next/link";
import dayjs from "dayjs";

const Page = () => {
  const { course } = useParams();
  const [current_page, setCurrentPage] = useState<number>(1);

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["fetchCourseSchedules", course, current_page],
    queryFn: () =>
      fetchCourseSchedules(course as string, current_page as number),
  });

  const { toPDF, targetRef } = usePDF({
    filename: `${data?.title}-schedule.pdf`,
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
      <ScheduleHero title={data?.title} />
      <div className="container mx-auto px-5">
        <div className="max-w-6xl mx-auto  xll:max-w-7xl xll:mx-auto my-16">
          <h1 className="text-gray-400 font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl xll:text-4xl">
            Course Schedule
          </h1>
          <table className="text-center w-full mt-8 overflow-x-auto">
            <thead className="bg-secondary h-10">
              <tr className="text-white">
                <th className="border-r-2 border-gray-50">Date</th>
                <th className="border-r-2 border-gray-50">Location</th>
                <th className="border-r-2 border-gray-50">Book Now</th>
              </tr>
            </thead>
            {data && data.schedules.total === 0 && (
              <p>No Schedule add for this course yet!.</p>
            )}

            <tbody>
              {data &&
                Array.isArray(data.schedules.data) &&
                data.schedules.data.map((schedule, index) => (
                  <tr
                    key={schedule.id}
                    className={
                      (index + 1) % 2 == 0
                        ? "bg-[#F3F3F3] h-10 text-[#595959] text-base xll:text-xl"
                        : "bg-[#E7E7E7] h-10 text-[#595959] text-base xll:text-xl"
                    }
                  >
                    <td className="border-2 border-white text-center">
                      {dayjs(schedule?.start_date).format("MMM-D-YYYY")}{" "}
                      {dayjs(schedule?.end_date).format("MMM-D-YYYY")}
                    </td>
                    <td className="border-2 border-white text-center">
                      {schedule.venue.name}
                    </td>
                    <td className="border-2 border-white h-full bg-primary">
                      <BookCourse
                        title={data.title}
                        schedule_id={String(schedule?.id)}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        {(data?.schedules.next_page_url !== null ||
          data?.schedules.prev_page_url !== null) && (
          <PaginationComponent
            count={data?.schedules?.last_page}
            page={data?.schedules.current_page}
            handleChange={handlePageChange}
          />
        )}
        <div className="max-w-6xl mx-auto  xll:max-w-7xl xll:mx-auto my-16">
          <Link
            href={`/print-schedules?course_id=${data?.id}`}
            className="px-5 py-2 rounded-full bg-primary text-white xll:px-8 xll:py-4 text-lg  xll:text-2xl "
          >
            Download PDF
          </Link>
        </div>

        <Description description={data?.description} />
        <CourseOutLine description={data?.course_outline} />
      </div>
    </div>
  );
};

export default Page;
