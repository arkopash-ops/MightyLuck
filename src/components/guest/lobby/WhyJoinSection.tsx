import Image from "next/image";
import FeatureCard from "./FeatureCard";
import { cards } from "@/data/WhyJoinSection";

export default function WhyJoinSection() {
  return (
    <section className="w-[1136px] flex flex-col gap-7">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/svg/game/hundred.svg" alt="icon" width={30} height={30} />

          <h2 className="text-white text-[20px] font-extrabold font-jost tracking-[0.01em] uppercase">
            WHY JOIN MIGHTY LUCK?
          </h2>
        </div>
      </div>

      {/* Cards */}
      <div className="flex gap-3">
        {cards.map((card) => (
          <FeatureCard
            key={card.title}
            title={card.title}
            description={card.description}
            image={card.image}
            rotate={card.rotate}
          />
        ))}
      </div>
    </section>
  );
}
