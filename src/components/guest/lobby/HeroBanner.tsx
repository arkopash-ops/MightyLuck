import Image from "next/image";

export default function HeroBanner() {
  return (
    <section className="relative w-full h-[356px] rounded-[16px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/image/lobby/3d-cartoon-king-character-holding-a-gift-box.png"
        alt="Hero Banner"
        fill
        priority
        className="object-cover"
      />

      {/* Ellipse 9 - blue bottom left */}
      <div className="absolute w-[194px] h-[194px] left-[198px] top-[224px] rounded-full bg-[#103686] blur-[25px] z-[1]" />

      {/* Ellipse 7 - large dark left */}
      <div className="absolute w-[575px] h-[575px] left-[-161px] top-[-102px] rounded-full bg-[#06102B] blur-[75px] z-[1]" />

      {/* Ellipse 8 - small dark right */}
      <div className="absolute w-[129px] h-[129px] left-[1041px] top-[271px] rounded-full bg-[#010A25] blur-[25px] z-[1]" />

      {/* Content — left: 40px, top: calc(50% - 204px/2 + 25px) */}
      <div className="absolute left-[40px] top-[calc(50%-77px)] z-[3] flex flex-col gap-[24px]">
        {/* Text block */}
        <div className="flex flex-col gap-[4px] w-[457px]">
          <p className="font-jost font-medium text-[28px] leading-[40px] text-white">
            Get LUCKY with our exclusive
          </p>
          <h1 className="font-jost font-extrabold text-[48px] leading-[100%] text-white">
            250% WELCOME BONUS!
          </h1>
        </div>

        {/* Join button */}
        <button className="w-[110px] h-[40px] rounded-[8px] bg-[#FFBF1F] text-[#1A1404] font-manrope font-bold text-[14px] leading-[19px] tracking-[0.02em]">
          Join Now
        </button>
      </div>
    </section>
  );
}
