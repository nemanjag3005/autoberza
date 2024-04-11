"use client";
import Link from "next/link";
import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";
import { api } from "~/trpc/react";

const Navbar: React.FC<{
  authButton: React.ReactNode;
}> = ({ authButton }) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const { data: suggestions, refetch } = api.cars.searchCars.useQuery(
    {
      query: searchQuery,
    },
    {
      enabled: false, // This will prevent the query from automatically running
    },
  );

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    if (e.target.value.length > 1) {
      await refetch();
    }
  };
  return (
    <div className="sticky top-0 z-50 w-full bg-background">
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
                    <NavigationMenuTrigger className="text-headerLink">
                      Aukcije
                    </NavigationMenuTrigger>
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
              <button className="hidden whitespace-nowrap rounded-full bg-primary px-4 py-2 text-sm font-medium text-zinc-800 hover:bg-primary/80 hover:text-zinc-950 inter2:block">
                Prodaj Auto
              </button>
              <div className="hidden px-3 text-sm font-medium text-headerLink hover:text-zinc-950 dark:hover:text-white inter3:block">
                <Link href="/forum">Forum</Link>
              </div>
              <div className="hidden whitespace-nowrap px-3 text-sm font-medium text-headerLink hover:text-zinc-950 dark:hover:text-white inter4:block">
                <Link href="/sta-je">Šta je Auto Berza?</Link>
              </div>
              <div className="hidden whitespace-nowrap px-3 text-sm font-medium text-headerLink hover:text-zinc-950 dark:hover:text-white inter5:block">
                <Link href="/newsletter">Newsletter</Link>
              </div>
            </div>
            <div className="flex w-full items-center justify-end">
              <div className="justify-left group relative mx-6 hidden w-full max-w-[25rem] cursor-text items-center rounded-md bg-gray-200/80 px-6 py-1 hover:bg-gray-300/90 dark:bg-stone-800 dark:hover:bg-stone-800 md:flex  ">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-500 dark:text-headerLink" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleInputChange}
                  placeholder="Pretraži automobile (npr. BMW, Audi, Fiat)"
                  className="w-full border-none bg-gray-200/50 px-3 py-2 text-sm outline-none placeholder:text-gray-500 group-hover:bg-gray-300/50 dark:bg-stone-800 dark:placeholder:text-headerLink dark:group-hover:bg-stone-800 dark:group-hover:placeholder:text-white"
                />
                {suggestions && suggestions.length > 0 && (
                  <div className="absolute left-0 top-0 z-10 mt-10  w-full overflow-auto rounded-b-md border-t border-background3 bg-stone-800 py-3 text-text1 shadow-lg">
                    {suggestions.map((make) => (
                      <React.Fragment key={make.id}>
                        <Link key={make.id} href={`/search/${make.name}`}>
                          <div className="flex cursor-pointer items-center px-6 py-3 hover:bg-stone-700/80">
                            <MagnifyingGlassIcon className="mr-2 h-5 w-5 text-gray-500 dark:text-headerLink" />{" "}
                            {make.name}
                          </div>
                        </Link>
                        {make.models.map((model) => (
                          <Link
                            key={model.id}
                            href={`/search/${make.name}/${model.name}`}
                          >
                            <div className="flex cursor-pointer items-center px-6 py-3 hover:bg-stone-700/80">
                              <MagnifyingGlassIcon className="mr-2 h-5 w-5 text-gray-500 dark:text-headerLink" />
                              {`${make.name} ${model.name}`}
                            </div>
                          </Link>
                        ))}
                      </React.Fragment>
                    ))}
                  </div>
                )}
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
