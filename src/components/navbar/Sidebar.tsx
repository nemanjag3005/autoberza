import { XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React, { type Dispatch, type SetStateAction } from "react";

const Sidebar = ({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: number;
  setMenuOpen: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div className="fixed inset-0 left-0 top-0 z-30 h-screen w-full overflow-hidden bg-white px-4 py-4">
      <button onClick={() => setMenuOpen(0)} className="absolute right-6 top-4">
        <XMarkIcon className="h-6 w-6 text-zinc-800" />
      </button>
      <div className="flex flex-col">
        <h3 className="flex items-center text-2xl font-bold text-zinc-800">
          <div className="mr-2.5 h-4 w-2 rounded-r-sm bg-primary"></div>
          Meni
        </h3>

        <span onClick={() => setMenuOpen(0)} className="mt-6 font-semibold">
          <Link href="">Aukcije</Link>
        </span>
        <span onClick={() => setMenuOpen(0)} className="mt-6  font-semibold">
          <Link href="/izdvojene-aukcije">Izdvojeno</Link>
        </span>
        <span onClick={() => setMenuOpen(0)} className="mt-6  font-semibold">
          <Link href="/prosle-aukcije">Prošle Aukcije</Link>
        </span>
        <button className="mt-6 w-fit rounded-full bg-primary px-2.5 py-1.5 font-semibold text-zinc-800 hover:bg-green-600/70 hover:text-zinc-950">
          Prodaj Auto
        </button>
        <span onClick={() => setMenuOpen(0)} className="mt-6  font-semibold">
          <Link href="/forum">Forum</Link>
        </span>
        <span onClick={() => setMenuOpen(0)} className="mt-6  font-semibold">
          <Link href="/sta-je">Šta je Auto Berza?</Link>
        </span>
        <span onClick={() => setMenuOpen(0)} className="mt-6  font-semibold">
          <Link href="/newsletter">Newsletter</Link>
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
