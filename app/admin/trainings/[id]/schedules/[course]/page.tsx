"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchCourseSchedules } from "@/services/admin";
import { Spinner } from "@/assets/icons/Spinner";
import SchedulesList from "@/components/Admin/Schedules/SchedulesList";
import AddSchedule from "@/components/Admin/Schedules/AddSchedule";
import PageTitle from "@/common/PageTitle";

const Page = () => {
  const { course } = useParams();

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["fetchCourseSchedules", course],
    queryFn: () => fetchCourseSchedules(course as string),
  });
  return (
    <div>
      <div className="container mx-auto p-5 flex">
        <PageTitle title={`${data?.title}`} />
      </div>
      <div className="flex justify-end container mx-auto p-5">
        <AddSchedule refetch={() => refetch()} />
      </div>
      <div className="relative overflow-x-auto  mt-8">
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
                Fees
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
    </div>
  );
};

export default Page;
