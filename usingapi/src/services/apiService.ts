import axios, { AxiosError } from "axios";

export function axiosService(conf: any) {
  const axiosInstance = axios.create(conf);

  return axiosInstance;
}

export const baseURL = process.env.NEXT_PUBLIC_DATA_BASE_URL;


export const apiService = axiosService({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
