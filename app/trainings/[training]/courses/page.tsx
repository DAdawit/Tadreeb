"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { fetchTrainingCourses } from "@/services/admin";
import ScheduleHero from "@/components/Schedule/ScheduleHero";
import ExecutiveTraining from "@/components/Category/ExecutiveTraining";
import Description from "@/common/Description";
import Link from "next/link";

const Page = () => {
  const { training } = useParams();
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["fetchTraining", training],
    queryFn: () => fetchTrainingCourses(training as string),
  });
  return (
    <div>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <ScheduleHero title={data && data?.name} />
      <div className="max-w-6xl mx-auto  xll:max-w-7xl xll:mx-auto my-16">
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
              <th className="border-r-2 border-gray-50">Fee</th>
              <th className="border-r-2 border-gray-50">Book Now</th>
            </tr>
          </thead>
          {data && data.courses.total === 0 && (
            <p>No Courses added for this training yet!.</p>
          )}
          <tbody>
            {data &&
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
                      className="hover:text-primary"
                    >
                      {course.title}
                    </Link>
                  </td>
                  <td className="border-2 border-white">{course.venue.name}</td>
                  <td className="border-2 border-white">{course.start_date}</td>
                  <td className="border-2 border-white">{course.end_date}</td>
                  <td className="border-2 border-white">${course.fee}</td>
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

      <Description description={data?.description} />
    </div>
  );
};

export default Page;
