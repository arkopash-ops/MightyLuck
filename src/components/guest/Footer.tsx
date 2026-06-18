import Image from "next/image";

const footerLinks = [
  {
    title: "Slot Games",
    items: ["Slots", "Skill Games", "Jackpot", "Bonus Buy", "Crash Games"],
  },
  {
    title: "Live Casino",
    items: [
      "Roulette",
      "Blackjack",
      "Live Casino",
      "Table Games",
      "Video Poker",
    ],
  },
  {
    title: "Casino",
    items: [
      "About Us",
      "Promotions",
      "Tournaments",
      "Affiliate Program",
      "Vip Club",
      "Refer a Friend",
      "Blog",
      "Bonus Shop",
    ],
  },
  {
    title: "Legal",
    items: [
      "Privacy Policy",
      "Terms & Conditions",
      "Bonus Terms",
      "Responsible Gambling",
      "Payment Methods",
      "Sportsbook Rules",
    ],
  },
  {
    title: "Support",
    items: ["Live Support"],
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#091741]">
      <div className="max-w-[1136px] mx-auto flex flex-col gap-[48px]">
        {/* Top row */}
        <div className="flex justify-between items-start pt-0">
          {/* Logo + copyright */}
          <div className="flex flex-col gap-4 w-[213px]">
            <Image
              src="/svg/footer/logo.svg"
              alt="Mighty Luck"
              width={132}
              height={50}
            />
            <p className="text-[#D2DCF7] font-manrope font-semibold text-[11px] leading-[15px] tracking-[0.01em]">
              @ 2026 Mighty Luck. All rights reserved.
            </p>
          </div>

          {/* Nav columns */}
          <div className="flex gap-8">
            {footerLinks.map((col) => (
              <div key={col.title} className="flex flex-col gap-3 w-[120px]">
                <span className="text-white font-jost font-bold text-[12px] leading-[17px] tracking-[0.02em] uppercase">
                  {col.title}
                </span>
                <div className="flex flex-col gap-2">
                  {col.items.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="text-[#D2DCF7] font-manrope font-semibold text-[11px] leading-[15px] tracking-[0.01em] hover:text-white"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-[#112F82] pt-[48px] pb-10 flex justify-between items-start">
          <p className="text-[#D2DCF7] font-manrope font-semibold text-[10px] leading-[14px] text-justify tracking-[0.01em] max-w-[445px]">
            MightyLuck.com is owned and operated by Company Name B.V. a company
            that is incorporated under the laws of Curacao with company
            registration number XXXXXX, having its registered address at Street
            3XX9, City, Curaçao. MightyLuck.com is licensed and holds a valid
            Certificate of Operation (ABC/XXXX/XXX/XXXX).
          </p>

          <div className="flex items-center gap-8">
            <Image
              src="/svg/footer/18Plus.svg"
              alt="18+"
              width={38}
              height={38}
            />
            <Image
              src="/svg/footer/gamble-aware.svg"
              alt="Gamble Aware"
              width={120}
              height={24}
            />
            <div className="bg-[#20082E] rounded-sm p-1">
              <Image
                src="/svg/footer/license.svg"
                alt="Gaming License"
                width={66}
                height={38}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
