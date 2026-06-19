"use client";
import { useState } from "react";
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

const casinoItems: MenuItemProp[] = [
  { icon: "/svg/sidebar/game-console.svg", text: "All Games" },
  { icon: "/svg/sidebar/shiny-star.svg", text: "New Games" },
  { icon: "/svg/sidebar/fire.svg", text: "Popular Games" },
  { icon: "/svg/sidebar/thunder.svg", text: "Original Games" },
  { icon: "/svg/sidebar/rocket.svg", text: "Crash Games" },
];

const liveCasinoItems: MenuItemProp[] = [
  { icon: "/svg/sidebar/game-console.svg", text: "All Games" },
  { icon: "/svg/sidebar/rocket.svg", text: "Blackjack" },
  { icon: "/svg/sidebar/thunder.svg", text: "Baccarat" },
  { icon: "/svg/sidebar/shiny-star.svg", text: "Live Games" },
];

interface DropdownProps {
  icon: string;
  label: string;
  items: MenuItemProp[];
  defaultOpen?: boolean;
}

function Dropdown({ icon, label, items, defaultOpen = false }: DropdownProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="w-[200px] rounded-[8px] bg-[#112F82] overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full h-[44px] bg-[#1463FF] px-[10px] flex items-center justify-between"
      >
        <div className="flex items-center gap-[12px]">
          <Image src={icon} alt={label} width={20} height={20} />
          <span className="text-white font-bold text-[14px] leading-[19px] tracking-[0.02em]">
            {label}
          </span>
        </div>
        <Image
          src={open ? "/svg/sidebar/arrow-up.svg" : "/svg/sidebar/arrow-down.svg"}
          alt={open ? "collapse" : "expand"}
          width={14}
          height={14}
        />
      </button>

      {open && (
        <div className="px-[16px] py-[20px] flex flex-col gap-[20px]">
          {items.map((item) => (
            <MenuItem key={item.text} icon={item.icon} text={item.text} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function CasinoDropdown() {
  return (
    <div className="flex flex-col gap-[16px]">
      <Dropdown
        icon="/svg/sidebar/card-casino.svg"
        label="Casino"
        items={casinoItems}
      />
      <Dropdown
        icon="/svg/sidebar/clover.svg"
        label="Live Casino"
        items={liveCasinoItems}
      />
    </div>
  );
}
