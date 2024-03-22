"use client";
import {
  Bars3Icon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import type { User } from "@supabase/supabase-js";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { createClient } from "~/utils/supabase/client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const newsletterSchema = z.object({
  email: z.string().email(),
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;

const Sidebar: React.FC<{ user: User | null }> = ({ user }) => {
  const [menuOpen, setMenuOpen] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const router = useRouter();
  const supabase = createClient();

  const form = useForm<NewsletterInput>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: NewsletterInput) => {
    console.log(data);
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };
  return (
    <div className="block md:hidden">
      <Button
        onClick={() => setMenuOpen(1)}
        size="icon"
        className="bg-transparent hover:bg-transparent"
      >
        <Bars3Icon className="h-7 w-7" />
      </Button>
      {menuOpen == 1 ? (
        <div className="fixed inset-0 left-0 top-0 z-50 h-screen w-full overflow-hidden bg-white px-4 py-4">
          <button
            onClick={() => setMenuOpen(0)}
            className="absolute right-6 top-4"
          >
            <XMarkIcon className="h-6 w-6 text-zinc-800" />
          </button>
          <div className="flex flex-col">
            <h3 className="flex items-center text-2xl font-bold text-zinc-800">
              <div className="mr-2.5 h-4 w-2 rounded-r-sm bg-primary"></div>
              Meni
            </h3>
            {user && (
              <>
                <div className="mt-6 flex w-full items-center justify-between">
                  <span className=" font-semibold">
                    <Link onClick={() => setMenuOpen(0)} href="">
                      Profil
                    </Link>
                  </span>
                  <div>
                    <UserCircleIcon className="h-8 w-8 text-gray-300" />
                  </div>
                </div>
                <span className="mt-6 font-semibold">
                  <Link onClick={() => setMenuOpen(0)} href="">
                    Pratim
                  </Link>
                </span>
              </>
            )}

            <span className="mt-6 font-semibold">
              <Link onClick={() => setMenuOpen(0)} href="">
                Aukcije
              </Link>
            </span>
            <span className="mt-6  font-semibold">
              <Link onClick={() => setMenuOpen(0)} href="/izdvojene-aukcije">
                Izdvojeno
              </Link>
            </span>
            <span className="mt-6  font-semibold">
              <Link onClick={() => setMenuOpen(0)} href="/prosle-aukcije">
                Prošle Aukcije
              </Link>
            </span>
            <button className="mt-6 w-fit rounded-full bg-primary px-2.5 py-1.5 font-semibold text-zinc-800 hover:bg-green-600/70 hover:text-zinc-950">
              Prodaj Auto
            </button>
            {user && (
              <span className="mt-6 font-semibold">
                <Link onClick={() => setMenuOpen(0)} href="">
                  Moji Oglasi
                </Link>
              </span>
            )}

            <span className="mt-6  font-semibold">
              <Link onClick={() => setMenuOpen(0)} href="/forum">
                Forum
              </Link>
            </span>
            {user && (
              <span className="mt-6 font-semibold">
                <Link onClick={() => setMenuOpen(0)} href="">
                  Podešavanja
                </Link>
              </span>
            )}

            <span className="mt-6  font-semibold">
              <Link onClick={() => setMenuOpen(0)} href="/sta-je">
                Šta je Auto Berza?
              </Link>
            </span>
            <span
              onClick={() => setMenuOpen(2)}
              className="mt-6  font-semibold"
            >
              Newsletter
            </span>
            {user && (
              <button
                onClick={() =>
                  signOut().then(() => {
                    setMenuOpen(0);
                    router.refresh();
                  })
                }
                className="mt-6 w-fit text-left font-semibold"
              >
                Izloguj se
              </button>
            )}
          </div>
        </div>
      ) : menuOpen == 2 ? (
        <div className="fixed inset-0 left-0 top-0 z-[999] h-screen w-full overflow-hidden bg-white px-6 py-4">
          <button
            onClick={() => setMenuOpen(1)}
            className="absolute right-6 top-4"
          >
            <XMarkIcon className="h-6 w-6 text-zinc-800" />
          </button>
          <div className="mt-16 flex flex-col">
            <h1 className="text-center text-3xl font-bold">
              Prijavi se na Newsletter
            </h1>
            <p className="mb-8 mt-10 text-sm text-zinc-800">
              Primi najnovije informacije o aukcijama i tržištu direktno u
              inbox.
            </p>
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
                      <FormControl>
                        <Input
                          placeholder="Email adresa"
                          {...field}
                          autoComplete="on"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  size="lg"
                  className="my-3 w-full text-base"
                  type="submit"
                >
                  Prijavi se
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
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Sidebar;
