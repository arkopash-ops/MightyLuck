import { SectionHeaderProps } from "@/types/games/SectionHeaderProps";
import Image from "next/image";
import { RefObject } from "react";

interface SectionHeaderPropsExt extends SectionHeaderProps {
  scrollRef: RefObject<HTMLDivElement | null>;
}

const SCROLL_AMOUNT = 500;

export default function SectionHeader({
  icon,
  title,
  count,
  scrollRef,
}: SectionHeaderPropsExt) {
  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft +=
        dir === "right" ? SCROLL_AMOUNT : -SCROLL_AMOUNT;
    }
  };

  return (
    <div className="w-full h-[30px] flex items-center justify-between">
      {/* Left Side */}
      <div className="flex items-center gap-[12px]">
        <Image src={icon} alt={title} width={30} height={30} />
        <h2 className="text-white text-[20px] font-extrabold tracking-[0.01em]">
          {title}
          <span className="ml-1">({count.toLocaleString()})</span>
        </h2>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-[20px]">
        <button className="text-[#D2DCF7] text-[12px] font-semibold">
          View all
        </button>

        <div className="flex gap-[8px]">
          <button
            onClick={() => scroll("left")}
            className="w-[30px] h-[30px] rounded-[4px] bg-[#112F82] opacity-40 flex items-center justify-center hover:opacity-100 transition-opacity"
          >
            <Image
              src="/svg/game/left.svg"
              alt="Previous"
              width={6}
              height={10}
            />
          </button>

          <button
            onClick={() => scroll("right")}
            className="w-[30px] h-[30px] rounded-[4px] bg-[#112F82] flex items-center justify-center"
          >
            <Image src="/svg/game/right.svg" alt="Next" width={6} height={10} />
          </button>
        </div>
      </div>
    </div>
  );
}
