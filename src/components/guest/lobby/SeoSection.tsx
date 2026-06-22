"use client";
import { useState } from "react";
import Image from "next/image";

export default function SeoSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-full bg-[#091741] py-[40px]">
      <div className="w-full max-w-[1136px] mx-auto px-4 md:px-0 flex flex-col items-center">
        {/* Text content */}
        <div className="relative w-full md:w-[800px]">
          {/* Block 1 */}
          <div className="flex flex-col gap-[24px] w-full md:w-[800px] mb-[24px]">
            <h2 className="font-jost font-bold text-[22px] md:text-[32px] leading-[120%] tracking-[-0.02em] text-white">
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

          {/* Block 2 */}
          <div className="flex flex-col gap-[16px] w-full md:w-[800px] mb-[24px]">
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

          {/* Block 3 */}
          <div
            className="overflow-hidden transition-all duration-300"
            style={{ maxHeight: expanded ? "200px" : "80px" }}
          >
            <div className="flex flex-col gap-[16px] w-full md:w-[800px]">
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

          {/* shown when collapsed */}
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
      </div>
    </div>
  );
}
