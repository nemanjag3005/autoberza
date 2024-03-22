"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import {
  Bars3Icon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";

const Navbar: React.FC<{
  authButton: React.ReactNode;
}> = ({ authButton }) => {
  return (
    <div className="sticky top-0 z-50 w-full bg-white">
      <div className=" mx-auto max-w-8xl px-3  md:px-10 ">
        <div className="    flex flex-col py-2  md:border-b ">
          <div className="flex items-center justify-between py-1">
            <div className="flex items-center">
              <Link href="/">
                <h1 className="mr-4 whitespace-nowrap text-2xl font-bold md:text-3xl">
                  Auto <span className="text-primary">Berza</span>
                </h1>
              </Link>

              <NavigationMenu className="hidden inter:block">
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Aukcije</NavigationMenuTrigger>
                    <NavigationMenuContent className="p-3">
                      <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          Trenutne Aukcije
                        </NavigationMenuLink>
                      </Link>
                      <Link href="/izdvojene-aukcije" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          Izdvojene Aukcije
                        </NavigationMenuLink>
                      </Link>
                      <Link href="/prosle-aukcije" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          Prošle Aukcije
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <button className="hidden whitespace-nowrap rounded-full bg-primary px-4 py-2 text-sm font-medium text-zinc-800 hover:bg-green-600/70 hover:text-zinc-950 inter2:block">
                Prodaj Auto
              </button>
              <div className="hidden px-3 text-sm font-medium text-zinc-800 hover:text-zinc-950 inter3:block">
                <Link href="/forum">Forum</Link>
              </div>
              <div className="hidden whitespace-nowrap px-3 text-sm font-medium text-zinc-800 hover:text-zinc-950 inter4:block">
                <Link href="/sta-je">Šta je Auto Berza?</Link>
              </div>
              <div className="hidden whitespace-nowrap px-3 text-sm font-medium text-zinc-800 hover:text-zinc-950 inter5:block">
                <Link href="/newsletter">Newsletter</Link>
              </div>
            </div>
            <div className="flex w-full items-center justify-end">
              <div className="justify-left group mx-6 hidden w-full max-w-[25rem] cursor-text items-center rounded-md bg-gray-200/80 px-6 py-1 hover:bg-gray-300/90 md:flex  ">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
                <input
                  placeholder="Pretraži automobile (npr. BMW, Audi, Fiat)"
                  className="w-full border-none bg-gray-200/50 px-3 py-2 text-sm outline-none placeholder:text-gray-500 group-hover:bg-gray-300/50"
                />
              </div>
              <div className="hidden md:block">{authButton}</div>
            </div>
            <div className="flex items-center space-x-1 md:hidden">
              {authButton}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
