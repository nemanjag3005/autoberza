"use client";
import { XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState, type Dispatch, type SetStateAction } from "react";

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const AuthMenuMobile = ({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: number;
  setMenuOpen: Dispatch<SetStateAction<number>>;
}) => {
  const [authPageOpen, setAuthPageOpen] = useState(0);

  return (
    <div className="fixed inset-0 left-0 top-0 z-50 h-screen w-full overflow-hidden bg-white px-6 py-10">
      <button onClick={() => setMenuOpen(0)} className="absolute right-6 top-4">
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
  );
};

export default AuthMenuMobile;
