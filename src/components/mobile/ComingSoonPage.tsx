"use client";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/guest/sidebar/Sidebar";
import BottomNavbar from "@/components/mobile/BottomNavbar";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ComingSoonPageProps {
  title: string;
  icon: string;
}

export default function ComingSoonPage({ title, icon }: ComingSoonPageProps) {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

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

  return (
    <div className="min-h-screen bg-[#091741] text-white flex flex-col font-manrope">
      <Navbar
        onLogin={() => {}}
        onJoin={() => {}}
        onLogoutModalChange={() => {}}
      />

      <Sidebar
        isOpen={showMenu}
        onClose={() => setShowMenu(false)}
      />

      {/* Main Content Area */}
      <div className="flex-1 w-full max-w-[414px] mx-auto px-5 pt-6 pb-28 flex flex-col justify-start items-center">
        {/* Back navigation & Title bar */}
        <div className="w-full flex items-center justify-between mb-8 z-10">
          <button
            onClick={() => router.back()}
            className="w-10 h-10 rounded-full bg-[#112F82] border border-[#1463FF]/30 flex items-center justify-center text-white active:scale-95 transition-all shadow-[0_2px_8px_rgba(20,99,255,0.15)]"
          >
            <Image
              src="/svg/navbar/back.svg"
              width={18}
              height={18}
              alt="Back"
              className="object-contain"
            />
          </button>
          <span className="text-white font-extrabold text-[18px] tracking-[0.02em] uppercase font-jost">
            {title}
          </span>
          <div className="w-10 h-10" />
        </div>

        {/* Card Component */}
        <div className="w-full bg-gradient-to-b from-[#112F82]/80 to-[#0C1F56]/90 border border-[#1463FF]/30 rounded-[24px] p-8 flex flex-col items-center relative overflow-hidden backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          {/* Glowing background blob */}
          <div className="absolute -top-[100px] w-[200px] h-[200px] bg-[#1463FF] opacity-25 rounded-full blur-[50px] pointer-events-none" />

          {/* Section Icon Container */}
          <div className="w-[88px] h-[88px] rounded-full bg-gradient-to-br from-[#1463FF]/35 to-[#1463FF]/10 border-2 border-[#FFC83D] flex items-center justify-center mb-6 shadow-[0_0_24px_rgba(20,99,255,0.4)]">
            <div className="relative w-12 h-12 flex items-center justify-center">
              <Image
                src={icon}
                alt={title}
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Badge */}
          <div className="px-4 py-1.5 rounded-full bg-[#FFBF1F]/10 border border-[#FFBF1F]/30 text-[#FFBF1F] text-[12px] font-extrabold tracking-[0.05em] uppercase mb-4">
            Coming Soon
          </div>

          {/* Main Headline */}
          <h2 className="text-white text-[24px] font-extrabold tracking-[0.01em] mb-3 uppercase font-jost">
            {title} Feature
          </h2>

          {/* Description */}
          <p className="text-[#BBCAF3] text-[14px] leading-[22px] font-medium max-w-[280px] mb-8">
            We are polishing our {title.toLowerCase()} systems to provide you with the most premium experience. Stay tuned!
          </p>

          {/* CTA Button */}
          <button
            onClick={() => router.push("/")}
            className="w-full h-[48px] rounded-[8px] bg-gradient-to-r from-[#FFC83D] to-[#FFBF1F] text-[#1A1404] text-[14px] font-extrabold tracking-[0.02em] hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_4px_15px_rgba(255,191,31,0.25)] uppercase font-jost"
          >
            Return to Lobby
          </button>
        </div>
      </div>

      <BottomNavbar onMenuClick={() => setShowMenu(!showMenu)} />
    </div>
  );
}
