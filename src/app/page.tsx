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
import RecentWinners from "@/components/guest/lobby/RecentWinners";
import CollectionsSection from "@/components/guest/lobby/CollectionsSection";
import SeoSection from "@/components/guest/lobby/SeoSection";
import Footer from "@/components/guest/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="w-full min-h-screen bg-[#091741]">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex pt-6 pl-6 pb-10 gap-6">
            <Sidebar />

            <div className="flex flex-col gap-[100px] flex-1 min-w-0 pr-6">
              {/* Game sections group — gap 40px */}
              <div className="flex flex-col gap-[40px]">
                {/* Hero + Deposit */}
                <div className="flex flex-col gap-[20px]">
                  <HeroBanner />
                  <DepositBanner />
                </div>

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

                <CollectionsSection />

                <RecentWinners />
              </div>

              {/* SEO section — gap 48px from above */}
              <div className="flex flex-col gap-[48px]">
                <SeoSection />
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
