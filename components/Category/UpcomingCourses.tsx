import React from "react";

const UpcomingCourses = () => {
  return (
    <div className="max-w-6xl mx-auto  xll:max-w-7xl xll:mx-auto mb-8">
      <h1 className="text-gray-400 font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl xll:text-4xl">
        Upcoming Training Programs
      </h1>
      <table className="text-center w-full mt-8 overflow-x-auto">
        <thead className="bg-secondary h-10">
          <tr className="text-white">
            <th className="border-r-2 border-gray-50">Program Title</th>
            <th className="border-r-2 border-gray-50">Location</th>
            <th className="border-r-2 border-gray-50">Start Date</th>
            <th className="border-r-2 border-gray-50">End Date</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
            <tr
              key={item}
              className={
                (index + 1) % 2 == 0
                  ? "bg-[#F3F3F3] h-10 text-[#595959] text-base xll:text-xl"
                  : "bg-[#E7E7E7] h-10 text-[#595959] text-base xll:text-xl"
              }
            >
              <td className="border-2 border-white">
                Workshop on Fire Risk Insurance
              </td>
              <td className="border-2 border-white">Dubai</td>
              <td className="border-2 border-white">02-10-2023</td>
              <td className="border-2 border-white">05-10-2023</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UpcomingCourses;
