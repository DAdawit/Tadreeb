import {
  AllCoursesThisMonth,
  CategoryTrainings,
  CertifcationType,
  CertificationCoursesType,
  ClassRootType,
  CourseWithScheduleType,
  FormatTypes,
  HeroType,
  LatestCoursesType,
  Links,
  SocialMediaType,
  TrainingSearchType,
  TryType,
  VenueCouses,
  VenueType,
} from "@/Types";
import api, { devBaseurl } from "@/app/axios";

export async function fetchCategoryTrainings(): Promise<TryType[]> {
  return await api
    .get(`/category-trainings`)
    .then((res) => {
      console.log(res.data);
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
export async function fetchCoursesWithSchedule(
  page: number
): Promise<CourseWithScheduleType> {
  return await api
    .get(`/courses-with-schedule?page=${page}`)
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
export async function fetchCertificationCourses(
  id: string
): Promise<CertificationCoursesType> {
  return await api
    .get(`/get-certificate-courses/${id}`)
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
    .get(`/hero-section`)
    .then((res) => {
      return res?.data.data;
    })
    .catch((err) => {
      return err;
    });
}

// prodBaseUrl;
// devBaseurl;
// export async function getHeroSections() {
//   const res = await fetch(`${devBaseurl}/hero-section`, {
//     next: {
//       revalidate: 10,
//     },
//   });
//   return res.json();
// }

export async function getHeroSections(): Promise<HeroType[]> {
  return await api
    .get(`/hero-section`)
    .then((res) => {
      return res?.data.data;
    })
    .catch((err) => {
      return err;
    });
}

// export async function getSocialMediaLinks(): Promise<Links> {
//   const res = await fetch(`${devBaseurl}/get-social-media-links`, {
//     next: {
//       revalidate: 10,
//     },
//   });
//   return res.json();
// }

export async function getSocialMediaLinks(): Promise<Links> {
  return await api
    .get(`/get-social-media-links`)
    .then((res) => {
      return res?.data;
    })
    .catch((err) => {
      return err;
    });
}

// export async function getTrainigFormats(): Promise<VenueType> {
//   const res = await fetch(`${devBaseurl}/get-formats`, {
//     next: {
//       revalidate: 10,
//     },
//   });
//   return res.json();
// }

export async function getTrainigFormats(): Promise<VenueType> {
  return await api
    .get(`/get-formats`)
    .then((res) => {
      console.log(res.data.data);
      return res?.data.data;
    })
    .catch((err) => {
      return err;
    });
}

// export async function getTrainingVenues(): Promise<VenueType> {
//   const res = await fetch(`${devBaseurl}/get-venues`, {
//     next: {
//       revalidate: 10,
//     },
//   });
//   return res.json();
// }

export async function getTrainingVenues(): Promise<VenueType> {
  return await api
    .get(`/get-venues`)
    .then((res) => {
      return res?.data.data;
    })
    .catch((err) => {
      return err;
    });
}

// export async function getCertificates(): Promise<CertifcationType> {
//   const res = await fetch(`${devBaseurl}/get-certificates`, {
//     next: {
//       revalidate: 10,
//     },
//   });
//   return res.json();
// }

export async function getCertificates(): Promise<CertifcationType> {
  return await api
    .get(`/get-certificates`)
    .then((res) => {
      return res?.data.data;
    })
    .catch((err) => {
      return err;
    });
}
// export async function getTrainings(): Promise<FormatTypes> {
//   const res = await fetch(`${devBaseurl}/category-trainings`, {
//     next: {
//       revalidate: 10,
//     },
//   });
//   return res.json();
// }

export async function getTrainings(): Promise<FormatTypes[]> {
  return await api
    .get(`/category-trainings`)
    .then((res) => {
      return res?.data.data;
    })
    .catch((err) => {
      return err;
    });
}
