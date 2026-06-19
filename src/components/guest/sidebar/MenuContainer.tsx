import { MenuItemProps } from "@/types/sidebar";
import Image from "next/image";

function MenuItem({ icon, text, size, mobile = false }: MenuItemProps) {
  return (
    <div
      className={`bg-[#112F82] rounded-[8px] flex items-center px-[10px]
        ${mobile ? "w-[374px] h-[50px] gap-[8px]" : "w-[200px] h-[44px] gap-[12px]"}
      `}
    >
      <Image src={icon} alt={text} width={20} height={20} />

      <span
        style={{ fontSize: `${size}px` }}
        className={`text-[#D2DCF7] font-semibold tracking-[0.02em]
          ${mobile ? "leading-[22px]" : "leading-[19px]"}
        `}
      >
        {text}
      </span>
    </div>
  );
}

export default function MenuContainer({
  mobile = false,
}: {
  mobile?: boolean;
}) {
  return (
    <div
      className={`flex flex-col ${mobile ? "w-full gap-[12px]" : "gap-[16px]"}`}
    >
      {/* promotion */}
      <MenuItem
        icon="/svg/sidebar/gift.svg"
        text="Promotions"
        size={16}
        mobile={mobile}
      />

      {/* vip programs */}
      <MenuItem
        icon="/svg/sidebar/vip-star.svg"
        text="VIP Programs"
        size={14}
        mobile={mobile}
      />

      {/* tournaments */}

      <MenuItem
        icon="/svg/sidebar/trophy.svg"
        text="Tournaments"
        size={14}
        mobile={mobile}
      />
    </div>
  );
}
