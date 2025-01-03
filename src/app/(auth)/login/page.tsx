"use client";
import SHForm from "@/components/Form/SHForm";
import SHInput from "@/components/Form/SHInput";
import { Button } from "@/components/UI/button";
import { useUserLogin } from "@/hooks/auth.hook";
import { cookies } from "next/headers";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

export default function Login() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const {
    mutate: userLogin,
    data: loginUser,
    isPending,
    isSuccess,
  } = useUserLogin();
  const redirect = searchParams.get("redirect");
  const onSumit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    await userLogin(data);
  };
  console.log(loginUser, "loginUser");
  useEffect(() => {
    if (isSuccess && !isPending) {
      if (redirect) {
        router.push(redirect);
      } else {
        router.push("/");
      }
    }
  }, [isPending, isSuccess]);

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-[420px] bg-white rounded-lg shadow dark:border md:mt-0 lg:max-w-lg sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign In to your account
          </h1>
          <SHForm onSubmit={onSumit}>
            <div className="mt-4">
              <SHInput
                size="md"
                name="email"
                label="Email"
                placeholder="Enter your Email"
              />
            </div>
            <div className="mt-4">
              <SHInput
                size="md"
                name="password"
                label="Password"
                placeholder="Enter your Password"
              />
            </div>
            <Button className="w-full mt-4">Submit</Button>
          </SHForm>
          <div className="flex items-center justify-between">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="remember"
                  className="text-gray-500 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
            </div>
            <a
              href="#"
              className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Forgot password?
            </a>
          </div>
          {/* <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button> */}
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Don’t have an account yet?{" "}
            <Link
              href="/register"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}