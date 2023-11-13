import {
  getCertificates,
  getTrainigFormats,
  getTrainingVenues,
  getTrainings,
} from "@/services/user";
import React from "react";

const SSRLinksMenus = async () => {
  const formats = await getTrainigFormats();
  const venues = await getTrainingVenues();
  const certificates = await getCertificates();
  const categories = await getTrainings();
  return <div></div>;
};

export default SSRLinksMenus;
