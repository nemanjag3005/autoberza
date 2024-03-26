"use client";
import React from "react";
import { useParams } from "next/navigation";
import { api } from "~/trpc/react";
import Image from "next/image";
import BidBar from "./BidBar";
import { AspectRatio } from "../ui/aspect-ratio";
import FeaturedTag from "./FeaturedTag";
const Auction = () => {
  const params = useParams<{ id: string }>();
  const auction = api.auctions.fetchAuction.useQuery({ id: params.id });

  return (
    <div className="mx-auto max-w-8xl md:mt-6">
      <div className=" sticky top-16 z-40 w-full bg-white px-2.5 md:z-auto md:block md:px-10">
        {/* <BidBar auction={auction.data} /> */}
      </div>
      <div className="mt-3 overflow-y-auto ">
        {auction.isLoading ? (
          <></>
        ) : (
          <AspectRatio ratio={2 / 1.25} className="w-[986px] px-2.5">
            <div className="grid h-full w-full grid-cols-6 grid-rows-2 gap-1">
              <div className="relative col-span-2 row-span-2">
                <Image
                  alt={auction.data ? auction.data?.title : "Slika automobila"}
                  fill
                  className="rounded-l-lg object-cover"
                  src="https://media-r2.carsandbids.com/cdn-cgi/image/width=2080,quality=70/e7a5ae4474101b60a9c5c5f94dc3b42953df1728/photos/3zZLqYdL-_tokC-VEfX-(edit).jpg?t=171050285599"
                />
                {auction.data?.featured && (
                  <div className="absolute left-1 top-1">
                    <FeaturedTag />
                  </div>
                )}
              </div>
              <div className="relative">
                <Image
                  src="https://media-r2.carsandbids.com/cdn-cgi/image/width=2080,quality=70/e7a5ae4474101b60a9c5c5f94dc3b42953df1728/photos/3zZLqYdL-_tokC-VEfX-(edit).jpg?t=171050285599"
                  alt="Image"
                  fill
                  className=" object-cover"
                />
                <span className="absolute left-1 top-1 rounded-md bg-[#262626]  p-1 text-xs font-medium  text-white brightness-90  backdrop:blur-sm">
                  Eksterijer (24)
                </span>
              </div>
              <div className="relative">
                <Image
                  src="https://media-r2.carsandbids.com/cdn-cgi/image/width=2080,quality=70/e7a5ae4474101b60a9c5c5f94dc3b42953df1728/photos/3zZLqYdL-_tokC-VEfX-(edit).jpg?t=171050285599"
                  alt="Image"
                  fill
                  className=" object-cover"
                />
              </div>
              <div className="relative">
                <Image
                  src="https://media-r2.carsandbids.com/cdn-cgi/image/width=2080,quality=70/e7a5ae4474101b60a9c5c5f94dc3b42953df1728/photos/3zZLqYdL-_tokC-VEfX-(edit).jpg?t=171050285599"
                  alt="Image"
                  fill
                  className=" object-cover"
                />
                <span className="absolute left-1 top-1 rounded-md bg-[#262626]  p-1 text-xs font-medium  text-white brightness-90  backdrop:blur-sm">
                  Enterijer (21)
                </span>
              </div>
              <div className="relative">
                <Image
                  src="https://media-r2.carsandbids.com/cdn-cgi/image/width=2080,quality=70/e7a5ae4474101b60a9c5c5f94dc3b42953df1728/photos/3zZLqYdL-_tokC-VEfX-(edit).jpg?t=171050285599"
                  alt="Image"
                  fill
                  className=" rounded-tr-lg object-cover"
                />
              </div>
              <div className="relative">
                <Image
                  src="https://media-r2.carsandbids.com/cdn-cgi/image/width=2080,quality=70/e7a5ae4474101b60a9c5c5f94dc3b42953df1728/photos/3zZLqYdL-_tokC-VEfX-(edit).jpg?t=171050285599"
                  alt="Image"
                  fill
                  className=" object-cover"
                />
              </div>
              <div className="relative">
                <Image
                  src="https://media-r2.carsandbids.com/cdn-cgi/image/width=2080,quality=70/e7a5ae4474101b60a9c5c5f94dc3b42953df1728/photos/3zZLqYdL-_tokC-VEfX-(edit).jpg?t=171050285599"
                  alt="Image"
                  fill
                  className=" object-cover"
                />
              </div>
              <div className="relative">
                <Image
                  src="https://media-r2.carsandbids.com/cdn-cgi/image/width=2080,quality=70/e7a5ae4474101b60a9c5c5f94dc3b42953df1728/photos/3zZLqYdL-_tokC-VEfX-(edit).jpg?t=171050285599"
                  alt="Image"
                  fill
                  className=" object-cover"
                />
              </div>
              <div className="relative">
                <Image
                  src="https://media-r2.carsandbids.com/cdn-cgi/image/width=2080,quality=70/e7a5ae4474101b60a9c5c5f94dc3b42953df1728/photos/3zZLqYdL-_tokC-VEfX-(edit).jpg?t=171050285599"
                  alt="Image"
                  fill
                  className=" rounded-br-lg object-cover brightness-[.25]"
                />
                <span className="absolute top-1/2 w-full text-center text-lg font-medium  text-white ">
                  Sve slike (76)
                </span>
              </div>
            </div>
          </AspectRatio>
        )}
      </div>
      <div className="mt-2 w-full items-center justify-between px-2.5">
        <h3 className="text-xl font-bold text-zinc-800">
          {auction.data?.title}
        </h3>
      </div>
    </div>
  );
};

export default Auction;
