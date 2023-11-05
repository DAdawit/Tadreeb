import {
  CategoryTrainings,
  ClassRootType,
  CourseWithScheduleType,
  LatestCoursesType,
  VenueType,
} from "@/Types";
import api from "@/app/axios";

export async function fetchCategoryTrainings(): Promise<CategoryTrainings[]> {
  return await api
    .get(`/category-trainings`)
    .then((res) => {
      // console.log(res.data.data);

      return res?.data.data;
    })
    .catch((err) => {
      return err;
    });
}
export async function fetchLatestCourses(): Promise<LatestCoursesType[]> {
  return await api
    .get(`/latest-courses`)
    .then((res) => {
      // console.log(res.data.data);

      return res?.data.data;
    })
    .catch((err) => {
      return err;
    });
}
export async function fetchCoursesWithSchedule(): Promise<CourseWithScheduleType> {
  return await api
    .get(`/courses-with-schedule`)
    .then((res) => {
      // console.log(res.data);
      return res?.data.data;
    })
    .catch((err) => {
      return err;
    });
}

export async function fetchSearchCategories(): Promise<VenueType> {
  return await api
    .get("/get-categories")
    .then((res) => {
      return res?.data;
    })
    .catch((err) => {
      return err;
    });
}

export async function fetchSearchTrainingFormats(): Promise<VenueType> {
  return await api
    .get("/get-formats")
    .then((res) => {
      return res?.data;
    })
    .catch((err) => {
      return err;
    });
}

export async function fetchSearchVenues(): Promise<VenueType> {
  return await api
    .get("/get-venues")
    .then((res) => {
      return res?.data;
    })
    .catch((err) => {
      return err;
    });
}

export async function fetchClassRoomTraining(): Promise<ClassRootType> {
  return await api
    .get("/get-classroom-training")
    .then((res) => {
      return res?.data.data;
    })
    .catch((err) => {
      return err;
    });
}

export async function fetchOnlineTraining(): Promise<ClassRootType> {
  return await api
    .get("/get-online-training")
    .then((res) => {
      return res?.data.data;
    })
    .catch((err) => {
      return err;
    });
}

export async function fetchInHouseTraining(): Promise<ClassRootType> {
  return await api
    .get("/get-in-house-training")
    .then((res) => {
      return res?.data.data;
    })
    .catch((err) => {
      return err;
    });
}
