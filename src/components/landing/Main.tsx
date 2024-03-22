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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";

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
    <div className="mx-auto max-w-8xl md:mt-6">
      <div className="pl-10 pr-6">
        <Carousel className="mb-6 hidden w-full  md:block">
          <CarouselContent className=" w-full ">
            <CarouselItem className="inter6:grid-cols-5 grid w-full grid-cols-7  grid-rows-2 gap-0.5">
              <div className="inter6:col-span-3 relative col-span-5 row-span-2 h-[266px] w-full inter4:h-[330px]  ">
                <Image
                  src="https://media-r2.carsandbids.com/cdn-cgi/image/width=2630,quality=70/da4b9237bacccdf19c0760cab7aec4a8359010b0/photos/rGalbllN-Mgef55Bp44-(edit)2-rR5VY50z0Q.jpeg?t=171104739068"
                  alt="Image"
                  fill
                  className=" rounded-l-sm object-cover"
                />
                <div className="absolute inset-0 rounded-l-sm bg-gradient-to-b from-black/30 to-transparent"></div>
                <div className="absolute top-2 flex w-full items-center justify-between px-2">
                  <div className=" rounded-md bg-[hsla(0,0%,100%,.6)] px-2 pb-1 font-bold  backdrop-blur-sm">
                    <span className=" text-[0.7rem] uppercase text-zinc-800">
                      izdvojeno
                    </span>
                  </div>
                  <h3 className="pl-4 text-right text-lg font-medium text-white">
                    2020 Lamborghini Huracan EVO Spyder
                  </h3>
                </div>
                <div className="absolute bottom-2 left-2 flex items-center justify-between rounded-md bg-[#262626] px-2 py-1 text-sm font-medium">
                  <div className="flex items-center">
                    <ClockIcon className="h-3 w-3 text-gray-400" />
                    <span className="ml-1 text-white">10:35:47</span>
                  </div>
                  <div className="ml-4 flex items-center">
                    <p className="font-normal text-gray-300">
                      Ponuda
                      <span className="ml-1 font-medium text-white">
                        40,000€
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="inter6:col-span-1 relative col-span-2 h-full w-full">
                <Image
                  src="https://media-r2.carsandbids.com/cdn-cgi/image/width=504,quality=70/171ab1e538119e13fa98382f268326fc825fdc20/photos/rGalbllN-ro6LpIHmNi-(edit).jpg?t=171054131250"
                  alt="Image"
                  fill
                  className=" object-cover"
                />
              </div>
              <div className="inter6:col-span-1 relative col-span-2 h-full w-full">
                <Image
                  src="https://media-r2.carsandbids.com/cdn-cgi/image/width=504,quality=70/171ab1e538119e13fa98382f268326fc825fdc20/photos/rGalbllN-17xtf3zN0e-(edit).jpg?t=171054134191"
                  alt="Image"
                  fill
                  className=" rounded-tr-sm object-cover"
                />
              </div>
              <div className="relative h-full w-full">
                <Image
                  src="https://media-r2.carsandbids.com/cdn-cgi/image/width=504,quality=70/171ab1e538119e13fa98382f268326fc825fdc20/photos/rGalbllN-bSsY0oNZ27-(edit).jpg?t=171054137808"
                  alt="Image"
                  fill
                  className=" object-cover"
                />
              </div>
              <div className="relative h-full w-full">
                <Image
                  src="https://media-r2.carsandbids.com/cdn-cgi/image/width=504,quality=70/171ab1e538119e13fa98382f268326fc825fdc20/photos/rGalbllN-QkClNUuoSR-(edit).jpg?t=171054140534"
                  alt="Image"
                  fill
                  className=" rounded-br-sm object-cover"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="grid w-full grid-cols-5 grid-rows-2 gap-0.5">
              <div className="relative col-span-3 row-span-2 h-[266px] w-full inter4:h-[330px] ">
                <Image
                  src="https://media-r2.carsandbids.com/cdn-cgi/image/width=2630,quality=70/da4b9237bacccdf19c0760cab7aec4a8359010b0/photos/rGalbllN-Mgef55Bp44-(edit)2-rR5VY50z0Q.jpeg?t=171104739068"
                  alt="Image"
                  fill
                  className=" rounded-l-sm object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent"></div>
                <h3 className="absolute right-4 top-2 text-lg font-medium text-white">
                  2020 Lamborghini Huracan EVO Spyder
                </h3>
                <div className="absolute left-2 top-2 rounded-md bg-[hsla(0,0%,100%,.6)] px-2 pb-1 font-bold  backdrop:blur-sm">
                  <span className=" text-[0.7rem] uppercase text-zinc-800">
                    izdvojeno
                  </span>
                </div>
                <div className="absolute bottom-2 left-2 flex items-center justify-between rounded-md bg-[#262626] px-2 py-1 text-sm font-medium">
                  <div className="flex items-center">
                    <ClockIcon className="h-3 w-3 text-gray-400" />
                    <span className="ml-1 text-white">10:35:47</span>
                  </div>
                  <div className="ml-4 flex items-center">
                    <p className="font-normal text-gray-300">
                      Ponuda
                      <span className="ml-1 font-medium text-white">
                        40,000€
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative h-full w-full">
                <Image
                  src="https://media-r2.carsandbids.com/cdn-cgi/image/width=504,quality=70/171ab1e538119e13fa98382f268326fc825fdc20/photos/rGalbllN-ro6LpIHmNi-(edit).jpg?t=171054131250"
                  alt="Image"
                  fill
                  className=" object-cover"
                />
              </div>
              <div className="relative h-full w-full">
                <Image
                  src="https://media-r2.carsandbids.com/cdn-cgi/image/width=504,quality=70/171ab1e538119e13fa98382f268326fc825fdc20/photos/rGalbllN-17xtf3zN0e-(edit).jpg?t=171054134191"
                  alt="Image"
                  fill
                  className=" rounded-tr-sm object-cover"
                />
              </div>
              <div className="relative h-full w-full">
                <Image
                  src="https://media-r2.carsandbids.com/cdn-cgi/image/width=504,quality=70/171ab1e538119e13fa98382f268326fc825fdc20/photos/rGalbllN-bSsY0oNZ27-(edit).jpg?t=171054137808"
                  alt="Image"
                  fill
                  className=" object-cover"
                />
              </div>
              <div className="relative h-full w-full">
                <Image
                  src="https://media-r2.carsandbids.com/cdn-cgi/image/width=504,quality=70/171ab1e538119e13fa98382f268326fc825fdc20/photos/rGalbllN-QkClNUuoSR-(edit).jpg?t=171054140534"
                  alt="Image"
                  fill
                  className=" rounded-br-sm object-cover"
                />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className=" sticky top-16 z-40 w-full bg-white px-2.5 md:z-auto md:block md:px-10">
        <div className="flex items-center justify-between pb-2">
          <button className="flex items-center text-xl font-bold tracking-wide md:hidden">
            Aukcije <ChevronDownIcon className="ml-1 mt-1 h-3 w-3" />
          </button>

          <div className="md:hidden">
            <Link href="/prodaj-auto">
              <Button size="xs">Prodaj Auto</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="inter7:flex-row inter7:justify-between inter7:items-end flex flex-col">
        <div className="inter8:flex-row inter8:items-end inter8:space-x-4 flex flex-col md:px-10">
          <h1 className="inter8:mb-1 hidden text-2xl font-bold tracking-wide text-zinc-800 md:block">
            Aukcije
          </h1>
          <div className="flex w-full space-x-2 px-2.5 md:mt-2 md:w-fit md:px-0">
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
        </div>
        <div className="mt-3 flex items-center space-x-4 overflow-x-auto px-2.5 text-[0.875rem] font-medium text-gray-500 md:px-10">
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
      </div>
      <div className=" mt-5 grid grid-cols-1 gap-6 px-2.5 md:grid-cols-3 md:px-10 inter4:grid-cols-4">
        <div>
          <div className="relative z-10 ">
            <AspectRatio ratio={16 / 8}>
              <Image
                src="https://media-r2.carsandbids.com/cdn-cgi/image/width=712,quality=70/da4b9237bacccdf19c0760cab7aec4a8359010b0/photos/9QXX5827-ulakR8X5bGN22-V5WuCmKvoP.jpeg?t=171017891423"
                alt="Image"
                fill
                className="rounded-t-sm object-cover"
              />
            </AspectRatio>
            <AspectRatio
              ratio={16 / 6}
              className="relative z-10 mt-0.5 grid grid-cols-3 grid-rows-2 gap-0.5"
            >
              <div className="relative z-10 col-span-2 row-span-2">
                <Image
                  src="https://media-r2.carsandbids.com/cdn-cgi/image/width=492,quality=70/ee7f173e46ec801a48d1673c50f9cebaa1bf2854/photos/9QXX5827-_TmVM2GWts-(edit).jpg?t=170592542325"
                  alt="Image"
                  fill
                  className=" rounded-bl-sm object-cover"
                />
              </div>
              <div className="relative z-10">
                <Image
                  src="https://media-r2.carsandbids.com/cdn-cgi/image/width=244,quality=70/ee7f173e46ec801a48d1673c50f9cebaa1bf2854/photos/9QXX5827-DJcyeIqg1q-(edit).jpg?t=170592510432"
                  alt="Image"
                  fill
                  className=" object-cover"
                />
              </div>
              <div className="relative z-10">
                <Image
                  src="https://media-r2.carsandbids.com/cdn-cgi/image/width=244,quality=70/ee7f173e46ec801a48d1673c50f9cebaa1bf2854/photos/9QXX5827-GZm7o9ljrr-(edit).jpg?t=170530864932"
                  alt="Image"
                  fill
                  className=" rounded-br-sm object-cover"
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
        <div>
          <div className="relative z-10 ">
            <AspectRatio ratio={16 / 8}>
              <Image
                src="https://media-r2.carsandbids.com/cdn-cgi/image/width=712,quality=70/da4b9237bacccdf19c0760cab7aec4a8359010b0/photos/9QXX5827-ulakR8X5bGN22-V5WuCmKvoP.jpeg?t=171017891423"
                alt="Image"
                fill
                className="rounded-t-sm object-cover"
              />
            </AspectRatio>
            <AspectRatio
              ratio={16 / 6}
              className="relative z-10 mt-0.5 grid grid-cols-3 grid-rows-2 gap-0.5"
            >
              <div className="relative z-10 col-span-2 row-span-2">
                <Image
                  src="https://media-r2.carsandbids.com/cdn-cgi/image/width=492,quality=70/ee7f173e46ec801a48d1673c50f9cebaa1bf2854/photos/9QXX5827-_TmVM2GWts-(edit).jpg?t=170592542325"
                  alt="Image"
                  fill
                  className=" rounded-bl-sm object-cover"
                />
              </div>
              <div className="relative z-10">
                <Image
                  src="https://media-r2.carsandbids.com/cdn-cgi/image/width=244,quality=70/ee7f173e46ec801a48d1673c50f9cebaa1bf2854/photos/9QXX5827-DJcyeIqg1q-(edit).jpg?t=170592510432"
                  alt="Image"
                  fill
                  className=" object-cover"
                />
              </div>
              <div className="relative z-10">
                <Image
                  src="https://media-r2.carsandbids.com/cdn-cgi/image/width=244,quality=70/ee7f173e46ec801a48d1673c50f9cebaa1bf2854/photos/9QXX5827-GZm7o9ljrr-(edit).jpg?t=170530864932"
                  alt="Image"
                  fill
                  className=" rounded-br-sm object-cover"
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
        <div>
          <div className="relative z-10 ">
            <AspectRatio ratio={16 / 8}>
              <Image
                src="https://media-r2.carsandbids.com/cdn-cgi/image/width=712,quality=70/da4b9237bacccdf19c0760cab7aec4a8359010b0/photos/9QXX5827-ulakR8X5bGN22-V5WuCmKvoP.jpeg?t=171017891423"
                alt="Image"
                fill
                className="rounded-t-sm object-cover"
              />
            </AspectRatio>
            <AspectRatio
              ratio={16 / 6}
              className="relative z-10 mt-0.5 grid grid-cols-3 grid-rows-2 gap-0.5"
            >
              <div className="relative z-10 col-span-2 row-span-2">
                <Image
                  src="https://media-r2.carsandbids.com/cdn-cgi/image/width=492,quality=70/ee7f173e46ec801a48d1673c50f9cebaa1bf2854/photos/9QXX5827-_TmVM2GWts-(edit).jpg?t=170592542325"
                  alt="Image"
                  fill
                  className=" rounded-bl-sm object-cover"
                />
              </div>
              <div className="relative z-10">
                <Image
                  src="https://media-r2.carsandbids.com/cdn-cgi/image/width=244,quality=70/ee7f173e46ec801a48d1673c50f9cebaa1bf2854/photos/9QXX5827-DJcyeIqg1q-(edit).jpg?t=170592510432"
                  alt="Image"
                  fill
                  className=" object-cover"
                />
              </div>
              <div className="relative z-10">
                <Image
                  src="https://media-r2.carsandbids.com/cdn-cgi/image/width=244,quality=70/ee7f173e46ec801a48d1673c50f9cebaa1bf2854/photos/9QXX5827-GZm7o9ljrr-(edit).jpg?t=170530864932"
                  alt="Image"
                  fill
                  className=" rounded-br-sm object-cover"
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
  );
};

export default Main;
