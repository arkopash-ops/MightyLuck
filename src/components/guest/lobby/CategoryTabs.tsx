"use client";

import { categories } from "@/data/categoryTabs";
import Image from "next/image";

interface CategoryTabsProps {
  active: string;
  onSelect: (id: string) => void;
}

export default function CategoryTabs({ active, onSelect }: CategoryTabsProps) {
  return (
    <div className="w-full md:w-[908.8px]">
      <div className="flex flex-row items-center gap-[8px] overflow-x-auto scrollbar-hide md:overflow-visible">
        {categories.map((item) => {
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelect(item.id)}
              className={`
                flex flex-row items-center justify-center
                gap-[6.4px] md:gap-[8px]
                w-[106.6px] md:w-[135px]
                h-[40px] md:h-[50px]
                px-[12.8px] md:px-[16px]
                py-[8px] md:py-[10px]
                rounded-[6px] flex-none transition-none
                ${isActive ? "bg-[#1463FF]" : "bg-[#0C1F56]"}
              `}
            >
              <div className="relative w-[16px] md:w-[20px] h-[16px] md:h-[20px] flex items-center justify-center">
                <Image
                  src={isActive ? item.activeIcon : item.inactiveIcon}
                  alt={item.label}
                  width={16}
                  height={16}
                  className="md:w-[20px] md:h-[20px] object-contain"
                />
              </div>
              <span
                className={`
                  font-manrope whitespace-nowrap
                  text-[10px] md:text-[12px]
                  leading-[16px] md:leading-[19px]
                  tracking-[0.02em]
                  ${isActive ? "font-bold text-white" : "font-semibold text-[#D2DCF7]"}
                `}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
