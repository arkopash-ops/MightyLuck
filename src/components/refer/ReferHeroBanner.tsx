"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

const statsItems = [
  { label: "Total Referrals", value: "12" },
  { label: "Total Deposits", value: "$5000.00" },
  { label: "Total Earnings", value: "$500.00" },
  { label: "Pending Income", value: "$150.00", claim: true },
];

export default function ReferHeroBanner() {
  const [friendCount, setFriendCount] = useState(5);

  const MAX_FRIENDS = 20;
  const earnings = friendCount * 50;

  const percent = useMemo(
    () => (friendCount / MAX_FRIENDS) * 100,
    [friendCount],
  );

  return (
    <div className="flex flex-col gap-[20px]">
      <div className="relative w-full rounded-[10px] md:rounded-[16px] overflow-hidden">
        {/* Mobile hero image */}
        <div className="block md:hidden h-[170px] relative">
          <Image
            src="/image/refer/lion-refer.png"
            alt="background"
            fill
            priority
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(95.59deg, #03123C 13.87%, rgba(6,16,43,0) 55%)",
            }}
          />
          <div className="absolute left-[19px] top-1/2 -translate-y-1/2 flex flex-col gap-[1.93px]">
            <p className="text-white font-medium text-[14px] leading-[20px]">
              Get <span className="text-[#FFD85A] font-bold">PAID</span> every
              time
            </p>
            <h1 className="text-white font-extrabold text-[20px] leading-[100%]">
              YOUR FRIEND PLAYS!
            </h1>
          </div>
        </div>

        {/* Desktop hero */}
        <div className="hidden md:block h-[533px] relative px-[40px] py-[32px]">
          <Image
            src="/image/refer/lion-refer.png"
            alt="background"
            fill
            priority
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(95.59deg, #06102B 13.87%, rgba(6,16,43,0) 35.34%)",
            }}
          />
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-[4px] w-[457px]">
                <p className="text-white font-medium text-[28px] leading-[40px]">
                  Get <span className="text-[#FFD85A] font-bold">PAID</span> every time
                </p>
                <h1 className="text-white font-extrabold text-[48px] leading-[48px]">
                  YOUR FRIEND PLAYS!
                </h1>
              </div>

              {/* Desktop calculator card */}
              <div className="relative w-[430px] h-[345px] bg-[#091741] rounded-[16px] p-[20px] flex flex-col gap-[24px] items-center overflow-hidden">
                <div className="absolute w-[173px] h-[173px] rounded-full bg-[#1463FF] blur-[40px] left-1/2 -translate-x-1/2 -top-[110px]" />
                <div className="relative z-10 w-full flex flex-col gap-[12px]">
                  <div className="flex justify-center">
                    <h3 className="w-[300px] text-white font-extrabold text-[20px] leading-[29px] text-center tracking-[0.01em]">
                      How much can you earn with Mighty Luck?
                    </h3>
                  </div>
                  <div className="flex flex-col gap-[16px] w-full">
                    <div className="flex flex-col gap-[8px] w-full">
                      <span className="text-[#BBCAF3] font-semibold text-[12px] leading-[16px] tracking-[0.02em]">
                        Invited Friends
                      </span>
                      <div className="relative w-full h-[40px] flex items-center">
                        <div className="relative w-full h-[6px]">
                          <div className="absolute w-full h-[6px] bg-[#112F82] rounded-full" />
                          <div
                            className="absolute h-[6px] bg-[#1463FF] rounded-full"
                            style={{ width: `${percent}%` }}
                          />
                        </div>
                        <div
                          className="absolute flex items-center gap-[4px] px-[12px] py-[4px] bg-[#1463FF] rounded-full h-[30px]"
                          style={{ left: `calc(${percent}% - 27px)` }}
                        >
                          <Image
                            src="/svg/sidebar/refer.svg"
                            alt=""
                            width={16}
                            height={16}
                          />
                          <span className="text-white font-bold text-[16px] leading-[22px]">
                            {friendCount}
                          </span>
                        </div>
                        <input
                          type="range"
                          min={1}
                          max={MAX_FRIENDS}
                          value={friendCount}
                          onChange={(e) =>
                            setFriendCount(Number(e.target.value))
                          }
                          className="absolute w-full h-[6px] opacity-0 cursor-pointer"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-[8px] w-full">
                      <div className="w-full h-[60px] bg-[#112F82] rounded-[8px] px-[16px] flex items-center justify-center">
                        <div className="flex items-baseline gap-[8px]">
                          <span className="text-white font-bold text-[14px] leading-[19px]">
                            Your monthly earnings:
                          </span>
                          <span className="text-white font-bold text-[24px] leading-[33px]">
                            ${earnings}
                          </span>
                        </div>
                      </div>
                      <p className="text-[#7795E8] font-medium text-[10px] leading-[14px]">
                        * Calculations are based on average player activity and
                        may vary in individual cases
                      </p>
                    </div>
                    <div className="flex gap-[8px] w-full">
                      <div className="flex-1 h-[40px] bg-[#112F82] rounded-[8px] px-[16px] flex items-center">
                        <input
                          type="email"
                          placeholder="Enter email address"
                          className="w-full bg-transparent outline-none text-white placeholder:text-[#7795E8] font-semibold text-[14px] leading-[19px]"
                        />
                      </div>
                      <button className="w-[122px] h-[40px] bg-[#FFC83D] rounded-[8px] text-[#1A1404] font-bold text-[14px] leading-[19px] cursor-pointer">
                        Send Invite
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats bar — mobile: vertical card, desktop: horizontal */}
            <div className="hidden md:flex w-full h-[104px] bg-[#091741] rounded-[16px] px-[20px] py-[20px] items-center">
              <div className="flex items-center gap-[8px] w-full">
                {statsItems.map((item, i) => (
                  <div key={i} className="flex flex-col gap-[8px] flex-1">
                    <span className="text-[#BBCAF3] font-semibold text-[12px] leading-[16px] tracking-[0.02em]">
                      {item.label}
                    </span>
                    <div className="w-full h-[40px] bg-[#112F82] rounded-[8px] px-[16px] flex items-center justify-between">
                      <div className="flex items-center gap-[8px]">
                        <Image
                          src="/svg/wallet/dollar.svg"
                          alt=""
                          width={20}
                          height={20}
                        />
                        <span className="text-white font-bold text-[16px] leading-[22px]">
                          {item.value}
                        </span>
                      </div>
                      {item.claim && (
                        <button className="h-[24px] px-[16px] bg-[#1463FF] rounded-[6px] text-white font-semibold text-[12px] leading-[16px] cursor-pointer">
                          Claim
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile calculator card */}
      <div className="block md:hidden w-full bg-[#0C1F56] rounded-[16px] p-[20px] flex flex-col gap-[24px] items-center relative overflow-hidden">
        <div className="absolute w-[173px] h-[173px] rounded-full bg-[#1463FF] blur-[40px] left-1/2 -translate-x-1/2 -top-[127px]" />
        <div className="relative z-10 w-full flex flex-col gap-[12px]">
          <div className="flex justify-center">
            <h3 className="w-[300px] text-white font-extrabold text-[18px] leading-[26px] text-center tracking-[0.01em]">
              How much can you earn with Mighty Luck?
            </h3>
          </div>
          <div className="flex flex-col gap-[16px] w-full">
            <div className="flex flex-col gap-[8px] w-full">
              <span className="text-[#BBCAF3] font-semibold text-[12px] leading-[16px] tracking-[0.02em]">
                Invited Friends
              </span>
              <div className="relative w-full h-[40px] flex items-center">
                <div className="relative w-full h-[6px]">
                  <div className="absolute w-full h-[6px] bg-[#112F82] rounded-full" />
                  <div
                    className="absolute h-[6px] bg-[#1463FF] rounded-full"
                    style={{ width: `${percent}%` }}
                  />
                </div>
                <div
                  className="absolute flex items-center gap-[4px] px-[12px] py-[4px] bg-[#1463FF] rounded-full h-[30px]"
                  style={{ left: `calc(${percent}% - 27px)` }}
                >
                  <Image
                    src="/svg/sidebar/refer.svg"
                    alt=""
                    width={16}
                    height={16}
                  />
                  <span className="text-white font-bold text-[16px] leading-[22px]">
                    {friendCount}
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={MAX_FRIENDS}
                  value={friendCount}
                  onChange={(e) => setFriendCount(Number(e.target.value))}
                  className="absolute w-full h-[6px] opacity-0 cursor-pointer"
                />
              </div>
            </div>
            <div className="flex flex-col gap-[8px] w-full">
              <div className="w-full h-[60px] bg-[#112F82] rounded-[8px] px-[16px] flex items-center justify-center">
                <div className="flex items-baseline gap-[8px]">
                  <span className="text-white font-bold text-[14px] leading-[19px]">
                    Your monthly earnings:
                  </span>
                  <span className="text-white font-bold text-[24px] leading-[33px]">
                    ${earnings}
                  </span>
                </div>
              </div>
              <p className="text-[#7795E8] font-medium text-[10px] leading-[14px]">
                * Calculations are based on average player activity and may vary
                in individual cases
              </p>
            </div>
            <div className="flex flex-col gap-[8px] w-full">
              <div className="w-full h-[50px] bg-[#112F82] rounded-[8px] px-[16px] flex items-center">
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="w-full bg-transparent outline-none text-white placeholder:text-[#7795E8] font-semibold text-[14px] leading-[19px]"
                />
              </div>
              <button className="w-full h-[50px] bg-[#FFC83D] rounded-[8px] text-[#1A1404] font-bold text-[16px] leading-[22px] cursor-pointer">
                Send Invite
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile stats: vertical */}
      <div className="flex md:hidden w-full bg-[#0C1F56] rounded-[16px] p-[20px_24px] flex-col gap-[12px]">
        {statsItems.map((item, i) => (
          <div key={i} className="flex flex-col gap-[8px]">
            <span className="text-[#BBCAF3] font-semibold text-[12px] leading-[16px] tracking-[0.02em]">
              {item.label}
            </span>
            <div className="w-full h-[50px] bg-[#112F82] rounded-[8px] px-[16px] flex items-center justify-between">
              <div className="flex items-center gap-[8px]">
                <Image
                  src="/svg/wallet/dollar.svg"
                  alt=""
                  width={20}
                  height={20}
                />
                <span className="text-white font-bold text-[16px] leading-[22px]">
                  {item.value}
                </span>
              </div>
              {item.claim && (
                <button className="h-[30px] px-[16px] bg-[#1463FF] rounded-[6px] text-white font-semibold text-[12px] leading-[16px] cursor-pointer">
                  Claim
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
