"use client";
import ConfirmDelete from "@/common/ConfirmDelete";
import React, { useState } from "react";
import { ScheduleType } from "@/Types";
import api from "@/app/axios";
import { notify } from "@/app/toast";

import { useParams } from "next/navigation";
import EditSchedule from "./EditSchedule";

type PropType = {
  schedule: ScheduleType;
  index: number;
  refetch: () => void;
};

const SchedulesList: React.FC<PropType> = ({ schedule, index, refetch }) => {
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(false);

  const [deleteError, setdeleteError] = useState<string>("");
  const confirm = (id: string) => {
    setdeleteError("");
    setLoading(true);
    api
      .delete(`/schedules/${id}`)
      .then((res) => {
        notify("Course deleted successfully", "success");
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
          {schedule.start_date}- {schedule.end_date}
        </td>
        <td className="px-6 py-4 row-span-2">
          <div>{schedule?.venue.name}</div>
        </td>
        <td className="px-6 py-4 row-span-2">
          <div>${schedule?.fee}</div>
        </td>

        <td className="px-6 py-4 col-span-2 flex gap-2">
          <ConfirmDelete
            confirm={confirm}
            id={String(schedule.id)}
            text="Are you sure you went to delete !"
            loading={loading}
          />
          <EditSchedule
            refetch={() => refetch()}
            id={String(schedule.id)}
            venue_id={String(schedule.venue_id)}
            start_date={schedule.start_date}
            end_date={schedule.end_date}
            fee={schedule.fee}
          />
        </td>
      </tr>
    </>
  );
};

export default SchedulesList;
