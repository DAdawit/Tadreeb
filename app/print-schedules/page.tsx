"use client";
import BookCourse from "@/common/BookCourse";
import PaginationComponent from "@/common/Pagination/Pagination";
import { getAllSchedules } from "@/services/user";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { usePDF } from "react-to-pdf";
import { useQuery } from "@tanstack/react-query";
import Description from "@/common/Description";
import CourseOutLine from "@/common/CourseOutLine";
import Image from "next/image";
import CertificationForPrint from "@/components/Certification/CertificationForPrint";
import PageLoader from "@/common/PageLoader";

const Page = () => {
  const searchParam = useSearchParams();
  const course_id = searchParam.get("course_id");

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["getAllSchedules", course_id],
    queryFn: () => getAllSchedules(course_id as string),
  });
  const { toPDF, targetRef } = usePDF({
    filename: `${data?.title}-schedule.pdf`,
  });

  if (isLoading) {
    return <PageLoader />;
  }
  // if (!isLoading) {
  //   toPDF();
  // }

  return (
    <div className="container mx-auto px-5">
      <div className="flex justify-end mx-auto px-8 max-w-7xl">
        <button
          className="px-5 py-2 rounded-full bg-primary text-white xll:px-8 xll:py-4 text-lg  xll:text-2xl mt-8"
          onClick={() => toPDF()}
        >
          Download PDF
        </button>
      </div>

      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

      <div ref={targetRef} className="min-h-screen">
        <div className="max-w-6xl mx-auto  xll:max-w-7xl xll:mx-auto mb-16">
          <div>
            <Image
              src="/logo-tadreeb-2.png"
              height={1000}
              width={1000}
              alt="Tadreeb-logo"
              className="h-36 w-36 object-contain"
            />
          </div>
          <h1 className="text-gray-400 font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl xll:text-4xl">
            <span className="underline underline-offset-2">
              Course Schedule
            </span>{" "}
            for {data?.title} program
          </h1>
          <table className="text-center w-full mt-8 overflow-x-auto">
            <thead className="bg-secondary h-10">
              <tr className="text-white">
                <th className="border-r-2 border-gray-50">Location</th>
                <th className="border-r-2 border-gray-50">Date</th>
              </tr>
            </thead>
            {/* {data && data?.schedules.length === 0 && (
              <p>No Schedule add for this course yet!.</p>
            )} */}

            <tbody>
              {data &&
                Array.isArray(data.schedules) &&
                data.schedules.map((schedule, index) => (
                  <tr
                    key={schedule.id}
                    className={
                      (index + 1) % 2 == 0
                        ? "bg-[#F3F3F3] h-10 text-[#595959] text-base xll:text-xl"
                        : "bg-[#E7E7E7] h-10 text-[#595959] text-base xll:text-xl"
                    }
                  >
                    <td className="border-2 border-white text-center">
                      {schedule.venue.name}
                    </td>
                    <td className="border-2 border-white text-center">
                      {schedule.start_date}- {schedule.end_date}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        <Description description={data?.description} />
        <CourseOutLine description={data?.course_outline} />
        {/* <CertificationForPrint
          name={data?.certificate.name}
          image={data?.certificate.image}
        /> */}
      </div>
    </div>
  );
};

export default Page;
