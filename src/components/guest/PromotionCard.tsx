import Image from "next/image";

export default function PromotionCard() {
  return (
    <div className="w-[232px] h-[134px] bg-[#0C1F56] rounded-[16px]">
      <div className="p-[16px] flex flex-col gap-[8px]">
        {/* Top Row */}
        <div className="flex w-[200px] h-[44px] gap-[4px]">
          {/* Refer a Friend */}
          <div className="relative w-[98px] h-[44px] rounded-[8px] overflow-hidden bg-[#3B005F] flex items-center px-[8px]">
            <div className="absolute w-[97px] h-[97px] bg-[#A92BF5] blur-[25px] left-[-43px] top-[-15px]" />
            <Image
              src="/svg/sidebar/promotionCard/refer.svg"
              alt="refer"
              width={50}
              height={50}
              className="absolute left-[-1px] z-10"
            />

            <p className="ml-8 text-white font-bold text-[11px] leading-[100%] z-20">
              REFER
              <br />A FRIEND
            </p>
          </div>

          {/* VIP Transfer */}
          <div className="relative w-[98px] h-[44px] rounded-[8px] overflow-hidden bg-[#500039] flex items-center px-[8px]">
            <div className="absolute w-[97px] h-[97px] bg-[#FF3981] blur-[25px] left-[-40px] top-[-5px]" />

            <Image
              src="/svg/sidebar/promotionCard/crown.svg"
              alt="vip"
              width={55}
              height={55}
              className="absolute left-[-1px] rotate-[4deg] z-10"
            />

            <p className="ml-8 text-white font-bold text-[11px] leading-[100%] z-20">
              VIP
              <br />
              TRANSFER
            </p>
          </div>
        </div>

        {/* Second Row */}
        <div className="relative w-[200px] h-[50px] rounded-[8px] bg-[#091741] overflow-hidden px-[10px] flex items-center">
          <div className="absolute w-[110px] h-[110px] bg-[#1463FF] blur-[25px] left-[-53px] top-[-22px]" />
          <Image
            src="/svg/sidebar/promotionCard/snowflake.svg"
            alt="snow"
            width={70}
            height={70}
            className="absolute left-[-1px] z-10"
          />

          {/* Winter Rush */}
          <div className="ml-[55px] z-20">
            <h3 className="text-white italic font-black text-[16px] leading-[14px]">
              WINTER RUSH
            </h3>
            <p className="mt-[2px] text-white italic font-bold text-[12px] leading-[14px]">
              $2,000,000 IN PRIZES
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
