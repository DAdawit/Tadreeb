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
  data: Training;
}

export interface Training {
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
