"use client";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
const UserAndSponserInformation = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <div className="container mx-auto px-5 md:px-0 mt-16">
        <div className="grid grid-col-1 md:grid-cols-2 gap-5">
          <section className="px-5 py-5 grid gap-1 rounded-md shadow-lg">
            <h1 className="font-medium py-2 text-lg text-gray-700">
              Personal Information
            </h1>

            <hr className="border-[1] border-gray-400" />
            <div className="flex justify-between">
              <h1>Name </h1>
              <h1 className="lightText">
                {user?.first_name} {user?.last_name}
              </h1>
            </div>
            <hr className="border-[1] border-gray-400" />
            <div className="flex justify-between">
              <h1>Email </h1>
              <h1 className="lightText">{user?.email}</h1>
            </div>
            <hr className="border-[1] border-gray-400" />
            <div className="flex justify-between">
              <h1>Mobile </h1>
              <h1 className="lightText">{user?.phone_number}</h1>
            </div>
          </section>
          <section className="px-5 py-5 grid gap-1 rounded-md shadow-lg">
            <h1 className="font-medium py-2 text-lg text-gray-700">
              Sponser Information
            </h1>

            <hr className="border-[1] border-gray-400" />
            <div className="flex justify-between">
              <h1>Name </h1>
              <h1 className="lightText">
                {user?.parent?.first_name ?? user?.first_name}{" "}
                {user?.parent?.last_name ?? user?.last_name}
              </h1>
            </div>
            <hr className="border-[1] border-gray-400" />
            <div className="flex justify-between">
              <h1>Email </h1>
              <h1 className="lightText">
                {user?.parent?.email ?? user?.email}
              </h1>
            </div>
            <hr className="border-[1] border-gray-400" />
            <div className="flex justify-between">
              <h1>Mobile </h1>
              <h1 className="lightText">
                {user?.parent?.phone_number ?? user?.phone_number}
              </h1>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default UserAndSponserInformation;
