import { MenuItemProp } from "@/types/sidebar/MenuItemsProp";
import Image from "next/image";

interface TextSize extends MenuItemProp {
  size: number;
}

function MenuItem({ icon, text, size }: TextSize) {
  return (
    <div className="w-[200px] h-[44px] bg-[#112F82] rounded-[8px] px-[10px] flex items-center gap-[12px]">
      <Image src={icon} alt={text} width={20} height={20} />

      <span
        style={{ fontSize: `${size}px` }}
        className="text-[#D2DCF7] font-semibold leading-[19px] tracking-[0.02em]"
      >
        {text}
      </span>
    </div>
  );
}

export default function MenuContainer() {
  return (
    <div className="flex flex-col gap-[16px]">
      {/* promotion */}
      <MenuItem
        icon="/svg/sidebar/menuContainer/gift.svg"
        text="Promotions"
        size={16}
      />

      {/* vip programs */}
      <MenuItem
        icon="/svg/sidebar/menuContainer/vip-star.svg"
        text="VIP Programs"
        size={14}
      />

      {/* tournaments */}
      <MenuItem
        icon="/svg/sidebar/menuContainer/trophy.svg"
        text="Tournaments"
        size={14}
      />
    </div>
  );
}
