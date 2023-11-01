"use client";
import React from "react";
import { SeedToMemberType } from "@/types";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PublicIcon from "@mui/icons-material/Public";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import UserAvatar from "@/common/UserAvatar";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { useQuery } from "@tanstack/react-query";
import { fetchSeedToMember, fetchSeeds } from "@/services/user";
import SeedToParentDialog from "../Gifts/SeedToParentDialog";
import Seeds from "./Seeds";

const SeedToMemberCard: React.FC = () => {
  const {
    data: member,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["fetchSeedToMember"],
    queryFn: fetchSeedToMember,
  });
  const {
    data: seeds,
    isLoading: seedsLoading,
    error: seedsError,
    refetch: refetchSeeds,
  } = useQuery({
    queryKey: ["SeedItems"],
    queryFn: fetchSeeds,
  });
  return (
    <>
      <section className="shadow-lg p-5 h-full max-w-xl mx-auto">
        <div className="flex gap-2">
          <div className=" h-full w-36 items-center grid">
            <UserAvatar
              image={member?.data?.user_profile?.profile_pic ?? null}
            />
          </div>
          <div className="w-full">
            <h1 className="capitalize font-semibold text-xl text-gray-800">
              {member?.data.first_name} {member?.data.last_name}{" "}
            </h1>{" "}
            <div className="flex items-center gap-x-2 text-gray-500 text-sm mt-3">
              {" "}
              <span>
                {" "}
                <EmailIcon fontSize="small" />
              </span>
              <span>{member?.data.email}</span>{" "}
            </div>
            <div className="flex items-center gap-x-2 text-gray-500 text-sm">
              <span>
                <PhoneIcon fontSize="small" />
              </span>
              <span>{member?.data.phone_number}</span>
            </div>
            {member?.data.user_profile !== null ? (
              <div className="grid gap-y-1 w-full ">
                <div className="flex items-center gap-x-2 text-gray-500 text-sm">
                  <span>
                    <CalendarMonthIcon fontSize="small" />
                  </span>
                  <span>{member?.data?.user_profile?.birth_date}</span>
                </div>
                <div className="flex items-center gap-x-2 text-gray-500 text-sm">
                  <span>
                    <LocationOnIcon fontSize="small" />
                  </span>
                  <span>
                    {member?.data?.user_profile?.city} ,{" "}
                    {member?.data?.user_profile?.country}
                  </span>
                </div>
                <div className="my-3">
                  <hr />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-gray-700">
                    <span>
                      <AccountBalanceIcon />
                    </span>
                    <h1>Bank Information</h1>
                  </div>
                  <div className="flex items-center gap-x-2 text-gray-500 text-base">
                    <span>
                      Awash Bank
                      {member?.data?.user_profile?.account_name} ,
                      <br />
                      {member?.data?.user_profile?.account_number}
                    </span>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>
      <div className="my-10 flex justify-end px-8">
        <SeedToParentDialog
          refetch={() => refetchSeeds()}
          id={member?.data.id}
        />
      </div>

      <Seeds />
    </>
  );
};

export default SeedToMemberCard;
