import { FormatsType, VenueType } from "@/Types";
import api from "@/app/axios";

export async function fetchTrainingFormats(): Promise<FormatsType> {
  return api
    .get("/formats")
    .then((res) => {
      return res?.data;
    })
    .catch((err) => {
      return err;
    });
}

export async function fetchVenues(): Promise<VenueType> {
  return api
    .get("/venues")
    .then((res) => {
      return res?.data;
    })
    .catch((err) => {
      return err;
    });
}
