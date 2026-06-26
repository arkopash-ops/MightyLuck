"use client"

import GuestLobby from "@/views/(lobby)/guest/GuestLobby";
import UserLobby from "@/views/(lobby)/user/UserLobby";
import { useAppSelector } from "@/redux/hooks";

export default function Home() {
  const user = useAppSelector((s) => s.auth.user);

  return user ? <UserLobby /> : <GuestLobby />;
}
