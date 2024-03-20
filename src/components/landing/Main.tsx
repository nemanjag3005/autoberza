import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Main = () => {
  return (
    <div className="">
      <div className="flex items-center justify-between">
        <button className="flex items-center text-xl font-bold">
          Aukcije <ChevronDownIcon className="ml-1 mt-1 h-3 w-3" />
        </button>
        <Link href="/prodaj-auto">
          <Button size="xs">Prodaj Auto</Button>
        </Link>
      </div>
    </div>
  );
};

export default Main;
