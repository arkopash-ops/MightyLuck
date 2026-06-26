import Image from "next/image";

const whatYouGet = [
  {
    title: "Lifetime earnings from each deposit",
    desc: "You get a percentage of every deposit your friends complete.",
    icon: "/svg/refer/money-g.svg",
    width: 20,
    height: 20,
  },
  {
    title: "Instant crediting",
    desc: "Your income is credited a few minutes after your friend's deposit is completed.",
    icon: "/svg/refer/thunder-g.svg",
    width: 13.92,
    height: 20,
  },
  {
    title: "No limits for earnings",
    desc: "Your earnings are not capped. Sky (and your friend's wallet) is the limit!",
    icon: "/svg/refer/infinity-g.svg",
    width: 20,
    height: 9.92,
  },
];

const whatFriendGets = [
  {
    title: "Lifetime earnings from each deposit",
    desc: "You get a percentage of every deposit your friends complete.",
    icon: "/svg/refer/money-b.svg",
    width: 20,
    height: 20,
  },
  {
    title: "Instant crediting",
    desc: "Your income is credited a few minutes after your friend's deposit is completed.",
    icon: "/svg/refer/thunder-b.svg",
    width: 13.92,
    height: 20,
  },
  {
    title: "No limits for earnings",
    desc: "Your earnings are not capped. Sky (and your friend's wallet) is the limit!",
    icon: "/svg/refer/infinity-b.svg",
    width: 20,
    height: 9.92,
  },
];

function BenefitCard({
  title,
  items,
  glowColor,
}: {
  title: string;
  items: {
    title: string;
    desc: string;
    icon: string;
    width: number;
    height: number;
  }[];
  accentColor: string;
  glowColor: string;
}) {
  return (
    <div className="flex-1 bg-[#0C1F56] rounded-[16px] p-[32px_40px] flex flex-col gap-[24px] relative overflow-hidden isolation-isolate md:h-[391px]">
      <div
        className="absolute w-[182px] h-[182px] rounded-full blur-[60px] left-[calc(50%-182px/2-241px)] -top-[97px] z-0"
        style={{ background: glowColor }}
      />
      <h2 className="text-white font-extrabold text-[20px] leading-[29px] tracking-[0.01em] relative z-[1]">
        {title}
      </h2>
      <div className="flex flex-col gap-[20px] relative z-[2]">
        {items.map((item, i) => (
          <div key={i} className="flex gap-[16px]">
            <div className="w-[20px] h-[20px] shrink-0 mt-[2px]">
              <Image
                src={item.icon}
                alt={item.title}
                width={item.width}
                height={item.height}
              />
            </div>
            <div className="flex flex-col gap-[4px]">
              <span className="text-white font-bold text-[16px] leading-[22px] tracking-[0.01em]">
                {item.title}
              </span>
              <span className="text-[#A5B8EF] font-medium text-[16px] leading-[160%]">
                {item.desc}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ReferBenefits() {
  return (
    <div className="flex flex-col md:flex-row gap-[12px] w-full">
      <BenefitCard
        title="WHAT YOU GET"
        items={whatYouGet}
        accentColor="#57FF3D"
        glowColor="#57FF3D"
      />
      <BenefitCard
        title="WHAT YOUR FRIEND GETS"
        items={whatFriendGets}
        accentColor="#1463FF"
        glowColor="#1463FF"
      />
    </div>
  );
}
