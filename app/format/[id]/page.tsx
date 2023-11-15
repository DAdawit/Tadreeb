"use client";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import ScheduleHero from "@/common/Heros/ScheduleHero";
import { fetchCoursesByFormatId } from "@/services/user";
import { useParams } from "next/navigation";
import PaginationComponent from "@/common/Pagination/Pagination";
const Page = () => {
  const { id } = useParams();
  const [current_page, setCurrentPage] = useState<number>(1);

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["fetchCoursesByFormatId", id, current_page],
    queryFn: () => fetchCoursesByFormatId(id as string, current_page as number),
  });

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  return (
    <>
      <div>
        <ScheduleHero title={data && data.name} />
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

        <div className="max-w-6xl mx-auto  xll:max-w-7xl xll:mx-auto my-16">
          <table className="text-center w-full mt-8 overflow-x-auto">
            <thead className="bg-secondary h-10">
              <tr className="text-white">
                <th className="border-r-2 border-gray-50">Program Title</th>
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
                        href={`/trainings/${course.training?.id}/courses/schedules/${course.id}`}
                        className="hover:text-primary text-center"
                      >
                        {course.title}
                      </Link>
                    </td>

                    <td className="border-2 border-white text-center">
                      {course.start_date}
                    </td>
                    <td className="border-2 border-white text-center">
                      {course.end_date}
                    </td>

                    <td className="border-2 border-white h-full bg-primary">
                      <button className="bg-primary h-full w-full text-white">
                        Book Now
                      </button>
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
      </div>
    </>
  );
};

export default Page;
