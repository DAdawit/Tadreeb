import {
  CategoryTrainings,
  CourseWithScheduleType,
  LatestCoursesType,
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
