import {
  CertifcationType,
  ContactUsType,
  CourseBooksType,
  FormatsType,
  HeroType,
  SocialMediaType,
  StatisticsType,
  TrainingCoursesType,
  TrainingScheduleType,
  TrainingTypes,
  VenueType,
} from "@/Types";
import api from "@/app/axios";

export async function fetchTrainingFormats(page: number): Promise<FormatsType> {
  return await api
    .get(`/formats?page=${page}`)
    .then((res) => {
      return res?.data;
    })
    .catch((err) => {
      return err;
    });
}

export async function fetchVenues(id: number): Promise<VenueType> {
  return await api
    .get(`/venues?page=${id}`)
    .then((res) => {
      return res?.data;
    })
    .catch((err) => {
      return err;
    });
}

export async function fetchCategories(page: number): Promise<VenueType> {
  return await api
    .get(`/categories?page=${page}`)
    .then((res) => {
      return res?.data;
    })
    .catch((err) => {
      return err;
    });
}
export async function fetchTrainings(page: number): Promise<TrainingTypes> {
  return await api
    .get(`/trainings?page=${page}`)
    .then((res) => {
      return res?.data;
    })
    .catch((err) => {
      return err;
    });
}

export async function fetchTrainingCourses(
  id: string
): Promise<TrainingCoursesType> {
  return await api
    .get(`/training-courses/${id}`)
    .then((res) => {
      return res?.data.data;
    })
    .catch((err) => {
      return err;
    });
}

export async function fetchCourseSchedules(
  id: string
): Promise<TrainingScheduleType> {
  return await api
    .get(`/course-schedules/${id}`)
    .then((res) => {
      console.log(res.data);

      return res?.data.data;
    })
    .catch((err) => {
      return err;
    });
}
export async function fetchBookedCourses(
  page: number
): Promise<CourseBooksType> {
  return await api
    .get(`/booked-courses?page=${page}`)
    .then((res) => {
      console.log(res.data);
      return res?.data.data;
    })
    .catch((err) => {
      return err;
    });
}
export async function fetchApprovedBookedCourses(
  page: number
): Promise<CourseBooksType> {
  return await api
    .get(`/approved-booked-courses?page=${page}`)
    .then((res) => {
      console.log(res.data);
      return res?.data.data;
    })
    .catch((err) => {
      return err;
    });
}

export async function fetchRejectedBookedCourses(
  page: number
): Promise<CourseBooksType> {
  return await api
    .get(`/rejected-booked-courses?page=${page}`)
    .then((res) => {
      console.log(res.data);
      return res?.data.data;
    })
    .catch((err) => {
      return err;
    });
}

export async function fetchContactUsinfos(
  page: number
): Promise<ContactUsType> {
  return await api
    .get(`/contactus?page=${page}`)
    .then((res) => {
      // console.log(res);
      return res?.data;
    })
    .catch((err) => {
      return err;
    });
}
export async function fetchStatistics(): Promise<StatisticsType> {
  return await api
    .get(`/statistics`)
    .then((res) => {
      console.log(res.data.data);
      return res?.data.data;
    })
    .catch((err) => {
      return err;
    });
}

export async function fetchHeroSection(): Promise<HeroType[]> {
  return await api
    .get(`/hero`)
    .then((res) => {
      // console.log(res.data.data);
      return res?.data.data;
    })
    .catch((err) => {
      return err;
    });
}

export async function fetchCertifications(
  page: number
): Promise<CertifcationType> {
  return await api
    .get(`/certificates?page=${page}`)
    .then((res) => {
      return res?.data;
    })
    .catch((err) => {
      return err;
    });
}

export async function fetchSocialMediaLinks(): Promise<SocialMediaType[]> {
  return await api
    .get(`/social-media`)
    .then((res) => {
      console.log(res.data);
      return res?.data.data;
    })
    .catch((err) => {
      return err;
    });
}
