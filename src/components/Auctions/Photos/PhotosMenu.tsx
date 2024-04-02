/* eslint-disable @typescript-eslint/no-unsafe-call */
"use client";
import {
  ArrowLeftIcon,
  MagnifyingGlassPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import React, {
  type Dispatch,
  type SetStateAction,
  useEffect,
  useState,
} from "react";
import { type PhotosGroupedByType } from "../Auction";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/photo-carousel";

import { type Photo } from "@prisma/client";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Maximize, Minimize } from "lucide-react";

const orderedCategories = [
  "EXTERIOR",
  "INTERIOR",
  "MECHANICAL",
  "DOC",
  "OTHER",
];

const PhotosMenu = ({
  menuOpen,
  setMenuOpen,
  allPhotosOpen,
  setAllPhotosOpen,
  photos,
  selectedPhoto,
  setSelectedPhoto,
  currentCategory,
  setCurrentCategory,
}: {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
  allPhotosOpen: boolean;
  setAllPhotosOpen: Dispatch<SetStateAction<boolean>>;
  photos: PhotosGroupedByType;
  selectedPhoto: Photo | null;
  setSelectedPhoto: Dispatch<SetStateAction<null | Photo>>;
  currentCategory: string | null;
  setCurrentCategory: Dispatch<SetStateAction<null | string>>;
}) => {
  const [carouselApi, setCarouselApi] = React.useState<CarouselApi | null>(
    null,
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [initialScrollDone, setInitialScrollDone] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const handleSetCarouselApi = React.useCallback((api: CarouselApi) => {
    setCarouselApi(api);
  }, []);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      // Enter fullscreen
      document.documentElement
        .requestFullscreen()
        .then(() => {
          setIsFullScreen(true); // Update state upon entering fullscreen
        })
        .catch((e) => {
          console.error(e);
        });
    } else {
      // Exit fullscreen
      document
        .exitFullscreen()
        .then(() => {
          setIsFullScreen(false); // Update state upon exiting fullscreen
        })
        .catch((e) => {
          console.error(e);
        });
    }
  };

  const flatPhotos = React.useMemo(() => {
    return orderedCategories.flatMap((category) => {
      const categoryPhotos = photos[category];
      if (Array.isArray(categoryPhotos)) {
        return categoryPhotos.map((photo) => ({ ...photo, category }));
      }
      return [];
    });
  }, [photos]);

  useEffect(() => {
    if (!carouselApi || !selectedPhoto || initialScrollDone) return;

    const selectedIndex = flatPhotos.findIndex(
      (photo) => photo.id === selectedPhoto.id,
    );

    if (selectedIndex !== -1) {
      carouselApi.scrollTo(selectedIndex);

      setCurrentCategory(selectedPhoto.type); // Assuming type is the category
      setInitialScrollDone(true);
    }
  }, [
    carouselApi,
    selectedPhoto,
    initialScrollDone,
    flatPhotos,
    setCurrentCategory,
  ]);
  useEffect(() => {
    if (!menuOpen) setInitialScrollDone(false);
  }, [menuOpen]);

  const handleCategorySelect = (category: string) => {
    const categoryIndex = flatPhotos.findIndex(
      (photo) => photo.category === category,
    );
    if (categoryIndex !== -1) {
      carouselApi?.scrollTo(categoryIndex);
      setCurrentCategory(category);
    }
  };

  useEffect(() => {
    const onSelect = () => {
      if (!carouselApi) return;

      const newIndex = carouselApi.selectedScrollSnap();
      setCurrentIndex(newIndex); // Update the current index
      const currentPhoto = flatPhotos[newIndex];
      if (currentPhoto) {
        setCurrentCategory(currentPhoto.category); // Update the category as well, if needed
        setSelectedPhoto(currentPhoto); // Update the selected photo to keep it in sync
      }
    };

    if (carouselApi) {
      carouselApi.on("select", onSelect);
      onSelect(); // Call onSelect initially in case the carousel starts with a photo in view
    }

    return () => {
      if (carouselApi) {
        carouselApi.off("select", onSelect);
      }
    };
  }, [carouselApi, setSelectedPhoto, flatPhotos, setCurrentCategory]);

  useEffect(() => {
    if (menuOpen) {
      // Save the current value
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";

      return () => {
        // Revert back to the original value
        document.body.style.overflow = originalStyle;
      };
    }
  }, [menuOpen]);

  useEffect(() => {
    if (carouselApi && selectedPhoto) {
      // Ensure carousel is ready and a photo is selected, and not viewing all photos
      const selectedIndex = flatPhotos.findIndex(
        (photo) => photo.id === selectedPhoto.id,
      );

      if (selectedIndex !== -1) {
        carouselApi.scrollTo(selectedIndex); // Scroll to the selected photo
      }
    }
  }, [carouselApi, selectedPhoto, allPhotosOpen, flatPhotos]);

  useEffect(() => {
    const onFullScreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", onFullScreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", onFullScreenChange);
    };
  }, []);

  return (
    <div className="fixed inset-0 left-0 top-0 z-50 h-full w-full overflow-hidden bg-black  py-2">
      <div className="absolute right-0 top-0 bg-black py-2 pl-8 pr-2 md:hidden">
        <button onClick={() => setMenuOpen(false)}>
          <XMarkIcon className="h-7 w-7 text-white" fontWeight={600} />
        </button>
      </div>
      <div className="hidden w-full  items-center whitespace-nowrap px-4 pb-2 text-text2 md:flex">
        <div className="flex items-center space-x-8">
          <button
            onClick={() => {
              setAllPhotosOpen(true);
              setCurrentCategory(null);
            }}
            className={`${allPhotosOpen && "text-white"} text-lg`}
          >
            Sve slike ({flatPhotos.length})
          </button>
          <button
            className={`${currentCategory == "EXTERIOR" && "text-white"}`}
            onClick={() => {
              handleCategorySelect("EXTERIOR");
              setAllPhotosOpen(false);
            }}
          >
            Eksterijer
          </button>
          <button
            className={`${currentCategory == "INTERIOR" && "text-white"}`}
            onClick={() => {
              handleCategorySelect("INTERIOR");
              setAllPhotosOpen(false);
            }}
          >
            Enterijer
          </button>
          <button
            className={`${currentCategory == "MECHANICAL" && "text-white"}`}
            onClick={() => {
              handleCategorySelect("MECHANICAL");
              setAllPhotosOpen(false);
            }}
          >
            Motor
          </button>
          <button
            className={`${currentCategory == "DOC" && "text-white"}`}
            onClick={() => {
              handleCategorySelect("DOC");
              setAllPhotosOpen(false);
            }}
          >
            Dokumentacija
          </button>
          <button
            className={`${currentCategory == "OTHER" && "text-white"}`}
            onClick={() => {
              handleCategorySelect("OTHER");
              setAllPhotosOpen(false);
            }}
          >
            Ostalo
          </button>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <span className={`${allPhotosOpen && "hidden"} text-white`}>
            {currentIndex + 1} od {flatPhotos.length}
          </span>
          <button className={`${allPhotosOpen && "hidden"}`}>
            <MagnifyingGlassPlusIcon className="h-6 w-6 " fontWeight={600} />
          </button>
          <button onClick={toggleFullScreen}>
            {isFullScreen ? (
              <Minimize className="h-6 w-6 " /> // Icon when in fullscreen (suggesting exit fullscreen)
            ) : (
              <Maximize className="h-6 w-6 " /> // Default icon (suggesting enter fullscreen)
            )}
          </button>
          <button onClick={() => setMenuOpen(false)}>
            <XMarkIcon className="h-6 w-6 " fontWeight={600} />
          </button>
        </div>
      </div>
      {allPhotosOpen ? (
        <>
          <div className="px-3">
            <div className="mb-4 flex w-full items-center justify-between md:hidden">
              <button onClick={() => setAllPhotosOpen(false)}>
                <ArrowLeftIcon className="h-6 w-6 font-bold" />
              </button>
              <span className="ml-auto mr-auto text-lg font-medium">
                Sve slike ({flatPhotos.length})
              </span>
            </div>

            <div className="grid max-h-[calc(100vh-55px)] grid-cols-2 gap-[5px] overflow-y-scroll md:mt-2 md:grid-cols-4 md:gap-5 md:px-20 inter6:grid-cols-5">
              {flatPhotos.map((photo) => (
                <AspectRatio
                  onClick={() => {
                    setSelectedPhoto(photo);
                    setAllPhotosOpen(false);
                  }}
                  className="cursor-pointer"
                  ratio={4 / 2.7}
                  key={photo.id}
                >
                  <Image
                    src={`https://${photos.baseUrl}/cdn-cgi/image/width=1800,quality=70/${photo.link}`}
                    alt="Image"
                    fill
                    className="object-cover"
                  />
                </AspectRatio>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex w-full items-center space-x-4 overflow-x-auto whitespace-nowrap px-4 pb-2 pr-20 text-text2 md:hidden">
            <button
              onClick={() => setAllPhotosOpen(true)}
              className={`${allPhotosOpen && "text-white"}`}
            >
              Sve slike ({flatPhotos.length})
            </button>
            <button
              className={`${currentCategory == "EXTERIOR" && "text-white"}`}
              onClick={() => handleCategorySelect("EXTERIOR")}
            >
              Eksterijer
            </button>
            <button
              className={`${currentCategory == "INTERIOR" && "text-white"}`}
              onClick={() => handleCategorySelect("INTERIOR")}
            >
              Enterijer
            </button>
            <button
              className={`${currentCategory == "MECHANICAL" && "text-white"}`}
              onClick={() => handleCategorySelect("MECHANICAL")}
            >
              Motor
            </button>
            <button
              className={`${currentCategory == "DOC" && "text-white"}`}
              onClick={() => handleCategorySelect("DOC")}
            >
              Dokumentacija
            </button>
            <button
              className={`${currentCategory == "OTHER" && "text-white"}`}
              onClick={() => handleCategorySelect("OTHER")}
            >
              Ostalo
            </button>
          </div>
          <div className="flex h-full items-center justify-center">
            <Carousel setApi={handleSetCarouselApi} className=" w-full">
              <CarouselContent className="  w-full">
                {flatPhotos?.map((photo: Photo) => (
                  <CarouselItem key={photo.id} className="">
                    <div className="relative h-[calc(100vh-100px)] w-full ">
                      <Image
                        src={`https://${photos.baseUrl}/cdn-cgi/image/width=1800,quality=70/${photo.link}`}
                        alt="Image"
                        fill
                        className="cursor-zoom-in object-contain"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </>
      )}
    </div>
  );
};

export default PhotosMenu;
