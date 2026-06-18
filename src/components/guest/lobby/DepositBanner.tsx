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
    <section className="relative w-[1136px] h-[100px] rounded-[16px] bg-[#0C1F56] overflow-hidden">
      {/* Ellipse 6 */}
      <div className="absolute w-[534px] h-[534px] left-1/2 -translate-x-1/2 top-[60px] rounded-full bg-[#1463FF] blur-[50px] opacity-80" />

      {/* Content */}
      <div className="relative z-[1] h-full flex items-center justify-between px-[40px]">
        {/* Title */}
        <h2 className="text-white font-extrabold text-[20px] leading-[29px]">
          Want to play? Deposit Now
        </h2>

        {/* Payment Icons */}
        <div className="flex items-center gap-[28px]">
          {icons.map((icon) => (
            <Image
              key={icon.name}
              src={`/svg/crypto/${icon.name}.svg`}
              alt={icon.name}
              width={icon.width}
              height={icon.height}
            />
          ))}
        </div>

        {/* Button */}
        <button className="w-[148px] h-[40px] rounded-[8px] bg-[#FFC83D] text-[#1A1404] text-[14px] font-bold tracking-[0.02em]">
          Join
        </button>
      </div>
    </section>
  );
}
