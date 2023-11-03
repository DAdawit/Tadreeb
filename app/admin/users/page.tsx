"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { UserSearchType, UserType, UsersType } from "@/types";
import { fetchMembers } from "@/services/user";
import PageLoader from "@/common/PageLoader";
import PageTitle from "@/components/Commens/PageTitle";
import UsersList from "@/components/Admin/UsersList";
import SearchIcon from "@mui/icons-material/Search";
import api from "@/app/axios";
import { Spinner } from "@/assets/icons/Spinner";
const Page = () => {
  const [searchOn, setSearchOn] = useState<boolean>(false);
  const [users, setUsers] = useState<UserSearchType | null>(null);
  const [searchLoading, setSearchLoading] = useState<boolean>(false);

  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["allusers"],
    queryFn: fetchMembers,
  });

  console.log(data);
  if (isLoading) {
    return <PageLoader />;
  }

  const handleChange = (e: any) => {
    if (e.target.value.length < 4) {
      setSearchOn(false);
      setUsers(null);
      return;
    } else {
      setSearchOn(true);
      setSearchLoading(true);
      api
        .get(`members?search=${e.target.value}`)
        .then((res) => {
          setUsers(res.data);
          setSearchLoading(false);
        })
        .catch((err) => {
          console.log(err.message);
          setSearchLoading(false);
        });
    }
  };

  return (
    <>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

      <div>
        <PageTitle title="All Users" />
      </div>
      <div className="flex gap-2 justify-center items-center my-5">
        <input
          type="text"
          name="user"
          placeholder="search user "
          className="rounded-full"
          onChange={(e) => handleChange(e)}
        />
        <button className="flex justify-center px-5 py-2 items-center text-white bg-primary rounded-full">
          <span>
            <SearchIcon />
          </span>
          <span>Search</span>
        </button>
      </div>

      <div className="relative overflow-x-auto min-h-screen px-7">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                No
              </th>
              <th scope="col" className="px-6 py-3">
                Photo
              </th>
              <th scope="col" className="px-6 py-3">
                Full Name
              </th>
              <th scope="col" className="px-6 py-3">
                Phone Number
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Cycle
              </th>
              <th scope="col" className="px-6 py-3">
                Level
              </th>
              <th scope="col" className="px-6 py-3">
                Agreement Accepted
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {!searchOn ? (
              <>
                {data?.count === 0 && (
                  <p>You have not added any members yet!.</p>
                )}
                {data?.results &&
                  Array.isArray(data.results) &&
                  data.results.map((user, index) => (
                    <UsersList
                      key={index}
                      user={user as UsersType}
                      index={index}
                      refetch={refetch}
                    />
                  ))}
              </>
            ) : (
              <>
                {searchLoading ? (
                  <div className="mt-3">
                    <Spinner />
                  </div>
                ) : null}
                {users?.count === 0 && <p>Search,not found !.</p>}
                {users?.results &&
                  Array.isArray(users.results) &&
                  users.results.map((user, index) => (
                    <UsersList
                      key={index}
                      user={user as UsersType}
                      index={index}
                      refetch={refetch}
                    />
                  ))}
              </>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Page;
