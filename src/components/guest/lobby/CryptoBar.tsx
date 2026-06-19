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

export default function CryptoBar() {
  return (
    <div className="relative isolate overflow-hidden w-full max-w-[1136px] h-[100px] border-b border-[#112F82] px-[20px] md:px-[40px] flex items-center justify-center">
      {/* Glow */}
      <div className="absolute left-1/2 top-[77px] -translate-x-1/2 w-[390px] h-[390px] rounded-full bg-[#1463FF] blur-[50px] z-0" />

      {/* Icons */}
      <div className="relative z-10 flex flex-wrap justify-center items-center content-center gap-y-[16px] gap-x-[31px] w-full max-w-[334px] md:max-w-none md:flex-nowrap md:gap-[28px]">
        {icons.map((icon) => (
          <Image
            key={icon.name}
            src={`/svg/crypto/${icon.name}.svg`}
            alt={icon.name}
            width={icon.width}
            height={icon.height}
            className="shrink-0"
          />
        ))}
      </div>
    </div>
  );
}
