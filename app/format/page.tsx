"use client";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchSearchTrainingFormats } from "@/services/user";
import ScheduleHero from "@/common/Heros/ScheduleHero";
import Link from "next/link";
import PaginationComponent from "@/common/Pagination/Pagination";
const Page = () => {
  const [current_page, setCurrentPage] = useState<number>(1);

  const {
    data: formats,
    isLoading: formatsLoading,
    error: formatError,
    refetch: formatsRefetch,
  } = useQuery({
    queryKey: ["fetchTrainingFormats", current_page],
    queryFn: () => fetchSearchTrainingFormats(current_page as number),
  });

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  return (
    <div>
      <ScheduleHero title={"Our Training Formats"} />
      {/* <pre>{JSON.stringify(formats, null, 2)}</pre> */}
      <div className="container mx-auto px-5">
        <div className="max-w-6xl mx-auto  xll:max-w-7xl xll:mx-auto my-16">
          <table className="text-center w-full mt-8 overflow-x-auto">
            <thead className="bg-secondary h-10">
              <tr className="text-white">
                <th className="border-r-2 border-gray-50">index</th>
                <th className="border-r-2 border-gray-50">Venue</th>
                <th className="border-r-2 border-gray-50">Action</th>
              </tr>
            </thead>
            {formats && formats.data.length === 0 && (
              <p>No Courses added for this training yet!.</p>
            )}
            <tbody>
              {formats &&
                Array.isArray(formats.data) &&
                formats.data.map((format, index) => (
                  <tr
                    key={format.id}
                    className={
                      (index + 1) % 2 == 0
                        ? "bg-[#F3F3F3] h-10 text-[#595959] text-base xll:text-xl"
                        : "bg-[#E7E7E7] h-10 text-[#595959] text-base xll:text-xl"
                    }
                  >
                    <td className="border-2 border-white">{index + 1}</td>
                    <td className="border-2 border-white">
                      {format.attributes.name}
                    </td>
                    <td className="border-2 border-white h-full bg-primary">
                      <Link
                        href={`/format/${format.id}`}
                        className="bg-primary h-full w-full text-white"
                      >
                        View Courses
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        {(formats?.links.next !== null || formats?.links.prev !== null) && (
          <PaginationComponent
            count={formats?.meta.last_page}
            page={current_page}
            handleChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
