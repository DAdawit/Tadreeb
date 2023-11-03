"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchTraining } from "@/services/admin";
import { useParams } from "next/navigation";
import PageTitle from "@/common/PageTitle";
import Link from "next/link";

const Page = () => {
  const { id } = useParams();
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["fetchTraining", id],
    queryFn: () => fetchTraining(id as string),
  });
  console.log(data);

  return (
    <div>
      <PageTitle title={`${data?.name}`} />
      <div className="container mx-auto px-5 flex justify-end ">
        <Link
          href={`/admin/trainings/${id}/addCourse`}
          className="px-5 py-2 bg-primary text-white rounded-full"
        >
          Add course
        </Link>
      </div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Page;
