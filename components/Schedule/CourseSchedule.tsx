import { Schedules } from "@/Types";
import BookCourse from "@/common/BookCourse";
import { useParams } from "next/navigation";
import React from "react";
type PropType = {
  schedules: Schedules | undefined;
  title: string | undefined;
};
const CourseSchedule: React.FC<PropType> = ({ schedules, title }) => {
  const { course } = useParams();
  console.log(course);

  return (
    <div className="max-w-6xl mx-auto  xll:max-w-7xl xll:mx-auto my-16">
      {/* <pre>{JSON.stringify(schedules, null, 2)}</pre> */}

      <h1 className="text-gray-400 font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl xll:text-4xl">
        Course Schedule
      </h1>
      <table className="text-center w-full mt-8 overflow-x-auto">
        <thead className="bg-secondary h-10">
          <tr className="text-white">
            <th className="border-r-2 border-gray-50">Date</th>
            <th className="border-r-2 border-gray-50">Location</th>
            {/* <th className="border-r-2 border-gray-50">Fee</th> */}
            <th className="border-r-2 border-gray-50">Book Now</th>
          </tr>
        </thead>
        {schedules && schedules.total === 0 && (
          <p>No Schedule add for this course yet!.</p>
        )}
        <tbody>
          {schedules?.data.map((item, index) => (
            <tr
              key={item.id}
              className={
                (index + 1) % 2 == 0
                  ? "bg-[#F3F3F3] h-10 text-[#595959] text-base xll:text-xl"
                  : "bg-[#E7E7E7] h-10 text-[#595959] text-base xll:text-xl"
              }
            >
              <td className="border-2 border-white text-center">
                {item.start_date}- {item.end_date}
              </td>
              <td className="border-2 border-white text-center">
                {item.venue.name}
              </td>
              {/* <td className="border-2 border-white text-center">${item.fee}</td> */}
              <td className="border-2 border-white h-full bg-primary">
                <BookCourse title={title} schedule_id={String(item.id)} />
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
  );
};

export default CourseSchedule;
