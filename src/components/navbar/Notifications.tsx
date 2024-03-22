"use client";
import { Cog8ToothIcon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { BellIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { ScrollArea } from "~/components/ui/scroll-area";

const Notifications: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <div className="block md:hidden">
        <Button
          onClick={() => setMenuOpen(true)}
          size="icon"
          className="bg-transparent hover:bg-transparent"
        >
          <BellIcon className="h-6 w-6 " />
        </Button>
        {menuOpen && (
          <div className="fixed inset-0 left-0 top-0 z-50 h-screen w-full overflow-hidden bg-white px-4 py-4">
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute right-6 top-4"
            >
              <XMarkIcon className="h-6 w-6 text-zinc-800" />
            </button>
            <div className="flex flex-col ">
              <h3 className="flex items-center text-2xl font-bold text-zinc-800">
                <div className="mr-2.5 h-4 w-2 rounded-r-sm bg-primary"></div>
                Notifikacije
              </h3>
              <div className="px-2">
                <div className="mt-4 flex w-full items-center justify-between">
                  <button className="text-sm font-semibold text-gray-500">
                    Obeleži sve kao pročitano
                  </button>
                  <Link href="/podesavanja">
                    <Cog8ToothIcon className="mb-1 mr-2 h-6 w-6 text-gray-400" />
                  </Link>
                </div>
                <div>{/* Notifications */}</div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="hidden md:block">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              onClick={() => setMenuOpen(true)}
              size="icon"
              className="bg-transparent hover:bg-transparent"
            >
              <BellIcon className="h-7 w-7 text-zinc-800" />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <ScrollArea className="flex h-[200px] w-full flex-col p-4">
              <div className=" flex w-full items-center justify-between">
                <button className="text-xs font-semibold text-gray-500 hover:underline">
                  Obeleži sve kao pročitano
                </button>
                <Link href="/podesavanja">
                  <Cog8ToothIcon className="mb-1 mr-2 h-5 w-5 text-gray-400" />
                </Link>
              </div>
              <div>{/* Notifications */}</div>
            </ScrollArea>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default Notifications;
