"use client";
import { ChatBubbleOvalLeftIcon, ClockIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import {
  differenceInSeconds,
  formatDuration,
  intervalToDuration,
} from "date-fns";
import { Button } from "../ui/button";
import { ArrowUpIcon, HashtagIcon } from "@heroicons/react/24/solid";

interface BidBarProps {
  auctionEnd: Date | string; // Assuming the type based on common usage; adjust as necessary
  currentBid: number;
}

const BidBar = ({ auctionEnd, currentBid }: BidBarProps) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const end = new Date(auctionEnd);
    const difference = differenceInSeconds(end, now);

    if (difference <= 0) {
      return null;
    }

    return intervalToDuration({ start: now, end: end });
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const updatedTimeLeft = calculateTimeLeft();
      if (updatedTimeLeft) {
        setTimeLeft(updatedTimeLeft);
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auctionEnd]);

  const formatTimeLeft = () => {
    if (!timeLeft) {
      return "Auction ended";
    }

    if (timeLeft.days && timeLeft.days > 0) {
      return `${timeLeft.days} dan${timeLeft.days > 1 ? "a" : ""}`;
    }

    const hours = timeLeft.hours?.toString().padStart(2, "0") ?? "00";
    const minutes = timeLeft.minutes?.toString().padStart(2, "0") ?? "00";
    const seconds = timeLeft.seconds?.toString().padStart(2, "0") ?? "00";

    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="flex items-center space-x-2">
      <div className="flex w-full items-center justify-between rounded-md bg-background3 px-4 py-2 text-[1.125rem] font-medium">
        <div className="flex items-center text-text3">
          <ClockIcon className="h-6 w-6 " />
          <span className="mx-1 hidden xs:block">Preostalo vreme</span>
          <span className="ml-1 text-white">{formatTimeLeft()}</span>
        </div>
        <div className="ml-auto mr-auto flex items-center text-text3">
          <ArrowUpIcon className="inter9:block inter10:hidden mr-1 hidden h-5 w-5 inter4:block" />
          <p className="">
            Ponuda
            <span className="ml-2 font-medium text-white">{currentBid}€</span>
          </p>
        </div>
        <div className="ml-auto mr-auto hidden items-center text-text3 md:flex">
          <HashtagIcon className="inter9:block inter10:hidden mr-1 hidden h-5 w-5 inter4:block" />
          <p className="">
            Ponude
            <span className="ml-2 font-medium text-white">{currentBid}</span>
          </p>
        </div>
        <div className="inter10:flex ml-auto mr-auto hidden items-center text-text3">
          <ChatBubbleOvalLeftIcon className="mr-1 hidden h-5 w-5 inter4:block" />
          <p className="">
            Komentari
            <span className="ml-2 font-medium text-white">{currentBid}</span>
          </p>
        </div>
      </div>
      <Button size="lg">Ponudi</Button>
    </div>
  );
};

export default BidBar;
