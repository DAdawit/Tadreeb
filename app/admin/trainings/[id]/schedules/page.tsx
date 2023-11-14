"use client";
import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
const Page = () => {
  const router = useRouter();
  const { id } = useParams();
  useEffect(() => {
    router.push(`/admin/trainings`);
  }, [router, id]);
  return null;
};

export default Page;
