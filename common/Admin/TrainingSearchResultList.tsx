"use client";
import ConfirmDelete from "@/common/ConfirmDelete";
import React, { useState } from "react";
import { TrainingType, Trainings } from "@/Types";
import api from "@/app/axios";
import { notify } from "@/app/toast";
// import EditTraining from "./EditTraining";
import Link from "next/link";
import AdminCourseDescriptions from "@/components/Admin/AdminCourseDescriptions";
import EditTraining from "@/components/Admin/Training/EditTraining";
// import AdminCourseDescriptions from "../AdminCourseDescriptions";

type PropType = {
  training: Trainings | undefined;
  index: number;
  refetch: () => void;
};

const TrainingSearchResultList: React.FC<PropType> = ({
  training,
  index,
  refetch,
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  const [deleteError, setdeleteError] = useState<string>("");
  const confirm = (id: string) => {
    setdeleteError("");
    setLoading(true);
    api
      .delete(`/trainings/${id}`)
      .then((res) => {
        notify("training deleted successfully", "success");
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
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
        >
          {index + 1}
        </th>

        <td className="px-6 py-4 row-span-2">
          <Link
            href={`/admin/trainings/${training?.id}`}
            className="hover:text-primary whitespace-nowrap"
          >
            {training?.name}
          </Link>
        </td>
        <td className="px-6 py-4 row-span-2 whitespace-nowrap">
          <div>{training?.category.name}</div>
        </td>
        <td className="px-6 py-4 row-span-2">
          <AdminCourseDescriptions description={training?.description} />
          {/* <p
            className="text-textPrimary mt-5 lg:text-lg xll:text-xl"
            dangerouslySetInnerHTML={{
              __html: training?.attributes.description || "",
            }}
          ></p> */}
          {/* <div>{training?.attributes.description}</div> */}
        </td>

        <td className="px-6 py-4 col-span-2 flex gap-2">
          <ConfirmDelete
            confirm={confirm}
            id={String(training?.id)}
            text="Are you sure you went to delete !"
            loading={loading}
          />
          <EditTraining
            name={training?.name}
            category_id={String(training?.category.id)}
            description={training?.description}
            refetch={refetch}
            id={String(training?.id)}
          />
        </td>
      </tr>
    </>
  );
};

export default TrainingSearchResultList;
