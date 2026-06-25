"use client";

import WalletModel from "@/components/wallet/WalletModel";
import { useRouter } from "next/navigation";

export default function DepositInterceptPage() {
  const router = useRouter();

  return (
    <div className="fixed inset-0 z-[100]" onClick={() => router.back()}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Deposit Container */}
      <div
        className="relative h-full overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-center pt-6 pb-10">
          <WalletModel />
        </div>
      </div>
    </div>
  );
}
