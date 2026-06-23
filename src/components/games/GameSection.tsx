"use client";
import { useRef } from "react";
import { GamesRowProps } from "@/types/games/GamesRowProps";
import { SectionHeaderProps } from "@/types/games/SectionHeaderProps";
import GamesRow from "./GamesRow";
import SectionHeader from "./SectionHeader";

interface GameSectionProp extends SectionHeaderProps, GamesRowProps {}

export default function GameSection({
  icon,
  title,
  count,
  games,
}: GameSectionProp) {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full flex flex-col gap-[20px]">
      <SectionHeader
        icon={icon}
        title={title}
        count={count}
        scrollRef={scrollRef}
      />
      <GamesRow games={games} scrollRef={scrollRef} />
    </section>
  );
}
