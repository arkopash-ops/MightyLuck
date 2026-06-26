"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { BonusModelProps } from "@/types/wallet";
import { bonuses } from "@/data/wallet";

export default function BonusModel({ setModalHeight }: BonusModelProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isClient = useRef(false);

  const [promoCode, setPromoCode] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const ITEM_WIDTH = 308;

  useEffect(() => {
    isClient.current = true;
    setModalHeight(518);
  }, [setModalHeight]);

  const handleScroll = () => {
    if (!isClient.current || !containerRef.current) return;

    const scrollLeft = containerRef.current.scrollLeft;
    const index = Math.round(scrollLeft / ITEM_WIDTH);

    const clamped = Math.max(0, Math.min(index, bonuses.length - 1));
    setActiveIndex(clamped);
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  const goToIndex = (index: number) => {
    if (!containerRef.current) return;

    setActiveIndex(index);

    containerRef.current.scrollTo({
      left: ITEM_WIDTH * index,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-[460px] h-[363px] p-4 bg-[#0C1F56] rounded-2xl flex flex-col gap-4">
      {/* Promo Code */}
      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold tracking-[0.02em] text-[#BBCAF3]">
          If you have a Bonus Code — enter it here
        </p>

        <div className="flex gap-2">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Promo Code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="w-full h-10 px-4 pr-10 bg-[#112F82] rounded-lg text-sm font-semibold text-white placeholder:text-[#7795E8] outline-none"
            />

            {promoCode.length > 0 && (
              <Image
                src="/svg/wallet/warning.svg"
                alt="warning"
                width={16}
                height={16}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4"
              />
            )}
          </div>

          <button className="w-[100px] h-10 bg-[#FFC83D] rounded-lg text-sm font-bold text-[#1A1404]">
            Join
          </button>
        </div>
      </div>

      {/* Bonuses */}
      <div className="flex flex-col gap-3">
        <p className="text-xs font-semibold text-[#BBCAF3]">
          Available bonuses for you
        </p>

        <div
          ref={containerRef}
          className="flex gap-2 overflow-x-auto scrollbar-hide scroll-smooth"
        >
          {bonuses.map((bonus, index) => (
            <div
              key={index}
              className="min-w-[300px] p-5 bg-[#112F82] rounded-xl flex flex-col gap-3"
            >
              <h3 className="text-sm font-bold text-white">{bonus.title}</h3>

              <div className="flex flex-col gap-[9px]">
                <div className="grid grid-cols-2 gap-3">
                  <InfoItem label="Min. Deposit" value={bonus.minDeposit} />
                  <InfoItem label="Max. Cashout" value={bonus.maxCashout} />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <InfoItem label="Max. Amount" value={bonus.maxAmount} />
                  <InfoItem label="Wager (dep. + bonus)" value={bonus.wager} />
                </div>
              </div>

              <button className="h-10 bg-[#FFC83D] rounded-md text-xs font-bold text-[#1A1404]">
                Join Bonus
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center">
        <div className="flex items-center gap-1">
          {bonuses.map((_, i) => (
            <button
              key={i}
              onClick={() => goToIndex(i)}
              className={`h-[6px] rounded-full transition-all duration-200 cursor-pointer ${
                i === activeIndex
                  ? "w-3 bg-[#BBCAF3]"
                  : "w-[6px] bg-[#BBCAF3]/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-[2px]">
      <span className="text-[10px] text-[#BBCAF3]">{label}</span>
      <span className="text-sm font-bold text-white">{value}</span>
    </div>
  );
}
