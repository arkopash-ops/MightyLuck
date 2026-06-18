import { GamesRowProps } from "@/types/games/GamesRowProps";
import GameCard from "./Gamecard";
import { RefObject } from "react";

interface GamesRowProps2 extends GamesRowProps {
  scrollRef: RefObject<HTMLDivElement | null>;
}

export default function GamesRow({ games, scrollRef }: GamesRowProps2) {
  return (
    <div
      ref={scrollRef}
      className="w-full h-[200px] flex gap-[12px] overflow-x-auto scroll-smooth"
      style={{ scrollbarWidth: "none" }}
    >
      {games.map((game) => (
        <GameCard key={game.id} image={game.image} title={game.title} />
      ))}
    </div>
  );
}
