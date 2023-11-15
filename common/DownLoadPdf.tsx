"use client";
import BookCourse from "@/common/BookCourse";
import PaginationComponent from "@/common/Pagination/Pagination";
import React from "react";
import { usePDF } from "react-to-pdf";

const DownLoadPdf = () => {
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });

  return (
    <div>
      <button onClick={() => toPDF()}>Download PDF</button>
      <div ref={targetRef} className="min-h-screen">
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

            <tbody>
              {[1, 2, 3, 4, 5, 6, 6].map((item, index) => (
                <tr
                  key={index}
                  className={
                    (index + 1) % 2 == 0
                      ? "bg-[#F3F3F3] h-10 text-[#595959] text-base xll:text-xl"
                      : "bg-[#E7E7E7] h-10 text-[#595959] text-base xll:text-xl"
                  }
                >
                  <td className="border-2 border-white text-center">
                    2023-04-12- 2023-05-13
                  </td>
                  <td className="border-2 border-white text-center">Dubai</td>
                  <td className="border-2 border-white h-full bg-primary">
                    <BookCourse title={"book"} schedule_id={String(1)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-start mt-8">
            <button className="px-5 py-2 rounded-full bg-primary text-white xll:px-8 xll:py-4 text-lg  xll:text-2xl ">
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownLoadPdf;
