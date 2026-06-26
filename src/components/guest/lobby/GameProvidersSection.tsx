import Image from "next/image";
import ProviderCard from "./ProviderCard";
import { providers } from "@/data/providers";

export default function GameProvidersSection() {
  return (
    <section className="w-full flex flex-col gap-5">
      {/* Header */}

      <div className="flex items-center justify-between h-auto md:h-[30px]">
        <div className="flex items-center gap-2 md:gap-3">
          <Image src="/svg/game/joystick.svg" alt="icon" width={18} height={18} className="md:w-[30px] md:h-[30px]" />

          <h2 className="text-white font-jost font-extrabold text-[16px] md:text-[20px] tracking-[0.01em] uppercase">
            GAME PROVIDERS (34)
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <button className="text-[#D2DCF7] text-[12px] font-bold tracking-[0.02em]">
            View all
          </button>

          <div className="hidden md:flex gap-2">
            {/* Previous */}
            <button className="w-[30px] h-[30px] rounded-[4px] bg-[#112F82] opacity-40 flex items-center justify-center hover:opacity-100 transition-opacity">
              <Image
                src="/svg/game/left.svg"
                alt="Previous"
                width={6}
                height={10}
              />
            </button>

            {/* Next */}
            <button className="w-[30px] h-[30px] rounded-[4px] bg-[#112F82] opacity-40 flex items-center justify-center hover:opacity-100 transition-opacity">
              <Image
                src="/svg/game/right.svg"
                alt="Next"
                width={6}
                height={10}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Providers */}

      <div className="flex gap-3 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
        {providers.map((provider, index) => (
          <ProviderCard
            key={index}
            logo={provider.logo}
            games={provider.games}
          />
        ))}
      </div>
    </section>
  );
}
