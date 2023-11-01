"use client";
import React, { FC } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarController,
  BarElement,
  ChartOptions,
} from "chart.js";

import { Bar, Line } from "react-chartjs-2";
import { MembersStaticsType } from "@/types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarController,
  BarElement
);

export const options: ChartOptions<"bar"> = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "Active Users",
    },
  },
};

const labels: string[] = ["Members Statistics"];

type PropsType = {
  members: MembersStaticsType | undefined;
};

const ActiveUsers: FC<PropsType> = ({ members }) => {
  let data = {
    labels,
    datasets: [
      {
        label: "First Tier Members",
        data: [members?.first_tier_members],
        backgroundColor: "rgb(54,162,235)",
      },
      {
        label: "Second Tier Members",
        data: [members?.second_tier_members],
        backgroundColor: "rgb(255,114,144)",
      },
      {
        label: "Third Tier Members",
        data: [members?.third_tier_members],
        backgroundColor: "rgb(0,203,169)",
      },

      {
        label: "Waiting Room",
        data: [members?.waiting_room],
        backgroundColor: "rgb(93,198,198)",
      },
    ],
  };
  return <Bar options={options} data={data} />;
};

export default ActiveUsers;
