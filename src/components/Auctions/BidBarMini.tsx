"use client";
import { ClockIcon } from "@heroicons/react/24/outline";
import { type Auction } from "@prisma/client";
import React, { useEffect, useState } from "react";
import { differenceInSeconds, intervalToDuration } from "date-fns";

const BidBarMini = ({ auction }: { auction: Auction }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const end = new Date(auction.auctionEnd);
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
  }, [auction.auctionEnd]);

  const formatTimeLeft = () => {
    if (!timeLeft) {
      return `Prodato za ${auction.currentBid}€`;
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
    <div className="absolute bottom-2 left-2 z-10 flex items-center justify-between rounded-md bg-[#262626] px-2 py-1 text-sm font-medium">
      <div className="flex items-center">
        {timeLeft && <ClockIcon className="h-3 w-3 text-gray-400" />}
        <span className="ml-1 text-white">{formatTimeLeft()}</span>
      </div>
      {timeLeft && ( // Only show the current bid when the auction has not ended
        <div className="ml-4 flex items-center">
          <p className="font-normal text-gray-300">
            Ponuda
            <span className="ml-1 font-medium text-white">
              {auction.currentBid}€
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default BidBarMini;
