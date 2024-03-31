"use client";
import { ClockIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import {
  differenceInSeconds,
  formatDuration,
  intervalToDuration,
} from "date-fns";
import { Button } from "../ui/button";

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

    return formatDuration(timeLeft, {
      format: ["hours", "minutes", "seconds"],
    });
  };

  return (
    <div className="flex items-center space-x-2">
      <div className="bg-background3 flex w-full items-center justify-between rounded-md px-4 py-2 text-[1.125rem] font-medium">
        <div className="text-text3 flex items-center">
          <ClockIcon className="h-7 w-7 " />
          <span className="xs:block mx-1 hidden">Preostalo vreme</span>
          <span className="ml-1 text-white">{formatTimeLeft()}</span>
        </div>
        <div className="text-text3 ml-auto mr-auto flex items-center">
          <p className="">
            Ponuda
            <span className="ml-2 font-medium text-white">{currentBid}€</span>
          </p>
        </div>
        <div className="text-text3 ml-auto mr-auto hidden items-center md:flex">
          <p className="">
            Ponude
            <span className="ml-2 font-medium text-white">{currentBid}</span>
          </p>
        </div>
      </div>
      <Button size="lg">Ponudi</Button>
    </div>
  );
};

export default BidBar;
