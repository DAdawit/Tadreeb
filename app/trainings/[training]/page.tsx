"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
  const { training } = useParams();
  const router = useRouter();
  useEffect(() => {
    router.push(`/trainings/${training}/courses`);
  }, [router, training]);
  return null;
};

export default Page;
