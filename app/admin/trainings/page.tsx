"use client";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCategories, fetchTrainings } from "@/services/admin";
import PageTitle from "@/common/PageTitle";
import TrainingFormatsList from "@/components/Admin/TrainingFormats/TrainingFormatsList";

import { Spinner } from "@/assets/icons/Spinner";
import VenueList from "@/components/Admin/Venues/VenueList";
import AddCategories from "@/components/Admin/TrainingCategories/AddCategories";
import CategoryList from "@/components/Admin/TrainingCategories/CategoryList";
import Link from "next/link";
import TrainingList from "@/components/Admin/Training/TrainingList";

const Page = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["fetchTrainings"],
    queryFn: fetchTrainings,
  });

  return (
    <div>
      <PageTitle title="Trainings" />
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <div className="container mx-auto flex justify-end py-8">
        <Link
          href="/admin/trainings/addTraining"
          className="bg-primary px-5 py-2 rounded-full text-white"
        >
          Add Training
        </Link>
        {/* <AddCategories refetch={() => refetch()} /> */}
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
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Description
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
                <p>You have not added any members yet!.</p>
              )}
              {data?.data &&
                Array.isArray(data.data) &&
                data.data.map((training, index) => (
                  <TrainingList
                    key={index}
                    training={training}
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
