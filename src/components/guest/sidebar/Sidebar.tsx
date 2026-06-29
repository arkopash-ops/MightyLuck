"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import PromotionCard from "./PromotionCard";
import MenuContainer from "./MenuContainer";
import CasinoDropdown from "./CasinoDropdown";
import { SidebarProps } from "@/types/sidebar";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function Sidebar({ isOpen = false, onClose }: SidebarProps) {
  const router = useRouter();
  const pathname = usePathname();
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

            <Link href="/refer-a-friend" className="w-[200px] h-[44px] bg-[#112F82] rounded-[8px] px-[10px] flex items-center gap-[12px]">
              <Image
                src="/svg/sidebar/refer.svg"
                alt="Refer a Friend"
                width={20}
                height={20}
              />
              <span className="text-[#D2DCF7] text-[14px] font-semibold">
                Refer a Friend
              </span>
            </Link>

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

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed top-[50px] left-0 right-0 bottom-[75px] bg-black/50 z-30 md:hidden"
          onClick={onClose}
        />
      )}

      {/* MOBILE SIDEBAR */}
      <aside
        className={`fixed top-[50px] left-0 h-[calc(100vh-125px)] w-[414px] bg-[#0C1F56] z-40 transition-transform duration-300 md:hidden
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-4 flex flex-col gap-4 relative z-40">
          <MenuContainer mobile isLoggedIn={isLoggedIn} />
          <CasinoDropdown mobile />

          <button
            onClick={() => {
              onClose?.();
              if (pathname === "/search") {
                router.back();
                setTimeout(() => {
                  router.push("/refer-a-friend");
                }, 50);
              } else {
                router.push("/refer-a-friend");
              }
            }}
            className="w-[374px] h-[50px] bg-[#112F82] rounded-[8px] px-[10px] flex items-center gap-[8px]"
          >
            <Image
              src="/svg/sidebar/refer.svg"
              alt="Refer a Friend"
              width={20}
              height={20}
            />
            <span className="text-[#D2DCF7] text-[16px] font-semibold">
              Refer a Friend
            </span>
          </button>

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
