const quickFilters = [
  "All Games",
  "Recently Played",
  "Favorites",
  "New Releases",
];

const categories = [
  "Original",
  "Slots",
  "Roulette",
  "Crash Games",
  "Table Games",
  "Live Casino",
  "Baccarat",
  "Blackjack",
];

function SearchMenuItem({ title }: { title: string }) {
  return (
    <button className="w-full h-9 px-[10px] rounded-lg bg-[#112F82] text-[#A5B8EF] text-[12px] font-semibold text-left hover:bg-[#173B9D] transition-colors">
      {title}
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
            <SearchMenuItem key={item} title={item} />
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-[#0C1F56] rounded-[12px] p-4 flex-1">
        <div className="flex flex-col gap-2">
          {categories.map((item) => (
            <SearchMenuItem key={item} title={item} />
          ))}
        </div>
      </div>
    </aside>
  );
}
