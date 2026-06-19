"use client";

import { useState } from "react";
import Image from "next/image";
import { DropdownProps, MenuItemProp } from "@/types/sidebar";

function MenuItem({
  icon,
  text,
  mobile = false,
}: MenuItemProp & { mobile?: boolean }) {
  return (
    <div className="flex items-center gap-[12px]">
      <Image src={icon} alt={text} width={20} height={20} />

      <span
        className={`text-[#D2DCF7] font-semibold tracking-[0.02em] ${
          mobile ? "text-[16px] leading-[22px]" : "text-[14px] leading-[19px]"
        }`}
      >
        {text}
      </span>
    </div>
  );
}

function Dropdown({
  icon,
  label,
  items,
  defaultOpen = false,
  mobile = false,
}: DropdownProps) {
  const [open, setOpen] = useState(() => defaultOpen);

  return (
    <div
      className={`rounded-[8px] bg-[#112F82] overflow-hidden ${
        mobile ? "w-[374px]" : "w-[200px]"
      }`}
    >
      {/* Header Button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className={`w-full bg-[#1463FF] flex items-center justify-between px-[10px] ${
          mobile ? "h-[50px]" : "h-[44px]"
        }`}
      >
        <div className="flex items-center gap-[12px]">
          <Image src={icon} alt={label} width={20} height={20} />

          <span
            className={`text-white font-bold tracking-[0.02em] ${
              mobile
                ? "text-[16px] leading-[22px]"
                : "text-[14px] leading-[19px]"
            }`}
          >
            {label}
          </span>
        </div>

        <Image
          src={
            open ? "/svg/sidebar/arrow-up.svg" : "/svg/sidebar/arrow-down.svg"
          }
          alt={open ? "collapse" : "expand"}
          width={14}
          height={14}
        />
      </button>

      {/* Dropdown Items */}
      {open && (
        <div className="flex flex-col gap-[20px] px-[16px] py-[20px]">
          {items.map((item) => (
            <MenuItem
              key={item.text}
              icon={item.icon}
              text={item.text}
              mobile={mobile}
            />
          ))}
        </div>
      )}
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

export default function CasinoDropdown({
  mobile = false,
}: {
  mobile?: boolean;
}) {
  return (
    <div className="flex flex-col gap-[16px]">
      <Dropdown
        mobile={mobile}
        icon="/svg/sidebar/card-casino.svg"
        label="Casino"
        items={casinoItems}
      />

      <Dropdown
        mobile={mobile}
        icon="/svg/sidebar/clover.svg"
        label="Live Casino"
        items={liveCasinoItems}
      />
    </div>
  );
}
