// AxiosInstance.ts

import { getNewAccessToken } from "@/services/AuthService";
import axios from "axios";
import { cookies } from "next/headers";


const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  withCredentials: true, // Enable cookies
});

 axiosInstance.interceptors.request.use(
 async function (config) {
    const cookieStore = cookies();
    const accessToken = (await cookieStore).get("accessToken")?.value;

    if (accessToken) {
      config.headers.Authorization = accessToken;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const config = error.config;

    if (error?.response?.status === 401 && !config?.sent) {
      config.sent = true;
      const res = await getNewAccessToken();
      const accessToken = res.data.accessToken;

      config.headers["Authorization"] = accessToken;
      (await cookies()).set("accessToken", accessToken);

      return axiosInstance(config);
    } else {
      return Promise.reject(error);
    }
  }
);


export default axiosInstance;