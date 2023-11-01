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
