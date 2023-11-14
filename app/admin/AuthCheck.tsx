"use client";
import PageLoader from "@/common/PageLoader";
import React, { useContext, useEffect, useCallback } from "react";
import api from "../axios";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/AuthContext";

const AuthCheck = () => {
  const router = useRouter();
  const { loading, setLoadingFalse, setUserData } = useContext(AuthContext);
  const verifyToken = useCallback(() => {
    api
      .post("/verify-token")
      .then((res) => {
        console.log(res.data.data);
        setUserData(res.data);
        // router.push("/admin/dashboard");
      })
      .catch((err) => {
        setLoadingFalse(false);
        localStorage.removeItem("token");
        api.defaults.headers.common["Authorization"] = "";
        router.push("/admin/login");
      })
      .finally(() => {
        setLoadingFalse(false);
      });
  }, [router, setLoadingFalse, setUserData]);

  useEffect(() => {
    verifyToken();
  }, [verifyToken]);

  if (loading) {
    return <PageLoader />;
  }
  return null;
};

export default AuthCheck;
