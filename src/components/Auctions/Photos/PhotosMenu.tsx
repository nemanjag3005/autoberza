import { XMarkIcon } from "@heroicons/react/24/solid";
import React, { type Dispatch, type SetStateAction } from "react";

const PhotosMenu = ({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="fixed inset-0 left-0 top-0 z-50 h-screen w-full overflow-hidden bg-black  py-2">
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute right-2 top-2"
      >
        <XMarkIcon className="h-7 w-7 text-white" fontWeight={600} />
      </button>
      <div className="flex w-full items-center space-x-4 px-4">
        <button>Sve slike (124)</button>
      </div>
    </div>
  );
};

export default PhotosMenu;
