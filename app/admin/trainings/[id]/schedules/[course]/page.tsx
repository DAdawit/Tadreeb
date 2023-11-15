"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchCourseSchedules } from "@/services/admin";
import { Spinner } from "@/assets/icons/Spinner";
import SchedulesList from "@/components/Admin/Schedules/SchedulesList";
import AddSchedule from "@/components/Admin/Schedules/AddSchedule";
import PageTitle from "@/common/PageTitle";
import Link from "next/link";
import PaginationComponent from "@/common/Pagination/Pagination";

const Page = () => {
  const { course } = useParams();
  const { id } = useParams();

  const [current_page, setCurrentPage] = useState<number>(1);

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["fetchCourseSchedules", course, current_page],
    queryFn: () =>
      fetchCourseSchedules(course as string, current_page as number),
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

      <div className="container mx-auto flex">
        <PageTitle title={`${data?.title}`} />
      </div>
      <div className="flex justify-between container mx-auto p-5">
        <Link
          href={`/admin/trainings/${id}`}
          className="text-gray-500 text-lg underline underline-offset-2"
        >
          back
        </Link>
        <AddSchedule refetch={() => refetch()} />
      </div>
      <div className="max-w-lg mx-auto pl-6"></div>
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
                Venue
              </th>

              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? <Spinner /> : null}
            <>
              {data && data.schedules.total === 0 && (
                <p>You have not added any Courses for this Training yet!.</p>
              )}
              {data?.schedules &&
                Array.isArray(data?.schedules.data) &&
                data?.schedules.data.map((schedule, index) => (
                  <SchedulesList
                    key={index}
                    schedule={schedule}
                    index={index}
                    refetch={refetch}
                  />
                ))}
            </>
          </tbody>
        </table>
      </div>
      <PaginationComponent
        count={data?.schedules.last_page}
        page={data?.schedules.current_page}
        handleChange={handlePageChange}
      />
    </div>
  );
};

export default Page;
