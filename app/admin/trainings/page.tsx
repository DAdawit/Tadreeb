"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchTrainings } from "@/services/admin";
import PageTitle from "@/common/PageTitle";
import { Spinner } from "@/assets/icons/Spinner";
import Link from "next/link";
import TrainingList from "@/components/Admin/Training/TrainingList";
import { useState } from "react";
import PaginationComponent from "@/common/Pagination/Pagination";
// import SearchCourse from "@/common/SearchCourse";
import AdminSearchTraining from "@/common/Admin/AdminSearchTraining";
import { TrainingsSearch } from "@/Types";
import TrainingSearchResultList from "@/common/Admin/TrainingSearchResultList";

const Page = () => {
  const [current_page, setCurrentPage] = useState<number>(1);
  const [searchIsOn, setSearIsOn] = useState<boolean>(false);
  const [searchResults, setSearchResult] = useState<TrainingsSearch | null>(
    null
  );
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

  const ClearSearch = () => {
    setSearchResult(null);
    setSearIsOn(false);
  };
  return (
    <div className="min-h-screeen py-8 container mx-auto px-5">
      <PageTitle title="Trainings" />
      {/* {searchIsOn ? "true" : "flase"} */}
      {/* <pre>{JSON.stringify(searchResults, null, 2)}</pre> */}
      <div className="container mx-auto flex justify-end">
        <Link
          href="/admin/trainings/addTraining"
          className="bg-primary px-5 py-2 rounded-full text-white"
        >
          Add Training
        </Link>
      </div>
      <AdminSearchTraining
        refetch={refetch}
        setSearchResult={setSearchResult}
        setSearIsOn={setSearIsOn}
      />

      <div className="relative overflow-x-auto">
        {searchIsOn ? (
          <button
            className="bg-white text-primary p-1 underline underline-offset-2"
            onClick={() => ClearSearch()}
          >
            Cancel Seach
          </button>
        ) : null}

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
              {searchIsOn ? (
                <>
                  {searchResults?.total === 0 && <p>empty.</p>}
                  {searchResults?.data &&
                    Array.isArray(searchResults.data) &&
                    searchResults.data.map((training, index) => (
                      <TrainingSearchResultList
                        key={index}
                        training={training}
                        index={index}
                        refetch={refetch}
                      />
                    ))}
                </>
              ) : (
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
              )}
            </>
          </tbody>
        </table>
        {!searchIsOn ? (
          <PaginationComponent
            count={data?.meta.last_page}
            page={data?.meta.current_page}
            handleChange={handlePageChange}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Page;
