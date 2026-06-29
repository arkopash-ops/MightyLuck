"use client";

import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
import WalletTabs from "../WalletTabs";
import Image from "next/image";
import { useState } from "react";

export default function MobileWalletPage() {
  const router = useRouter();
  const [modalHeight, setModalHeight] = useState(633);

  return (
    <div className="min-h-screen bg-[#0C1F56]">
      <Navbar onLogin={() => {}} onJoin={() => {}} onLogoutModalChange={() => {}} />
      
      <div className="fixed inset-0 top-[50px] bg-black/70 backdrop-blur-sm flex items-end z-40" onClick={() => router.back()}>
        <div 
          className="w-full max-w-[414px] mx-auto rounded-t-[30px] bg-[#091741] px-5 pt-4 pb-10 animate-in slide-in-from-bottom duration-300 overflow-y-auto max-h-[85vh] relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Handle */}
          <div className="flex justify-center mb-4">
            <div className="w-[70px] h-[6px] rounded-full bg-[#112F82]" />
          </div>

          {/* ellipse 7 */}
          <div className="absolute w-[174px] h-[176px] rounded-full bg-[#1463FF] blur-[40px] left-[-30px] -top-[125px] z-0 pointer-events-none" />
          
          {/* content */}
          <div className="relative z-10 flex flex-col gap-6">
            <div className="flex justify-start">
              <div className="flex items-center gap-3">
                <Image
                  src="/svg/navbar/wallet-1.svg"
                  alt="wallet"
                  width={20}
                  height={20}
                />

                <h2 className="text-white text-[20px] font-extrabold font-jost tracking-[0.01em] leading-[29px]">Wallet</h2>
              </div>
            </div>

            <WalletTabs setModalHeight={setModalHeight} />
          </div>
        </div>
      </div>
    </div>
  );
}
