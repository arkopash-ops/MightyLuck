const quickFilters = [
  { title: "All Games", logo: "/svg/search/games.svg" },
  { title: "Recently Played", logo: "/svg/search/recently-played.svg" },
  { title: "Favorites", logo: "/svg/search/favorite.svg" },
  { title: "New Releases", logo: "/svg/search/new-release.svg" },
];

const categories = [
  { title: "Original", logo: "/svg/search/originals.svg" },
  { title: "Slots", logo: "/svg/search/slot.svg" },
  { title: "Roulette", logo: "/svg/search/roulette.svg" },
  { title: "Crash Games", logo: "/svg/search/crash.svg" },
  { title: "Table Games", logo: "/svg/search/table.svg" },
  { title: "Live Casino", logo: "/svg/search/live.svg" },
  { title: "Baccarat", logo: "/svg/search/baccarat.svg" },
  { title: "Blackjack", logo: "/svg/search/blackjack.svg" },
];

function SearchMenuItem({ title, logo }: { title: string; logo: string }) {
  return (
    <button className="w-full h-9 px-[10px] rounded-lg bg-[#112F82] text-[#A5B8EF] text-[12px] font-semibold hover:bg-[#173B9D] transition-colors flex items-center gap-2">
      <img src={logo} alt={title} className="w-4 h-4" />
      <span>{title}</span>
    </button>
  );
}

export default function SearchSidebar() {
  return (
    <aside className="w-[180px] h-[588px] flex flex-col gap-3">
      {/* Quick Filters */}
      <div className="bg-[#0C1F56] rounded-[12px] p-4">
        <div className="flex flex-col gap-2">
          {quickFilters.map((item) => (
            <SearchMenuItem
              key={item.title}
              title={item.title}
              logo={item.logo}
            />
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-[#0C1F56] rounded-[12px] p-4 flex-1">
        <div className="flex flex-col gap-2">
          {categories.map((item) => (
            <SearchMenuItem
              key={item.title}
              title={item.title}
              logo={item.logo}
            />
          ))}
        </div>
      </div>
    </aside>
  );
}
