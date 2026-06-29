"use client";

import WalletModel from "@/components/wallet/WalletModel";
import { useRouter } from "next/navigation";

export default function DepositInterceptPage() {
  const router = useRouter();

  return (
    <div className="hidden md:block fixed inset-0 z-[100]" onClick={() => router.back()}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Deposit Container */}
      <div
        className="relative h-full overflow-y-auto flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <WalletModel />
      </div>
    </div>
  );
}
