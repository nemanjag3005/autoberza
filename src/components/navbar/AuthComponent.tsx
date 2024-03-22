import { createClient } from "~/utils/supabase/server";
import Link from "next/link";
import { Button } from "../ui/button";
import LoginButton from "./LoginButton";
import { BellIcon } from "@heroicons/react/24/outline";
import Sidebar from "./Sidebar";
import SearchMenuMobile from "./SearchMenuMobile";
import Notifications from "./Notifications";
import ProfileMenu from "./ProfileMenu";

const AuthComponent = async () => {
  const { cookies } = await import("next/headers");
  const supabase = createClient(cookies());

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user ? (
    <div className="flex items-center">
      <SearchMenuMobile />
      <Notifications />
      <ProfileMenu user={user} />
      <Sidebar user={user} />
    </div>
  ) : (
    <>
      <LoginButton />
      <SearchMenuMobile />
      <Sidebar user={user} />
    </>
  );
};

export default AuthComponent;
