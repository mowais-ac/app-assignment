import * as SecureStore from "expo-secure-store";

export async function getStorageValue(key: string) {
  const result = await SecureStore.getItemAsync(key);
  return result;
}
export async function saveToStorage(key: string, value: string) {
  await SecureStore.setItemAsync(key, value);
  const storageValue = await getStorageValue(key);
  return storageValue;
}
export async function deleteFromStorage(key: string) {
  await SecureStore.deleteItemAsync(key);
  const storageValue = await getStorageValue(key);
  console.log("storageValue:::", storageValue);
  return storageValue;
}
