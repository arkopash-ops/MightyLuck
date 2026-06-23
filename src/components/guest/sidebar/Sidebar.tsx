"use client";

import Image from "next/image";
import PromotionCard from "./PromotionCard";
import MenuContainer from "./MenuContainer";
import CasinoDropdown from "./CasinoDropdown";
import { SidebarProps } from "@/types/sidebar";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function Sidebar({ isOpen = false, onClose }: SidebarProps) {
  const isLoggedIn = !!useSelector((state: RootState) => state.auth.user);

  return (
    <>
      {/* DESKTOP SIDEBAR */}
      <aside className="hidden md:flex w-[232px] flex-col gap-[10px]">
        <PromotionCard />

        <div className="w-[232px] bg-[#0C1F56] rounded-[16px] p-[16px]">
          <div className="flex flex-col gap-[16px]">
            <MenuContainer isLoggedIn={isLoggedIn} />

            <CasinoDropdown />

            <div className="w-[200px] h-[44px] bg-[#112F82] rounded-[8px] px-[10px] flex items-center gap-[12px]">
              <Image
                src="/svg/sidebar/customer-helpline.svg"
                alt="Live Support"
                width={20}
                height={20}
              />

              <span className="text-[#D2DCF7] text-[14px] font-semibold">
                Live Support
              </span>
            </div>
          </div>
        </div>
      </aside>

      {/* MOBILE SIDEBAR */}
      <aside
        className={`fixed top-[50px] left-0 h-[calc(100vh-50px)] w-[414px]
        bg-[#0C1F56] z-40 transition-transform duration-300 md:hidden
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30 md:hidden"
            onClick={onClose}
          />
        )}

        <div className="p-4 flex flex-col gap-4 relative z-40">
          <MenuContainer mobile isLoggedIn={isLoggedIn} />
          <CasinoDropdown mobile />

          <div className="w-[374px] h-[50px] bg-[#112F82] rounded-[8px] px-[10px] flex items-center gap-[8px]">
            <Image
              src="/svg/sidebar/customer-helpline.svg"
              alt="Live Support"
              width={20}
              height={20}
            />

            <span className="text-[#D2DCF7] text-[16px] font-semibold">
              Live Support
            </span>
          </div>
        </div>
      </aside>
    </>
  );
}
