"use client";
import { useState } from "react";
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
import PaginationComponent from "@/common/Pagination/Pagination";

const Page = () => {
  const [current_page, setCurrentPage] = useState<number>(1);
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["fetchVenues", current_page],
    queryFn: () => fetchVenues(current_page as number),
  });

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  return (
    <div className="min-h-screeen py-8 container mx-auto px-5">
      <PageTitle title="Training Venues" />
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <div className=" flex justify-end py-5">
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
        <PaginationComponent
          count={data?.meta.last_page}
          page={data?.meta.current_page}
          handleChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Page;
