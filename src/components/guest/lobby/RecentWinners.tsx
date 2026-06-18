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
      <div className="flex items-center gap-3 h-[30px]">
        <Image
          src="/svg/game/trophy.svg"
          alt="winners"
          width={30}
          height={30}
        />
        <h2 className="text-white font-jost font-extrabold text-[20px] tracking-[0.01em] uppercase">
          RECENT WINNERS
        </h2>
      </div>

      {/* Table */}
      <div className="flex flex-col gap-2">
        {/* Column headers */}
        <div className="flex justify-between items-center px-6 h-[20px]">
          <span className="text-white font-jost font-bold text-[14px] uppercase tracking-[0.02em]">
            Game
          </span>
          <div className="flex gap-3 w-[624px]">
            <span className="text-white font-jost font-bold text-[14px] uppercase tracking-[0.02em] w-[300px]">
              Username
            </span>
            <span className="text-white font-jost font-bold text-[14px] uppercase tracking-[0.02em] w-[150px]">
              Time
            </span>
            <span className="text-white font-jost font-bold text-[14px] uppercase tracking-[0.02em] w-[150px] text-right">
              Payout
            </span>
          </div>
        </div>

        {/* Rows */}
        {winners.map((w, i) => (
          <div
            key={i}
            className="flex justify-between items-center px-6 h-[60px] bg-[#0C1F56] rounded-[8px]"
          >
            <div className="flex items-center gap-3">
              <Image
                src={w.image}
                alt={w.game}
                width={22}
                height={30}
                className="rounded-[1.8px] object-cover flex-shrink-0"
              />
              <span className="text-white font-manrope font-semibold text-[14px] tracking-[0.02em]">
                {w.game}
              </span>
            </div>
            <div className="flex gap-3 w-[624px]">
              <span className="text-white font-manrope font-semibold text-[14px] tracking-[0.02em] w-[300px]">
                {w.user}
              </span>
              <span className="text-white font-manrope font-semibold text-[14px] tracking-[0.02em] w-[150px]">
                {w.time}
              </span>
              <span
                className="font-manrope font-semibold text-[14px] tracking-[0.02em] w-[150px] text-right"
                style={{ color: w.color }}
              >
                {w.payout}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
