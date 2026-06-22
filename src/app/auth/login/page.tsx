"use client";

import AuthMobile from "@/components/auth/AuthMobile";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  return <AuthMobile defaultTab="login" onBack={() => router.back()} />;
}
