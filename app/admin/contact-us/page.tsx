"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchContactUsinfos } from "@/services/admin";
import PageTitle from "@/common/PageTitle";
import { Spinner } from "@/assets/icons/Spinner";
import { useState } from "react";
import ContactUsList from "@/components/LoopComponents/ContactUsList";
import PaginationComponent from "@/common/Pagination/Pagination";

const Page = () => {
  const [current_page, setCurrentPage] = useState<number>(1);
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["fetchContactUsinfos", current_page],
    queryFn: () => fetchContactUsinfos(current_page as number),
  });

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  return (
    <div className="min-h-screeen py-8 container mx-auto px-5">
      <PageTitle title="Contact Us" />
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <div className="relative overflow-x-auto  mt-3">
        <table className="text-center w-full mt-8 overflow-x-auto">
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
      <PaginationComponent
        count={data?.meta.last_page}
        page={data?.meta.current_page}
        handleChange={handlePageChange}
      />
    </div>
  );
};

export default Page;
