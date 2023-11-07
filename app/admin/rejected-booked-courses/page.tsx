"use client";
import PageTitle from "@/common/PageTitle";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchRejectedBookedCourses } from "@/services/admin";
import { Spinner } from "@/assets/icons/Spinner";
import BookList from "@/components/LoopComponents/BookList";

const Page = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["fetchRejectedBookedCourses"],
    queryFn: fetchRejectedBookedCourses,
  });
  return (
    <div>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

      <PageTitle title="Rejected Booked Courses" />
      <div className="px-5">
        <div className="relative overflow-x-auto ">
          <table className="w-full text-sm text-left text-gray-500 overflow-x-auto">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  No
                </th>
                <th scope="col" className="px-6 py-3">
                  First Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Last Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone Number
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Course/Schedule
                </th>
                <th scope="col" className="px-6 py-3">
                  Detail
                </th>
                <th scope="col" className="px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? <Spinner /> : null}
              <>
                {data && data.total === 0 && <p>empty !</p>}
                {data?.data &&
                  Array.isArray(data?.data) &&
                  data?.data.map((book, index) => (
                    <BookList
                      key={index}
                      book={book}
                      index={index}
                      refetch={() => refetch()}
                    />
                  ))}
              </>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;
