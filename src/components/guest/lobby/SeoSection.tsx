"use client";
import { useState } from "react";
import Image from "next/image";

const icons = [
  { name: "bitcoin", width: 13.38, height: 18.39 },
  { name: "ether", width: 11.3, height: 18.09 },
  { name: "tether", width: 19.09, height: 17.73 },
  { name: "tron", width: 18.1, height: 19.05 },
  { name: "xrp", width: 21.4, height: 17.7 },
  { name: "binance", width: 18.14, height: 18.14 },
  { name: "dogecoin", width: 15, height: 16.36 },
  { name: "litecoin", width: 14.09, height: 17.27 },
  { name: "catcoin", width: 17.09, height: 18.56 },
  { name: "sandcoin", width: 14.2, height: 17.52 },
  { name: "polygon", width: 19.89, height: 17.52 },
];

export default function SeoSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-full bg-[#091741] py-[40px]">
      <div className="w-[1136px] mx-auto flex flex-col items-center">
        {/* Text content */}
        <div className="relative w-[800px]">
          {/* Block 1 — always visible */}
          <div className="flex flex-col gap-[24px] w-[800px] mb-[24px]">
            <h2 className="font-jost font-bold text-[32px] leading-[120%] tracking-[-0.02em] text-white">
              Play the Best Crypto Casino Games Online at Mighty Luck — Fast,
              Fair and Secure
            </h2>
            <p className="font-manrope font-medium text-[16px] leading-[160%] text-[#D2DCF7]">
              Step into a next-generation gaming experience where every spin,
              bet, and hand is powered by blockchain technology. At Mighty Luck
              Casino, you can explore more than 9,000 crypto casino games across
              slots, table games, live dealer games, and crash-style favorites.
              As one of the top crypto casinos online, Mighty Luck gives players
              instant withdrawals, enhanced privacy, and a secure gambling
              environment without the friction of traditional payment methods.
              <br /> <br />
              Whether you&apos;re here to play table games, explore Bitcoin
              casino games, or try the latest provably fair slots, Mighty Luck
              delivers one of the most complete online casino experiences
              available today.
              <br /> <br />
              Ready to play games and win real crypto?
              <br /> <br />
              Start playing crypto casino games at Mighty Luck Casino.
            </p>
          </div>

          {/* Block 2 — always visible */}
          <div className="flex flex-col gap-[16px] w-[800px] mb-[24px]">
            <h3 className="font-jost font-bold text-[24px] leading-[35px] text-white">
              Why Mighty Luck Is the Ultimate Place to Play Crypto Casino Games
            </h3>
            <p className="font-manrope font-medium text-[16px] leading-[160%] text-[#D2DCF7]">
              Mighty Luck Casino offers the perfect blend of crypto gambling
              convenience, online casino entertainment, and world-class
              security. Compared to traditional online casinos, Mighty Luck
              delivers significantly faster payouts, more generous bonuses, and
              an unmatched selection of various games.
            </p>
          </div>

          {/* Block 3 — collapsed by default */}
          <div
            className="overflow-hidden transition-all duration-300"
            style={{ maxHeight: expanded ? "200px" : "80px" }}
          >
            <div className="flex flex-col gap-[16px] w-[800px]">
              <h3 className="font-jost font-bold text-[24px] leading-[35px] text-white">
                Massive Game Variety
              </h3>
              <p className="font-manrope font-medium text-[16px] leading-[160%] text-[#D2DCF7]">
                With more than 9,000 casino games, Mighty Luck outshines many
                crypto casinos and traditional casinos alike. You&apos;ll find
                slots, live dealer tables, crash games, and original titles —
                all in one place.
              </p>
            </div>
          </div>

          {/* Gradient + Read more — shown when collapsed */}
          {!expanded && (
            <div
              className="absolute bottom-0 left-0 right-0 h-[32px] flex items-end justify-center pb-1 pointer-events-none"
              style={{
                background:
                  "linear-gradient(0deg, #091741 0%, rgba(9, 23, 65, 0) 100%)",
              }}
            >
              <button
                onClick={() => setExpanded(true)}
                className="pointer-events-auto flex items-center gap-[4px] text-[#FFBF1F] font-manrope font-semibold text-[14px] leading-[19px] tracking-[0.01em]"
              >
                Read more
                <Image
                  src="/svg/game/down.svg"
                  alt="down"
                  width={8}
                  height={10}
                />
              </button>
            </div>
          )}
        </div>

        {/* Crypto icons bar */}
        <div className="relative w-full h-[100px] border-b border-[#112F82] flex items-center justify-center overflow-hidden mt-8">
          <div className="absolute w-[390px] h-[390px] left-1/2 -translate-x-1/2 top-[77px] rounded-full bg-[#1463FF] blur-[50px] z-0" />
          <div className="relative z-[1] flex items-center gap-[28px]">
            {icons.map((icon) => (
              <Image
                key={icon.name}
                src={`/svg/crypto/${icon.name}.svg`}
                alt={icon.name}
                width={icon.width}
                height={icon.height}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
