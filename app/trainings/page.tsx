"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  router.push("/");
  return null;
};

export default Page;
