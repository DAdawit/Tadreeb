"use client";
import ConfirmApprove from "@/common/ConfirmApprove";
import ConfirmDelete from "@/common/ConfirmDelete";
import React, { useState } from "react";
import EditSeedDialog from "../../EditSeedDialog";
import { FormatType, TrainingType } from "@/Types";
import api from "@/app/axios";
import { notify } from "@/app/toast";
import EditTrainingFormat from "./EditTraining";
import EditTraining from "./EditTraining";
import Link from "next/link";

type PropType = {
  training: TrainingType;
  index: number;
  refetch: () => void;
};

const TrainingList: React.FC<PropType> = ({ training, index, refetch }) => {
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
            href={`/admin/trainings/${training.id}`}
            className="hover:text-primary"
          >
            {training?.attributes.name}
          </Link>
        </td>
        <td className="px-6 py-4 row-span-2">
          <div>{training?.attributes.category.name}</div>
        </td>
        <td className="px-6 py-4 row-span-2">
          <div>{training?.attributes.description}</div>
        </td>

        <td className="px-6 py-4 col-span-2 flex gap-2">
          <ConfirmDelete
            confirm={confirm}
            id={training.id}
            text="Are you sure you went to delete !"
            loading={loading}
          />
          <EditTraining
            name={training?.attributes?.name}
            category_id={training.attributes.category.id}
            description={training.attributes.description}
            refetch={refetch}
            id={training.id}
          />
        </td>
      </tr>
    </>
  );
};

export default TrainingList;
