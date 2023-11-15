"use client";
import { Spinner } from "@/assets/icons/Spinner";
import PageTitle from "@/common/PageTitle";
import PaginationComponent from "@/common/Pagination/Pagination";
import AddCertificate from "@/components/Admin/Certificates/AddCertificates";
import AddHero from "@/components/Admin/Hero/AddHero";
import CertificationList from "@/components/LoopComponents/CertificationList";
import HeroSectionLists from "@/components/LoopComponents/HeroSectionLists";
import { fetchCertifications } from "@/services/admin";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

const Page = () => {
  const [current_page, setCurrentPage] = useState<number>(1);

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["fetchCertifications", current_page],
    queryFn: () => fetchCertifications(current_page as number),
  });

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  return (
    <div className="container mx-auto px-5 ">
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <PageTitle title="Certifications " />
      <div className="flex justify-end py-6">
        <AddCertificate refetch={() => refetch()} />
      </div>
      <div className="relative overflow-x-auto">
        <table className="text-center w-full mt-8 overflow-x-auto">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                No
              </th>
              <th scope="col" className="px-6 py-3">
                Image
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
              {data && data.meta.total === 0 && <p>Empty.</p>}
              {data?.data &&
                Array.isArray(data.data) &&
                data.data.map((certification, index) => (
                  <CertificationList
                    key={index}
                    certification={certification}
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
