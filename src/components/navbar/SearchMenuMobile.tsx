"use client";
import { XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchMenuMobile: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="block md:hidden">
      <Button
        onClick={() => setMenuOpen(true)}
        size="icon"
        className="bg-transparent hover:bg-transparent"
      >
        <MagnifyingGlassIcon className="h-6 w-6" />
      </Button>
      {menuOpen && (
        <div className="fixed inset-0 left-0 top-0 z-50 h-screen w-full overflow-hidden bg-white px-4 py-4">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute right-6 top-4"
          >
            <XMarkIcon className="h-6 w-6 text-zinc-800" />
          </button>
          <div className="flex flex-col">
            <h3 className="flex items-center text-2xl font-bold text-zinc-800">
              <div className="mr-2.5 h-4 w-2 rounded-r-sm bg-primary"></div>
              Pretraga
            </h3>
            <div className="mt-4 w-full rounded-md border border-zinc-800">
              <input className="    py-1"></input>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchMenuMobile;
