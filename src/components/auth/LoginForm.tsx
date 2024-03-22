import React, { Dispatch, SetStateAction, useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";

import { Input } from "~/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { FaFacebook, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";
import { signIn } from "~/app/(auth)/actions";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(100),
});

export type LoginInput = z.infer<typeof loginSchema>;

const LoginForm = ({
  authPageOpen,
  setAuthPageOpen,
}: {
  authPageOpen: number;
  setAuthPageOpen: Dispatch<SetStateAction<number>>;
}) => {
  const [error, setError] = useState<string | null>(null);
  const form = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginInput) => {
    const result = await signIn(data);
    if (result?.error) {
      setError(result.error);
    }
  };
  return (
    <div className="mt-10 flex-col items-center justify-center">
      <h1 className="text-center text-3xl font-bold">Uloguj se</h1>
      <p className="mt-2 text-center text-sm">
        Treba da napraviš nalog?{" "}
        <span
          onClick={() => setAuthPageOpen(1)}
          className="text-primary hover:text-green-600/90 hover:underline"
        >
          Registruj se ovde
        </span>
      </p>
      <Button
        variant="outline"
        className="mb-2 mt-12 w-full font-normal text-zinc-800"
      >
        <div className="flex items-center gap-2">
          <FcGoogle className="h-5 w-5" />
          <p>Sign in with Google</p>
        </div>
      </Button>
      <Button
        variant="outline"
        className="mb-2 w-full bg-[#1877F2] font-normal text-white hover:bg-blue-600 hover:text-white"
      >
        <div className="flex items-center gap-2">
          <FaFacebook className="h-5 w-5" />
          <p>Sign in with Facebook</p>
        </div>
      </Button>
      <div className="my-8 flex w-full items-center">
        <div className="h-[1px] flex-grow bg-gray-300"></div>
        <span className="mx-2 text-sm text-gray-300">ili</span>
        <div className="h-[1px] flex-grow bg-gray-300"></div>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full flex-1 flex-col justify-center gap-2 text-muted-foreground animate-in"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base text-zinc-900">
                  Email adresa
                </FormLabel>
                <FormControl>
                  <Input {...field} autoComplete="on" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base text-zinc-900">
                  Lozinka
                </FormLabel>
                <FormControl>
                  <Input type="password" autoComplete="on" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button size="lg" className="my-3 w-full text-base" type="submit">
            Uloguj se
          </Button>
          {error && (
            <div className="mb-3 mt-1 rounded-md border border-destructive bg-destructive/10 p-3">
              <p className="text-center text-sm font-medium text-destructive">
                {error}
              </p>
            </div>
          )}
        </form>
      </Form>
      <p
        onClick={() => setAuthPageOpen(3)}
        className="mt-1 text-sm text-primary hover:text-green-600/90 hover:underline"
      >
        Zaboravio/la šifru?
      </p>
    </div>
  );
};

export default LoginForm;
