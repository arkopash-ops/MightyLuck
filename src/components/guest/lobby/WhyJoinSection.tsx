import Image from "next/image";
import FeatureCard from "./FeatureCard";
import { cards } from "@/data/WhyJoinSection";

export default function WhyJoinSection() {
  return (
    <section className="w-full flex flex-col gap-[28px]">
      {/* Header */}
      <div className="flex items-center gap-2 md:gap-3 h-[30px]">
        <Image src="/svg/game/hundred.svg" alt="icon" width={18} height={18} className="md:w-[30px] md:h-[30px]" />
        <h2 className="font-jost font-extrabold text-[16px] md:text-[20px] leading-[29px] tracking-[0.01em] text-white uppercase">
          WHY JOIN MIGHTY LUCK?
        </h2>
      </div>

      {/* Cards */}
      <div className="flex gap-3 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
        {cards.map((card) => (
          <FeatureCard
            key={card.title}
            title={card.title}
            description={card.description}
            image={card.image}
            imgLeft={card.imgLeft}
            imgTop={card.imgTop}
            imgWidth={card.imgWidth}
            imgHeight={card.imgHeight}
            imgRotate={card.imgRotate}
            descWeight={card.descWeight}
          />
        ))}
      </div>
    </section>
  );
}
