import {
  AllCoursesThisMonth,
  CategoryTrainings,
  ClassRootType,
  CourseWithScheduleType,
  LatestCoursesType,
  TrainingSearchType,
  VenueCouses,
  VenueType,
} from "@/Types";
import api from "@/app/axios";
import { TrainingType } from "@/common/data";

export async function fetchCategoryTrainings(): Promise<TrainingSearchType> {
  return await api
    .get(`/category-trainings`)
    .then((res) => {
      console.log(res.data.data);

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

export async function fetchSearchTrainings(): Promise<TrainingSearchType> {
  return await api
    .get("/get-trainings")
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

export async function fetchAllCoursesOnCurrentMonth(): Promise<AllCoursesThisMonth> {
  return await api
    .get("/all-courses-this-month")
    .then((res) => {
      return res?.data;
    })
    .catch((err) => {
      return err;
    });
}

export async function fetchCoursesByVenueId(id: string): Promise<VenueCouses> {
  return await api
    .get(`/get-course-by-venue/${id}`)
    .then((res) => {
      console.log(res.data);

      return res?.data.data;
    })
    .catch((err) => {
      return err;
    });
}

export async function fetchCoursesByFormatId(id: string): Promise<VenueCouses> {
  return await api
    .get(`/get-course-by-format/${id}`)
    .then((res) => {
      console.log(res.data);

      return res?.data.data;
    })
    .catch((err) => {
      return err;
    });
}
