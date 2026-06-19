import { bottomNavItems } from "@/data/bottomNavItems";
import Image from "next/image";

interface Props {
  onMenuClick: () => void;
}

export default function BottomNavbar({ onMenuClick }: Props) {
  return (
    <div className="md:hidden">
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[414px] h-[75px] px-[20px] py-[12px] bg-[#0C1F56] rounded-t-[16px] z-50 md:hidden">
        <div className="h-full flex items-center justify-between">
          <button
            onClick={onMenuClick}
            className="flex flex-col items-center justify-center gap-[2px]"
          >
            <div className="w-[30px] h-[30px] flex items-center justify-center">
              <Image
                src="/svg/navbar/menu.svg"
                alt="Menu"
                width={24}
                height={24}
              />
            </div>
            <span className="text-[14px] leading-[19px] font-bold tracking-[0.02em] text-[#D2DCF7]">
              Menu
            </span>
          </button>

          {bottomNavItems.map((item) => (
            <button
              key={item.label}
              className="flex flex-col items-center justify-center gap-[2px]"
            >
              <div className="w-[30px] h-[30px] flex items-center justify-center">
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={24}
                  height={24}
                />
              </div>

              <span className="text-[14px] leading-[19px] font-bold tracking-[0.02em] text-[#D2DCF7]">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
