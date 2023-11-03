"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
const Page = () => {
  const router = useRouter();
  const { id } = useParams();
  router.push(`/admin/trainings/${id}`);
  return <div></div>;
};

export default Page;
