import PromotionCard from "./PromotionCard";
import MenuContainer from "./MenuContainer";
import CasinoDropdown from "./CasinoDropdown";
import Image from "next/image";

export default function Sidebar() {
  return (
    <aside className="w-[232px] flex flex-col gap-[10px]">
      {/* Promotion Section */}
      <PromotionCard />

      {/* Menu Section */}
      <div className="w-[232px] h-[596px] bg-[#0C1F56] rounded-[16px] p-[16px]">
        <div className="flex flex-col gap-[16px]">
          <MenuContainer />

          <CasinoDropdown />

          <div className="w-[200px] h-[44px] bg-[#112F82] rounded-[8px] px-[10px] flex items-center gap-[12px]">
            <Image
              src="/svg/sidebar/menuContainer/customer-helpline.svg"
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
