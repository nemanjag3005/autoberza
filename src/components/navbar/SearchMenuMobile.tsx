import { XMarkIcon } from "@heroicons/react/24/solid";
import React, { Dispatch, SetStateAction } from "react";

const SearchMenuMobile = ({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: number;
  setMenuOpen: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div className="fixed inset-0 left-0 top-0 z-50 h-screen w-full overflow-hidden bg-white px-4 py-4">
      <button onClick={() => setMenuOpen(0)} className="absolute right-6 top-4">
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
  );
};

export default SearchMenuMobile;
