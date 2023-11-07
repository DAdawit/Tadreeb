"use client";
import ConfirmApprove from "@/common/ConfirmApprove";
import ConfirmDelete from "@/common/ConfirmDelete";
import React, { useState } from "react";
import { FormatType } from "@/Types";
import api from "@/app/axios";
import { notify } from "@/app/toast";
import EditTrainingFormat from "./EditVenue";
import EditVenue from "./EditVenue";

type PropType = {
  format: FormatType;
  index: number;
  refetch: () => void;
};

const VenueList: React.FC<PropType> = ({ format, index, refetch }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const [deleteError, setdeleteError] = useState<string>("");
  const confirm = (id: string) => {
    setdeleteError("");
    setLoading(true);
    api
      .delete(`/venues/${id}`)
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
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
        >
          {index + 1}
        </th>

        <td className="px-6 py-4 row-span-2">
          <div>{format?.attributes.name}</div>
        </td>

        <td className="px-6 py-4 col-span-2 flex gap-2">
          <ConfirmDelete
            confirm={confirm}
            id={format.id}
            text="Are you sure you went to delete !"
            loading={loading}
          />
          <EditVenue
            name={format?.attributes?.name}
            refetch={refetch}
            id={format.id}
          />
        </td>
      </tr>
    </>
  );
};

export default VenueList;
