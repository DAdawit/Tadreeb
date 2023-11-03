"use client";
import React from "react";
import { fetchMyMember } from "@/services/user";
import { useQuery } from "@tanstack/react-query";

const DirectMembers = () => {
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["membersList2"],
    queryFn: fetchMyMember,
  });
  return (
    <>
      <section className="container mx-auto px-5 sm:px-0 mt-7">
        <h1 className=" pl-2 font-medium py-2 text-lg text-gray-700">
          Direct Members
        </h1>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  No
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Mobile
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
              </tr>
            </thead>
            <tbody>
              {isLoading && "Loading..."}
              {data && Array.isArray(data) && data.length === 0 && (
                <p>You have not added any members yet!.</p>
              )}
              {data &&
                Array.isArray(data) &&
                data.map((user, index) => (
                  <tr key={index} className="bg-white border-b">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {index + 1}
                    </th>
                    <td className="px-6 py-4">
                      {user.first_name} {user.last_name}
                    </td>
                    <td className="px-6 py-4">{user.phone_number}</td>
                    <td className="px-6 py-4">{user.email}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default DirectMembers;
