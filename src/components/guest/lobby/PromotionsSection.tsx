"use client";

import Image from "next/image";
import { useState } from "react";

const promotions = [
  {
    title: "150% RELOAD BONUS + 50 FREE SPINS",
    image: "/image/promotion/lion-with-thunder-orb.png",
  },
  {
    title: "100% Welcome Bonus + 100 Free Spins",
    image: "/image/promotion/777-slot.png",
  },
  {
    title: "Claim Up to ₹25,000 Casino Bonus",
    image: "/image/promotion/lion-with-thunder-orb.png",
  },
  {
    title: "Weekend Reload: 200% Bonus + 75 Free Spins",
    image: "/image/promotion/777-slot.png",
  },
];

const CARD_WIDTH = 560;
const GAP = 12;
const STEP = CARD_WIDTH + GAP;

export default function PromotionsSection() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((p) => (p >= promotions.length - 2 ? 0 : p + 1));
  };

  const prev = () => {
    setIndex((p) => (p <= 0 ? promotions.length - 2 : p - 1));
  };

  return (
    <section className="w-full flex justify-center">
      <div className="flex flex-col gap-[20px] w-full max-w-[1704px]">
        {/* HEADER */}
        <div className="flex justify-between items-center w-full md:w-[1136px]">
          <div className="flex items-center gap-[12px]">
            <Image
              src="/svg/game/promotion.svg"
              alt="promo"
              width={30}
              height={30}
            />

            <h2 className="text-white font-jost font-extrabold text-[16px] md:text-[20px]">
              PROMOTIONS
            </h2>
          </div>

          {/* arrows */}
          <div className="hidden md:flex items-center gap-[8px]">
            <button
              onClick={prev}
              className="w-[30px] h-[30px] rounded-[4px] bg-[#112F82] opacity-40 flex items-center justify-center hover:opacity-100 transition-opacity"
            >
              <Image
                src="/svg/game/left.svg"
                alt="prev"
                width={6}
                height={10}
              />
            </button>

            <button
              onClick={next}
              className="w-[30px] h-[30px] rounded-[4px] bg-[#112F82] opacity-40 flex items-center justify-center hover:opacity-100 transition-opacity"
            >
              <Image
                src="/svg/game/right.svg"
                alt="next"
                width={6}
                height={10}
              />
            </button>
          </div>
        </div>

        {/* CAROUSEL WRAP */}
        <div className="w-full overflow-hidden">
          {/* desktop slider */}
          <div
            className="hidden md:flex gap-[12px] transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${index * STEP}px)`,
            }}
          >
            {promotions.map((item, i) => (
              <div
                key={i}
                className="relative flex-shrink-0 w-[560px] h-[220px] rounded-[16px] overflow-hidden"
              >
                {/* IMAGE */}
                {item.image.includes("777-slot") ? (
                  <div className="absolute right-[-20px] sm:right-[-30px] bottom-[-20px] sm:bottom-[-30px] w-[300px] sm:w-[400px] h-[200px] sm:h-[280px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                )}

                <div className="absolute inset-0 bg-[linear-gradient(90deg,#091741_21.96%,rgba(9,23,65,0)_60.27%)]" />

                <div className="absolute left-[-60px] top-[-60px] w-[160px] h-[160px] bg-[#1463FF] blur-[50px] rounded-full" />

                <div className="absolute top-[53px] left-[24px] right-[246px] flex flex-col gap-[16px]">
                  <h3 className="text-white font-jost font-extrabold text-[24px] leading-[120%]">
                    {item.title}
                  </h3>

                  <button className="w-[110px] h-[40px] bg-[#FFC83D] hover:bg-[#F4B400] rounded-[8px] flex items-center justify-center cursor-pointer">
                    <span className="text-[#1A1404] font-manrope font-bold text-[14px]">
                      Join
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* mobile scrolling */}
          <div className="flex md:hidden gap-[8px] overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2">
            {promotions.map((item, i) => (
              <div
                key={i}
                className="relative flex-shrink-0 w-[280px] h-[180px] rounded-[16px] overflow-hidden snap-start"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-[linear-gradient(90deg,#091741_21.96%,rgba(9,23,65,0)_60.27%)]" />

                <div className="absolute left-[-40px] top-[-40px] w-[120px] h-[120px] bg-[#1463FF] blur-[40px] rounded-full" />

                {/* PIXEL PERFECT MOBILE CONTENT */}
                <div className="absolute top-[32.73px] bottom-[32.73px] left-[17.78px] right-[119.22px] flex flex-col justify-between">
                  <h3 className="text-white font-jost font-extrabold text-[16px] leading-[120%]">
                    {item.title}
                  </h3>

                  <button className="w-[90px] h-[34px] bg-[#FFC83D] rounded-[8px] flex items-center justify-center">
                    <span className="text-[#1A1404] font-manrope font-bold text-[12px]">
                      Join
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
