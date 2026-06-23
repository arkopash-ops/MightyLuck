"use client";

import { NavbarProp } from "@/types/navbar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logoutUser } from "@/redux/slices/authSlice";

export default function Navbar({ onLogin, onJoin }: NavbarProp) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const user = useAppSelector((s) => s.auth.user);

  const handleLogin = () => {
    if (window.innerWidth < 768) router.push("/auth/login");
    else onLogin();
  };

  const handleJoin = () => {
    if (window.innerWidth < 768) router.push("/auth/signup");
    else onJoin();
  };

  const handleLogout = () => {
    dispatch(logoutUser());
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
              className="hidden md:block"
            />

            {/* mobile logo */}
            <Image
              src="/svg/navbar/mobile-logo.svg"
              width={44}
              height={30}
              alt="logo"
              className="block md:hidden"
            />
          </div>

          {/* searchbar */}
          <div className="relative hidden md:block">
            <Image
              src="/svg/navbar/search.svg"
              width={16}
              height={15.99}
              alt="search"
              className="absolute left-5 top-1/2 -translate-y-1/2"
            />

            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-[280px] h-[40px] rounded-[8px] bg-[#112F82] pl-[46px] pr-5 text-white placeholder:text-[#BBCAF3] text-[14px] font-semibold outline-none"
            />
          </div>
        </div>

        {/* Right */}
        <div className="relative z-10 flex items-center gap-[16px]">
          {user ? (
            <>
              {/* wallet */}
              <div className="hidden md:flex items-center gap-[4px]">
                <div className="flex h-[40px] px-[30px] rounded-[8px] bg-[#112F82] items-center justify-center">
                  <span className="text-white text-[14px] font-bold tracking-[0.02em]">
                    $105.98
                  </span>
                </div>

                <button className="flex h-[40px] px-[16px] gap-[8px] rounded-[8px] bg-[#FFC83D] items-center justify-center">
                  <Image
                    src="/svg/navbar/wallet.svg"
                    width={16}
                    height={14.37}
                    alt="logo"
                  />

                  <span className="text-[#1A1404] text-[14px] font-semibold tracking-[0.02em]">
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
