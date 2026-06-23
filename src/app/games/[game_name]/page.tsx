import {
  bonusGames,
  crashGames,
  originalsGames,
  slotGames,
  tableGames,
} from "@/data/games";

import { Game } from "@/types/games/Game";
import GamePage from "@/components/games/GamePage";
import { notFound } from "next/navigation";

const categories: Game[][] = [
  slotGames,
  originalsGames,
  crashGames,
  tableGames,
  bonusGames,
];

export default async function GameRoute({
  params,
}: {
  params: Promise<{ game_name: string }>;
}) {
  const { game_name } = await params;

  let game: Game | undefined;
  let relatedGames: Game[] = [];

  for (const category of categories) {
    const found = category.find((g) => g.title === game_name);
    if (found) {
      game = found;
      relatedGames = category.filter((g) => g.title !== game_name);
      break;
    }
  }

  if (!game) notFound();

  return <GamePage game={game} relatedGames={relatedGames} />;
}
