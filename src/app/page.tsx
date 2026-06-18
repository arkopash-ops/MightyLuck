import Navbar from "@/components/guest/Navbar";
import Sidebar from "@/components/guest/sidebar/Sidebar";
import HeroBanner from "../components/guest/lobby/HeroBanner";
import DepositBanner from "../components/guest/lobby/DepositBanner";
import GameSection from "../components/guest/games/GameSection";
import {
  bonusGames,
  crashGames,
  originalsGames,
  slotGames,
  tableGames,
} from "@/data/games";
import WhyJoinSection from "../components/guest/lobby/WhyJoinSection";
import GameProvidersSection from "@/components/guest/lobby/GameProvidersSection";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="w-full min-h-screen bg-[#091741]">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex pt-6 px-6 pb-10">
            <Sidebar />

            <div className="ml-6 flex-1 flex-col gap-[20px]">
              <HeroBanner />

              <DepositBanner />

              <GameSection
                icon="/svg/game/cherry.svg"
                title="SLOTS"
                count={1487}
                games={slotGames}
              />

              <GameSection
                icon="/svg/game/thunder.svg"
                title="ORIGINALS"
                count={14}
                games={originalsGames}
              />

              <WhyJoinSection />

              <GameSection
                icon="/svg/game/rocket.svg"
                title="CRASH GAMES"
                count={723}
                games={crashGames}
              />

              <GameProvidersSection />

              <GameSection
                icon="/svg/game/dice.svg"
                title="TABLE GAMES"
                count={51}
                games={tableGames}
              />

              <GameSection
                icon="/svg/game/dollar.svg"
                title="BONUS BUYS"
                count={145}
                games={bonusGames}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
