"use server";

import type { LoginInput } from "~/components/auth/LoginForm";

import { createClient } from "~/utils/supabase/server";
import { cookies, headers } from "next/headers";
import type { SignUpInput } from "~/components/auth/RegisterForm";

const supabase = createClient(cookies());
const origin = headers().get("origin");

export const signUp = async (data: SignUpInput) => {
  "use server";

  const { error } = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
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
