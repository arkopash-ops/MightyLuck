import Image from "next/image";
import PromotionCard from "./PromotionCard";
import MenuContainer from "./MenuContainer";
import CasinoDropdown from "./CasinoDropdown";
import { SidebarProps } from "@/types/sidebar";

export default function Sidebar({
  mobile = false,
  isOpen = false,
  onClose,
}: SidebarProps) {
  if (!mobile) {
    return (
      <aside className="hidden md:flex w-[232px] flex-col gap-[10px]">
        {/* Promotion Section */}
        <PromotionCard />

        {/* Menu Section */}
        <div className="w-[232px] bg-[#0C1F56] rounded-[16px] p-[16px]">
          <div className="flex flex-col gap-[16px]">
            <MenuContainer />

            <CasinoDropdown />

            <div className="w-[200px] h-[44px] bg-[#112F82] rounded-[8px] px-[10px] flex items-center gap-[12px]">
              <Image
                src="/svg/sidebar/customer-helpline.svg"
                alt="Live Support"
                width={20}
                height={20}
              />

              <span className="text-[#D2DCF7] text-[14px] font-semibold leading-[19px] tracking-[0.02em]">
                Live Support
              </span>
            </div>
          </div>
        </div>
      </aside>
    );
  }

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed top-[50px] left-0 right-0 bottom-0 bg-black/50 z-30 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-[50px] left-0 h-[calc(100vh-50px)] w-[414px] bg-[#0C1F56] z-40 transition-transform duration-300 md:hidden
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="p-4 flex flex-col gap-4">
          <MenuContainer mobile={true} />

          <CasinoDropdown mobile={true} />

          <div className="w-[374px] h-[50px] bg-[#112F82] rounded-[8px] px-[10px] flex items-center gap-[8px]">
            <Image
              src="/svg/sidebar/customer-helpline.svg"
              alt="Live Support"
              width={20}
              height={20}
            />

            <span className="text-[#D2DCF7] text-[16px] font-semibold leading-[22px] tracking-[0.02em]">
              Live Support
            </span>
          </div>
        </div>
      </aside>
    </>
  );
}
