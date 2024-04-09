"use client";
import React from "react";
import { useParams } from "next/navigation";
import { api } from "~/trpc/react";
import Image from "next/image";
import BidBar from "./BidBar";
import { type Photo } from "@prisma/client";
import FeaturedTag from "./FeaturedTag";
import { Button } from "../ui/button";
import { StarIcon } from "@heroicons/react/24/outline";
import { ArrowUpTrayIcon } from "@heroicons/react/24/solid";
import PhotosMenu from "./Photos/PhotosMenu";
export interface PhotosGroupedByType {
  baseUrl: string;
  // Utilize PhotoType to type keys and specify that values will be arrays of Photo objects
  [key: string]: Photo[] | string; // Using string for key type since TypeScript does not allow using union type for indexing; baseUrl will be string
}
const Auction = () => {
  const params = useParams<{ id: string }>();
  const auction = api.auctions.fetchAuction.useQuery({ id: params.id });
  const [photosMenuOpen, setPhotosMenuOpen] = React.useState(false);
  const [allPhotosOpen, setAllPhotosOpen] = React.useState(false);
  const [selectedPhoto, setSelectedPhoto] = React.useState<Photo | null>(null);
  const [currentCategory, setCurrentCategory] = React.useState<string | null>(
    null,
  );
  const photos = React.useMemo(() => {
    if (auction.data?.photos) {
      const photosGroupedByType: PhotosGroupedByType = {
        baseUrl: auction.data.photos?.[0]?.baseUrl ?? "",
      };

      auction.data.photos?.forEach((photo) => {
        const key = photo.type; // Add type annotation to key
        if (!photosGroupedByType[key]) {
          photosGroupedByType[key] = [];
        }
        (photosGroupedByType[key] as Photo[]).push(photo);
      });

      return photosGroupedByType;
    }
  }, [auction.data?.photos]);

  if (!auction.data) {
    return <div>Loading...</div>;
  }
  return (
    <div className="mx-auto max-w-8xl md:mt-2">
      <div className=" sticky top-16 z-40 w-full bg-background px-2.5 pb-3 md:hidden">
        <BidBar
          auctionEnd={auction.data?.auctionEnd}
          currentBid={auction.data?.currentBid}
        />
      </div>
      <div className="hidden items-center justify-between px-10 text-text1 md:flex">
        <div className="mr-5">
          <h3 className="text-2xl font-bold ">{auction.data?.title}</h3>

          <p className="">{auction.data?.subTitle}</p>
        </div>
        <div className="flex">
          <button className="flex items-center rounded-md bg-background2 px-4 py-2">
            <StarIcon className="mr-2 h-4 w-4" strokeWidth={2} />
            Prati
          </button>
          <button className="ml-2 flex items-center rounded-md bg-background2 px-4 py-2">
            <ArrowUpTrayIcon className="mr-2 h-4 w-4" strokeWidth={2} />
            Podeli
          </button>
        </div>
      </div>
      <div className="overflow-y-auto md:mb-6 md:mt-3">
        {auction.isLoading ? (
          <></>
        ) : (
          <div className="h-[250px] w-[986px] px-2.5 md:h-[372px] md:w-full md:px-10 inter2:h-[488px] inter10:h-[600px]">
            <div className="grid h-full w-full grid-cols-6 grid-rows-2 gap-1 md:grid-rows-4 inter5:grid-cols-5">
              <div
                onClick={() => {
                  setPhotosMenuOpen(true);
                  setSelectedPhoto(photos?.EXTERIOR?.[0] as Photo);
                  setCurrentCategory("EXTERIOR");
                }}
                className="relative col-span-2 row-span-2 cursor-pointer md:col-span-5 md:row-span-4 inter5:col-span-3"
              >
                <Image
                  alt={auction.data ? auction.data?.title : "Slika automobila"}
                  fill
                  className="rounded-l-lg object-cover"
                  src={
                    "https://" +
                    photos?.baseUrl +
                    "/cdn-cgi/image/width=1800,quality=70/" +
                    (photos?.EXTERIOR?.[0]?.link?.toString() ?? "")
                  }
                />
                {auction.data?.featured && (
                  <div className="absolute left-2 top-1">
                    <FeaturedTag />
                  </div>
                )}
              </div>
              <div
                onClick={() => {
                  setPhotosMenuOpen(true);
                  setSelectedPhoto(photos?.EXTERIOR?.[1] as Photo);
                  setCurrentCategory("EXTERIOR");
                }}
                className="relative cursor-pointer"
              >
                <Image
                  src={
                    "https://" +
                    photos?.baseUrl +
                    "/cdn-cgi/image/width=1800,quality=70/" +
                    (photos?.EXTERIOR?.[1]?.link?.toString() ?? "")
                  }
                  alt="Image"
                  fill
                  className=" object-cover md:rounded-tr-lg inter5:rounded-none"
                />
                <span className="absolute left-1 top-1 rounded-md bg-[#262626]  p-1 text-xs font-medium  text-white brightness-90  backdrop:blur-sm">
                  Eksterijer (24)
                </span>
              </div>
              <div
                onClick={() => {
                  setPhotosMenuOpen(true);
                  setSelectedPhoto(photos?.EXTERIOR?.[2] as Photo);
                  setCurrentCategory("EXTERIOR");
                }}
                className="relative cursor-pointer md:hidden inter5:block"
              >
                <Image
                  src={
                    "https://" +
                    photos?.baseUrl +
                    "/cdn-cgi/image/width=1800,quality=70/" +
                    (photos?.EXTERIOR?.[2]?.link?.toString() ?? "")
                  }
                  alt="Image"
                  fill
                  className=" object-cover inter5:rounded-tr-lg"
                />
              </div>
              <div
                onClick={() => {
                  setPhotosMenuOpen(true);
                  setSelectedPhoto(photos?.EXTERIOR?.[3] as Photo);
                  setCurrentCategory("EXTERIOR");
                }}
                className="relative hidden cursor-pointer md:block"
              >
                <Image
                  src={
                    "https://" +
                    photos?.baseUrl +
                    "/cdn-cgi/image/width=1800,quality=70/" +
                    (photos?.EXTERIOR?.[3]?.link?.toString() ?? "")
                  }
                  alt="Image"
                  fill
                  className=" object-cover"
                />
              </div>
              <div
                onClick={() => {
                  setPhotosMenuOpen(true);
                  setSelectedPhoto(photos?.EXTERIOR?.[4] as Photo);
                  setCurrentCategory("EXTERIOR");
                }}
                className="relative hidden cursor-pointer inter5:block"
              >
                <Image
                  src={
                    "https://" +
                    photos?.baseUrl +
                    "/cdn-cgi/image/width=1800,quality=70/" +
                    (photos?.EXTERIOR?.[4]?.link?.toString() ?? "")
                  }
                  alt="Image"
                  fill
                  className=" object-cover"
                />
              </div>
              <div
                onClick={() => {
                  setPhotosMenuOpen(true);
                  setSelectedPhoto(photos?.INTERIOR?.[0] as Photo);
                  setCurrentCategory("INTERIOR");
                }}
                className="relative cursor-pointer"
              >
                <Image
                  src={
                    "https://" +
                    photos?.baseUrl +
                    "/cdn-cgi/image/width=1800,quality=70/" +
                    (photos?.INTERIOR?.[0]?.link?.toString() ?? "")
                  }
                  alt="Image"
                  fill
                  className=" object-cover"
                />
                <span className="absolute left-1 top-1 rounded-md bg-[#262626]  p-1 text-xs font-medium  text-white brightness-90  backdrop:blur-sm">
                  Enterijer (21)
                </span>
              </div>
              <div
                onClick={() => {
                  setPhotosMenuOpen(true);
                  setSelectedPhoto(photos?.INTERIOR?.[1] as Photo);
                  setCurrentCategory("INTERIOR");
                }}
                className="relative cursor-pointer md:hidden inter5:block"
              >
                <Image
                  src={
                    "https://" +
                    photos?.baseUrl +
                    "/cdn-cgi/image/width=1800,quality=70/" +
                    (photos?.INTERIOR?.[1]?.link?.toString() ?? "")
                  }
                  alt="Image"
                  fill
                  className=" rounded-tr-lg object-cover inter5:rounded-none"
                />
              </div>
              <div
                onClick={() => {
                  setPhotosMenuOpen(true);
                  setSelectedPhoto(photos?.EXTERIOR?.[4] as Photo);
                  setCurrentCategory("EXTERIOR");
                }}
                className="relative cursor-pointer md:hidden "
              >
                <Image
                  src={
                    "https://" +
                    photos?.baseUrl +
                    "/cdn-cgi/image/width=1800,quality=70/" +
                    (photos?.EXTERIOR?.[4]?.link?.toString() ?? "")
                  }
                  alt="Image"
                  fill
                  className=" object-cover"
                />
              </div>
              <div
                onClick={() => {
                  setPhotosMenuOpen(true);
                  setSelectedPhoto(photos?.EXTERIOR?.[5] as Photo);
                  setCurrentCategory("EXTERIOR");
                }}
                className="relative cursor-pointer md:hidden"
              >
                <Image
                  src={
                    "https://" +
                    photos?.baseUrl +
                    "/cdn-cgi/image/width=1800,quality=70/" +
                    (photos?.EXTERIOR?.[5]?.link?.toString() ?? "")
                  }
                  alt="Image"
                  fill
                  className=" object-cover"
                />
              </div>
              <div
                onClick={() => {
                  setPhotosMenuOpen(true);
                  setSelectedPhoto(photos?.INTERIOR?.[2] as Photo);
                  setCurrentCategory("INTERIOR");
                }}
                className="relative cursor-pointer md:hidden inter5:block"
              >
                <Image
                  src={
                    "https://" +
                    photos?.baseUrl +
                    "/cdn-cgi/image/width=1800,quality=70/" +
                    (photos?.INTERIOR?.[2]?.link?.toString() ?? "")
                  }
                  alt="Image"
                  fill
                  className=" object-cover"
                />
              </div>
              <div
                onClick={() => {
                  setPhotosMenuOpen(true);
                  setAllPhotosOpen(true);
                }}
                className="relative cursor-pointer"
              >
                <Image
                  src={
                    "https://" +
                    photos?.baseUrl +
                    "/cdn-cgi/image/width=1800,quality=70/" +
                    (photos?.INTERIOR?.[3]?.link?.toString() ?? "")
                  }
                  alt="Image"
                  fill
                  className=" rounded-br-lg object-cover brightness-[.25]"
                />
                <span className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 transform px-2 text-center text-lg font-medium  text-white ">
                  Sve slike ({auction.data.photos.length})
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex px-2.5 text-text1 md:px-10">
        <div className="w-full">
          <div className=" sticky top-16 z-40 hidden w-full bg-background  md:block">
            <BidBar
              auctionEnd={auction.data?.auctionEnd}
              currentBid={auction.data?.currentBid}
            />
          </div>
          <div className="md:hidden">
            <div className="mt-2 flex w-full items-center justify-between ">
              <h3 className="text-xl font-bold ">{auction.data?.title}</h3>
              <button>
                <StarIcon className="h-6 w-6 " />
              </button>
            </div>
            <p className="">{auction.data?.subTitle}</p>
          </div>
          <p className="my-2 text-text2 md:my-4">Završava se</p>
          <Button
            size="lg"
            className="w-full bg-background2 text-text1 md:hidden"
          >
            Podeli <ArrowUpTrayIcon className="ml-1 h-5 w-5" />
          </Button>
          <div className="mt-4 grid grid-cols-3 rounded-lg md:grid-cols-10 md:border-[1px] md:border-background2">
            <div className="border-y-[1px] border-r-[1px] border-background2 py-2 font-semibold md:col-span-2 md:border-t-0 md:px-4">
              Proizvođač
            </div>
            <div className="col-span-2 border-y-[1px] border-background2 px-4 py-2 underline md:col-span-3 md:border-r md:border-t-0">
              {auction.data?.model.make.name}
            </div>
            <div className="border-b-[1px] border-r-[1px] border-background2 py-2 font-semibold md:col-span-2 md:px-4">
              Model
            </div>
            <div className="col-span-2 border-b-[1px] border-background2 px-4 py-2 underline md:col-span-3">
              {auction.data?.model.name}
            </div>
            <div className="border-b-[1px] border-r-[1px] border-background2 py-2 font-semibold md:col-span-2 md:px-4">
              Kilometraža
            </div>
            <div className="col-span-2 border-b-[1px] border-background2 px-4 py-2 md:col-span-3 md:border-r">
              {auction.data?.mileage}
            </div>
            <div className="border-b-[1px] border-r-[1px] border-background2 py-2 font-semibold md:col-span-2 md:px-4">
              VIN
            </div>
            <div className="col-span-2 border-b-[1px] border-background2 px-4 py-2 md:col-span-3">
              {auction.data?.vin}
            </div>
            <div className="border-b-[1px] border-r-[1px] border-background2 py-2 font-semibold md:col-span-2 md:px-4">
              Motor
            </div>
            <div className="col-span-2 border-b-[1px] border-background2 px-4 py-2 md:col-span-3 md:border-r">
              {auction.data?.engine}
            </div>
            <div className="border-b-[1px] border-r-[1px] border-background2 py-2 font-semibold md:col-span-2 md:px-4">
              Pogon
            </div>
            <div className="col-span-2 border-b-[1px] border-background2 px-4 py-2 md:col-span-3">
              {auction.data?.driveTrain == 2 ? "Zadnji" : "Prednji"}
            </div>
            <div className="border-b-[1px] border-r-[1px] border-background2 py-2 font-semibold md:col-span-2 md:px-4">
              Menjač
            </div>
            <div className="col-span-2 border-b-[1px] border-background2 px-4 py-2 md:col-span-3 md:border-r">
              {auction.data?.transmission == 2 ? "Manuelni" : "Automatski"} (
              {auction.data?.transmission_details})
            </div>
            <div className="border-b-[1px] border-r-[1px] border-background2 py-2 font-semibold md:col-span-2 md:px-4">
              Karoserija
            </div>
            <div className="col-span-2 border-b-[1px] border-background2 px-4 py-2 md:col-span-3">
              {auction.data?.transmission == 2 ? "Kupe" : "Automatski"}
            </div>
            <div className="border-b-[1px] border-r-[1px] border-background2 py-2 font-semibold md:col-span-2 md:px-4">
              Boja
            </div>
            <div className="col-span-2 border-b-[1px] border-background2 px-4 py-2 md:col-span-3 md:border-r">
              {auction.data?.exteriorColor}
            </div>
            <div className="border-b-[1px] border-r-[1px] border-background2 py-2 font-semibold md:col-span-2 md:px-4">
              Boja Enterijera
            </div>
            <div className="col-span-2 border-b-[1px] border-background2 px-4 py-2 md:col-span-3">
              {auction.data?.interiorColor}
            </div>
            <div className="border-b-[1px] border-r-[1px] border-background2 py-2 font-semibold md:col-span-2 md:px-4">
              Status
            </div>
            <div className="col-span-2 border-b-[1px] border-background2 px-4 py-2 md:col-span-3 md:border-r">
              {auction.data?.titleStatus}
            </div>
            <div className="border-b-[1px] border-r-[1px] border-background2 py-2 font-semibold md:col-span-2 md:px-4">
              Lokacija
            </div>
            <div className="col-span-2 border-b-[1px] border-background2 px-4 py-2 underline md:col-span-3">
              {auction.data?.location}
            </div>
            <div className="border-b-[1px] border-r-[1px] border-background2 py-2 font-semibold md:col-span-2 md:px-4">
              Prodavac
            </div>
            <div className="col-span-2 border-b-[1px] border-background2 px-4 py-2 md:col-span-3 md:border-r">
              {auction.data?.interiorColor}
            </div>
            <div className="border-b-[1px] border-r-[1px] border-background2 py-2 font-semibold md:col-span-2 md:px-4">
              Tip Prodavca
            </div>
            <div className="col-span-2 border-b-[1px] border-background2 px-4 py-2 md:col-span-3">
              {auction.data?.sellerType == 1 ? "Privatno lice" : "Pravno lice"}
            </div>
          </div>
        </div>
        <div className="hidden w-full max-w-[238px] pl-6 inter9:flex inter10:max-w-[280px] inter5:max-w-[456px]">
          <h3 className="text-lg font-semibold">Uskoro gotove</h3>
        </div>
      </div>
      {photosMenuOpen && photos && (
        <PhotosMenu
          menuOpen={photosMenuOpen}
          setMenuOpen={setPhotosMenuOpen}
          allPhotosOpen={allPhotosOpen}
          setAllPhotosOpen={setAllPhotosOpen}
          photos={photos}
          selectedPhoto={selectedPhoto}
          setSelectedPhoto={setSelectedPhoto}
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
        />
      )}
    </div>
  );
};

export default Auction;
