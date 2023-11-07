"use client";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  fetchContactUsinfos,
  fetchTrainingFormats,
  fetchVenues,
} from "@/services/admin";
import PageTitle from "@/common/PageTitle";
import TrainingFormatsList from "@/components/Admin/TrainingFormats/TrainingFormatsList";
import api from "@/app/axios";
import { notify } from "@/app/toast";
import { Spinner } from "@/assets/icons/Spinner";
import AddTrainingFormat from "@/components/Admin/TrainingFormats/AddTrainingFormat";
import VenueList from "@/components/Admin/Venues/VenueList";
import AddVenue from "@/components/Admin/Venues/AddVenue";
import ContactUsList from "@/components/LoopComponents/ContactUsList";

const Page = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["fetchContactUsinfos"],
    queryFn: fetchContactUsinfos,
  });

  return (
    <div>
      <PageTitle title="Contact Us" />
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

      <div className="relative overflow-x-auto min-h-screen px-7">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col " className="px-6 py-3">
                No
              </th>
              <th scope="col" className="px-6 py-3">
                Full Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Location
              </th>
              <th scope="col" className="px-6 py-3">
                Phone Number
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? <Spinner /> : null}
            <>
              {data?.meta.total === 0 && <p>Empty!.</p>}

              {data?.data &&
                Array.isArray(data.data) &&
                data.data.map((contact, index) => (
                  <ContactUsList
                    key={index}
                    contact={contact}
                    index={index}
                    refetch={() => refetch()}
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
