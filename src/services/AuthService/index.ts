/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import axiosInstance from "@/lib/AxiosInstance";
import axios from "axios";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";
import { jwtDecode } from "jwt-decode";

export const registerUser = async (userData: FieldValues) => {
  try {
    // Log data before making the request
    console.log("Data sent to API:", userData);

    // Make a POST request using axiosInstance
    const response = await axiosInstance.post("/auth/register", userData); 
    if(!response){
      throw new Error("No response from the server");
    }
    if (response?.data?.success) {
      const cookieStore = cookies();
      (await cookieStore).set("accessToken", response.data.data.accessToken);
      (await cookieStore).set("refreshToken", response.data.data.refreshToken);
    }
    console.log("Response from API r:", response.data); // Log the response from the API

    return response.data; // Return the parsed data
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error("Error response:", error.response?.data || error.message);
      throw new Error(error.response?.data?.message || error.message || "Registration failed");
    } else {
      console.error("Unexpected error:", error);
      throw new Error("An unexpected error occurred");
    }
  }
};

export const loginUser = async (userData: FieldValues) => {
  try {
  const response= await axiosInstance.post("/auth/login", userData);

    if (response?.data?.success) {
      console.log(response.data.data.accessToken,"data login")
      const cookieStore = cookies();
      (await cookieStore).set("accessToken", response.data.data.accessToken);
      (await cookieStore).set("refreshToken", response.data.data.refreshToken);
    }
console.log(response,"data login")
    return response.data;
  } catch (error: any) {
    if(axios.isAxiosError(error)){
      console.error("Error response:", error.response?.data || error.message);
      // throw new Error(error.response?.data?.message || error.message || "Login failed");
    }else {
      console.error("Unexpected error:", error);
      // throw new Error("An unexpected error occurred");
    }
  }
};

// export const logout = async() => {
//   Cookies.remove("accessToken");
//   Cookies.remove("refreshToken");
// };

export const getNewAccessToken = async () => {
  try {
    const refreshToken = (await cookies()).get("refreshToken");

    const { data } = await axiosInstance.post("/auth/refresh-token", null, {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    });

    return data;
  } catch {
    throw new Error("Failed to get a new access token");
  }
};


export const getMe = async () => {
 const accessToken = (await cookies()).get("accessToken")?.value;


  let decodedToken = null;

  if (accessToken) {
    decodedToken = await jwtDecode(accessToken);

    return {
      _id: decodedToken?.data._id,
      name: decodedToken?.data.name,
      email: decodedToken?.data.email,
      mobileNumber: decodedToken?.data.mobileNumber,
      role: decodedToken?.data.role,
      status: decodedToken?.data.status,
      profilePhoto: decodedToken?.data.profilePhoto,
    };
  }


  return decodedToken;
};