"use client";
import React, { FC } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { AccountStatutoryType } from "@/types";

ChartJS.register(ArcElement, Tooltip, Legend);

type PropsType = {
  data: AccountStatutoryType | undefined;
};
const ProfileStats: FC<PropsType> = ({ data }) => {
  let graphData = {
    labels: [
      "Account Verfication",
      "Payment Method_added",
      "Seed",
      "Harvest",
      "Charity Donation",
      "First Fier Members",
      "Second Tier Members",
      "Third Tier Members",
    ],
    datasets: [
      {
        label: "MembersInPercent",
        data: [
          data?.account_verfication,
          data?.payment_method_added,
          data?.seed,
          data?.harvest,
          data?.["charity_donation?"],
          data?.first_tier_members,
          data?.second_tier_members,
          data?.third_tier_members,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.9)",
          "rgba(54, 162, 235, 0.9)",
          "rgba(255, 206, 86, 0.9)",
          "rgba(75, 192, 192, 0.9)",
          "rgba(153, 102, 255, 0.9)",
          "rgba(255, 159, 64, 0.9)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={graphData} />;
};

export default ProfileStats;
