"use server";

import { res } from "@/app/_components/Login/Main";
import z from "zod";

const formShit = z.object({
  email: z.email({ message: "It must be email! Bich" }),
  password: z.string().min(5, { message: "Not enough chars" }),
});

export async function SubmitForm(_: res, state: FormData): Promise<res> {
  const data = {
    email: state.get("email")?.toString() ?? null,
    password: state.get("password")?.toString() ?? null,
  };
  const { email, password } = data;
  const validatedShit = formShit.safeParse({ email, password });

  const dayum = { email, password };

  if (validatedShit.success) return { ...dayum, success: true };

  const errMsg = validatedShit.error.flatten().fieldErrors;
  return { ...dayum, success: false, errors: errMsg };
}
