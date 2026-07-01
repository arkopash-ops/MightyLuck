"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { BonusModelProps } from "@/types/wallet";
import { bonuses } from "@/data/wallet";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/redux/hooks";
import {
  clearActiveBonus,
  setActiveBonus,
} from "@/redux/slices/wallet/bonusSlice";
import { useRouter } from "next/navigation";

export default function BonusModel({ setModalHeight }: BonusModelProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isClient = useRef(false);

  const router = useRouter();

  const dispatch = useDispatch();

  const activeBonus = useAppSelector((state) => state.bonus.activeBonus);

  const [promoCode, setPromoCode] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const ITEM_WIDTH = 308;

  useEffect(() => {
    isClient.current = true;
  }, []);

  useEffect(() => {
    setModalHeight(activeBonus ? 589 : 518);
  }, [activeBonus, setModalHeight]);

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

  useEffect(() => {
    return () => {
      dispatch(clearActiveBonus());
    };
  }, [dispatch]);

  const goToIndex = (index: number) => {
    if (!containerRef.current) return;

    setActiveIndex(index);

    containerRef.current.scrollTo({
      left: ITEM_WIDTH * index,
      behavior: "smooth",
    });
  };

  const handlePromoJoin = () => {
    dispatch(
      setActiveBonus({
        id: 0,
        code: promoCode,
        title: "Promo Bonus",
        minDeposit: "$30",
        maxCashout: "40x",
        maxAmount: "$30",
        wager: "10x",
      }),
    );
  };

  if (activeBonus) {
    return (
      <div className="w-full max-w-[460px] p-4 bg-[#0C1F56] rounded-2xl flex flex-col gap-4">
        <div className="bg-[#112F82] rounded-xl p-4 flex flex-col gap-5">
          {/* Coupon Applied */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#1463FF] flex items-center justify-center">
              <Image
                src="/svg/wallet/check.svg"
                alt="check"
                width={16}
                height={16}
              />
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="text-sm font-bold text-white">Coupon Applied</h3>

              <p className="text-xs text-[#A5B8EF]">
                Your bonus is now attached to your next deposit.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium text-[#BBCAF3]">
              Active Bonus
            </span>

            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white">
                {activeBonus.title}
              </h3>

              <Image
                src="/svg/wallet/info.svg"
                alt="info"
                width={16}
                height={16}
              />
            </div>

            <span className="text-sm font-bold text-[#FFC83D] uppercase">
              {activeBonus.code}
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold text-[#A5B8EF]">
                Min. Deposit
              </span>

              <span className="text-xs font-bold text-white">
                {activeBonus.minDeposit}
              </span>
            </div>

            <div className="border-t border-dashed border-[#193EA5]" />

            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold text-[#A5B8EF]">
                Max. Cashout
              </span>

              <span className="text-xs font-bold text-white">
                {activeBonus.maxCashout}
              </span>
            </div>

            <div className="border-t border-dashed border-[#193EA5]" />

            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold text-[#A5B8EF]">
                Wager
              </span>

              <span className="text-xs font-bold text-white">
                {activeBonus.wager}
              </span>
            </div>
          </div>

          <button
            onClick={() => router.back()}
            className="h-[50px] rounded-lg bg-[#FFC83D] hover:bg-[#F4B400] text-base font-bold text-[#1A1404] cursor-pointer"
          >
            Continue to deposit
          </button>
        </div>

        <button
          onClick={() => dispatch(clearActiveBonus())}
          className="h-[50px] rounded-lg bg-[#112F82] hover:bg-[#173EAD] text-[#D2DCF7] font-bold cursor-pointer"
        >
          Change Coupon
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[460px] md:w-[460px] md:h-[363px] p-4 bg-[#0C1F56] rounded-2xl flex flex-col gap-4">
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
              className="w-full h-[50px] md:h-10 px-4 pr-10 bg-[#112F82] rounded-lg text-sm font-semibold text-white placeholder:text-[#7795E8] outline-none uppercase"
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

          <button
            onClick={handlePromoJoin}
            className="w-[100px] h-[50px] md:h-10 bg-[#FFC83D] hover:bg-[#F4B400] rounded-lg text-sm font-bold text-[#1A1404] cursor-pointer"
          >
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
          className="flex gap-2 overflow-x-auto scrollbar-hide scroll-smooth -mx-4 px-4 md:mx-0 md:px-0"
        >
          {bonuses.map((bonus, index) => (
            <div
              key={index}
              className="min-w-[300px] p-5 bg-[#112F82] rounded-xl flex flex-col gap-3 shrink-0"
            >
              <h3 className="text-sm font-bold text-white font-jost tracking-[0.02em] leading-5">
                {bonus.title}
              </h3>

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

              <button
                onClick={() => dispatch(setActiveBonus(bonus))}
                className="h-10 bg-[#FFC83D] hover:bg-[#F4B400] rounded-md text-xs font-bold text-[#1A1404] cursor-pointer"
              >
                Join
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
                i === activeIndex ? "w-3 bg-[#D2DCF7]" : "w-[6px] bg-[#D2DCF7]"
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
      <span className="text-[10px] text-[#BBCAF3] font-medium tracking-[0.02em] leading-[14px]">
        {label}
      </span>
      <span className="text-sm font-bold text-white font-jost tracking-[0.02em] leading-5">
        {value}
      </span>
    </div>
  );
}
