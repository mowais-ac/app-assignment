import * as SecureStore from "expo-secure-store";
import getEnvVars from "../../../../environment";
import { getEncryptedData } from "../common";
const { apiUrl } = getEnvVars();

// APi endpoints
export const API = "/api/";
export const API_URL_LOGIN = `${API}login`;
export const API_REGISTER = `${API}register`;
export const API_AUTH = `${API}auth`;
export const API_RESET_PASSWORD = `${API}reset-password`;
export const API_RESET_PASSWORD_OTP_VALIDATE = `${API}reset-password/otp-validate`;
export const API_RESET_PWD_CONFIRM = `${API}reset-password-confirm`;
export const API_LOGOUT = `${API}logout`;

// Add apis here that don't require encryption
const ENCRYPTED_APIS: { [key: string]: boolean } = {
  // [API_URL_LOGIN]: true,
  // [API_REGISTER]: true,
  // [API_AUTH]: true,
  // [API_RESET_PASSWORD]: true,
  // [API_RESET_PASSWORD_OTP_VALIDATE]: true,
  // [API_RESET_PWD_CONFIRM]: true,
  // [API_LOGOUT]: true,
};

// Add apis here that don't require authentication
const UNSECURED_APIS: { [key: string]: boolean } = {
  [API_URL_LOGIN]: true,
  [API_REGISTER]: true,
  [API_AUTH]: true,
  [API_RESET_PASSWORD]: true,
  [API_RESET_PASSWORD_OTP_VALIDATE]: true,
  [API_RESET_PWD_CONFIRM]: true,
  [API_LOGOUT]: true,
};

interface Header {
  name: string;
  value: string;
}

export async function ApiCall<T>(
  method: "GET" | "POST" | "DELETE" | "PUT",
  url: string,
  body?: any,
  postHeaders?: Header[]
) {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  const requireEncryption = ENCRYPTED_APIS[url];
  const isUnsecureApi = UNSECURED_APIS[url];
  let requestBody = body;
  // console.log('requestBody:::', requestBody);
  if (requireEncryption) {
    const encrypted = getEncryptedData(body);
    requestBody = encrypted.toString("base64");
  }

  if (!isUnsecureApi) {
    const token = await SecureStore.getItemAsync("token");
    if (!token) return;
    (window as any)._at = token;
    headers.append("Authorization", `Bearer ${token}`);
  }

  postHeaders &&
    postHeaders.forEach((h) => {
      headers.append(h.name, h.value);
    });

  const request = JSON.stringify(requestBody);

  let fullUrl = url.indexOf("http") === 0 ? url : apiUrl + url;
  // console.log("fullUrl::", { method, fullUrl });
  let reqOptions: RequestInit;
  if (method === "GET") {
    reqOptions = {
      method,
      headers,
    };
    fullUrl += `?${new URLSearchParams(request).toString()}`;
  } else {
    reqOptions = {
      method,
      body: request,
      headers,
    };
  }

  // console.log("reqOptions1:::", { reqOptions, fullUrl });
  const resp = await fetch(fullUrl, reqOptions);
  // console.log("reqOptions2:::", { reqOptions, fullUrl, resp });

  if (!resp.ok) {
    let error: any = "";
    if (resp.status === 500) {
      error = new Error(`HTTP error! status: ${resp.status}`) as any;
      error.code = resp.status;
      return resp
        .json()
        .then((err) => {
          error.message = err?.error?.message;
          throw error;
        })
        .catch(() => {
          throw error;
        });
    } else {
      const errorResponse = await resp.text();
      const errorJson = JSON.parse(errorResponse);
      const error: any = new Error(errorJson.message);
      error.code = resp.status;
      throw error;
    }
  } else {
    const jsonResponse = resp.json();
    // console.log('jsonResponse:::', jsonResponse)
    return (await jsonResponse) as T;
  }
}

// Api Methods
export async function ApiPost<T>(
  url: string,
  body?: any,
  postHeader?: Header[]
) {
  return ApiCall<T>("POST", url, body, postHeader);
}
export async function ApiPut<T>(url: string, body?: any) {
  return ApiCall<T>("PUT", url, body);
}
export async function ApiGet<T>(
  url: string,
  body?: any,
  postHeader?: Header[]
) {
  return ApiCall<T>("GET", url, body, postHeader);
}
export async function ApiDelete<T>(
  url: string,
  body?: any,
  postHeader?: Header[]
) {
  return ApiCall<T>("DELETE", url, body, postHeader);
}

// Api Calls
export async function ApiLogin(params: any) {
  return ApiPost<any>(API_URL_LOGIN, params);
}
export async function ApiOTPSubmit(params: any) {
  return ApiPost<any>(API_URL_LOGIN, params);
}
export async function ApiRegister(params: any) {
  return ApiPost<any>(API_REGISTER, params);
}
export async function ApiAuth(params: any) {
  return ApiPost<any>(API_AUTH, params);
}
export async function ApiResetPassword(params: any) {
  return ApiPost<any>(API_RESET_PASSWORD, params);
}
export async function ApiResetPasswordOTPValidate(params: any) {
  return ApiPost<any>(API_RESET_PASSWORD_OTP_VALIDATE, params);
}
export async function ApiResetConfirm(params: any) {
  return ApiPost<any>(API_RESET_PWD_CONFIRM, params);
}
export async function ApiLogout(params: any) {
  return ApiPost<any>(API_LOGOUT, params);
}
