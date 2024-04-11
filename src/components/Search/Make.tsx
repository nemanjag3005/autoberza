"use client";
import React from "react";
import { api } from "~/trpc/react";
import { useParams } from "next/navigation";
import Link from "next/link";

const Make = () => {
  const params = useParams<{ make: string }>();
  const { data: carMake } = api.cars.getMakeWithModels.useQuery({
    makeName: params.make,
  });
  if (!carMake) {
    return <div>Loading...</div>;
  }
  return (
    <div className="mx-auto max-w-8xl px-2.5 py-4 text-text1 md:px-10">
      <h3 className="text-2xl font-bold text-white">{carMake.name}</h3>
      <div className="mt-5 flex items-center space-x-2 text-sm">
        {carMake.models.map((model) => (
          <Link key={model.id} href={`/search/${carMake.name}/${model.name}`}>
            <div className="rounded-full border border-[#28523e] bg-[#1b2721] px-3 py-2 hover:border-[#3b785b] hover:bg-[#25372e]">
              {model.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Make;
