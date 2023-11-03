"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import SeedList from "../Gifts/SeedList";
import { fetchSeeds } from "@/services/user";
import { SeedType } from "@/types";

type PropsType = {
  seeds: SeedType[] | undefined;
};
const Seeds: React.FC = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["SeedItems"],
    queryFn: fetchSeeds,
  });
  return (
    <div className="overflow-x-auto px-7">
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

      <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              No
            </th>
            <th scope="col" className="px-6 py-3">
              Round
            </th>
            <th scope="col" className="px-6 py-3 whitespace-nowrap">
              Send To
            </th>
            <th scope="col" className="px-6 py-3">
              Email/Phone Number
            </th>

            <th scope="col" className="px-6 py-3">
              Amount
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
              Proof Image
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.results && Array.isArray(data.results) && data.count === 0 && (
            <p>You haven&apos;t seed yet .</p>
          )}
          {data?.results &&
            Array.isArray(data.results) &&
            data.results.map((fee, index) => (
              <SeedList
                key={index}
                index={index}
                fee={fee}
                refetch={() => refetch()}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Seeds;
