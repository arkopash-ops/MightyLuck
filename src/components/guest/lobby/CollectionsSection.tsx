import Image from "next/image";

const collections = [
  { title: "MYTHOLOGY", icon: "/image/collection/golden-medusa.png" },
  { title: "FRUITS", icon: "/image/collection/golden-pineapple.png" },
  { title: "ANIMALS", icon: "/image/collection/golden-cat.png" },
  { title: "ASIA", icon: "/image/collection/golden-fan.png" },
];

export default function CollectionsSection() {
  return (
    <section className="w-full flex flex-col gap-5">
      {/* Header */}
      <div className="flex items-center justify-between h-[30px]">
        <div className="flex items-center gap-3">
          <Image src="/svg/game/collection.svg" alt="collections" width={30} height={30} />
          <h2 className="text-white font-jost font-extrabold text-[20px] leading-[29px] tracking-[0.01em] uppercase">
            COLLECTIONS (17)
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <button className="text-[#D2DCF7] font-manrope font-semibold text-[12px] leading-[16px] tracking-[0.02em]">
            View all
          </button>
          <div className="flex gap-2">
            <button className="w-[30px] h-[30px] rounded-[4px] bg-[#112F82] opacity-40 flex items-center justify-center">
              <Image src="/svg/game/left.svg" alt="prev" width={6} height={10} />
            </button>
            <button className="w-[30px] h-[30px] rounded-[4px] bg-[#112F82] flex items-center justify-center">
              <Image src="/svg/game/right.svg" alt="next" width={6} height={10} />
            </button>
          </div>
        </div>
      </div>

      {/* Cards row */}
      <div className="flex gap-3">
        {collections.map((col) => (
          <div
            key={col.title}
            className="flex-1 h-[100px] rounded-[12px] flex items-center gap-3 px-3 pr-6 cursor-pointer bg-[#0C1F56] hover:bg-[#173EAD] transition-colors duration-200"
          >
            {/* Icon box */}
            <div className="relative w-[76px] h-[76px] rounded-[8px] bg-[#0E1B3D] flex-shrink-0 overflow-hidden flex items-center justify-center">
              <div className="absolute w-[70px] h-[70px] rounded-full bg-[#1463FF] blur-[22px]" />
              <Image
                src={col.icon}
                alt={col.title}
                width={71}
                height={76}
                className="relative z-10 object-contain"
              />
            </div>

            {/* Title */}
            <span className="text-white font-jost font-extrabold text-[22px] leading-[32px] tracking-[0.01em] flex-1 text-center">
              {col.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
