/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
"use server";

import type { LoginInput } from "~/components/auth/LoginForm";

import { createClient } from "~/utils/supabase/server";
import { cookies, headers } from "next/headers";
import type { SignUpInput } from "~/components/auth/RegisterForm";
import { api } from "~/trpc/server";

const supabase = createClient(cookies());
const origin = headers().get("origin");

export const signUp = async (data: SignUpInput) => {
  "use server";
  // const { result } = await api.profiles.checkUsername.query({
  //   username: data.username,
  // });
  // // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  // if (!result.available) {
  //   return {
  //     error: "Korisničko ime već postoji.",
  //   };
  // }
  const { error } = await supabase.auth.signUp({
    email: data.email,
    password: data.password,

    options: {
      emailRedirectTo: `${origin}/auth/callback`,
      data: {
        username: data.username,
      },
    },
  });

  if (error) {
    return {
      error: error.message,
    };
  }
};
export const signIn = async (data: LoginInput) => {
  "use server";

  const { error } = await supabase.auth.signInWithPassword({
    email: data.email,
    password: data.password,
  });
  if (error) {
    return {
      error: error.message,
    };
  }
};
