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
  return (
    <section className="w-[1300px] flex flex-col gap-[20px]">
      <SectionHeader icon={icon} title={title} count={count} />

      <GamesRow games={games} />
    </section>
  );
}
