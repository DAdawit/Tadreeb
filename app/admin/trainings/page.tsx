"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchTrainings } from "@/services/admin";
import PageTitle from "@/common/PageTitle";
import { Spinner } from "@/assets/icons/Spinner";
import Link from "next/link";
import TrainingList from "@/components/Admin/Training/TrainingList";
import { useState } from "react";
import PaginationComponent from "@/common/Pagination/Pagination";

const Page = () => {
  const [current_page, setCurrentPage] = useState<number>(1);
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["fetchTrainings", current_page],
    queryFn: () => fetchTrainings(current_page as number),
  });

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  return (
    <div className="min-h-screeen py-8 container mx-auto px-5">
      <PageTitle title="Trainings" />
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <div className="container mx-auto flex justify-end">
        <Link
          href="/admin/trainings/addTraining"
          className="bg-primary px-5 py-2 rounded-full text-white"
        >
          Add Training
        </Link>
      </div>
      <div className="relative overflow-x-auto">
        <table className="text-center w-full mt-8 overflow-x-auto">
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
              {data && data?.meta?.total === 0 && (
                <p>You have not added any Trainings yet!.</p>
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
