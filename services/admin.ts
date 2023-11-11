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
  TrainingType,
  TrainingTypes,
  VenueType,
} from "@/Types";
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
export async function fetchBookedCourses(): Promise<CourseBooksType> {
  return await api
    .get(`/booked-courses`)
    .then((res) => {
      console.log(res.data);
      return res?.data.data;
    })
    .catch((err) => {
      return err;
    });
}
export async function fetchApprovedBookedCourses(): Promise<CourseBooksType> {
  return await api
    .get(`/approved-booked-courses`)
    .then((res) => {
      console.log(res.data);
      return res?.data.data;
    })
    .catch((err) => {
      return err;
    });
}

export async function fetchRejectedBookedCourses(): Promise<CourseBooksType> {
  return await api
    .get(`/rejected-booked-courses`)
    .then((res) => {
      console.log(res.data);
      return res?.data.data;
    })
    .catch((err) => {
      return err;
    });
}

export async function fetchContactUsinfos(): Promise<ContactUsType> {
  return await api
    .get(`/contactus`)
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

export async function fetchCertifications(): Promise<CertifcationType> {
  return await api
    .get(`/certificates`)
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
