"use client";
import React, { useEffect, useState, type ChangeEvent } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { ChevronDown } from "lucide-react";

const YearRangeSelector = () => {
  const [startYear, setStartYear] = useState<number>(1984);
  const [endYear, setEndYear] = useState<number>(2025);
  const [popoverTitle, setPopoverTitle] = useState<string>("Godišta");

  const generateYearOptions = () => {
    const years: JSX.Element[] = [];
    for (let year = 1981; year <= 2025; year++) {
      years.push(
        <option key={year} value={year}>
          {year}
        </option>,
      );
    }
    return years;
  };

  useEffect(() => {
    // Update the Popover title only if the selected years are different from the defaults
    if (startYear !== 1984 || endYear !== 2025) {
      setPopoverTitle(`${startYear}-${endYear}`);
    } else {
      setPopoverTitle("Godišta");
    }
  }, [startYear, endYear]);

  // Handle changes to the start year <select>
  const handleStartYearChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setStartYear(Number(e.target.value));
  };

  // Handle changes to the end year <select>
  const handleEndYearChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setEndYear(Number(e.target.value));
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className={`flex h-10 w-full items-center justify-between rounded-md border hover:bg-gray-100 hover:text-zinc-800 dark:hover:bg-stone-800 dark:hover:text-white ${startYear !== 1984 || endYear !== 2025 ? "border-zinc-800 text-zinc-800" : "border-input text-text1"} bg-background px-3 py-2 text-sm  ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1`}
        >
          {popoverTitle}
          <ChevronDown className="ml-1 h-4 w-4" />
        </button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-[12.375rem]">
        <div className="flex items-center justify-center space-x-2 p-4">
          <select
            value={startYear}
            onChange={handleStartYearChange}
            className="flex h-8 w-full items-center justify-between rounded-md border border-input bg-background px-2 py-2 text-sm text-gray-800 ring-offset-background placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
          >
            {generateYearOptions()}
          </select>
          <span className="text-sm text-gray-300">Do</span>
          <select
            value={endYear}
            onChange={handleEndYearChange}
            className="flex h-8 w-full items-center justify-between rounded-md border border-input bg-background px-2 py-2 text-sm text-gray-800 ring-offset-background placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
          >
            {generateYearOptions()}
          </select>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default YearRangeSelector;
