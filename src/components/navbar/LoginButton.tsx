"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import AuthMenuMobile from "../auth/AuthMenuMobile";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { XMarkIcon } from "@heroicons/react/24/solid";
import LoginForm from "../auth/LoginForm";
import RegisterForm from "../auth/RegisterForm";

const LoginButton = () => {
  const [loginMenuOpen, setLoginMenuOpen] = useState(false);
  const [authPageOpen, setAuthPageOpen] = useState(0);
  return (
    <div>
      <div className="block md:hidden">
        <Button
          className="text-stone-800"
          size="xs"
          onClick={() => setLoginMenuOpen(true)}
        >
          Prijavi Se
        </Button>
        {loginMenuOpen && (
          <div className="fixed inset-0 left-0 top-0 z-50 h-screen w-full overflow-hidden bg-white px-6 py-10">
            <button
              onClick={() => setLoginMenuOpen(false)}
              className="absolute right-6 top-4"
            >
              <XMarkIcon className="h-6 w-6 text-zinc-800" />
            </button>
            {authPageOpen == 0 ? (
              <LoginForm
                authPageOpen={authPageOpen}
                setAuthPageOpen={setAuthPageOpen}
              />
            ) : authPageOpen == 1 ? (
              <RegisterForm
                authPageOpen={authPageOpen}
                setAuthPageOpen={setAuthPageOpen}
              />
            ) : (
              <></>
            )}
          </div>
        )}
      </div>
      <div className="hidden md:block">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="text-zinc-800" size="lg">
              Prijavi Se
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-[27em] px-10 pb-12">
            {authPageOpen == 0 ? (
              <LoginForm
                authPageOpen={authPageOpen}
                setAuthPageOpen={setAuthPageOpen}
              />
            ) : authPageOpen == 1 ? (
              <RegisterForm
                authPageOpen={authPageOpen}
                setAuthPageOpen={setAuthPageOpen}
              />
            ) : (
              <></>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default LoginButton;
