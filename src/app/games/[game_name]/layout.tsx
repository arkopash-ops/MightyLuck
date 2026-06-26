"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sidebar from "@/components/guest/sidebar/Sidebar";
import BottomNavbar from "@/components/mobile/BottomNavbar";

import CryptoBar from "@/components/guest/lobby/CryptoBar";
import SeoSection from "@/components/guest/lobby/SeoSection";

export default function GameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);

  return (
    <>
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
              <div className="flex flex-col gap-[40px]">{children}</div>

              {/* seo */}
              <div className="flex flex-col gap-[48px]">
                <SeoSection />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <CryptoBar />
        </div>

        {/* footer */}
        <Footer />

        {/* bottom navbar */}
        {!logoutModalOpen && (
          <BottomNavbar
            onMenuClick={() => setIsSidebarOpen((prev: boolean) => !prev)}
          />
        )}
      </main>
    </>
  );
}
