"use client";
import { HeroType } from "@/Types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import AdminCourseDescriptions from "../Admin/AdminCourseDescriptions";
import api from "@/app/axios";
import { notify } from "@/app/toast";
import ConfirmDelete from "@/common/ConfirmDelete";
import EditHero from "../Admin/Hero/EditHero";
type PropType = {
  hero: HeroType | undefined;
  index: number;
  refetch: () => void;
};

const HeroSectionLists: React.FC<PropType> = ({ hero, index, refetch }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [deleteError, setdeleteError] = useState<string>("");

  const confirm = (id: string) => {
    setdeleteError("");
    setLoading(true);

    api
      .delete(`/hero/${id}`)
      .then((res) => {
        notify("seed deleted successfully", "success");
        setLoading(false);
        refetch();
      })
      .catch((err) => {
        console.log(err.message);
        setdeleteError(err.message);
        setLoading(false);
        notify(err.message, "error");
      });
  };
  return (
    <>
      <tr key={index} className="bg-white border-b">
        <td
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
        >
          {index + 1}
        </td>
        <td className="px-6 py-4   gap-2">
          <Image
            height={1000}
            width={1000}
            src={`${hero?.attributes.image}`}
            alt={`${hero?.attributes.title}`}
            className="h-16 w-16 object-fill"
          />
        </td>
        <td className="px-6 py-4  gap-2">{hero?.attributes.title}</td>

        <td className="px-6 py-4   gap-2">
          <AdminCourseDescriptions description={hero?.attributes.description} />
        </td>
        <td className="px-6 py-4   gap-2 flex items-center justify-center gap-x-3">
          <ConfirmDelete
            confirm={confirm}
            id={String(hero?.id)}
            text="Are you sure you went to delete !"
            loading={loading}
          />
          <EditHero hero={hero} refetch={() => refetch()} />
        </td>
      </tr>
    </>
  );
};

export default HeroSectionLists;
