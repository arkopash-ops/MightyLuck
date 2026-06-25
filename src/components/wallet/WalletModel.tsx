"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import Image from "next/image";

import WalletTabs from "./WalletTabs";

export default function WalletModel() {
  const router = useRouter();

  const [modalHeight, setModalHeight] = useState(633);

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="relative">
        {/* Close button outside */}
        <button
          type="button"
          onClick={() => router.back()}
          className="absolute top-[4.8px] -right-[30px] z-20 w-6 h-6 flex items-center justify-center"
        >
          <Image
            src="/svg/search/close.svg"
            alt="close"
            width={14.4}
            height={14.4}
          />
        </button>

        <div
          className="relative w-[500px] rounded-2xl bg-[#091741] px-5 pt-6 pb-8 overflow-hidden transition-all duration-300"
          style={{ height: `${modalHeight}px` }}
        >
          {/* ellipse 7 */}
          <div className="absolute w-[173px] h-[173px] rounded-full bg-[#1463FF] blur-[40px] left-1/2 -translate-x-1/2 -top-[145px] z-0" />
          {/* content */}
          <div className="relative z-10 flex flex-col gap-6">
            <div className="flex justify-center">
              <div className="flex items-center gap-3">
                <Image
                  src="/svg/navbar/wallet-1.svg"
                  alt="wallet"
                  width={20}
                  height={20}
                />

                <h2 className="text-white text-[20px] font-extrabold">
                  Wallet
                </h2>
              </div>
            </div>

            <WalletTabs setModalHeight={setModalHeight} />
          </div>
        </div>
      </div>
    </div>
  );
}
