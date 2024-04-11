"use client";
import React from "react";
import { api } from "~/trpc/react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const Model = () => {
  const params = useParams<{ model: string; make: string }>();
  const { data: carModel } = api.cars.getModelWithMake.useQuery({
    makeName: params.make,
    modelName: params.model,
  });
  if (!carModel) {
    return <div>Loading...</div>;
  }
  return (
    <div className="mx-auto max-w-8xl px-2.5 py-4 text-text1 md:px-10">
      <div className="flex items-center space-x-1">
        <Link href={`/search/${carModel.make.name}`}>
          <h3 className="text-2xl font-bold text-[#828282] hover:text-white">
            {carModel.make.name}
          </h3>
        </Link>
        <ChevronRightIcon className=" h-4 w-4 text-white" />
        <h3 className="text-2xl font-bold text-white">{carModel.name}</h3>
      </div>
    </div>
  );
};

export default Model;
