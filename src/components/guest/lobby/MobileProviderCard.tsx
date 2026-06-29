import Image from "next/image";
import { ProviderCardProps } from "../../../types/lobby/ProviderCardProps";

export default function MobileProviderCard({ logo, games }: ProviderCardProps) {
  return (
    <div className="flex md:hidden w-[88px] h-[60px] rounded-[8px] px-[14.4px] py-[7.2px] flex-col justify-center items-center gap-[4.8px] bg-[#0C1F56] cursor-pointer">
      <div className="w-[48px] h-[24px] relative">
        <Image src={logo} alt="provider" fill className="object-contain" />
      </div>

      <p className="text-[#FFC83D] text-[8px] font-semibold font-manrope">
        {games} Games
      </p>
    </div>
  );
}
