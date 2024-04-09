import type { Auction, Photo } from "@prisma/client";
import React from "react";
import { AspectRatio } from "../ui/aspect-ratio";
import Image from "next/image";
import FeaturedTag from "./FeaturedTag";
import { StarIcon } from "@heroicons/react/24/outline";
import BidBarMini from "./BidBarMini";
import Link from "next/link";
import type { PhotosGroupedByType } from "./Auction";

const AuctionCard = ({
  auction,
}: {
  auction?: Auction & { photos: Photo[] };
}) => {
  const photos = React.useMemo(() => {
    if (auction?.photos) {
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

      return photosGroupedByType;
    }
  }, [auction?.photos]);
  if (!auction) {
    return <div>Loading...</div>; // or any other placeholder/loading indicator
  }

  return (
    <div className="group">
      <Link href={`/auctions/${auction.id}`}>
        <div className="relative z-10 ">
          {auction.featured ? (
            <>
              <div className="md:hidden">
                <AspectRatio ratio={16 / 8}>
                  <Image
                    src={
                      "https://" +
                      auction.photos[0]?.baseUrl +
                      "/cdn-cgi/image/width=1800,quality=70/" +
                      (photos?.EXTERIOR?.[0]?.link?.toString() ?? "")
                    }
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
                      src={
                        "https://" +
                        auction.photos[1]?.baseUrl +
                        "/cdn-cgi/image/width=1800,quality=70/" +
                        (photos?.EXTERIOR?.[1]?.link?.toString() ?? "")
                      }
                      alt="Image"
                      fill
                      className=" rounded-bl-sm object-cover"
                    />
                  </div>
                  <div className="relative z-10">
                    <Image
                      src={
                        "https://" +
                        auction.photos[2]?.baseUrl +
                        "/cdn-cgi/image/width=1800,quality=70/" +
                        (photos?.EXTERIOR?.[2]?.link?.toString() ?? "")
                      }
                      alt="Image"
                      fill
                      className=" object-cover"
                    />
                  </div>
                  <div className="relative z-10">
                    <Image
                      src={
                        "https://" +
                        auction.photos[3]?.baseUrl +
                        "/cdn-cgi/image/width=1800,quality=70/" +
                        (photos?.EXTERIOR?.[3]?.link?.toString() ?? "")
                      }
                      alt="Image"
                      fill
                      className=" rounded-br-sm object-cover"
                    />
                  </div>
                </AspectRatio>
              </div>
              <div className="hidden md:block ">
                <AspectRatio ratio={16 / 10}>
                  <Image
                    src={
                      "https://" +
                      auction.photos[0]?.baseUrl +
                      "/cdn-cgi/image/width=1800,quality=70/" +
                      (photos?.EXTERIOR?.[0]?.link?.toString() ?? "")
                    }
                    alt="Image"
                    fill
                    className="rounded-sm object-cover group-hover:brightness-90"
                  />
                </AspectRatio>
              </div>
            </>
          ) : (
            <AspectRatio ratio={16 / 10}>
              <Image
                src={
                  "https://" +
                  auction.photos[0]?.baseUrl +
                  "/cdn-cgi/image/width=1800,quality=70/" +
                  (photos?.EXTERIOR?.[0]?.link?.toString() ?? "")
                }
                alt="Image"
                fill
                className="rounded-sm object-cover group-hover:brightness-90"
              />
            </AspectRatio>
          )}
          {auction.featured && (
            <div className="absolute right-2 top-2">
              <FeaturedTag />
            </div>
          )}

          <BidBarMini auction={auction} />
        </div>
      </Link>

      <div className="mt-3 flex items-center justify-between">
        <Link href={`/auctions/${auction.id}`}>
          <h1 className="font-bold text-text1 hover:underline">
            {auction.title}
          </h1>
        </Link>
        <button>
          <StarIcon className="hidden h-5 w-5 text-text1 transition-all duration-300 ease-in-out hover:text-yellow-400 group-hover:block" />
        </button>
      </div>
      <h4 className="text-[15px] text-text1">{auction.subTitle}</h4>
      <p className="text-[15px] text-stone-500">{auction.location}</p>
    </div>
  );
};

export default AuctionCard;
