"use client"

import GuestLobby from "@/pages/(lobby)/guest/page";
import UserLobby from "@/pages/(lobby)/user/page";
import { useAppSelector } from "@/redux/hooks";

export default function Home() {
  const user = useAppSelector((s) => s.auth.user);

  return user ? <UserLobby /> : <GuestLobby />;
}
