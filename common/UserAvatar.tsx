"use client";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Image from "next/image";
type PropType = {
  image: string | null | undefined;
  firstName?: string | undefined;
  lastName?: string | undefined;
  textSize?: "xs" | "sm" | "lg" | "xl";
};
const UserAvatar: React.FC<PropType> = ({
  image,
  firstName,
  lastName,
  textSize = "lg",
}) => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex ">
      <div className="grid justify-items-center items-center rounded-full">
        <Image
          src={
            image === null
              ? "/avatar.svg"
              : `http://api.ethiooneequb.com/media/${image}`
          }
          alt="profile image"
          height={2000}
          width={2000}
          className="h-24 w-24 object-contain rounded-full shadow-lg m-2 p-2"
        />
        <h1
          className={`text-center text-lg text-gray-600 font-medium whitespace-nowrap `}
        >
          {firstName} {lastName}
        </h1>
      </div>
    </div>
  );
};

export default UserAvatar;
