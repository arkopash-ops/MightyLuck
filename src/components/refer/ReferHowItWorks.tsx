import Image from "next/image";

const steps = [
  "/image/refer/invite-1.png",
  "/image/refer/invite-2.png",
  "/image/refer/invite-3.png",
];

export default function ReferHowItWorks() {
  return (
    <div className="flex flex-col gap-[12px] md:gap-[32px] w-full">
      <div className="flex items-center gap-[7.2px] md:gap-[12px]">
        <Image
          src="/svg/refer/referral-program.svg"
          alt=""
          width={18}
          height={18}
          className="md:w-[22px] md:h-[22px]"
        />
        <h2 className="text-white font-extrabold text-[16px] md:text-[20px] leading-[23px] md:leading-[29px] tracking-[0.01em]">
          HOW REFERRAL PROGRAM WORKS
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-[12px] w-full">
        {steps.map((i) => (
          <div
            key={i}
            className="relative w-full md:flex-1 h-[220px] rounded-[16px] p-[24px] flex flex-col justify-between overflow-hidden"
            style={{
              background: `url('${i}') center/cover no-repeat`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
