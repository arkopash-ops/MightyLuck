import Image from "next/image";

export default function LeftBanner() {
  return (
    <div className="relative w-[340px] h-[546px] rounded-l-[16px] overflow-hidden flex-shrink-0">
      {/* Background Image */}
      <div className="absolute left-[-3px] top-[-29px] w-[343px] h-[483px]">
        <Image
          src="/image/auth/3d-cartoon-king-character.png"
          alt="3d-cartoon-king-character"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute left-0 top-[327px] w-[340px] h-[219px] bg-[linear-gradient(180deg,rgba(0,12,36,0)_6.85%,#000C24_45.66%)]" />

      {/* Blue Glow */}
      <div className="absolute bottom-[-129px] left-1/2 -translate-x-1/2 w-[173px] h-[173px] rounded-full bg-[#1463FF] blur-[40px]" />

      {/* Content */}

      <div className="absolute top-[354px] left-1/2 -translate-x-1/2 w-[300px] flex flex-col items-center gap-5">
        <div className="flex flex-col items-center">
          <h1 className="text-white text-[52px] font-extrabold leading-[75px] tracking-[0.01em]">
            350%
          </h1>

          <div className="h-[37px] px-5 rounded-full bg-[#2BEA51] flex items-center justify-center">
            <span className="text-[12px] font-extrabold text-[#051D09]">
              WELCOME PACKAGE
            </span>
          </div>
        </div>

        <div className="w-[200px]">
          <p className="text-white text-[10px] font-bold text-center leading-[14px] tracking-[0.01em]">
            Boost your deposits with 350% in Bonus and 200 Free Spins
          </p>
        </div>
      </div>
    </div>
  );
}
