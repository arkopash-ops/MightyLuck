import Image from "next/image";
import { ProviderCardProps } from "@/types/lobby/ProviderCardProps";

export default function ProviderCard({ logo, games }: ProviderCardProps) {
  return (
    <div className="w-[88px] h-[60px] md:w-[152px] md:h-[100px] rounded-[8px] flex-none md:rounded-[12px] px-[14.4px] py-[7.2px] md:px-6 md:py-3 flex flex-col justify-center items-center gap-[4.8px] md:gap-2 bg-[#112F82] cursor-pointer transition-all duration-300 hover:bg-[#173EAD] hover:scale-[1.02]">
      <div className="w-[48px] h-[24px] md:w-[80px] md:h-[40px] relative">
        <Image src={logo} alt="provider" fill className="object-contain" />
      </div>

      <p className="text-[#FFC83D] text-[8px] md:text-[10px] font-semibold font-manrope">
        {games} Games
      </p>
    </div>
  );
}
