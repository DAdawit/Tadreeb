import React, { useState } from "react";
import { RegistrationFeeType, ServiceChargeTypeResult } from "@/types";
import moment from "moment";
import api from "@/app/axios";
import { notify } from "@/app/toast";

import FullImageDialog from "@/common/FullImageDialog";
import Pending from "@/common/status/Pending";
import Approved from "@/common/status/Approved";
import Rejected from "@/common/status/Rejected";
import ConfirmApprove from "@/common/ConfirmApprove";
import ConfirmReject from "@/common/ConfirmReject";
type PropsType = {
  fee: ServiceChargeTypeResult;
  index: number;
  refetch: () => void;
};
const ServiceChargeList: React.FC<PropsType> = ({ index, fee, refetch }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [rejectLoading, setRejectLoading] = useState<boolean>(false);
  const [approveLoading, setApproveLoading] = useState<boolean>(false);

  const confirmApprove = (id: string) => {
    setError("");
    setLoading(true);
    // alert(id);
    api
      .patch(`/service-charges/${id}`, { status: "Received" })
      .then((res) => {
        notify("Transaction approved successfully", "success");
        setApproveLoading(false);
        refetch();
      })
      .catch((err) => {
        // console.log(err.response.data.errors.detail[0]);
        setError(err.message);
        setApproveLoading(false);
        notify(err.response.data.errors.detail[0], "error");
      });
  };
  const confirmReject = (id: string) => {
    setError("");
    setRejectLoading(true);
    // alert(id);
    api
      .patch(`/service-charges/${id}`, { status: "Rejected" })
      .then((res) => {
        notify("Transaction Rejected successfully", "success");
        setRejectLoading(false);
        refetch();
      })
      .catch((err) => {
        // console.log(err.response.data.errors.detail[0]);
        setError(err.message);
        setRejectLoading(false);
        notify(err.response.data.errors.detail[0], "error");
      });
  };
  return (
    <tr key={index} className="bg-white border-b">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        {index + 1}
      </th>

      <td className="px-6 py-4">{fee.round}</td>
      <td className="px-6 py-4 capitalize">
        {fee._from.first_name} {fee._from.last_name}
      </td>

      <td className="px-6 py-4">{fee.amount}</td>
      <td className="px-6 py-4 ">{fee.description}</td>
      <td className="px-6 py-4">
        <FullImageDialog image={fee.file_upload} />
      </td>
      <td className="px-6 py-4">
        {fee.status === "Pending" && <Pending />}
        {fee.status === "Received" && <Approved />}
        {fee.status === "Rejected" && <Rejected />}
      </td>
      <td className="px-6 py-4 ">
        {moment(fee.created_at).format("MMM Do YY")}
      </td>
      <td className="px-6 py-4 col-span-2 flex gap-2">
        <ConfirmApprove
          confirmApprove={confirmApprove}
          id={fee.id}
          text="Are you sure you went to Approve !"
          loading={approveLoading}
        />
        <ConfirmReject
          confirmReject={confirmReject}
          id={fee.id}
          text="Are you sure you went to Reject !"
          loading={rejectLoading}
        />
      </td>
    </tr>
  );
};

export default ServiceChargeList;
