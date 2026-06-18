import { SectionHeaderProps } from "@/types/games/SectionHeaderProps";
import Image from "next/image";

export default function SectionHeader({
  icon,
  title,
  count,
}: SectionHeaderProps) {
  return (
    <div className="w-[1136px] h-[30px] flex items-center justify-between">
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
          {/* Previous */}
          <button className="w-[30px] h-[30px] rounded-[4px] bg-[#112F82] opacity-40 flex items-center justify-center">
            <Image
              src="/svg/game/left.svg"
              alt="Previous"
              width={6}
              height={10}
            />
          </button>

          {/* Next */}
          <button className="w-[30px] h-[30px] rounded-[4px] bg-[#112F82] flex items-center justify-center">
            <Image src="/svg/game/right.svg" alt="Next" width={6} height={10} />
          </button>
        </div>
      </div>
    </div>
  );
}
