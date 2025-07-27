"use client";

import { SubmitForm } from "@/app/_actions/Login/form";
import Image from "next/image";
import { useActionState, useEffect } from "react";
import call4U from "../../../public/call4U.png";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import { log } from "console";
export type res =
  | {
      email: string | null;
      password: string | null;
      success: true;
    }
  | {
      email: string | null;
      password: string | null;
      success: false;
      errors: Partial<Record<"email" | "password", string[] | undefined>>;
    };

function Main() {
  const [state, action, loading] = useActionState<res, FormData>(SubmitForm, {
    email: null,
    password: null,
    success: false,
    errors: {},
  });
  useEffect(() => {
    if (state.success)
      enqueueSnackbar("That was easy!", { variant: "success" });
    else if (Object.keys(state.errors).length !== 0) {
      enqueueSnackbar("Fill up all the fields!", { variant: "error" });
    }
  }, [state]);

  return (
    <div className="w-full h-screen bg-gradient-to-t from-[#3083b5] to-blue-100 flex justify-center items-center">
      <div className="bg-white p-6 rounded-2xl shadow-xl max-w-sm w-full">
        <div className="flex flex-col items-center mb-6">
          <div>
            <Image src={call4U} alt="" width={200} height={200} />
          </div>
        </div>

        <form action={action} className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm mb-1">
              Email address
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-1">Password</label>
            <input
              type="password"
              name="password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#3083b5] hover:bg-[#0d54a7] text-white py-2 rounded-lg transition cursor-pointer"
          >
            Continue
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </div>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-500 text-sm">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <button className="w-full flex items-center justify-center border border-gray-300 rounded-lg py-2 text-sm hover:bg-gray-100 cursor-pointer">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          Sign up with Google
        </button>
      </div>
    </div>
  );
}

export default Main;
