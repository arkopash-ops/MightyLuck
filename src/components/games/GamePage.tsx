"use client";

import Image from "next/image";
import { GamePageProps } from "@/types/games/GamePageProps";
import { useRouter } from "next/navigation";

export default function GamePage({ game, relatedGames }: GamePageProps) {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-[40px] w-full">
      <div className="flex flex-col gap-[20px] w-full">
        <div className="relative w-full h-[657px] rounded-[16px] overflow-hidden">
          <Image
            src="/image/games/gameplay.png"
            alt={game.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Info bar */}
        <div className="flex flex-row justify-between items-center px-[30px] py-[12px] bg-[#0C1F56] rounded-[16px] h-[100px]">
          <div className="flex flex-row items-center gap-[32px]">
            <div className="w-[80px] h-[40px] flex items-center justify-center">
              <span className="text-white text-xs font-bold opacity-60">
                BGaming
              </span>
            </div>

            <div className="w-0 h-[33px] border-l border-white/60" />
            <span className="font-jost font-bold text-[20px] text-white capitalize">
              {game.title.replace(/-/g, " ")}
            </span>
          </div>

          <div className="flex flex-row items-center gap-[40px]">
            {/* Icon buttons */}
            <div className="flex flex-row items-center gap-[24px]">
              <button className="w-[20px] h-[20px]">
                <Image
                  src="/svg/game/expand.svg"
                  alt="Favorite"
                  width={20}
                  height={20}
                />
              </button>

              <button className="w-[20px] h-[20px]">
                <Image
                  src="/svg/game/heart.svg"
                  alt="Favorite"
                  width={18}
                  height={16}
                />
              </button>
            </div>

            {/* Fun / Real Play toggle */}
            <div className="flex flex-row items-center gap-[8px]">
              <span className="font-manrope font-semibold text-[12px] text-[#A5B8EF]">
                Fun Play
              </span>
              <div className="flex flex-row justify-end items-center px-[3px] py-[3px] pl-[20px] bg-[#1463FF] rounded-[30px] w-[42px] h-[24px]">
                <div className="w-[18px] h-[18px] bg-white rounded-full" />
              </div>
              <span className="font-manrope font-bold text-[12px] text-white">
                Real Play
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Other games you might like */}

      {relatedGames.length > 0 && (
        <div className="flex flex-col gap-[20px] w-full">
          <div className="flex flex-row justify-between items-center w-full">
            <div className="flex flex-row items-center gap-[12px]">
              <Image
                src="/svg/game/thunder.svg"
                alt="icon"
                width={30}
                height={30}
              />
              <span className="font-jost font-extrabold text-[20px] tracking-[0.01em] text-white uppercase">
                Other Games You Might Like
              </span>
            </div>

            <div className="flex flex-row items-center gap-[12px]">
              <span className="font-manrope font-medium text-[12px] text-[#D2DCF7]">
                View all
              </span>
              <div className="hidden md:flex gap-[8px]">
                <button className="w-[30px] h-[30px] rounded-[4px] bg-[#112F82] opacity-40 flex items-center justify-center hover:opacity-100 transition-opacity">
                  <Image
                    src="/svg/game/left.svg"
                    alt="Previous"
                    width={6}
                    height={10}
                  />
                </button>
                <button className="w-[30px] h-[30px] rounded-[4px] bg-[#112F82] opacity-40 flex items-center justify-center hover:opacity-100 transition-opacity">
                  <Image
                    src="/svg/game/right.svg"
                    alt="Next"
                    width={6}
                    height={10}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Games row */}
          <div
            className="flex flex-row gap-[12px] overflow-x-auto"
            style={{ scrollbarWidth: "none" }}
          >
            {relatedGames.map((g) => (
              <div
                key={g.id}
                onClick={() => router.push(`/games/${g.title}`)}
                className="group relative w-[152px] h-[200px] flex-shrink-0 rounded-[12px] overflow-hidden cursor-pointer"
              >
                <Image
                  src={g.image}
                  alt={g.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50 backdrop-blur-[5px] opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[48px] h-[48px] rounded-full bg-[#FFC83D] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                  <Image
                    src="/svg/game/play.svg"
                    alt="Play"
                    width={12}
                    height={14}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
