"use client";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchTrainingFormats, fetchVenues } from "@/services/admin";
import PageTitle from "@/common/PageTitle";
import TrainingFormatsList from "@/components/Admin/TrainingFormats/TrainingFormatsList";
import api from "@/app/axios";
import { notify } from "@/app/toast";
import { Spinner } from "@/assets/icons/Spinner";
import AddTrainingFormat from "@/components/Admin/TrainingFormats/AddTrainingFormat";
import VenueList from "@/components/Admin/Venues/VenueList";
import AddVenue from "@/components/Admin/Venues/AddVenue";

const Page = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["fetchVenues"],
    queryFn: fetchVenues,
  });

  return (
    <div>
      <PageTitle title="Training Venues" />
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <div className="container mx-auto flex justify-end py-8">
        <AddVenue refetch={() => refetch()} />
      </div>
      <div className="relative overflow-x-auto min-h-screen px-7">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                No
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? <Spinner /> : null}
            <>
              {data?.meta.total === 0 && (
                <p>You have not added any Venues yet!.</p>
              )}

              {data?.data &&
                Array.isArray(data.data) &&
                data.data.map((format, index) => (
                  <VenueList
                    key={index}
                    format={format}
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
