"use client";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
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
import { api } from "~/trpc/react";
import AuctionCard from "../Auctions/AuctionCard";
import FeaturedCarousel from "../Auctions/FeaturedCarousel";
import YearRangeSelector from "../Filters/YearRangeSelector";

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
  const auctions = api.auctions.fetchEndingSoon.useQuery();
  const featuredAuctions = api.auctions.fetchFeatured.useQuery();

  return (
    <div className="mx-auto mb-10 max-w-8xl md:mt-3">
      <FeaturedCarousel featuredAuctions={featuredAuctions.data} />
      <div className=" sticky top-16 z-40 w-full bg-background px-2.5 md:z-auto md:block md:px-10">
        <div className="flex items-center justify-between pb-2">
          <button className="flex items-center text-xl font-bold tracking-wide md:hidden">
            Aukcije <ChevronDownIcon className="ml-1 mt-1 h-3 w-3" />
          </button>

          <div className="md:hidden">
            <Link href="/prodaj-auto">
              <Button className="text-stone-800" size="xs">
                Prodaj Auto
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col inter7:flex-row inter7:items-end inter7:justify-between">
        <div className="flex flex-col md:px-10 inter8:flex-row inter8:items-end inter8:space-x-4">
          <h1 className="hidden text-2xl font-bold tracking-wide text-zinc-800 dark:text-white md:block inter8:mb-1">
            Aukcije
          </h1>
          <div className="flex w-full space-x-2 px-2.5 md:mt-2 md:w-fit md:px-0">
            <YearRangeSelector />
            <Select>
              <SelectTrigger className="text-text1 hover:bg-gray-100 hover:text-zinc-800 dark:hover:bg-stone-800 dark:hover:text-white">
                <SelectValue placeholder="Menjač" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Sve</SelectItem>
                <SelectItem value="automatic">Automatski</SelectItem>
                <SelectItem value="manual">Manuelni</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="text-text1 hover:bg-gray-100 hover:text-zinc-800 dark:hover:bg-stone-800 dark:hover:text-white">
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
        <div className="mt-3 flex items-center space-x-4 overflow-x-auto px-2.5 text-[0.875rem] font-medium text-stone-500 md:px-10">
          {sortItems.map((item) => (
            <span
              key={item.value}
              onClick={() => setSort(item.value)}
              className={`cursor-pointer whitespace-nowrap hover:text-text1 ${item.value == sort && "text-text1 underline decoration-2 underline-offset-4 "}`}
            >
              {item.displayName}
            </span>
          ))}
        </div>
      </div>
      <div className=" mt-5 grid grid-cols-1 gap-x-6 gap-y-10 px-2.5 md:grid-cols-3 md:px-10 inter4:grid-cols-4">
        {auctions.data?.map((auction) => (
          <AuctionCard auction={auction} key={auction.id} />
        ))}
      </div>
    </div>
  );
};

export default Main;
