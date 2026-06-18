import Image from "next/image";

export default function HeroBanner() {
  return (
    <section className="relative w-full h-[356px] rounded-[20px] overflow-hidden ">
      {/* Background Image */}
      <Image
        src="/image/lobby/3d-cartoon-king-character-holding-a-gift-box.png"
        alt="Hero Banner"
        fill
        priority
        className="object-cover rounded-[20px]"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-[#06102B] via-[#06102bcc] to-transparent z-1" />

      {/* ellipse 7 */}
      <div className="absolute w-[575px] h-[575px] left-[-161px] top-[-102px] rounded-full bg-[#06102B] blur-[75px] z-[1]" />

      {/* ellipse 8 */}
      <div className="absolute w-[129px] h-[129px] left-[1041px] top-[271px] rounded-full bg-[#010A25] blur-[25px] z-[1]" />

      {/* ellipse 9 */}
      <div className="absolute w-[194px] h-[194px] top-[224px] left-[198px] rounded-full bg-[#103686] blur-[25px] z-[1]" />

      {/* Content */}
      <div className="absolute left-[40px] top-[100px] z-[3] flex flex-col gap-6">
        <div>
          <p className="text-[28px] font-medium text-white leading-[40px]">
            Get LUCKY with our exclusive
          </p>

          <h1 className="text-[48px] font-extrabold leading-[100%] text-white max-w-[457px]">
            250% WELCOME BONUS!
          </h1>
        </div>

        <button className="w-[110px] h-[40px] rounded-[8px] bg-[#FFBF1F] text-[#1A1404] text-[14px] font-bold">
          Join
        </button>
      </div>
    </section>
  );
}
