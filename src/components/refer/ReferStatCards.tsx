const stats = [
  { value: "$2.5 K", label: "Claim By the Most Active Referrer" },
  { value: "500+", label: "Players are already earning with us" },
  { value: "19,000", label: "Free Spins received by friends" },
];

export default function ReferStatCards() {
  return (
    <div className="hidden md:flex gap-[12px] w-full">
      {stats.map((s, i) => (
        <div
          key={i}
          className="flex-1 bg-[#0C1F56] rounded-[16px] p-[24px] flex flex-col gap-[8px] items-center justify-center h-[136px]"
        >
          <span className="text-white font-extrabold text-[40px] leading-[58px] text-center tracking-[0.01em]">
            {s.value}
          </span>
          <span className="text-[#A5B8EF] font-semibold text-[16px] leading-[140%] text-center tracking-[0.02em]">
            {s.label}
          </span>
        </div>
      ))}
    </div>
  );
}
