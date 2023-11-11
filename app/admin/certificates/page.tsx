"use client";
import { Spinner } from "@/assets/icons/Spinner";
import PageTitle from "@/common/PageTitle";
import AddCertificate from "@/components/Admin/Certificates/AddCertificates";
import AddHero from "@/components/Admin/Hero/AddHero";
import CertificationList from "@/components/LoopComponents/CertificationList";
import HeroSectionLists from "@/components/LoopComponents/HeroSectionLists";
import { fetchCertifications } from "@/services/admin";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const Page = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["fetchCertifications"],
    queryFn: fetchCertifications,
  });
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
      </div>
    </div>
  );
};

export default Page;
