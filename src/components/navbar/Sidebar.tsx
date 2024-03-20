import React, { Dispatch, SetStateAction } from "react";

const Sidebar = ({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: number;
  setMenuOpen: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div className="fixed inset-0 left-0 top-0 z-50 h-screen w-full overflow-hidden bg-white px-6 py-4">
      Sidebar
    </div>
  );
};

export default Sidebar;
