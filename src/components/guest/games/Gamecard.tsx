import Image from "next/image";
import { GameCardProp } from "@/types/games/GameCardsProp";

export default function GameCard({ image, title }: GameCardProp) {
  return (
    <div className="group relative w-[121.6px] md:w-[152px] h-[160px] md:h-[200px] flex-shrink-0 rounded-[9.6px] md:rounded-[12px] overflow-hidden cursor-pointer">
      {/* Background Image */}
      <Image src={image} alt={title} fill className="object-cover" />

      {/* Heart */}
      <button className="absolute top-[12px] right-[14px] z-20">
        <Image
          src="/svg/game/heart.svg"
          alt="Favorite"
          width={24}
          height={24}
        />
      </button>

      {/* Hover Overlay */}

      <div className="absolute inset-0 bg-black/50 backdrop-blur-[5px] opacity-0 group-hover:opacity-100 transition-all duration-300" />

      {/* Play Button */}

      <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[48px] h-[48px] rounded-full bg-[#FFC83D] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
        <Image src="/svg/game/play.svg" alt="Play" width={12} height={14} />
      </button>
    </div>
  );
}
