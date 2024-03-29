import { type Auction } from "@prisma/client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";
import FeaturedTag from "./FeaturedTag";
import BidBarMini from "./BidBarMini";
const FeaturedCarousel = ({
  featuredAuctions,
}: {
  featuredAuctions: Auction[];
}) => {
  return (
    <div className="pl-10 pr-6">
      <Carousel className="mb-6 hidden w-full  md:block">
        <CarouselContent className=" w-full ">
          {featuredAuctions?.map((auction) => (
            <CarouselItem
              key={auction.id}
              className="grid w-full grid-cols-7 grid-rows-2  gap-0.5 inter6:grid-cols-5"
            >
              <div className="relative col-span-5 row-span-2 h-[266px] w-full inter6:col-span-3 inter4:h-[330px]  ">
                <Image
                  src={
                    "https://" +
                    auction.photos[0]?.baseUrl! +
                    "/cdn-cgi/image/width=1800,quality=70/" +
                    auction.photos[0]?.link
                  }
                  alt="Image"
                  fill
                  className=" rounded-l-sm object-cover"
                />
                <div className="absolute inset-0 rounded-l-sm bg-gradient-to-b from-black/30 to-transparent"></div>
                <div className="absolute top-2 flex w-full items-center justify-between px-2">
                  <FeaturedTag />

                  <h3 className="pl-4 text-right text-lg font-medium text-white">
                    {auction.title}
                  </h3>
                </div>
                <BidBarMini auction={auction} />
              </div>
              <div className="relative col-span-2 h-full w-full inter6:col-span-1">
                <Image
                  src={
                    "https://" +
                    auction.photos[4]?.baseUrl! +
                    "/cdn-cgi/image/width=1800,quality=70/" +
                    auction.photos[4]?.link
                  }
                  alt="Image"
                  fill
                  className=" object-cover"
                />
              </div>
              <div className="relative col-span-2 h-full w-full inter6:col-span-1">
                <Image
                  src={
                    "https://" +
                    auction.photos[2]?.baseUrl! +
                    "/cdn-cgi/image/width=1800,quality=70/" +
                    auction.photos[2]?.link
                  }
                  alt="Image"
                  fill
                  className=" rounded-tr-sm object-cover"
                />
              </div>
              <div className="relative h-full w-full">
                <Image
                  src={
                    "https://" +
                    auction.photos[3]?.baseUrl! +
                    "/cdn-cgi/image/width=1800,quality=70/" +
                    auction.photos[3]?.link
                  }
                  alt="Image"
                  fill
                  className=" object-cover"
                />
              </div>
              <div className="relative h-full w-full">
                <Image
                  src={
                    "https://" +
                    auction.photos[1]?.baseUrl! +
                    "/cdn-cgi/image/width=1800,quality=70/" +
                    auction.photos[1]?.link
                  }
                  alt="Image"
                  fill
                  className=" rounded-br-sm object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default FeaturedCarousel;
