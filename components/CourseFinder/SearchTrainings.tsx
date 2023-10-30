import Link from "next/link";
import React from "react";

const SearchTrainings = () => {
  return (
    <div className="max-w-6xl mx-auto  xll:max-w-7xl xll:mx-auto my-16">
      <div className="flex gap-x-3">
        <h1 className="text-gray-400 font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl xll:text-4xl">
          Search Tranings
        </h1>
        <input type="text" placeholder="Search Courses" />
      </div>
      <h1 className="mt-5 text-2xl xll:text-3xl">NOVEMBER 2023</h1>
      <table className="text-center w-full mt-2 overflow-x-auto">
        <thead className="bg-secondary h-10">
          <tr className="text-white">
            <th className="border-r-2 border-gray-50">Program Title</th>
            <th className="border-r-2 border-gray-50">Location</th>
            <th className="border-r-2 border-gray-50">Start Date</th>
            <th className="border-r-2 border-gray-50">End Date</th>
            <th className="border-r-2 border-gray-50">Book Now</th>
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
                <Link href="/course" className="hover:text-primary">
                  Workshop on Fire Risk Insurance
                </Link>
              </td>
              <td className="border-2 border-white">Dubai</td>
              <td className="border-2 border-white">02-10-2023</td>
              <td className="border-2 border-white">05-10-2023</td>
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
  );
};

export default SearchTrainings;
