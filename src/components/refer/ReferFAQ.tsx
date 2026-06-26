"use client";

import { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    q: "How do I invite a friend?",
    a: "In order to participate in the Refer A Friend campaign, as a referrer you need to have an active account at Wild and have at least $50 (or currency equivalent) deposited. Multiple deposits can be summed up in order to meet the minimum deposit requirement.",
  },
  {
    q: "When will I receive my referral bonus?",
    a: "Your referral bonus will be credited automatically once your referred friend meets all the campaign requirements, including completing the minimum deposit and any applicable wagering conditions.",
  },
  {
    q: "Is there a limit to how many friends I can invite?",
    a: "No, you can invite as many friends as you'd like. However, each referral must be a unique, eligible player who fulfills all campaign requirements before any rewards are issued.",
  },
];

export default function ReferFAQ() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="flex flex-col gap-[14.81px] md:gap-[20px] w-full">
      <h2 className="text-white font-extrabold text-[16px] md:text-[20px] leading-[23px] md:leading-[29px] tracking-[0.01em]">
        FAQs
      </h2>
      <div className="flex flex-col gap-[16px] w-full">
        {faqs.map((faq, i) => {
          const isOpen = openFaq === i;
          return (
            <div key={i} className="w-full bg-[#0C1F56] rounded-[8px]">
              <button
                onClick={() => setOpenFaq(isOpen ? -1 : i)}
                className="w-full flex items-start justify-between px-[20px] md:px-[40px] py-[20px] md:py-[32px] gap-[16px]"
              >
                <span className="text-white font-extrabold text-[16px] md:text-[20px] leading-[23px] md:leading-[29px] tracking-[0.01em] text-left">
                  {faq.q}
                </span>
                <div className="w-[20px] h-[20px] shrink-0 flex items-center justify-center">
                  <Image
                    src={
                      isOpen ? "/svg/refer/minus.svg" : "/svg/refer/plus.svg"
                    }
                    alt=""
                    width={20}
                    height={20}
                  />
                </div>
              </button>
              {isOpen && (
                <div className="px-[20px] md:px-[40px] pb-[20px] md:pb-[32px]">
                  <p className="text-[#A5B8EF] font-medium text-[14px] md:text-[16px] leading-[160%]">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
