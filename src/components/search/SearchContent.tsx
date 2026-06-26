"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import Image from "next/image";

import GameProvidersSection from "../guest/lobby/GameProvidersSection";
import { allGames, popularGames } from "@/data/games";
import GameCard from "../games/Gamecard";

export default function SearchContent() {
  const [query, setQuery] = useState("");

  const filteredGames = useMemo(() => {
    if (!query.trim()) return [];
    return allGames.filter(
      (game) =>
        game.name.toLowerCase().includes(query.toLowerCase()) ||
        game.title.toLowerCase().includes(query.toLowerCase()),
    );
  }, [query]);

  return (
    <section className="w-[808px] flex flex-col">
      {/* Search Bar */}
      <div className="w-full h-[50px] px-[20px] py-[10px] border border-[#1463FF] rounded-[12px] bg-[#112F82] flex items-center justify-between">
        <div className="flex items-center gap-[10px] flex-1">
          <Search size={16} className="text-white shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="What are you looking for?"
            className="flex-1 bg-transparent outline-none text-white text-[14px] font-bold placeholder:text-white"
          />
        </div>
        {query.trim() && (
          <button
            onClick={() => setQuery("")}
            className="h-[30px] px-[16px] rounded-[6px] bg-[#1463FF] text-white text-[12px] font-semibold leading-[16px] tracking-[0.02em] flex items-center justify-center ml-4"
          >
            Clear
          </button>
        )}
      </div>

      {/* Search Results */}
      {query.trim() ? (
        <div className="mt-10">
          {filteredGames.length > 0 ? (
            <>
              <h2 className="text-white text-[20px] font-bold uppercase mb-5">
                All Games
              </h2>
              <div className="max-h-[420px] overflow-y-auto pr-2 scrollbar-hide">
                <div className="flex flex-wrap gap-3">
                  {filteredGames.map((game) => (
                    <GameCard key={game.globalId} image={game.image} title={game.title} onNavigate={(t) => { window.location.href = `/games/${t}`; }} />
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="w-full mt-10 flex flex-col items-center gap-5">
              <h3 className="w-full text-center text-white text-[16px] font-extrabold leading-[22px]">
                No Results for your Search
              </h3>
              <p className="max-w-[800px] text-center text-[#7795E8] text-[16px] font-medium leading-[22px]">
                There are no results in this category for your search term,
                please select a different category or try searching for
                something else.
              </p>
            </div>
          )}
        </div>
      ) : (
        <>
          {/* Popular Games */}
          <div className="flex flex-col mt-10 gap-5 mb-8">
            <div className="flex items-center gap-2">
              <Image src="/svg/search/fire.svg" alt="popular_games" width={15.86} height={20} />
              <h2 className="text-white text-[20px] font-bold uppercase">
                Popular Games
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {popularGames.map((game, index) => (
                <GameCard key={`${game.id}-${index}`} image={game.image} title={game.title} onNavigate={(t) => { window.location.href = `/games/${t}`; }} />
              ))}
            </div>
          </div>

          {/* Providers */}
          <div className="h-[100px] rounded-[12px] mt-8 flex items-center justify-center text-white font-bold">
            <GameProvidersSection />
          </div>
        </>
      )}
    </section>
  );
}
