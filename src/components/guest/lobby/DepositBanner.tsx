import Image from "next/image";

const icons = [
  { name: "bitcoin", width: 13.38, height: 18.39 },
  { name: "ether", width: 11.3, height: 18.09 },
  { name: "tether", width: 19.09, height: 17.73 },
  { name: "tron", width: 18.1, height: 19.05 },
  { name: "xrp", width: 21.4, height: 17.7 },
  { name: "binance", width: 18.14, height: 18.14 },
  { name: "dogecoin", width: 15, height: 16.36 },
  { name: "litecoin", width: 14.09, height: 17.27 },
  { name: "catcoin", width: 17.09, height: 18.56 },
  { name: "sandcoin", width: 14.2, height: 17.52 },
  { name: "polygon", width: 19.89, height: 17.52 },
];

export default function DepositBanner() {
  return (
    <section className="relative w-full h-auto md:h-[100px] rounded-[10px] md:rounded-[16px] bg-[#0C1F56] overflow-hidden">
      {/* Ellipse 6 */}
      <div className="absolute w-[416px] h-[416px] md:w-[534px] md:h-[534px] left-1/2 -translate-x-1/2 top-[95px] md:top-[60px] rounded-full bg-[#1463FF] blur-[39px] md:blur-[50px]" />

      {/* Mobile: stacked layout */}
      <div className="relative z-[1] flex flex-col md:hidden items-center gap-5 px-5 py-5">
        <h2 className="text-white font-jost font-extrabold text-[18px] leading-[26px] text-center">
          Want to play? Deposit Now
        </h2>

        <div className="flex flex-wrap justify-around items-center gap-y-4 gap-x-2 w-full">
          {icons.map((icon) => (
            <Image key={icon.name} src={`/svg/crypto/${icon.name}.svg`} alt={icon.name} width={icon.width} height={icon.height} />
          ))}
        </div>

        <button className="w-[148px] h-[40px] rounded-[8px] bg-[#FFC83D] text-[#1A1404] text-[14px] font-bold tracking-[0.02em]">
          Deposit Now
        </button>
      </div>

      {/* Desktop: single row */}
      <div className="relative z-[1] h-full hidden md:flex items-center justify-between px-[40px]">
        <h2 className="text-white font-jost font-extrabold text-[20px] leading-[29px]">
          Want to play? Deposit Now
        </h2>

        <div className="flex items-center gap-[28px]">
          {icons.map((icon) => (
            <Image key={icon.name} src={`/svg/crypto/${icon.name}.svg`} alt={icon.name} width={icon.width} height={icon.height} />
          ))}
        </div>
        
        <button className="w-[148px] h-[40px] rounded-[8px] bg-[#FFC83D] text-[#1A1404] text-[14px] font-bold tracking-[0.02em]">
          Deposit Now
        </button>
      </div>
    </section>
  );
}
