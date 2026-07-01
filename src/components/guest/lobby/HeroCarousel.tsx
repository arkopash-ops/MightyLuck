"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/image/lobby/3d-cartoon-king-character-holding-a-gift-box.png",
    title: "250% WELCOME BONUS!",
    subtitle: (
      <>
        Get <span className="text-[#FFD85A] font-bold">LUCKY</span> with our
        exclusive
      </>
    ),
  },
  {
    image: "/image/lobby/3d-cartoon-king-character-holding-a-gift-box.png",
    title: "100 FREE SPINS!",
    subtitle: (
      <>
        Claim your <span className="text-[#FFD85A] font-bold">REWARDS</span>{" "}
        today
      </>
    ),
  },
  {
    image: "/image/lobby/3d-cartoon-king-character-holding-a-gift-box.png",
    title: "UP TO ₹50,000 BONUS",
    subtitle: (
      <>
        Join and start <span className="text-[#FFD85A] font-bold">WINNING</span>
      </>
    ),
  },
];

export default function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-4 w-full max-w-[1136px] mx-auto px-4">
      {/* Banner Frame */}
      <div className="relative w-full h-[180px] sm:h-[240px] md:h-[356px] overflow-hidden rounded-[10px] md:rounded-[20px]">
        {/* Slides Track */}
        <div
          className="flex h-full transition-transform duration-700 ease-out"
          style={{
            transform: `translateX(-${active * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative min-w-full h-full overflow-hidden"
            >
              {/* Background */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-cover"
              />

              {/* Ellipse 9 */}
              <div className="absolute hidden md:block w-[194px] h-[194px] left-[198px] top-[224px] rounded-full bg-[#103686] blur-[25px] z-[1]" />

              {/* Ellipse 7 (main background glow) */}
              <div className="absolute w-[160px] h-[160px] sm:w-[300px] sm:h-[300px] md:w-[575px] md:h-[575px] left-[-40px] sm:left-[-80px] md:left-[-161px] top-[-30px] sm:top-[-60px] md:top-[-102px] rounded-full bg-[#03123C] md:bg-[#06102B] blur-[25px] md:blur-[75px] z-[1]" />

              {/* Ellipse 8 */}
              <div className="absolute hidden md:block w-[129px] h-[129px] left-[900px] top-[220px] rounded-full bg-[#010A25] blur-[25px] z-[1]" />

              {/* Content */}
              <div className="absolute z-[2] left-4 sm:left-6 md:left-[40px] top-1/2 -translate-y-1/2 flex flex-col gap-3 md:gap-6">
                <div className="flex flex-col gap-1 max-w-[260px] sm:max-w-[320px] md:max-w-[457px]">
                  <p className="font-jost font-medium text-[12px] sm:text-[16px] md:text-[28px] leading-snug md:leading-[40px] text-white">
                    {slide.subtitle}
                  </p>

                  <h1 className="font-jost font-extrabold text-[18px] sm:text-[24px] md:text-[48px] leading-tight text-white">
                    {slide.title}
                  </h1>
                </div>

                <button className="flex items-center justify-center w-[90px] sm:w-[100px] md:w-[110px] h-[32px] sm:h-[36px] md:h-[40px] rounded-[6px] md:rounded-[8px] bg-[#FFBF1F] hover:bg-[#F4B400] text-[#1A1404] font-manrope font-bold text-[11px] sm:text-[13px] md:text-[14px] tracking-[0.02em] cursor-pointer">
                  Join Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center">
        <div className="flex items-center gap-2 h-[6px]">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`rounded-full bg-[#D2DCF7] transition-all duration-300 ${
                active === index ? "w-[12px] h-[6px]" : "w-[6px] h-[6px]"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
