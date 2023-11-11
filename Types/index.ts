export interface UserType {
  user: User;
  token: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at: any;
  created_at: string;
  updated_at: string;
}

export interface FormatsType {
  data: FormatType[];
  links: Links;
  meta: Meta;
}

export interface FormatsType {
  data: FormatType[];
  links: Links;
  meta: Meta;
}

export interface TrainingSearchType {
  current_page: number;
  data: TrainingTy[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Link[];
  next_page_url: any;
  path: string;
  per_page: number;
  prev_page_url: any;
  to: number;
  total: number;
}

export interface TrainingTy {
  id: number;
  name: string;
  category_id: number;
  description: string;
  created_at: string;
  updated_at: string;
}
export interface VenueType {
  data: FormatType[];
  links: Links;
  meta: Meta;
}
export interface FormatType {
  id: string;
  attributes: Attributes;
}

export interface Attributes {
  name: string;
}

export interface Links {
  first: string;
  last: string;
  prev: any;
  next: any;
}

export interface Meta {
  current_page: number;
  from: number;
  last_page: number;
  links: Link[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}

export interface Link {
  url?: string;
  label: string;
  active: boolean;
}

export interface TrainingTypes {
  data: TrainingType[];
  links: Links;
  meta: Meta;
}

export interface TrainingType {
  id: string;
  attributes: Attributes;
}

export interface Attributes {
  name: string;
  description: string;
  category: Category;
}

export interface Category {
  id: string;
  name: string;
}

export interface TrainingType {
  data: Training1;
}

export interface Training1 {
  id: string;
  attributes: Attributes;
}

export interface Attributes {
  name: string;
  description: string;
  category: Category;
}

export interface Category {
  id: string;
  name: string;
}

export interface TrainingCoursesType {
  id: number;
  name: string;
  category_id: number;
  description: string;
  created_at: string;
  updated_at: string;
  courses: CoursesType;
}

export interface CoursesType {
  current_page: number;
  data: CourseType[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Link[];
  next_page_url: any;
  path: string;
  per_page: number;
  prev_page_url: any;
  to: number;
  total: number;
}

export interface CourseType {
  id: number;
  title: string;
  description: string;
  course_outline: string;
  training_id: number;
  venue_id: number;
  format_id: number;
  certificate_id: number;
  start_date: string;
  end_date: string;
  created_at: string;
  updated_at: string;
  venue: Venue;
  certificate: Certificate;
}

export interface Certificate {
  id: string;
  name: string;
  image: string;
  created_at: string;
  updated_at: string;
}

export interface Venue {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface Link {
  url?: string;
  label: string;
  active: boolean;
}

// export interface TrainingScheduleType {
//   data: TrainingSchedule;
// }

export interface TrainingScheduleType {
  id: number;
  title: string;
  description: string;
  course_outline: string;
  training_id: number;
  venue_id: number;
  format_id: number;
  start_date: string;
  end_date: string;
  fee: number;
  created_at: string;
  updated_at: string;
  schedules: Schedules;
}

export interface Schedules {
  current_page: number;
  data: ScheduleType[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Link[];
  next_page_url: any;
  path: string;
  per_page: number;
  prev_page_url: any;
  to: number;
  total: number;
}

export interface ScheduleType {
  id: number;
  start_date: string;
  end_date: string;
  fee: number;
  venue_id: number;
  course_id: number;
  created_at: string;
  updated_at: string;
  venue: VenueType;
}

export interface VenueType {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface Link {
  url?: string;
  label: string;
  active: boolean;
}

export interface CategoryTrainings {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
  trainings: Training[];
}

export interface Training {
  id: string;
  name: string;
  category_id: number;
  description: string;
  created_at: string;
  updated_at: string;
}

export interface LatestCoursesType {
  id: number;
  title: string;
  description: string;
  course_outline: string;
  training_id: number;
  venue_id: number;
  format_id: number;
  start_date: string;
  end_date: string;
  fee: number;
  created_at: string;
  updated_at: string;
  venue: Venue;
}

export interface CourseWithScheduleType {
  current_page: number;
  data: CourseType[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Link[];
  next_page_url: any;
  path: string;
  per_page: number;
  prev_page_url: any;
  to: number;
  total: number;
}

export interface CourseType {
  id: number;
  title: string;
  description: string;
  course_outline: string;
  training_id: number;
  venue_id: number;
  format_id: number;
  start_date: string;
  end_date: string;
  fee: number;
  created_at: string;
  updated_at: string;
  venue: Venue;
}

export interface Venue {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}
export interface Schedule {
  id: number;
  start_date: string;
  end_date: string;
  fee: number;
  venue_id: number;
  course_id: number;
  created_at: string;
  updated_at: string;
}

export interface ClassRootType {
  id: number;
  name: string;
  category_id: number;
  description: string;
  created_at: string;
  updated_at: string;
  courses: Courses;
}

export interface Courses {
  current_page: number;
  data: Daum[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Link[];
  next_page_url: any;
  path: string;
  per_page: number;
  prev_page_url: any;
  to: number;
  total: number;
}

export interface Daum {
  id: number;
  title: string;
  description: string;
  course_outline: string;
  training_id: number;
  venue_id: number;
  format_id: number;
  start_date: string;
  end_date: string;
  fee: number;
  created_at: string;
  updated_at: string;
  venue: Venue;
  training?: Training;
}

export interface Venue {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface Training {
  id: string;
  name: string;
  category_id: number;
  description: string;
  created_at: string;
  updated_at: string;
}
export interface Link {
  url?: string;
  label: string;
  active: boolean;
}

export interface CourseBooksType {
  current_page: number;
  data: BookType[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Link[];
  next_page_url: any;
  path: string;
  per_page: number;
  prev_page_url: any;
  to: number;
  total: number;
}

export interface BookType {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  course_id?: number;
  schedule_id?: number;
  status: string;
  created_at: string;
  updated_at: string;
  course?: Course;
  schedule?: Schedule;
}

export interface Course {
  id: number;
  title: string;
  description: string;
  course_outline: string;
  training_id: number;
  venue_id: number;
  format_id: number;
  start_date: string;
  end_date: string;
  fee: number;
  created_at: string;
  updated_at: string;
  venue: Venue;
}

export interface Venue {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface Schedule {
  id: number;
  start_date: string;
  end_date: string;
  fee: number;
  venue_id: number;
  course_id: number;
  created_at: string;
  updated_at: string;
  course: Course2;
  venue: Venue3;
}

export interface Course2 {
  id: number;
  title: string;
  description: string;
  course_outline: string;
  training_id: number;
  venue_id: number;
  format_id: number;
  start_date: string;
  end_date: string;
  fee: number;
  created_at: string;
  updated_at: string;
  venue: Venue2;
}

export interface Venue2 {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface Venue3 {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface Link {
  url?: string;
  label: string;
  active: boolean;
}

export interface SearchReasultCourseType {
  current_page: number;
  data: CoursSearch[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Link[];
  next_page_url: any;
  path: string;
  per_page: number;
  prev_page_url: any;
  to: number;
  total: number;
}

export interface CoursSearch {
  id: number;
  title: string;
  description: string;
  course_outline: string;
  training_id: number;
  venue_id: number;
  format_id: number;
  start_date: string;
  end_date: string;
  fee: number;
  created_at: string;
  updated_at: string;
  venue: Venue;
  training?: Training;
  format: Format;
}

export interface Venue {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface Format {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface Link {
  url?: string;
  label: string;
  active: boolean;
}

export interface AllCoursesThisMonth {
  current_page: number;
  data: Course[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Link[];
  next_page_url: any;
  path: string;
  per_page: number;
  prev_page_url: any;
  to: number;
  total: number;
}

export interface Course {
  id: number;
  title: string;
  description: string;
  course_outline: string;
  training_id: number;
  venue_id: number;
  format_id: number;
  start_date: string;
  end_date: string;
  fee: number;
  created_at: string;
  updated_at: string;
  venue: Venue;
  training?: Training;
  format: Format;
}

export interface Venue {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface Training {
  id: string;
  name: string;
  category_id: number;
  description: string;
  created_at: string;
  updated_at: string;
}

export interface Link {
  url?: string;
  label: string;
  active: boolean;
}

export interface VenueCouses {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  courses: Courses;
  training?: Training;
}

export interface Courses {
  current_page: number;
  data: Daum[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Link[];
  next_page_url: any;
  path: string;
  per_page: number;
  prev_page_url: any;
  to: number;
  total: number;
}

export interface CourseDetail {
  id: number;
  title: string;
  description: string;
  course_outline: string;
  training_id: number;
  venue_id: number;
  format_id: number;
  start_date: string;
  end_date: string;
  fee: number;
  created_at: string;
  updated_at: string;
}

export interface Link {
  url?: string;
  label: string;
  active: boolean;
}

export interface ContactUsType {
  data: ContactType[];
  links: Links;
  meta: Meta;
}

export interface ContactType {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  fullName: string;
  location: string;
  phoneNumber: string;
  email: string;
  created_at: String;
}

export interface Links {
  first: string;
  last: string;
  prev: any;
  next: any;
}

export interface Meta {
  current_page: number;
  from: number;
  last_page: number;
  links: Link[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}

export interface Link {
  url?: string;
  label: string;
  active: boolean;
}

export interface StatisticsType {
  formats: number;
  categories: number;
  trainings: number;
  courses: number;
  venues: number;
}

export interface TryType {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  trainings: Training[];
}

export interface Training {
  id: string;
  name: string;
  category_id: number;
  description: string;
  created_at: string;
  updated_at: string;
}
// export interface HeroType {
//   data: HeroDetail[];
// }

export interface HeroType {
  id: string;
  attributes: Attributes;
}

export interface Attributes {
  title: string;
  description: string;
  image: string;
}

export interface SocialMediaType {
  id: string;
  attributes: Attributes;
}

export interface Attributes {
  facebook?: string;
  linkedin?: string;
  instagram?: string;
  whatsUp?: string;
}

export interface Links {
  id: number;
  facebook: string;
  linkedin: string;
  instagram: string;
  whatsUp: string;
  created_at: string;
  updated_at: string;
}

export interface CertifcationType {
  data: Certifcate[];
  links: Links;
  meta: Meta;
}

export interface Certifcate {
  id: string;
  attributes: Attributes;
}

export interface Attributes {
  name: string;
  image: string;
}
