"use client";

import AuthMobile from "@/components/auth/AuthMobile";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  return <AuthMobile defaultTab="signup" onBack={() => router.back()} />;
}
