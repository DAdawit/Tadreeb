"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import PageTitle from "@/common/PageTitle";
import ActiveUsers from "@/common/Dashboard/ActiveUsers";

const Page = () => {
  // const { data, isLoading, error, refetch } = useQuery({
  //   queryKey: ["fetchMembersInPercent"],
  //   queryFn: fetchMembersInPercent,
  // });
  // const {
  //   data: statutory,
  //   isLoading: staturyLoading,
  //   error: staturyError,
  //   refetch: staturyRefectch,
  // } = useQuery({
  //   queryKey: ["fetchAccountStatutoryReport"],
  //   queryFn: fetchAccountStatutoryReport,
  // });
  // const {
  //   data: members,
  //   isLoading: membersLoading,
  //   error: membersError,
  //   refetch: membersRefectch,
  // } = useQuery({
  //   queryKey: ["fetchStaticMembers"],
  //   queryFn: fetchStaticMembers,
  // });

  // console.log(data);

  return (
    <>
      {/* <pre>{JSON.stringify(statutory, null, 2)}</pre> */}

      <div className="container mx-auto px-5 pb-16">
        <div className="px-7 py-5">
          <PageTitle title="Dashboard" />
        </div>

        {/* <ProfileIncompletAlert /> */}

        <div className="">
          <div className="container grid grid-cols-1 lg:grid-cols-2  flex-1  gap-5 mb-10">
            <div className=" shadow-lg ">
              <h3 className="px-5 font-medium text-gray-800 mt-3">
                Active users
              </h3>

              <div className="px-3 pb-5 h-min">
                {/* <ActiveUsers members={members} /> */}
              </div>
            </div>
            <div className="flex flex-wrap h-full shadow-lg">
              <h3 className="px-5 font-medium text-gray-800 mt-3">
                Members in Percent
              </h3>

              <div className="pb-5 flex flex-wrap w-full justify-evenly gap-1 ">
                <div className="">{/* <MembersInPercent data={data} /> */}</div>
                <div className="">
                  {/* <ProfileStats data={statutory} /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-5 ">
          {/* <Statics />
          <UserAndSponserInformation />
          <DirectMembers />
          <LastTransactions /> */}
        </div>
      </div>
    </>
  );
};

export default Page;
