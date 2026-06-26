"use client";

import { useEffect, useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sidebar from "@/components/guest/sidebar/Sidebar";
import BottomNavbar from "@/components/mobile/BottomNavbar";

import CryptoBar from "@/components/guest/lobby/CryptoBar";
import SeoSection from "@/components/guest/lobby/SeoSection";

import ReferHeroBanner from "@/components/refer/ReferHeroBanner";
import ReferStatCards from "@/components/refer/ReferStatCards";
import ReferBenefits from "@/components/refer/ReferBenefits";
import ReferHowItWorks from "@/components/refer/ReferHowItWorks";
import ReferFAQ from "@/components/refer/ReferFAQ";

export default function ReferFriend() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "";
  }, [isSidebarOpen]);

  return (
    <>
      {/* navbar */}
      <Navbar
        onLogin={() => {}}
        onJoin={() => {}}
        onLogoutModalChange={setLogoutModalOpen}
      />

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
                <div className="flex flex-col gap-[100px]">
                  <div className="flex flex-col gap-[60px]">
                    {/* refer hero banner */}
                    <ReferHeroBanner />
                    
                    {/* state cards */}
                    <ReferStatCards />
                  </div>
                </div>

                {/* benefits */}
                <ReferBenefits />

                {/* how it works */}
                <ReferHowItWorks />

                {/* faq */}
                <ReferFAQ />
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
        {!logoutModalOpen && (
          <BottomNavbar
            onMenuClick={() => setIsSidebarOpen((prev: boolean) => !prev)}
          />
        )}
      </main>
    </>
  );
}
