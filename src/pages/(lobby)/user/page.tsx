"use client";

import { useEffect, useState } from "react";

import DepositBanner from "@/components/guest/lobby/DepositBanner";
import HeroBanner from "@/components/guest/lobby/HeroBanner";
import Sidebar from "@/components/guest/sidebar/Sidebar";
import Navbar from "@/components/Navbar";
import GameSection from "@/components/guest/games/GameSection";
import {
  crashGames,
  originalsGames,
  slotGames,
  tableGames,
} from "@/data/games";
import WhyJoinSection from "@/components/guest/lobby/WhyJoinSection";
import GameProvidersSection from "@/components/guest/lobby/GameProvidersSection";
import { bonusGames } from "../../../data/games";
import CollectionsSection from "@/components/guest/lobby/CollectionsSection";
import RecentWinners from "@/components/guest/lobby/RecentWinners";
import SeoSection from "@/components/guest/lobby/SeoSection";
import CryptoBar from "@/components/guest/lobby/CryptoBar";
import Footer from "@/components/Footer";
import BottomNavbar from "@/components/mobile/BottomNavbar";

export default function UserLobby() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const overflow = isSidebarOpen ? "hidden" : "";
    document.body.style.overflow = overflow;
    document.documentElement.style.overflow = overflow;
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isSidebarOpen]);

  return (
    <>
      {/* navbar */}
      <Navbar onLogin={() => {}} onJoin={() => {}} />

      <main className="w-full min-h-screen bg-[#091741]">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex pt-4 md:pt-6 px-4 md:pl-6 md:pr-0 pb-10 gap-6">
            {/* sidebar */}
            <Sidebar
              isOpen={isSidebarOpen}
              onClose={() => setIsSidebarOpen(false)}
            />

            <div className="flex flex-col gap-[60px] md:gap-[100px] flex-1 min-w-0 md:pr-6">
              <div className="flex flex-col gap-[40px]">
                <div className="flex flex-col gap-[20px]">
                  {/* hero banner */}
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

              <div className="flex flex-col gap-[48px]">
                <SeoSection />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <CryptoBar />
        </div>

        <Footer />
        <BottomNavbar onMenuClick={() => setIsSidebarOpen(true)} />
      </main>
    </>
  );
}
