"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
const Page = () => {
  const { training } = useParams();
  const router = useRouter();
  router.push(`/trainings/${training}/courses`);
  return null;
};

export default Page;
