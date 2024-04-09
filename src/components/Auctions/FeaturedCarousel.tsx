import { type Photo, type Auction } from "@prisma/client";
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
import { PhotosGroupedByType } from "./Auction";
const FeaturedCarousel = ({
  featuredAuctions,
}: {
  featuredAuctions?: (Auction & { photos: Photo[] })[]; // Allow for undefined
}) => {
  if (!featuredAuctions) {
    return <div>Loading...</div>; // or any other placeholder/loading indicator
  }

  return (
    <div className="pl-10 pr-6">
      <Carousel className="mb-6 hidden w-full  md:block">
        <CarouselContent className=" w-full ">
          {featuredAuctions?.map((auction) => {
            const photosGroupedByType: PhotosGroupedByType = {
              baseUrl: auction.photos?.[0]?.baseUrl ?? "",
            };

            auction.photos?.forEach((photo) => {
              const key = photo.type; // Add type annotation to key
              if (!photosGroupedByType[key]) {
                photosGroupedByType[key] = [];
              }
              (photosGroupedByType[key] as Photo[]).push(photo);
            });

            return (
              <CarouselItem
                key={auction.id}
                className="grid w-full grid-cols-7 grid-rows-2  gap-0.5 inter6:grid-cols-5"
              >
                <div className="relative col-span-5 row-span-2 h-[266px] w-full inter6:col-span-3 inter4:h-[330px]  ">
                  <Image
                    src={
                      auction.photos[0]?.baseUrl
                        ? "https://" +
                          auction.photos[0]?.baseUrl +
                          "/cdn-cgi/image/width=1800,quality=70/" +
                          (photosGroupedByType?.EXTERIOR?.[0]?.link?.toString() ??
                            "")
                        : ""
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
                      auction.photos[4]?.baseUrl
                        ? "https://" +
                          auction.photos[4]?.baseUrl +
                          "/cdn-cgi/image/width=1800,quality=70/" +
                          (photosGroupedByType?.EXTERIOR?.[1]?.link?.toString() ??
                            "")
                        : ""
                    }
                    alt="Image"
                    fill
                    className=" object-cover"
                  />
                </div>
                <div className="relative col-span-2 h-full w-full inter6:col-span-1">
                  <Image
                    src={
                      auction.photos[2]?.baseUrl
                        ? "https://" +
                          auction.photos[2]?.baseUrl +
                          "/cdn-cgi/image/width=1800,quality=70/" +
                          (photosGroupedByType?.EXTERIOR?.[2]?.link?.toString() ??
                            "")
                        : ""
                    }
                    alt="Image"
                    fill
                    className=" rounded-tr-sm object-cover"
                  />
                </div>
                <div className="relative h-full w-full">
                  <Image
                    src={
                      auction.photos[3]?.baseUrl
                        ? "https://" +
                          auction.photos[3]?.baseUrl +
                          "/cdn-cgi/image/width=1800,quality=70/" +
                          (photosGroupedByType?.EXTERIOR?.[3]?.link?.toString() ??
                            "")
                        : ""
                    }
                    alt="Image"
                    fill
                    className=" object-cover"
                  />
                </div>
                <div className="relative h-full w-full">
                  <Image
                    src={
                      auction.photos[1]?.baseUrl !== undefined
                        ? "https://" +
                          auction.photos[1]?.baseUrl +
                          "/cdn-cgi/image/width=1800,quality=70/" +
                          (photosGroupedByType?.EXTERIOR?.[4]?.link?.toString() ??
                            "")
                        : ""
                    }
                    alt="Image"
                    fill
                    className=" rounded-br-sm object-cover"
                  />
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default FeaturedCarousel;
