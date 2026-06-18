import Image from "next/image";
import { ProviderCardProps } from "../../../types/lobby/ProviderCardProps";

export default function ProviderCard({ logo, games }: ProviderCardProps) {
  return (
    <div className=" w-[152px] h-[100px] rounded-[12px] px-6 py-3 flex flex-col justify-center items-center gap-2 bg-[#0C1F56] cursor-pointer transition-all duration-300 hover:bg-[#173EAD] hover:scale-[1.02]">
      <div className="w-[80px] h-[40px] relative">
        <Image src={logo} alt="provider" fill className="object-contain" />
      </div>

      <p className="text-[#FFC83D] text-[10px] font-semibold font-manrope">
        {games} Games
      </p>
    </div>
  );
}
