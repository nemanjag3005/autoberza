"use client";
import {
  ChevronDownIcon,
  ClockIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import Image from "next/image";

import { AspectRatio } from "~/components/ui/aspect-ratio";

const sortItems = [
  {
    displayName: "Uskoro gotove",
    value: "",
  },
  {
    displayName: "Skoro objavljene",
    value: "listed",
  },
  {
    displayName: "Bez osnove",
    value: "no_reserve",
  },
  {
    displayName: "Najniža kilometraža",
    value: "lowest_mileage",
  },
  {
    displayName: "Najbliže",
    value: "closest",
  },
];

const Main = () => {
  const [sort, setSort] = useState("");
  return (
    <div className="">
      <div className="sticky top-0 w-full px-2.5">
        <div className="flex items-center justify-between pb-2">
          <button className="flex items-center text-xl font-bold tracking-wide">
            Aukcije <ChevronDownIcon className="ml-1 mt-1 h-3 w-3" />
          </button>
          <Link href="/prodaj-auto">
            <Button size="xs">Prodaj Auto</Button>
          </Link>
        </div>
      </div>
      <div className="">
        <div className="flex w-full space-x-2 px-2.5">
          <Select>
            <SelectTrigger className="font-medium">
              <SelectValue placeholder="Godišta" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="font-medium">
              <SelectValue placeholder="Menjač" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Sve</SelectItem>
              <SelectItem value="automatic">Automatski</SelectItem>
              <SelectItem value="manual">Manuelni</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="font-medium">
              <SelectValue placeholder="Karoserija" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Sve</SelectItem>
              <SelectItem value="dark">Kupe</SelectItem>
              <SelectItem value="system">Kabriolet</SelectItem>
              <SelectItem value="system">Hečbek</SelectItem>
              <SelectItem value="system">Limuzina</SelectItem>
              <SelectItem value="system">Džip/SUV</SelectItem>
              <SelectItem value="system">Kombi/Minivan</SelectItem>
              <SelectItem value="system">Pickup</SelectItem>
              <SelectItem value="system">Karavan</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="mt-3 flex items-center space-x-4 overflow-x-auto px-2.5 text-[0.875rem] font-medium text-gray-500">
          {sortItems.map((item) => (
            <span
              key={item.value}
              onClick={() => setSort(item.value)}
              className={`cursor-pointer whitespace-nowrap hover:text-zinc-800 ${item.value == sort && "text-zinc-800 underline decoration-2 underline-offset-4 "}`}
            >
              {item.displayName}
            </span>
          ))}
        </div>
        <div className="mt-5 grid grid-cols-1 px-2.5">
          <div>
            <div className="relative">
              <AspectRatio ratio={16 / 8}>
                <Image
                  src="https://media-r2.carsandbids.com/cdn-cgi/image/width=712,quality=70/da4b9237bacccdf19c0760cab7aec4a8359010b0/photos/9QXX5827-ulakR8X5bGN22-V5WuCmKvoP.jpeg?t=171017891423"
                  alt="Image"
                  fill
                  className="rounded-t-lg object-cover"
                />
              </AspectRatio>
              <AspectRatio
                ratio={16 / 6}
                className="relative mt-0.5 grid grid-cols-3 grid-rows-2 gap-0.5"
              >
                <div className="relative col-span-2 row-span-2">
                  <Image
                    src="https://media-r2.carsandbids.com/cdn-cgi/image/width=492,quality=70/ee7f173e46ec801a48d1673c50f9cebaa1bf2854/photos/9QXX5827-_TmVM2GWts-(edit).jpg?t=170592542325"
                    alt="Image"
                    fill
                    className=" rounded-bl-lg object-cover"
                  />
                </div>
                <div className="relative">
                  <Image
                    src="https://media-r2.carsandbids.com/cdn-cgi/image/width=244,quality=70/ee7f173e46ec801a48d1673c50f9cebaa1bf2854/photos/9QXX5827-DJcyeIqg1q-(edit).jpg?t=170592510432"
                    alt="Image"
                    fill
                    className=" object-cover"
                  />
                </div>
                <div className="relative">
                  <Image
                    src="https://media-r2.carsandbids.com/cdn-cgi/image/width=244,quality=70/ee7f173e46ec801a48d1673c50f9cebaa1bf2854/photos/9QXX5827-GZm7o9ljrr-(edit).jpg?t=170530864932"
                    alt="Image"
                    fill
                    className=" rounded-br-lg object-cover"
                  />
                </div>
              </AspectRatio>
              <div className="absolute right-2  top-2 rounded-md bg-[hsla(0,0%,100%,.6)] px-2 font-bold  backdrop:blur-sm">
                <span className=" text-[0.625rem] uppercase text-zinc-800">
                  izdvojeno
                </span>
              </div>
              <div className="absolute bottom-2 left-2 flex items-center justify-between rounded-md bg-[#262626] px-2 py-1 text-sm font-medium">
                <div className="flex items-center">
                  <ClockIcon className="h-3 w-3 text-gray-500" />
                  <span className="ml-1 text-white">10:35:47</span>
                </div>
                <div className="ml-4 flex items-center">
                  <p className="font-normal text-gray-300">
                    Ponuda
                    <span className="ml-1 font-medium text-white">40,000€</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <h1 className="font-bold text-zinc-800 hover:underline">
                2022 Ultima GTR
              </h1>
              <button>
                <StarIcon className="h-5 w-5 text-zinc-800" />
              </button>
            </div>
            <h4 className="text-[15px] text-zinc-800">~500 km, Dobro Stanje</h4>
            <p className="text-[15px] text-gray-500">Zemun, Beograd</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
