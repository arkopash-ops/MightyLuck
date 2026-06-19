import { winners } from "@/data/recentWinners";
import Image from "next/image";

export default function RecentWinners() {
  return (
    <section className="w-full flex flex-col gap-5">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Image
          src="/svg/game/trophy.svg"
          alt="Recent winners"
          width={30}
          height={30}
          className="w-[22px] h-[22px] md:w-[30px] md:h-[30px]"
        />

        <h2 className="font-jost font-extrabold uppercase tracking-[0.01em] text-white text-[16px] md:text-[20px]">
          RECENT WINNERS
        </h2>
      </div>

      {/* Table wrapper */}
      <div className="overflow-x-auto">
        <div className="min-w-[700px] lg:min-w-[1136px] flex flex-col gap-2">
          {/* Header Row */}
          <div className="flex justify-between items-center px-4 lg:px-6">
            <span className="w-[220px] text-white font-bold text-[12px] lg:text-[14px] uppercase">
              Game
            </span>

            <div className="flex w-[420px] md:w-[520px] lg:w-[624px]">
              <span className="w-[180px] lg:w-[300px] text-white font-bold text-[12px] lg:text-[14px] uppercase">
                Username
              </span>

              <span className="w-[100px] lg:w-[150px] text-white font-bold text-[12px] lg:text-[14px] uppercase">
                Time
              </span>

              <span className="w-[100px] lg:w-[150px] text-white font-bold text-[12px] lg:text-[14px] uppercase text-right">
                Payout
              </span>
            </div>
          </div>

          {/* Rows */}
          {winners.map((w, idx) => (
            <div
              key={`${w.game}-${w.user}-${idx}`}
              className="flex justify-between items-center px-4 lg:px-6 py-3 bg-[#0C1F56] rounded-[8px] min-h-[60px]"
            >
              {/* Game */}
              <div className="w-[220px] flex items-center gap-3">
                <Image
                  src={w.image}
                  alt={w.game}
                  width={22}
                  height={30}
                  className="rounded-[2px] object-cover"
                  unoptimized
                />

                <span className="text-white font-semibold text-[12px] lg:text-[14px] truncate">
                  {w.game}
                </span>
              </div>

              {/* Right columns */}
              <div className="flex w-[420px] md:w-[520px] lg:w-[624px]">
                <span className="w-[180px] lg:w-[300px] text-white font-semibold text-[12px] lg:text-[14px]">
                  {w.user}
                </span>

                <span className="w-[100px] lg:w-[150px] text-white font-semibold text-[12px] lg:text-[14px]">
                  {w.time}
                </span>

                <span
                  className="w-[100px] lg:w-[150px] text-right font-semibold text-[12px] lg:text-[14px]"
                  style={{ color: w.color }}
                >
                  {w.payout}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
