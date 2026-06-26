"use client"

import AuthDesktop from "@/components/auth/AuthDesktop";
import AuthMobile from "@/components/auth/AuthMobile";
import { AuthPageProps } from "@/types/auth";

export default function AuthPage({ defaultTab, onClose }: AuthPageProps) {
  return (
    <>
      {/* desktop */}
      <div className="hidden md:block">
        <AuthDesktop defaultTab={defaultTab} onClose={onClose} />
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <AuthMobile defaultTab={defaultTab} />
      </div>
    </>
  );
}
