import Image from "next/image";

export default function HeroBanner() {
  return (
    <section className="relative w-full h-[170px] md:h-[356px] rounded-[10px] md:rounded-[16px] overflow-hidden">
      <Image
        src="/image/lobby/3d-cartoon-king-character-holding-a-gift-box.png"
        alt="Hero Banner"
        fill
        priority
        className="object-cover"
      />

      {/* Ellipse 7 */}
      <div className="absolute w-[226px] h-[226px] md:w-[575px] md:h-[575px] left-[-50px] md:left-[-161px] top-[-38px] md:top-[-102px] rounded-full bg-[#03123C] md:bg-[#06102B] blur-[29px] md:blur-[75px] z-[1]" />

      {/* Ellipse 8 */}
      <div className="absolute hidden md:block w-[129px] h-[129px] left-[1041px] top-[271px] rounded-full bg-[#010A25] blur-[25px] z-[1]" />

      {/* Ellipse 9 */}
      <div className="absolute hidden md:block w-[194px] h-[194px] left-[198px] top-[224px] rounded-full bg-[#103686] blur-[25px] z-[1]" />

      {/* Content */}
      <div className="absolute left-[19px] md:left-[40px] top-[calc(50%-56px)] md:top-[calc(50%-77px)] z-[3] flex flex-col gap-[16px] md:gap-[24px]">
        <div className="flex flex-col gap-[1.93px] md:gap-[4px] w-[220px] md:w-[457px]">
          <p className="font-jost font-medium text-[14px] md:text-[28px] leading-[20px] md:leading-[40px] text-white">
            Get <span className="text-[#FFD85A] font-bold">LUCKY</span> with our exclusive
          </p>

          <h1 className="font-jost font-extrabold text-[20px] md:text-[48px] leading-[100%] text-white">
            250% WELCOME BONUS!
          </h1>

        </div>
        
        <button className="w-[95px] md:w-[110px] h-[34px] md:h-[40px] rounded-[6px] md:rounded-[8px] bg-[#FFBF1F] text-[#1A1404] font-manrope font-bold text-[12px] md:text-[14px] leading-[17px] md:leading-[19px] tracking-[0.02em]">
          Join Now
        </button>
      </div>
    </section>
  );
}
