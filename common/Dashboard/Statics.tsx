"use client";
import React from "react";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { useQuery } from "@tanstack/react-query";
import { fetchGifts } from "@/services/user";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
const Statics = () => {
  const { user } = useContext(AuthContext);
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["membersList"],
    queryFn: fetchGifts,
  });
  return (
    <>
      <div className="container mx-auto px-5 sm:px-0 flex-grow mt-16">
        <section className="grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-10">
          <div className="flex items-center justify-center uppercase py-6 px-3 bg-gradient-to-b from-[#4AABED] to-teal-400 w-full rounded-xl text-white text-center text-xl font-medium">
            <h1>Total Earnings :{data?.total_gifts} Birr</h1>
          </div>
          <div className="flex items-center justify-center uppercase py-6 px-3 bg-gradient-to-b from-[#4AABED] to-teal-400 w-full rounded-xl text-white text-center text-xl font-medium ">
            <h1>Board Leavel : {user?.level} </h1>
          </div>
        </section>

        <section className="grid grid-cols-1  md:grid-cols-3 justify-items-center gap-7 mt-16">
          <div className="staticsCard  hover:translate-x-2 bg-[#16A2B9] px-3">
            <div className="grid gap-y-2">
              <h1 className="text-md font-medium text-white">Total Gifts</h1>
              <h1 className="font-medium text-white">
                {data?.total_gifts} Birr
              </h1>
            </div>
            <div className="text-white">
              <AttachMoneyIcon fontSize="large" color="inherit" />
            </div>
          </div>

          <div className="staticsCard  bg-[#29A744] px-3">
            <div className="grid gap-y-2">
              <h1 className="text-md font-medium text-white">Gift Received</h1>
              <h1 className="font-medium text-white">
                {data?.gift_received} Birr
              </h1>
            </div>
            <div className="text-white">
              <AttachMoneyIcon fontSize="large" color="inherit" />
            </div>
          </div>

          <div className="staticsCard hover:-translate-x-2 bg-[#DC3545] px-3">
            <div className="grid gap-y-2">
              <h1 className="text-md font-medium text-white">Outstanding</h1>
              <h1 className="font-medium text-white">
                {data?.outstanding} Birr
              </h1>
            </div>
            <div className="text-white">
              <AttachMoneyIcon fontSize="large" color="inherit" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Statics;
