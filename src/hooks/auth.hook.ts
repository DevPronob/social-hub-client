/* eslint-disable @typescript-eslint/no-explicit-any */


import { getMe, loginUser, registerUser } from "@/services/AuthService";
import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { useQuery } from "@tanstack/react-query";

export const useUserRegistration = () => {
   return useMutation<any, Error, FieldValues>({
        mutationKey: ["USER_REGISTRATION"],
        mutationFn: async (userData) =>await registerUser(userData),
        onSuccess: () => {
            toast.success("User registration successful.");
        },
        onError: (error) => {
            toast.error(error.message || "Something went wrong");
            console.log(error,"error")
        },
    });
  };


  export const useUserLogin = () => {
    return useMutation<any, Error, FieldValues>({
      mutationKey: ["USER_LOGIN"],
      mutationFn: async (userData) => await loginUser(userData),
      onSuccess: () => {
        toast.success("User login successful.");
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

//   export const useGetMe = (): any => {
//     return useQuery<any>({
//         queryKey: ["GET_ME"],
//         queryFn: async (): Promise<any> => await getMe(),
//       });
//   }


export const useGetMe = () => {
    return useQuery({
      queryKey: ["GET_ME"],
      queryFn: async () => {
        const data = await getMe();
        if (!data) {
          throw new Error("No user data found"); // Clear and actionable error message
        }
        return data;
      }
    });
  };