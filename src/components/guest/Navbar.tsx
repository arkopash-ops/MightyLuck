import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full bg-[#0C1F56] overflow-hidden">
      <div className="max-w-[1440px] mx-auto h-[50px] md:h-[60px] px-5 md:px-6 flex items-center justify-between relative">
        {/* Ellipse 6 */}
        <div className="absolute left-[6px] top-[33px] w-[71.5px] h-[71.5px] md:left-[114px] md:top-[37px] md:w-[143px] md:h-[143px] bg-[#1463FF] blur-[12.5px] md:blur-[25px] rounded-full" />

        {/* Left Section */}
        <div className="relative z-10 flex items-center md:gap-[51px]">
          <div className="flex items-center gap-2 md:gap-[51px]">
            <button className="hidden md:block">
              <Image src="/svg/navbar/menu.svg" width={20.57} height={13.71} alt="menu" />
            </button>
            <Image src="/svg/navbar/horizontal-logo.svg" width={190} height={34.66} alt="horizontal logo" className="hidden md:block" />
            <Image src="/svg/navbar/mobile-logo.svg" width={44} height={30} alt="logo" className="block md:hidden" />
          </div>
          <div className="relative hidden md:block">
            <Image src="/svg/navbar/search.svg" width={16} height={15.99} alt="search" className="absolute left-5 top-1/2 -translate-y-1/2" />
            <input type="text" placeholder="What are you looking for?" className="w-[280px] h-[40px] rounded-[8px] bg-[#112F82] pl-[46px] pr-5 text-white placeholder:text-[#BBCAF3] text-[14px] font-semibold outline-none" />
          </div>
        </div>

        {/* Right Section */}
        <div className="relative z-10 flex items-center gap-[7.5px] md:gap-[10px]">
          <button className="h-[30px] md:h-[40px] px-[22.5px] md:px-[30px] rounded-[6px] md:rounded-[8px] bg-[#1463FF] text-white text-[10.5px] md:text-[14px] font-bold tracking-[0.02em]">
            Login
          </button>
          <button className="h-[30px] md:h-[40px] px-[22.5px] md:px-[30px] rounded-[6px] md:rounded-[8px] bg-[#FFC83D] text-[#1A1404] text-[10.5px] md:text-[14px] font-bold tracking-[0.02em]">
            Join
          </button>
        </div>
      </div>
    </header>
  );
}
