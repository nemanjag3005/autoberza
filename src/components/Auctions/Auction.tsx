"use client";
import React from "react";
import { useParams } from "next/navigation";
import { api } from "~/trpc/react";
import Image from "next/image";
import BidBar from "./BidBar";
import { type Photo } from "@prisma/client";
import FeaturedTag from "./FeaturedTag";
import { Button } from "../ui/button";
import {
  BellIcon,
  CalendarDaysIcon,
  EyeIcon,
  HashtagIcon,
  InformationCircleIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import {
  ArrowDownCircleIcon,
  ArrowUpTrayIcon,
} from "@heroicons/react/24/solid";
import PhotosMenu from "./Photos/PhotosMenu";
import dayjs from "dayjs";
import ReactPlayer from "react-player";
import "dayjs/locale/sr";
import relativeTime from "dayjs/plugin/relativeTime";
import localizedFormat from "dayjs/plugin/localizedFormat";
import AuctionCard from "./AuctionCard";
import Link from "next/link";
export interface PhotosGroupedByType {
  baseUrl: string;
  // Utilize PhotoType to type keys and specify that values will be arrays of Photo objects
  [key: string]: Photo[] | string; // Using string for key type since TypeScript does not allow using union type for indexing; baseUrl will be string
}
const Auction = () => {
  dayjs.locale("sr");
  dayjs.extend(relativeTime);
  dayjs.extend(localizedFormat);
  const params = useParams<{ id: string }>();
  const auction = api.auctions.fetchAuction.useQuery({ id: params.id });
  const auctions = api.auctions.fetchAllExceptOne.useQuery({ id: params.id });
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

  const highlightsText = auction.data.highlights ?? "";
  const highlightsArray = highlightsText.split("\\n-");
  const firstHighlight = highlightsArray.shift();

  const equipmentText = auction.data.equipment ?? "";
  const equipmentArray = equipmentText.split("\\n-");

  const modificationsText = auction.data.modifications ?? "";
  const modificationsArray = modificationsText.split("\\n-");

  const flawsText = auction.data.knownIssues ?? "";
  const flawsArray = flawsText.split("\\n-");

  const serviceText = auction.data.recentServiceHistory ?? "";
  const serviceArray = serviceText.split("\\n-");
  const firstSentence = serviceArray.shift();

  const otherItemsText = auction.data.otherItems ?? "";
  const otherItemsArray = otherItemsText.split("\\n-");
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
      <div className="overflow-y-auto md:mt-3">
        {auction.isLoading ? (
          <></>
        ) : (
          <div className="grid h-[250px] w-[986px] grid-cols-3 gap-1 px-2.5 md:flex md:h-[372px] md:w-full md:px-10 inter2:h-[488px] inter10:h-[600px]">
            <div
              onClick={() => {
                setPhotosMenuOpen(true);
                setSelectedPhoto(photos?.EXTERIOR?.[0] as Photo);
                setCurrentCategory("EXTERIOR");
              }}
              className="relative h-full w-full cursor-pointer"
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
            <div className="col-span-2 grid flex-shrink-0 grid-cols-2 gap-1 md:flex md:w-[139px] md:flex-col inter2:w-[184px] inter10:w-[226px] inter5:w-[456px]">
              <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-1 md:grid-cols-1 inter5:grid-cols-2">
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
                    className="object-cover md:rounded-tr-lg inter5:rounded-none"
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
                  className="relative cursor-pointer md:hidden inter5:block"
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
                  className="relative cursor-pointer "
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
              </div>
              <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-1 md:grid-cols-1 inter5:grid-cols-2">
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
          </div>
        )}
      </div>
      <div className="flex px-2.5 text-text1 md:px-10 ">
        <div className="w-full md:pr-14">
          <div className=" sticky top-16 z-40 hidden w-full bg-background pb-3 pt-6  md:block">
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
          <p className="my-3 text-text2 md:mb-4">
            Završava se na{" "}
            {dayjs(auction.data?.auctionEnd).format("D MMMM [u] h:mm")}
          </p>
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
              <Link href={`/search/${auction.data.model.make.name}`}>
                {auction.data.model.make.name}
              </Link>
            </div>
            <div className="border-b-[1px] border-r-[1px] border-background2 py-2 font-semibold md:col-span-2 md:px-4">
              Model
            </div>
            <div className="col-span-2 border-b-[1px] border-background2 px-4 py-2 underline md:col-span-3">
              <Link
                href={`/search/${auction.data.model.make.name}/${auction.data.model.name}`}
              >
                {auction.data?.model.name}
              </Link>
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
          <div className="mt-4 rounded-lg bg-background2 p-4">
            <h3 className="text-xl font-bold">Naš Komentar</h3>
            <p className="mt-2 text-sm text-text1">
              {auction.data.overviewSection}
            </p>
          </div>
          {auction.data.highlights && (
            <div className="my-4 text-[15px]">
              <h3 className="text-xl font-bold">Istaknuto</h3>
              <p className="mb-4 mt-1">{firstHighlight}</p>

              {highlightsArray.length > 0 && (
                <ul className="list-disc space-y-1 pl-5">
                  {highlightsArray.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              )}
            </div>
          )}
          {auction.data.equipment && (
            <div className="my-4 text-sm">
              <h3 className="text-xl font-bold">Oprema</h3>

              {equipmentArray.length > 0 && (
                <ul className="mt-1 list-disc pl-5">
                  {equipmentArray.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              )}
            </div>
          )}
          {auction.data.modifications && (
            <div className="my-4 text-sm">
              <h3 className="text-xl font-bold">Modifikacije</h3>
              <p className="mb-4 mt-1">
                Modifikacije navedene od prodavca uključuju:
              </p>
              {modificationsArray.length > 0 && (
                <ul className="mt-1 list-disc pl-5">
                  {modificationsArray.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              )}
            </div>
          )}
          {auction.data.knownIssues && (
            <div className="my-4 text-sm">
              <h3 className="text-xl font-bold">Poznate mane</h3>

              {flawsArray.length > 0 && (
                <ul className="mt-1 list-disc pl-5">
                  {flawsArray.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              )}
            </div>
          )}
          {auction.data.recentServiceHistory && (
            <div className="my-4 text-[15px]">
              <h3 className="text-xl font-bold">Servisna Istorija</h3>
              <p className="mb-4 mt-1">{firstSentence}</p>

              {serviceArray.length > 0 && (
                <ul className="list-disc space-y-1 pl-5">
                  {serviceArray.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              )}
            </div>
          )}
          {auction.data.otherItems && (
            <div className="my-4 text-sm">
              <h3 className="text-xl font-bold">
                Druge Stvari Uključene u Prodaji
              </h3>

              {otherItemsArray.length > 0 && (
                <ul className="mt-1 list-disc pl-5">
                  {otherItemsArray.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              )}
            </div>
          )}
          {auction.data.ownershipHistory && (
            <div className="my-4 text-sm">
              <h3 className="text-xl font-bold">Vlasnička Istorija</h3>

              <p className="mt-1">{auction.data?.ownershipHistory}</p>
            </div>
          )}
          <div className="my-4">
            <h3 className="text-xl font-bold text-text1">Video</h3>

            <div className="mb-8 mt-4 grid grid-cols-1 gap-10 md:grid-cols-2">
              {auction.data &&
                auction.data.videos.map((video) => (
                  <div
                    key={video}
                    className="relative flex bg-black pt-[56.25%] shadow-lg"
                  >
                    <ReactPlayer
                      width="100%"
                      height="100%"
                      style={{ position: "absolute", top: "0", left: "0" }}
                      url={video}
                      light
                      controls
                    />
                  </div>
                ))}
            </div>
          </div>
          <div className="my-4">
            <div className="flex w-full items-end justify-between">
              <h3 className="text-xl font-bold text-text1">
                Pitanja za Prodavca <span className="text-text2">(0)</span>
              </h3>
              <p className="ml-4 text-sm text-primary/80 hover:text-primary md:mr-auto">
                Postavi pitanje
              </p>
            </div>
            <div className="mt-4 flex items-center justify-between rounded-lg border border-background2 py-12">
              <button className="mx-auto rounded-lg bg-background2 px-10 py-3 hover:bg-white hover:text-gray-900">
                Postavi pitanje
              </button>
            </div>
          </div>
          <h3 className="mt-10 text-xl font-bold text-text1">
            {auction.data.title} &#x2022;{" "}
            {auction.data.noReserve ? "Bez" : "Sa"} Osnovom
          </h3>
          <div className="my-3 grid grid-cols-3 grid-rows-5 gap-1.5 border-y border-background2 py-4 text-[15px] text-text1 md:hidden">
            <p className="font-semibold">Trenutna ponuda</p>
            <div className="col-span-2 flex space-x-2 pl-10">
              <p className="font-semibold">{auction.data.currentBid}€</p>
              <span>KooNI</span>
            </div>
            <p className="font-semibold">Prodavac</p>
            <div className="col-span-2 flex space-x-2 pl-10">
              <span>KooNI</span>
              <div className="rounded bg-primary/10 px-1.5 text-primary/80 underline">
                Kontakt
              </div>
            </div>
            <p className="font-semibold">Završava se</p>
            <div className="col-span-2 flex space-x-2 pl-10">
              <CalendarDaysIcon className="h-5 w-5" />
              <span>
                {dayjs(auction.data?.auctionEnd).format("ddd, D MMM [u] h:mm")}
              </span>
            </div>
            <p className="font-semibold">Ponude</p>
            <div className="col-span-2 flex space-x-2 pl-10">
              <div className="flex items-center">
                <HashtagIcon className="mr-1 h-5 w-5" />
                <span>10</span>
              </div>
              <div className="rounded bg-primary/10 px-1.5 text-primary/80 underline">
                Postavi ponudu
              </div>
            </div>
            <p className="font-semibold">Pregledi</p>
            <div className="col-span-2 flex pl-10">
              <div className="flex items-center">
                <EyeIcon className="mr-1 h-5 w-5" />
                <span>8,999</span>
              </div>
            </div>
          </div>
          <div className="my-3 hidden rounded-md border border-background2 md:block">
            <div className="flex items-center justify-between px-6 py-2">
              <div className="">
                <div className="flex">
                  <p className="font-semibold">Trenutna ponuda </p>
                  <span>KooNI</span>
                </div>
                <h1 className="text-7xl font-bold">
                  {auction.data.currentBid}€
                </h1>
              </div>
              <div className=" grid grid-cols-3 grid-rows-4 gap-1.5 py-4 text-[15px] text-text1 ">
                <p className="font-semibold">Prodavac</p>
                <div className="col-span-2 flex space-x-2 pl-10">
                  <span>KooNI</span>
                  <div className="rounded bg-primary/10 px-1.5 text-primary/80 underline">
                    Kontakt
                  </div>
                </div>
                <p className="font-semibold">Završava se</p>
                <div className="col-span-2 flex space-x-2 pl-10">
                  <CalendarDaysIcon className="h-5 w-5" />
                  <span>
                    {dayjs(auction.data?.auctionEnd).format(
                      "ddd, D MMM [u] h:mm",
                    )}
                  </span>
                </div>
                <p className="font-semibold">Ponude</p>
                <div className="col-span-2 flex space-x-2 pl-10">
                  <div className="flex items-center">
                    <HashtagIcon className="mr-1 h-5 w-5" />
                    <span>10</span>
                  </div>
                </div>
                <p className="font-semibold">Pregledi</p>
                <div className="col-span-2 flex pl-10">
                  <div className="flex items-center">
                    <EyeIcon className="mr-1 h-5 w-5" />
                    <span>8,999</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between bg-background2 p-2 text-text1">
              <button className="rounded-md border border-background3 bg-[#212121] px-6 py-3 text-primary/80 transition-all duration-300 ease-in-out hover:border-stone-400">
                Ponudi
              </button>
              <div className="flex w-full items-center justify-around">
                <div className="group flex cursor-pointer items-center text-sm">
                  <InformationCircleIcon className="h-5 w-5" />
                  <span className="ml-1 group-hover:underline">
                    {" "}
                    Kako funkcioniše kupovina
                  </span>
                </div>
                <div className="group flex cursor-pointer items-center text-sm">
                  <StarIcon className="h-5 w-5" />
                  <span className="ml-1 group-hover:underline">
                    {" "}
                    Zaprati ovu aukciju
                  </span>
                </div>
                <div className="group flex cursor-pointer items-center text-sm">
                  <BellIcon className="h-5 w-5" />
                  <span className="ml-1 group-hover:underline">
                    {" "}
                    Obavesti me o {auction.data?.model.name} modelima
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full space-x-2 md:hidden">
            <button className="flex w-fit items-center whitespace-nowrap rounded-xl bg-background2 px-4 py-2 text-sm">
              <StarIcon className="mr-1 h-5 w-5" /> Prati aukciju
            </button>
            <button className="flex w-full items-center justify-center rounded-xl bg-background2 px-4 py-2">
              <BellIcon className="mr-1 h-5 w-5" /> Obavesti me o{" "}
              {auction.data?.model.name} modelima
            </button>
          </div>
          <div className="my-4">
            <div className="flex w-full items-end justify-between">
              <h3 className="text-xl font-bold ">Komentari & Ponude</h3>
              <p className="text-sm text-text1">Najnovije</p>
            </div>
            <div className="justify-left group mt-4 flex w-full cursor-text items-center rounded-md border border-background3 bg-gray-200/80 px-3 py-1 hover:border-stone-400 hover:bg-gray-300/90 dark:bg-background2/30 dark:hover:bg-background2/30">
              <input
                placeholder="Postavi komentar..."
                className="w-full border-none bg-gray-200/50 px-3 py-2 text-sm outline-none placeholder:text-gray-500 group-hover:bg-gray-300/50 dark:bg-background2/10 dark:placeholder:text-stone-500 dark:group-hover:bg-background2/10 "
              />
              <ArrowDownCircleIcon className="h-8 w-8 fill-stone-500 text-stone-500 dark:text-headerLink" />
            </div>
          </div>
        </div>
        <div className="hidden w-full max-w-[238px] flex-shrink-0 pt-8 inter9:block inter10:max-w-[280px] inter5:max-w-[456px]">
          <h3 className="text-xl font-semibold">Uskoro gotove aukcije</h3>
          <div className="mt-4 grid grid-cols-1 gap-5 inter5:grid-cols-2">
            {auctions.data?.map((auction) => (
              <AuctionCard auction={auction} key={auction.id} />
            ))}
          </div>
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
