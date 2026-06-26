"use client";

import { MenuItemProps } from "@/types/sidebar";
import Image from "next/image";
import Link from "next/link";

function MenuItem({ icon, text, size, mobile = false, href }: MenuItemProps & { href?: string }) {
  const content = (
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

  if (href) return <Link href={href}>{content}</Link>;
  return content;
}

export default function MenuContainer({
  mobile = false,
  isLoggedIn = false,
}: {
  mobile?: boolean;
  isLoggedIn?: boolean;
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

      {/* refer a friend */}
      <MenuItem
        icon="/svg/sidebar/refer.svg"
        text="Refer a Friend"
        size={14}
        mobile={mobile}
        href="/refer-a-friend"
      />

      {isLoggedIn && (
        <>
          {/* recently played */}
          <MenuItem
            icon="/svg/sidebar/recently-played.svg"
            text="Recently Played"
            size={14}
            mobile={mobile}
          />

          {/* favorite games */}
          <MenuItem
            icon="/svg/sidebar/favorite.svg"
            text="Favorite Games"
            size={14}
            mobile={mobile}
          />
        </>
      )}
    </div>
  );
}
