"use server";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/route";
import { LoginSchema } from "@/schemas";
import { AuthError } from "next-auth";
import * as z from "zod";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { email, password } = validatedFields.data;

  try {
    await signIn("credentials", {
      email,
      password,
      // redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
    return { success: "Email sent!" };
  } catch (error) {
    if (error instanceof AuthError) {
      console.log({ error });

      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials" };
        case "AccessDenied":
          return { error: "Verification Failed! Verify your mail!" };
        default:
          return { error: "Something went wrong!" };
      }
    }

    throw error;
  }
};
