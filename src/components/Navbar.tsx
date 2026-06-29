"use client";

import { useState } from "react";

import { NavbarProp } from "@/types/navbar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logoutUser } from "@/redux/slices/authSlice";
import { LogOut } from "lucide-react";

export default function Navbar({
  onLogin,
  onJoin,
  onLogoutModalChange,
}: NavbarProp) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const user = useAppSelector((s) => s.auth.user);

  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleSearch = () => {
    router.push("/search");
  };

  const handleWallet = () => {
    router.push("/wallet");
  };

  const handleLogin = () => {
    if (window.innerWidth < 768) router.push("/auth/login");
    else onLogin();
  };

  const handleJoin = () => {
    if (window.innerWidth < 768) router.push("/auth/signup");
    else onJoin();
  };

  const handleLogout = () => {
    setShowLogoutModal(true);
    onLogoutModalChange?.(true);
  };

  const cancelLogout = () => {
    setShowLogoutModal(false);
    onLogoutModalChange?.(false);
  };

  const confirmLogout = () => {
    dispatch(logoutUser());
    setShowLogoutModal(false);
    onLogoutModalChange?.(false);
    router.push("/");
  };

  return (
    <header className="w-full bg-[#0C1F56] overflow-hidden sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto h-[50px] md:h-[60px] px-5 md:px-6 flex items-center justify-between relative">
        <div className="absolute left-[6px] top-[33px] w-[71.5px] h-[71.5px] md:left-[114px] md:top-[37px] md:w-[143px] md:h-[143px] bg-[#1463FF] blur-[12.5px] md:blur-[25px] rounded-full" />

        {/* Left */}
        <div className="relative z-10 flex items-center md:gap-[51px]">
          <div className="flex items-center gap-2 md:gap-[51px]">
            <button className="hidden md:block">
              {/* Menu */}
              <Image
                src="/svg/navbar/menu.svg"
                width={20.57}
                height={13.71}
                alt="menu"
              />
            </button>

            {/* desktop logo */}
            <Image
              src="/svg/navbar/horizontal-logo.svg"
              width={190}
              height={34.66}
              alt="logo"
              className="hidden md:block cursor-pointer"
              onClick={() => router.push("/")}
            />

            {/* mobile logo */}
            <Image
              src="/svg/navbar/mobile-logo.svg"
              width={44}
              height={30}
              alt="logo"
              className="block md:hidden cursor-pointer"
              onClick={() => router.push("/")}
            />
          </div>

          {/* searchbar */}
          <div
            onClick={handleSearch}
            className="relative hidden md:block cursor-pointer"
          >
            <Image
              src="/svg/navbar/search.svg"
              width={16}
              height={15.99}
              alt="search"
              className="absolute left-5 top-1/2 -translate-y-1/2 pointer-events-none"
            />
            <input
              readOnly
              onClick={handleSearch}
              type="text"
              placeholder="What are you looking for?"
              className="w-[280px] h-[40px] rounded-[8px] bg-[#112F82] pl-[46px] pr-5 text-white placeholder:text-[#BBCAF3] text-[14px] font-semibold outline-none cursor-pointer"
            />
          </div>
        </div>

        {/* Right */}
        <div className="relative z-10 flex items-center gap-[16px]">
          {user ? (
            <>
              {/* wallet */}
              <div className="flex items-center gap-[4px]">
                {/* balance (always visible, responsive text size) */}
                <div className="flex h-[40px] md:h-[40px] px-[20px] md:px-[30px] rounded-[8px] bg-[#112F82] items-center justify-center">
                  <span className="text-white text-[12px] md:text-[14px] font-bold tracking-[0.02em]">
                    $105.98
                  </span>
                </div>

                {/* deposit button */}
                <button
                  onClick={handleWallet}
                  className="flex items-center justify-center w-[40px] h-[40px] md:w-auto md:h-[40px] md:px-[16px] rounded-[8px] bg-[#FFC83D]"
                >
                  <Image
                    src="/svg/navbar/wallet.svg"
                    width={16}
                    height={14}
                    alt="wallet"
                  />

                  {/* hide text on mobile */}
                  <span className="hidden md:block text-[#1A1404] text-[14px] font-semibold tracking-[0.02em] ml-[8px]">
                    Deposit
                  </span>
                </button>
              </div>

              <div className="flex items-center gap-[8px]">
                {/* bell */}
                <div className="relative">
                  <button className="w-[40px] h-[40px] rounded-[6px] bg-[#173EAD] flex items-center justify-center">
                    <Image
                      src="/svg/navbar/bell.svg"
                      width={13.74}
                      height={16}
                      alt="logo"
                    />
                  </button>

                  {/* notification */}
                  <span className="absolute top-0 right-0 w-[8px] h-[8px] rounded-full bg-[#FF0E0E]" />
                </div>

                <div className="relative">
                  {/* gifts */}
                  <button className="w-[40px] h-[40px] rounded-[6px] bg-[#173EAD] flex items-center justify-center">
                    <Image
                      src="/svg/sidebar/gift.svg"
                      width={16}
                      height={16}
                      alt="logo"
                    />
                  </button>

                  {/* notification */}
                  <span className="absolute top-0 right-0 w-[8px] h-[8px] rounded-full bg-[#FF0E0E]" />
                </div>

                {/* avatar */}
                <button
                  onClick={handleLogout}
                  className="w-[40px] h-[40px] rounded-full bg-[#173EAD] flex items-center justify-center text-white text-[12px] font-bold uppercase"
                >
                  {user.username.slice(0, 2)}
                </button>
              </div>

              {showLogoutModal && (
                <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-end md:items-center justify-center">
                  <div className="w-full md:w-[400px] rounded-t-[28px] md:rounded-2xl bg-[#0C1F56] border-t md:border border-[#1D4EBC] shadow-[0_-10px_40px_rgba(0,0,0,0.45)] overflow-hidden animate-in slide-in-from-bottom duration-300">
                    {/* Handle (Mobile) */}
                    <div className="flex justify-center pt-3 md:hidden">
                      <div className="w-12 h-1.5 rounded-full bg-[#4F6CC9]" />
                    </div>

                    <div className="px-6 py-7">
                      {/* Icon */}
                      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#112F82] border border-[#1463FF] shadow-[0_0_30px_rgba(20,99,255,0.35)]">
                        <LogOut
                          size={30}
                          className="text-[#FFC83D]"
                          strokeWidth={2.5}
                        />
                      </div>

                      {/* Title */}
                      <h2 className="text-center text-[22px] font-bold text-white">
                        Logout?
                      </h2>

                      {/* Subtitle */}
                      <p className="mt-2 text-center text-sm leading-6 text-[#BBCAF3]">
                        You&apos;re about to sign out of your account.
                        <br />
                        You can sign back in anytime.
                      </p>

                      {/* Buttons */}
                      <div className="mt-8 flex flex-col gap-3">
                        <button
                          onClick={confirmLogout}
                          className="h-12 rounded-xl bg-[#FFC83D] font-bold text-[#1A1404] transition hover:brightness-105 active:scale-[0.98]"
                        >
                          Yes, Logout
                        </button>

                        <button
                          onClick={cancelLogout}
                          className="h-12 rounded-xl border border-[#1D4EBC] bg-[#112F82] font-bold text-white transition hover:bg-[#16398F] active:scale-[0.98]"
                        >
                          Stay Logged In
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : (
            <>
              {/* login */}
              <button
                onClick={handleLogin}
                className="h-[30px] md:h-[40px] px-[22.5px] md:px-[30px] rounded-[6px] md:rounded-[8px] bg-[#1463FF] text-white text-[10.5px] md:text-[14px] font-bold tracking-[0.02em]"
              >
                Login
              </button>

              {/* join */}
              <button
                onClick={handleJoin}
                className="h-[30px] md:h-[40px] px-[22.5px] md:px-[30px] rounded-[6px] md:rounded-[8px] bg-[#FFC83D] text-[#1A1404] text-[10.5px] md:text-[14px] font-bold tracking-[0.02em]"
              >
                Join
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
