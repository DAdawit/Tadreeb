"use client";
import Image from "next/image";
import React, { useContext, useState } from "react";
import api from "@/app/axios";
import UserLogin from "@/components/Auth/UserLogin";
import ResetPassword from "@/components/Auth/ResetPassword";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function Login() {
  const [login, setLogin] = useState<boolean>(true);
  const router = useRouter();
  const { loading, setLoadingFalse, setUserData } = useContext(AuthContext);

  return (
    <>
      <div className="w-screen max-h-screen  flex justify-center ">
        <div className=" grid grid-cols-1 w-full">
          <div className="h-screen flex  justify-center items-center">
            <div className="px-8 h-fit shadow-xl py-5 max-w-lg bg-white rounded-lg mx-auto">
              {login ? (
                <UserLogin setLogin={() => setLogin(false)} />
              ) : (
                <ResetPassword setLogin={() => setLogin(true)} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
