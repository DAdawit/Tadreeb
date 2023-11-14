"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import PageTitle from "@/common/PageTitle";
import AddSocialMedaiaLinks from "@/components/Admin/SocialMedia/AddSocialMedaiaLinks";
import { fetchSocialMediaLinks } from "@/services/admin";
import SocialMediaList from "@/components/LoopComponents/SocialMediaList";
import { Spinner } from "@/assets/icons/Spinner";

const Page = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["fetchSocialMediaLinks"],
    queryFn: fetchSocialMediaLinks,
  });

  return (
    <div className="container mx-auto px-5">
      <PageTitle title="Social Media Links" />
      <div className="flex justify-end py-3">
        <AddSocialMedaiaLinks refetch={() => refetch()} />
      </div>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <div className="relative overflow-x-auto min-h-screen px-7">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                No
              </th>
              <th scope="col" className="px-6 py-3">
                Facebook
              </th>
              <th scope="col" className="px-6 py-3">
                Instagram
              </th>
              <th scope="col" className="px-6 py-3">
                Linkedin
              </th>
              <th scope="col" className="px-6 py-3">
                WhatsUp
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? <Spinner /> : null}
            <>
              {data && data?.length === 0 && (
                <p>You have not added any Training Categories yet!.</p>
              )}
              {data &&
                Array.isArray(data) &&
                data.map((media, index) => (
                  <SocialMediaList
                    key={index}
                    media={media}
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
