"use client";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/guest/sidebar/Sidebar";
import BottomNavbar from "@/components/mobile/BottomNavbar";
import { useState, useMemo, useEffect } from "react";
import { Search } from "lucide-react";
import Image from "next/image";
import GameProvidersSection from "@/components/guest/lobby/GameProvidersSection";
import { popularGames, allGames } from "@/data/games";
import GameCard from "@/components/games/Gamecard";

export default function MobileSearchPage() {
  const [query, setQuery] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showMenu]);

  const filteredGames = useMemo(() => {
    if (!query.trim()) return [];
    return allGames.filter(
      (game) =>
        game.name.toLowerCase().includes(query.toLowerCase()) ||
        game.title.toLowerCase().includes(query.toLowerCase()),
    );
  }, [query]);

  return (
    <div className="min-h-screen bg-[#0C1F56]">
      <Navbar
        onLogin={() => {}}
        onJoin={() => {}}
        onLogoutModalChange={() => {}}
      />

      <Sidebar isOpen={showMenu} onClose={() => setShowMenu(false)} />

      <div className="pt-[20px]">
        {/* Search Bar */}
        <div className="mx-auto w-full max-w-[414px] px-5 pb-5">
          <div className="h-[50px] px-5 rounded-[8px] border border-[#1463FF] bg-[#112F82] flex items-center gap-[10px]">
            <Search size={16} className="text-white shrink-0" />

            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="What are you looking for?"
              className="flex-1 bg-transparent outline-none text-white text-[14px] font-bold placeholder:text-[#BBCAF3]"
            />

            {query && (
              <button
                onClick={() => setQuery("")}
                className="h-[30px] px-4 rounded-[6px] bg-[#1463FF] text-white text-[12px] font-semibold"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="mx-auto w-full max-w-[414px] px-5 mb-5">
          <div
            className="flex gap-2 overflow-x-auto pb-2"
            style={{ scrollbarWidth: "none" }}
          >
            {[
              { icon: "/svg/search/games.svg", label: "All Games" },
              {
                icon: "/svg/search/recently-played.svg",
                label: "Recently Played",
              },
              { icon: "/svg/search/favorite.svg", label: "Favorites" },
              { icon: "/svg/search/new-release.svg", label: "New Releases" },
            ].map((filter, idx) => (
              <button
                key={idx}
                className="flex items-center gap-3 px-[10px] py-[10px] rounded-[8px] bg-[#112F82] whitespace-nowrap"
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  <Image
                    src={filter.icon}
                    alt={filter.label}
                    width={16}
                    height={16}
                  />
                </div>
                <span className="text-[#A5B8EF] text-[12px] font-semibold">
                  {filter.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Search Results */}
        {query.trim() ? (
          <div className="mx-auto max-w-[414px] px-5 mt-5 mb-[75px]">
            {filteredGames.length > 0 ? (
              <>
                <h2 className="text-white text-[16px] font-bold uppercase mb-5">
                  All Games
                </h2>
                <div className="max-h-[calc(100vh-250px)] overflow-y-auto pb-2 scrollbar-hide">
                  <div className="grid grid-cols-3 gap-2">
                    {filteredGames.map((game) => (
                      <GameCard
                        key={game.globalId}
                        image={game.image}
                        title={game.title}
                        onNavigate={(t) => {
                          window.location.href = `/games/${t}`;
                        }}
                      />
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
                  something else
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="mx-auto max-w-[414px] px-5">
            {/* Popular Games */}
            <div className="mt-5 mb-5">
              <div className="flex items-center gap-2 mb-3">
                <Image
                  src="/svg/search/fire.svg"
                  alt="popular_games"
                  width={16}
                  height={20}
                />
                <h2 className="text-white text-[16px] font-bold uppercase">
                  Popular Games
                </h2>
              </div>
              <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {popularGames.map((game, index) => (
                  <GameCard
                    key={`${game.id}-${index}`}
                    image={game.image}
                    title={game.title}
                    onNavigate={(t) => {
                      window.location.href = `/games/${t}`;
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Providers */}
            <div className="mb-[75px]">
              <GameProvidersSection />
            </div>
          </div>
        )}
      </div>

      <BottomNavbar onMenuClick={() => setShowMenu(!showMenu)} />
    </div>
  );
}
