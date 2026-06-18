import { GamesRowProps } from "@/types/games/GamesRowProps";
import GameCard from "./Gamecard";

export default function GamesRow({ games }: GamesRowProps) {
  return (
    <div className="w-[1300px] h-[200px] flex gap-[12px] overflow-x-hidden">
      {games.map((game) => (
        <GameCard key={game.id} image={game.image} title={game.title} />
      ))}
    </div>
  );
}
