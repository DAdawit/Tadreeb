import { FormatsType, TrainingType, TrainingTypes, VenueType } from "@/Types";
import api from "@/app/axios";

export async function fetchTrainingFormats(): Promise<FormatsType> {
  return await api
    .get("/formats")
    .then((res) => {
      return res?.data;
    })
    .catch((err) => {
      return err;
    });
}

export async function fetchVenues(): Promise<VenueType> {
  return await api
    .get("/venues")
    .then((res) => {
      return res?.data;
    })
    .catch((err) => {
      return err;
    });
}

export async function fetchCategories(): Promise<VenueType> {
  return await api
    .get("/categories")
    .then((res) => {
      return res?.data;
    })
    .catch((err) => {
      return err;
    });
}
export async function fetchTrainings(): Promise<TrainingTypes> {
  return await api
    .get("/trainings")
    .then((res) => {
      return res?.data;
    })
    .catch((err) => {
      return err;
    });
}

export async function fetchTraining(id: string): Promise<TrainingType> {
  return await api
    .get(`/training-courses/${id}`)
    .then((res) => {
      return res?.data.data;
    })
    .catch((err) => {
      return err;
    });
}
