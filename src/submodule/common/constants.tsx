import { FIELD_TYPES } from "./interfaces/interfaces";

export const p_states = "states";

export const STATUS_DEFAULT = null;
export const STATUS_IN_PROCESS = "IN_PROCESS";
export const STATUS_SUCCESS = "SUCCESS";
export const STATUS_ERROR = "ERROR";

export const AUTH_MODE = {
  LOGIN: "LOGIN",
  FORGET_PASSWORD: "FORGET_PASSWORD",
  LOGIN_OTP: "LOGIN_OTP",
  RESET_PASSWORD_OTP: "RESET_PASSWORD_OTP",
  ENTER_NEW_PASSWORD: "ENTER_NEW_PASSWORD",
};

export const PROFILE_TYPE_INDIVIDUAL = 0;
export const PROFILE_TYPE_BUSINESS = 1;

// Keys belongs to any values
export const k_token = "token";

// Storage Keys Constants
export const st_token = "token";

// Shared State Variables
export const ss_login_form_data = "login_form_data";
export const ss_show_forget_pwd_form = "show_forget_pwd_form";
export const ss_auth_view_mode = "auth_view_mode";
export const ss_token = "token";
export const ss_is_signed_in = "is_signed_in";
export const ss_reset_password_token = "reset_password_token";
export const ss_profile_form_inputs = "profile_form_inputs";

export const heading_types = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
};
export const heading_colors = {
  primary: "primary",
  secondary: "secondary",
};

export const REGEX = {
  email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  lowercase: /[a-z]/,
  uppercase: /[A-Z]/,
  numbers: /[0-9]/,
  specialCharacters: /(?=.[!@#$%^&*()+_\-=}{[\]|:;"/?.><,`~])/,
  url: new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ),
};

// Input
export const FIELD_INPUT: FIELD_TYPES = "INPUT";
export const FIELD_EMAIL: FIELD_TYPES = "EMAIL";
export const FIELD_TEXTAREA: FIELD_TYPES = "TEXTAREA";
export const FIELD_DATE: FIELD_TYPES = "DATE";
export const FIELD_TIME: FIELD_TYPES = "TIME";
export const FIELD_DATETIME: FIELD_TYPES = "DATETIME";
export const FIELD_SEARCH: FIELD_TYPES = "SEARCH";
export const FIELD_CHECKBOX: FIELD_TYPES = "CHECKBOX";
export const FIELD_RADIO: FIELD_TYPES = "RADIO";
export const FIELD_PHONE: FIELD_TYPES = "PHONE";
export const FIELD_NUMBER: FIELD_TYPES = "NUMBER";
export const FIELD_SELECT: FIELD_TYPES = "SELECT";
export const FIELD_URL: FIELD_TYPES = "URL";
export const FIELD_ATTACH: FIELD_TYPES = "ATTACH";
