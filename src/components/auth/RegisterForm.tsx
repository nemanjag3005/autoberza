"use client";
import React, { type Dispatch, type SetStateAction, useState } from "react";
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
import Link from "next/link";
import { signUp } from "~/app/(auth)/actions";

const registrationSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(100),
  username: z.string().min(4).max(30),
});

export type SignUpInput = z.infer<typeof registrationSchema>;

const RegisterForm = ({
  authPageOpen,
  setAuthPageOpen,
}: {
  authPageOpen: number;
  setAuthPageOpen: Dispatch<SetStateAction<number>>;
}) => {
  const form = useForm<SignUpInput>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const onSubmit = async (data: SignUpInput) => {
    setSuccess("Check your email for further instructions");
    const result = await signUp(data);
    if (result?.error) {
      setSuccess(null);
      setError(result.error);
    }
  };
  const [step, setStep] = useState(0);
  return (
    <div className="mt-10 flex-col items-center justify-center">
      <h1 className="text-center text-3xl font-bold">Registruj se</h1>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full flex-1 flex-col justify-center gap-2 text-muted-foreground animate-in"
        >
          {step == 0 ? (
            <div>
              <p className="mt-2 text-center text-sm">
                Već imaš nalog?{" "}
                <span
                  onClick={() => setAuthPageOpen(0)}
                  className="text-primary hover:text-green-600/90 hover:underline"
                >
                  Uloguj se ovde
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
              <Button
                size="lg"
                className="my-3 w-full text-base"
                onClick={() => setStep(1)}
              >
                Dalje
              </Button>{" "}
            </div>
          ) : (
            <div className="mt-10">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base text-zinc-900">
                      Lozinka
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Kreiraj lozinku..."
                        autoComplete="on"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="mb-4 mt-8">
                    <FormLabel className="text-base text-zinc-900">
                      Korisničko ime (Ime vidljivo drugima na platformi)
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="name"
                        placeholder="Kreiraj korisničko ime..."
                        autoComplete="on"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button size="lg" className="my-3 w-full text-base" type="submit">
                Kreiraj nalog
              </Button>
              {success && (
                <div className="mb-3 mt-1 rounded-md border border-border bg-secondary/50 p-3">
                  <p className="text-center text-sm font-medium text-muted-foreground">
                    {success}
                  </p>
                </div>
              )}
              {error && (
                <div className="mb-3 mt-1 rounded-md border border-destructive bg-destructive/10 p-3">
                  <p className="text-center text-sm font-medium text-destructive">
                    {error}
                  </p>
                </div>
              )}
              <p className="text-xs text-gray-500">
                Kreiranjem naloga na Auto Berzi slažete se sa našim{" "}
                <span className="hover:text-primaryDark text-primary hover:underline">
                  <Link href="/">Uslovima korišćenja</Link>
                </span>{" "}
                i{" "}
                <span className="hover:text-primaryDark text-primary hover:underline">
                  <Link href="/">Politikom privatnosti</Link>
                </span>
                . Takođe se slažete da primate emailove od Obuci.rs i u svakom
                trenutku možete promeniti vaše preference pretplate.
              </p>
            </div>
          )}
        </form>
      </Form>
    </div>
  );
};

export default RegisterForm;
