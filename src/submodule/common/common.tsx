import * as CryptoJS from "crypto-js";
import { publicKey } from "../keys/key";
import * as SecureStore from "expo-secure-store";
import { REGEX } from "./constants";
import i18n from "../../i18n/i18n";

export const getEncryptedData = (data: any) => {
  const aesEncrypted = CryptoJS.AES.encrypt(JSON.stringify(data), publicKey, {
    keySize: 128 / 8,
    iv: publicKey,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  const encodedWord = CryptoJS.enc.Utf8.parse(aesEncrypted);
  const encoded = CryptoJS.enc.Base64.stringify(encodedWord);
  return encoded;
};

export const isSuccess = (code: number) => {
  let success = false;
  if (code == 200 || code == 201) {
    success = true;
  }

  return success;
};

export const validate = {
  email: (email: string) => {
    const isValidEmail = REGEX.email.test(email);
    return isValidEmail;
  },
  empty: (value: string) => {
    return !value || value.length === 0;
  },
  hasFile: (file: Blob) => {
    const isValidFile = !!file;
    return isValidFile;
  },
  minLength: (value: string, length: number) => {
    const isValidLength = value?.length >= length;
    return isValidLength;
  },
  maxLength: (value: string, length: number) => {
    const isValidLength = value?.length <= length;
    return isValidLength;
  },
  hasUppercase: (value: string) => {
    const hasUppercase = value.search(REGEX.uppercase) === -1;
    return !hasUppercase;
  },
  hasLowercase: (value: string) => {
    const hasLowercase = value.search(REGEX.lowercase) === -1;
    return !hasLowercase;
  },
  hasNumber: (value: string) => {
    const hasNumber = value.search(REGEX.numbers) === -1;
    return !hasNumber;
  },
  hasSpecialCharacter: (value: string) => {
    const hasSpecialCharacter = value.search(REGEX.specialCharacters) === -1;
    return !hasSpecialCharacter;
  },
  otp: (value: string) => {
    const hasValidMinLength = value && validate.minLength(value, 6);
    const hasValidMaxLength = value && validate.maxLength(value, 6);
    return hasValidMaxLength && hasValidMinLength;
  },
  url: (value: string) => {
    const isValidUrl = REGEX.url.test(value);
    return !isValidUrl;
  },
  phone: (value: number) => {
    const hasValidMinLength = validate.minLength(value?.toString(), 8);
    return hasValidMinLength;
  },
  password: (value: string) => {
    const hasPassword = !validate.empty(value);
    const hasValidMinLength = validate.minLength(value, 8);
    const hasValidMaxLength = validate.maxLength(value, 16);
    const hasLowercase = validate.hasLowercase(value);
    const hasUppercase = validate.hasUppercase(value);
    const hasNumbers = validate.hasNumber(value);
    const hasSpecialCharacter = validate.hasSpecialCharacter(value);
    const valid =
      hasValidMinLength &&
      hasValidMaxLength &&
      hasLowercase &&
      hasUppercase &&
      hasNumbers &&
      hasSpecialCharacter;
    let message = "Password is required";
    if (!hasPassword) {
      message = i18n.t("hasPassword");
    } else if (!hasValidMinLength) {
      message = i18n.t("hasValidMinLength");
    } else if (!hasLowercase) {
      message = i18n.t("hasLowercase");
    } else if (!hasUppercase) {
      message = i18n.t("hasUppercase");
    } else if (!hasValidMaxLength) {
      message = i18n.t("hasValidMaxLength");
    } else if (!hasNumbers) {
      message = i18n.t("hasNumbers");
    } else if (!hasSpecialCharacter) {
      message = i18n.t("hasSpecialCharacter");
    }
    return {
      valid: valid,
      message: message,
      hasValidMinLength: hasValidMinLength,
      hasLowercase: hasLowercase,
      hasUppercase: hasUppercase,
      hasNumbers: hasNumbers,
      hasSpecialCharacter: hasSpecialCharacter,
    };
  },
};

export const formatDate = (value: Date) => {
  const date = value.getDate();
  const month = value.getMonth() + 1;
  const monthName = value.toLocaleString("default", { month: "short" });
  const year = value.getFullYear();
  const showDate = `${date} ${monthName}, ${year}`;
  const formattedDate = new Date(`${year}-${month}-${date} `);
  return {
    date: formattedDate,
    show: showDate,
  };
};

export const fetchImageFromUri = async (uri: string) => {
  const response = await fetch(uri);
  const blob = await response.blob();
  return blob;
};
