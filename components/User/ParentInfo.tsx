"use client";
import React from "react";
import { useContext } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import UserAvatar from "@/common/UserAvatar";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { AuthContext } from "@/context/AuthContext";

const ParentInfo = () => {
  const { user } = useContext(AuthContext);
  return (
    <section className="shadow-lg p-5 h-full">
      <div className="flex gap-2">
        <div className=" h-full w-36 grid">
          <UserAvatar image={user?.parent?.profile?.profile_pic ?? null} />
          <h1 className="text-center text-gray-800 text-lg font-medium">
            Parent Information
          </h1>
        </div>
        <div>
          <h1 className="capitalize font-semibold text-xl text-gray-800">
            {user?.parent?.first_name} {user?.parent?.last_name}
          </h1>
          <div className="flex items-center gap-x-2 text-gray-500 text-base mt-3">
            <span>
              <EmailIcon />
            </span>
            <span>{user?.parent?.email}</span>
          </div>
          <div className="flex items-center gap-x-2 text-gray-500 text-base">
            <span>
              <PhoneIcon />
            </span>
            <span>{user?.parent?.phone_number}</span>
          </div>
          {user?.user_profile !== null ? (
            <div className="grid gap-y-1">
              <div className="flex items-center gap-x-2 text-gray-500 text-base">
                <span>
                  <CalendarMonthIcon />
                </span>
                <span>{user?.user_profile?.birth_date}</span>
              </div>
              <div className="flex items-center gap-x-2 text-gray-500 text-base">
                <span>
                  <LocationOnIcon />
                </span>
                <span>
                  {user?.user_profile?.city} , {user?.user_profile?.country}
                </span>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <div className="my-5">
        <hr />
      </div>
    </section>
  );
};

export default ParentInfo;
