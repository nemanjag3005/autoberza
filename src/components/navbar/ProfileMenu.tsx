"use client";
import type { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import React from "react";
import { createClient } from "~/utils/supabase/client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { ChevronDownIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const ProfileMenu: React.FC<{ user: User | null }> = ({ user }) => {
  const router = useRouter();
  const supabase = createClient();
  const signOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };
  return (
    <div className="hidden md:block">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            size="icon"
            className="ml-3 bg-transparent outline-none ring-0 hover:bg-gray-100 focus-visible:ring-0"
          >
            <UserCircleIcon className="h-8 w-8 text-gray-300" />
            <ChevronDownIcon className=" h-2 w-2" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="">
          <DropdownMenuLabel>Moj Nalog</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/profil">Profil</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/pratim">Pratim</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/moji-oglasi">Moji Oglasi</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/podesavanja">Podšavanja</Link>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={signOut}>Izloguj se</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ProfileMenu;
