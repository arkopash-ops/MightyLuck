import Image from "next/image";

const winners = [
  {
    game: "Sweet Bonanza Super Scatter",
    image: "/image/games/originals/pandariffic.png",
    user: "Alb****",
    time: "14:16 PM",
    payout: "$126.1",
    color: "#00DD29",
  },
  {
    game: "Honey Money Multiplier",
    image: "/image/games/slots/honey-money-multiplier.png",
    user: "tra****",
    time: "14:16 PM",
    payout: "$15.2",
    color: "#00DD29",
  },
  {
    game: "Dragon Tiger",
    image: "/image/games/table/dragon-tiger.png",
    user: "Hid******",
    time: "14:15 PM",
    payout: "$77.08",
    color: "#00DD29",
  },
  {
    game: "Elven Fortune",
    image: "/image/games/originals/elven-fortune.png",
    user: "Gin***",
    time: "14:15 PM",
    payout: "$0.00",
    color: "#7795E8",
  },
  {
    game: "Honey Money Multiplier",
    image: "/image/games/slots/honey-money-multiplier.png",
    user: "Tra****",
    time: "14:15 PM",
    payout: "$11.23",
    color: "#00DD29",
  },
  {
    game: "XO Paradise",
    image: "/image/games/originals/xo-paradise.png",
    user: "Amr******",
    time: "14:15 PM",
    payout: "$67.88",
    color: "#00DD29",
  },
];

export default function RecentWinners() {
  return (
    <section className="w-full flex flex-col gap-5">
      {/* Header */}
      <div className="flex items-center gap-2 md:gap-3">
        <Image
          src="/svg/game/trophy.svg"
          alt="winners"
          width={30}
          height={30}
          className="w-[22px] h-[22px] md:w-[30px] md:h-[30px]"
        />

        <h2 className="font-jost font-extrabold uppercase tracking-[0.01em] text-white text-[16px] md:text-[18px] lg:text-[20px]">
          RECENT WINNERS
        </h2>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        {/* Desktop Figma width */}
        <div className="min-w-[700px] lg:min-w-[1136px] flex flex-col gap-2">
          {/* Header Row */}
          <div className="flex justify-between items-center px-4 lg:px-6 h-[20px]">
            <div className="w-[220px]">
              <span className="font-jost font-bold uppercase tracking-[0.02em] text-white text-[12px] lg:text-[14px]">
                Game
              </span>
            </div>

            <div className="flex w-[420px] md:w-[520px] lg:w-[624px]">
              <div className="w-[180px] lg:w-[300px]">
                <span className="font-jost font-bold uppercase tracking-[0.02em] text-white text-[12px] lg:text-[14px]">
                  Username
                </span>
              </div>

              <div className="w-[100px] lg:w-[150px]">
                <span className="font-jost font-bold uppercase tracking-[0.02em] text-white text-[12px] lg:text-[14px]">
                  Time
                </span>
              </div>

              <div className="w-[100px] lg:w-[150px] text-right">
                <span className="font-jost font-bold uppercase tracking-[0.02em] text-white text-[12px] lg:text-[14px]">
                  Payout
                </span>
              </div>
            </div>
          </div>

          {/* Rows */}
          {winners.map((w, i) => (
            <div
              key={i}
              className="
                flex
                justify-between
                items-center

                px-4
                lg:px-6

                py-3
                lg:py-[12px]

                bg-[#0C1F56]
                rounded-[8px]

                min-h-[52px]
                lg:h-[60px]
              "
            >
              {/* Game */}
              <div className="w-[220px] flex items-center gap-2 lg:gap-3">
                <Image
                  src={w.image}
                  alt={w.game}
                  width={22}
                  height={30}
                  className="
                    w-[18px]
                    h-[24px]

                    lg:w-[22px]
                    lg:h-[30px]

                    rounded-[2px]
                    object-cover
                    flex-shrink-0
                  "
                />

                <span
                  className="
                  text-white
                  font-manrope
                  font-semibold

                  text-[12px]
                  lg:text-[14px]

                  leading-[19px]
                  tracking-[0.02em]

                  truncate
                "
                >
                  {w.game}
                </span>
              </div>

              {/* Right side */}
              <div className="flex w-[420px] md:w-[520px] lg:w-[624px]">
                <div className="w-[180px] lg:w-[300px]">
                  <span className="text-white font-manrope font-semibold text-[12px] lg:text-[14px]">
                    {w.user}
                  </span>
                </div>

                <div className="w-[100px] lg:w-[150px]">
                  <span className="text-white font-manrope font-semibold text-[12px] lg:text-[14px]">
                    {w.time}
                  </span>
                </div>

                <div className="w-[100px] lg:w-[150px] text-right">
                  <span
                    className="font-manrope font-semibold text-[12px] lg:text-[14px]"
                    style={{ color: w.color }}
                  >
                    {w.payout}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
