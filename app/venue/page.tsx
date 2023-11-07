"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchSearchVenues } from "@/services/user";
import ScheduleHero from "@/common/Heros/ScheduleHero";
import Link from "next/link";

const Page = () => {
  const {
    data: venues,
    isLoading: venueLoading,
    error: venueError,
    refetch: venueRefetch,
  } = useQuery({
    queryKey: ["fetchVenues"],
    queryFn: fetchSearchVenues,
  });
  const router = useRouter();
  return (
    <div>
      <ScheduleHero title={"Our Venues"} />

      <div className="max-w-6xl mx-auto  xll:max-w-7xl xll:mx-auto my-16">
        <table className="text-center w-full mt-8 overflow-x-auto">
          <thead className="bg-secondary h-10">
            <tr className="text-white">
              <th className="border-r-2 border-gray-50">index</th>
              <th className="border-r-2 border-gray-50">Venue</th>
              <th className="border-r-2 border-gray-50">Action</th>
            </tr>
          </thead>
          {venues && venues.data.length === 0 && (
            <p>No Courses added for this training yet!.</p>
          )}
          <tbody>
            {venues &&
              Array.isArray(venues.data) &&
              venues.data.map((venue, index) => (
                <tr
                  key={venue.id}
                  className={
                    (index + 1) % 2 == 0
                      ? "bg-[#F3F3F3] h-10 text-[#595959] text-base xll:text-xl"
                      : "bg-[#E7E7E7] h-10 text-[#595959] text-base xll:text-xl"
                  }
                >
                  <td className="border-2 border-white">{index + 1}</td>
                  <td className="border-2 border-white">
                    {venue.attributes.name}
                  </td>
                  <td className="border-2 border-white h-full bg-primary">
                    <Link
                      href={`/venue/${venue.id}`}
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
    </div>
  );
};

export default Page;
