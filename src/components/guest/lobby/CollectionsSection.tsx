import Image from "next/image";

const collections = [
  { title: "MYTHOLOGY", icon: "/image/collection/golden-medusa.png" },
  { title: "FRUITS", icon: "/image/collection/golden-pineapple.png" },
  { title: "ANIMALS", icon: "/image/collection/golden-cat.png" },
  { title: "ASIA", icon: "/image/collection/golden-fan.png" },
];

export default function CollectionsSection() {
  return (
    <section className="w-full flex flex-col gap-3 md:gap-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[7.2px] md:gap-3">
          <Image
            src="/svg/game/collection.svg"
            alt="collections"
            width={18}
            height={18}
            className="w-[18px] h-[18px] md:w-[30px] md:h-[30px]"
          />

          <h2
            className="
          text-white
          font-jost
          font-extrabold
          uppercase
          tracking-[0.01em]
          text-[16px]
          leading-[23px]
          md:text-[20px]
          md:leading-[29px]
        "
          >
            COLLECTIONS (17)
          </h2>
        </div>

        <button
          className="
        font-manrope
        text-[12px]
        leading-[16px]
        font-bold
        text-[#FFBF1F]
        md:text-[#D2DCF7]
      "
        >
          View all
        </button>
      </div>

      {/* Cards */}
      <div
  className="
    flex
    gap-2
    overflow-x-auto
    scrollbar-hide
    snap-x
    snap-mandatory

    md:overflow-visible
    md:flex-nowrap
  "
>
        {collections.map((col) => (
          <div
  key={col.title}
  className="
    flex
    items-center
    gap-[7.2px]
    h-[60px]
    w-[183px]
    min-w-[183px]
    px-[14.4px]
    pl-[7.2px]
    rounded-[8px]
    bg-[#0C1F56]
    snap-start

    md:h-[100px]
    md:min-w-0
    md:flex-1
    md:w-auto
    md:px-6
    md:pl-3
    md:gap-3
    md:rounded-[12px]
  "
>
            {/* Icon */}
            <div
              className="
            relative
            w-[45.6px]
            h-[45.6px]
            rounded-[4.8px]
            bg-[#0E1B3D]
            overflow-hidden
            flex
            items-center
            justify-center
            shrink-0

            md:w-[76px]
            md:h-[76px]
            md:rounded-[8px]
          "
            >
              <div
                className="
              absolute
              w-[42px]
              h-[42px]
              rounded-full
              bg-[#1463FF]
              blur-[13px]

              md:w-[70px]
              md:h-[70px]
              md:blur-[22px]
            "
              />

              <Image
                src={col.icon}
                alt={col.title}
                width={47}
                height={44}
                className="relative z-10 object-contain md:w-[71px] md:h-[76px]"
              />
            </div>

            {/* Title */}
            <span
              className="
            flex-1
            text-center
            text-white
            font-jost
            font-extrabold
            tracking-[0.01em]

            text-[12px]
            leading-[17px]

            md:text-[22px]
            md:leading-[32px]
          "
            >
              {col.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
