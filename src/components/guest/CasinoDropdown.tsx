import { MenuItemProp } from "@/types/sidebar/MenuItemsProp";
import Image from "next/image";

function MenuItem({ icon, text }: MenuItemProp) {
  return (
    <div className="flex items-center gap-[12px]">
      <Image src={icon} alt={text} width={20} height={20} />
      <span className="text-[#D2DCF7] text-[14px] font-semibold leading-[19px] tracking-[0.02em]">
        {text}
      </span>
    </div>
  );
}

export default function CasinoDropdown() {
  return (
    <div className="flex flex-col gap-[16px]">
      {/* casino dropdown */}
      <div className="w-[200px] rounded-[8px] bg-[#112F82] overflow-hidden">
        <div className="h-[44px] bg-[#1463FF] px-[10px] flex items-center justify-between">
          <div className="flex items-center gap-[12px]">
            <Image
              src="/svg/sidebar/menuContainer/card-casino.svg"
              alt="casino"
              width={20}
              height={20}
            />

            <span className="text-white font-bold text-[14px] leading-[19px] tracking-[0.02em]">
              Casino
            </span>
          </div>

          <Image
            src="/svg/sidebar/menuContainer/arrow-up.svg"
            alt="arrow up"
            width={14}
            height={14}
          />
        </div>

        <div className="px-[16px] py-[20px] flex flex-col gap-[20px]">
          {/* all games */}
          <MenuItem
            text="All Games"
            icon="/svg/sidebar/menuContainer/game-console.svg"
          />

          {/* new games */}
          <MenuItem
            text="New Games"
            icon="/svg/sidebar/menuContainer/shiny-star.svg"
          />

          {/* popular games */}
          <MenuItem
            text="Popular Games"
            icon="/svg/sidebar/menuContainer/fire.svg"
          />

          {/* original games */}
          <MenuItem
            text="Original Games"
            icon="/svg/sidebar/menuContainer/thunder.svg"
          />

          {/* crash games */}
          <MenuItem
            text="Crash Games"
            icon="/svg/sidebar/menuContainer/rocket.svg"
          />
        </div>
      </div>

      {/* live casino dropdown */}
      <div className="w-[200px] h-[44px] bg-[#1463FF] rounded-[8px] px-[10px] flex items-center justify-between">
        <div className="flex items-center gap-[12px]">
          <Image
            src="/svg/sidebar/menuContainer/clover.svg"
            alt="Live Casino"
            width={20}
            height={20}
          />

          <span className="text-white font-bold text-[14px] leading-[19px] tracking-[0.02em]">
            Live Casino
          </span>
        </div>

        <Image
          src="/svg/sidebar/menuContainer/arrow-down.svg"
          alt="arrow"
          width={14}
          height={14}
        />
      </div>
    </div>
  );
}
