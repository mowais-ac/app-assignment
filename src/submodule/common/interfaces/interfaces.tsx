// --------------------- Enums
export enum ENUM_ATTACH {
  FILE,
  IMAGE,
}

export enum ENUM_GENDER {
  MALE = "male",
  FEMALE = "female",
}

export enum ENUM_INPUT_TYPE {
  PHONE,
  EMAIL,
  NUMBER,
  ADDRESS,
}

// --------------------- Types
export type AUTH_VIEW_MODES =
  | "LOGIN"
  | "LOGIN_OTP"
  | "FORGET_PASSWORD"
  | "RESET_PASSWORD_OTP"
  | "ENTER_NEW_PASSWORD";

export type STATUS = "IN_PROCESS" | "SUCCESS" | "ERROR";

export type ATTACH_TYPES = ENUM_ATTACH.FILE | ENUM_ATTACH.IMAGE;

export type GENDER =
  | ENUM_GENDER.MALE
  | ENUM_GENDER.FEMALE;

export type INPUT_TYPES =
  | ENUM_INPUT_TYPE.PHONE
  | ENUM_INPUT_TYPE.EMAIL
  | ENUM_INPUT_TYPE.NUMBER
  | ENUM_INPUT_TYPE.ADDRESS;

export type HEADING_INTERFACE = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type HEADING_COLORS_INTERFACE = "primary" | "secondary" | "";

export type FIELD_TYPES =
  | "INPUT"
  | "EMAIL"
  | "TEXTAREA"
  | "DATE"
  | "TIME"
  | "DATETIME"
  | "SEARCH"
  | "CHECKBOX"
  | "RADIO"
  | "PHONE"
  | "NUMBER"
  | "SELECT"
  | "URL"
  | "ATTACH";

// --------------------- Interface

// Common interface
export interface SelectProps {
  label: string;
  value: string | boolean;
  selected?: boolean;
}

export interface FileProps {
  file: Blob;
  uri: string;
  type: ATTACH_TYPES;
}
export interface Save_Storage_Props {
  key: string;
  value: string;
}

export interface FormFieldProps {
  name: string;
  label: string;
  type: FIELD_TYPES;
  value?: string;
  date?: Date;
  required?: boolean;
  rules?: any;
  placeholder?: string;
  options?: SelectProps[];
  selectedOption?: SelectProps;
  dependancy?: any;
}

export interface InputErrorProps {
  show: boolean;
  valid?: boolean;
  message?: string;
}

export interface FormError {
  code: number;
  message: string;
}
export interface SubHeaderProps {
  title: string;
  description?: string;
  actions?: any;
}

// Form Interfaces
export interface LoginProps {
  email?: string;
  password?: string;
  profileType?: number;
}
export interface ProfileFormProps {
  email_address: string;
  phone_number: number;
  website_url: string;
  registration_number: string;
  date: Date;
  attach_document_1: FileProps;
  attach_document_2: FileProps;
  gender: GENDER;
}
