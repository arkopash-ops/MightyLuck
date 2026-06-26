"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { GamePageProps } from "@/types/games/GamePageProps";

export default function GamePage({ game, relatedGames }: GamePageProps) {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-8 md:gap-10 w-full">
      {/* Gameplay Section */}
      <div className="flex flex-col gap-4 md:gap-5 w-full">
        {/* Gameplay Image */}
        <div className="relative w-full h-[220px] sm:h-[300px] md:h-[500px] lg:h-[657px] rounded-[12px] md:rounded-[16px] overflow-hidden">
          <Image
            src="/image/games/gameplay.png"
            alt={game.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1136px"
            className="object-cover object-center"
          />
        </div>

        {/* Info Bar */}
        <div className="bg-[#0C1F56] rounded-xl md:rounded-2xl px-4 py-4 md:px-[30px] md:py-[12px] flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:h-[100px]">
          {/* Left */}
          <div className="flex items-center gap-4 md:gap-8 w-full md:w-auto">
            <div className="w-[60px] h-[30px] md:w-[80px] md:h-[40px] flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xs font-bold opacity-60">
                BGaming
              </span>
            </div>

            <div className="hidden md:block w-px h-[33px] bg-white/60" />

            <span className="font-jost font-bold text-base md:text-[20px] text-white capitalize">
              {game.title.replace(/-/g, " ")}
            </span>
          </div>

          {/* Right */}
          <div className="flex w-full md:w-auto justify-between md:justify-end items-center gap-6 md:gap-10">
            {/* Icons */}
            <div className="flex items-center gap-5 md:gap-6">
              <button>
                <Image
                  src="/svg/game/expand.svg"
                  alt="Expand"
                  width={20}
                  height={20}
                />
              </button>

              <button>
                <Image
                  src="/svg/game/heart.svg"
                  alt="Favorite"
                  width={18}
                  height={16}
                />
              </button>
            </div>

            {/* Toggle */}
            <div className="flex items-center gap-2">
              <span className="font-manrope font-semibold text-[12px] text-[#A5B8EF] whitespace-nowrap">
                Fun Play
              </span>

              <div className="flex justify-end items-center p-[3px] pl-[20px] bg-[#1463FF] rounded-full w-[42px] h-[24px]">
                <div className="w-[18px] h-[18px] rounded-full bg-white" />
              </div>

              <span className="font-manrope font-bold text-[12px] text-white whitespace-nowrap">
                Real Play
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Related Games */}
      {relatedGames.length > 0 && (
        <div className="flex flex-col gap-5">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="/svg/game/party.svg"
                alt="icon"
                width={29.99}
                height={30}
              />

              <span className="font-jost font-extrabold text-base md:text-[20px] uppercase tracking-[0.01em] text-white">
                Other Games You Might Like
              </span>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <span className="font-manrope font-medium text-[12px] text-[#D2DCF7]">
                View all
              </span>

              <div className="flex gap-2">
                <button className="w-[30px] h-[30px] rounded bg-[#112F82] opacity-40 hover:opacity-100 transition">
                  <Image
                    src="/svg/game/left.svg"
                    alt="Previous"
                    width={6}
                    height={10}
                    className="mx-auto"
                  />
                </button>

                <button className="w-[30px] h-[30px] rounded bg-[#112F82] opacity-40 hover:opacity-100 transition">
                  <Image
                    src="/svg/game/right.svg"
                    alt="Next"
                    width={6}
                    height={10}
                    className="mx-auto"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Games */}
          <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2 scrollbar-hide">
            {relatedGames.map((g) => (
              <div
                key={g.id}
                onClick={() => router.push(`/games/${g.title}`)}
                className="group relative w-[31%] md:w-[152px] aspect-[152/200] flex-shrink-0 rounded-xl overflow-hidden cursor-pointer snap-start"
              >
                <Image
                  src={g.image}
                  alt={g.title}
                  fill
                  className="object-cover"
                />

                {/* Desktop Hover Overlay */}
                <div className="hidden md:block absolute inset-0 bg-black/50 backdrop-blur-[5px] opacity-0 group-hover:opacity-100 transition-all duration-300" />

                {/* Desktop Play Button */}
                <button className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#FFC83D] items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
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
