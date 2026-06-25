"use client";

import { useEffect, useState } from "react";
import { WithdrawModelProps } from "@/types/wallet";
import Image from "next/image";

const withdrawMethods = [
  {
    id: "crypto",
    title: "Crypto Wallet",
    logo: "/svg/wallet/bitcoin.svg",
    activeLogo: "/svg/wallet/bitcoin-1.svg",
  },
  {
    id: "bank",
    title: "Bank Transfer",
    logo: "/svg/wallet/visa.svg",
    activeLogo: "/svg/wallet/visa-1.svg",
  },
  {
    id: "upi",
    title: "UPI",
    logo: "/svg/wallet/scan.svg",
    activeLogo: "/svg/wallet/scan-1.svg",
  },
];

export default function WithdrawModel({ setModalHeight }: WithdrawModelProps) {
  useEffect(() => {
    setModalHeight(500);
  }, [setModalHeight]);

  const [selectedMethodId, setSelectedMethodId] = useState("crypto");
  const [openMethod, setOpenMethod] = useState(false);

  const selectedMethod =
    withdrawMethods.find((m) => m.id === selectedMethodId) ??
    withdrawMethods[0];

  return (
    <div className="w-[460px] p-4 bg-[#0C1F56] rounded-2xl flex flex-col gap-4">
      {/* Balance */}
      <div className="bg-[#112F82] rounded-xl p-4">
        <p className="text-xs text-[#BBCAF3]">Available Balance</p>
        <h2 className="text-[28px] font-bold text-white">$1,250.00</h2>
      </div>

      {/* Withdrawal Method */}
      <div className="flex flex-col gap-2">
        <p className="mb-2 text-[12px] font-semibold text-[#BBCAF3] tracking-[0.02em]">
          Withdrawal Method
        </p>

        <div className="relative w-full">
          <button
            type="button"
            onClick={() => setOpenMethod((v) => !v)}
            className="w-full h-10 px-4 bg-[#112F82] rounded-lg border border-[#1463FF] flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <Image
                src={selectedMethod.activeLogo}
                alt={selectedMethod.title}
                width={16}
                height={16}
              />

              <span className="text-[14px] font-bold text-white">
                {selectedMethod.title}
              </span>
            </div>

            <Image
              src="/svg/sidebar/arrow-down.svg"
              alt="arrow"
              width={14}
              height={14}
              className={`transition-transform ${
                openMethod ? "rotate-180" : ""
              }`}
            />
          </button>

          {openMethod && (
            <div className="absolute left-0 top-[48px] z-50 w-full overflow-hidden rounded-xl border border-[#1463FF] bg-[#0C1F56]">
              <div className="h-8 px-4 flex items-center bg-[#112F82] border-b border-[#1D4EBC]">
                <p className="text-[12px] font-bold text-white">
                  Select withdrawal method
                </p>
              </div>

              {withdrawMethods.map((method) => {
                const active = selectedMethodId === method.id;

                return (
                  <button
                    key={method.id}
                    onClick={() => {
                      setSelectedMethodId(method.id);
                      setOpenMethod(false);
                    }}
                    className={`w-full h-[40px] px-4 flex items-center gap-3 text-left
              ${active ? "bg-[#1463FF]" : "bg-[#112F82] hover:bg-[#0F2A70]"}`}
                  >
                    <Image
                      src={active ? method.activeLogo : method.logo}
                      alt={method.title}
                      width={16}
                      height={16}
                    />

                    <span
                      className={`text-[12px] font-bold ${
                        active ? "text-white" : "text-[#A5B8EF]"
                      }`}
                    >
                      {method.title}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Amount */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-[#BBCAF3]">Amount</label>

          <input
            type="number"
            placeholder="Enter amount"
            className="h-10 px-4 bg-[#112F82] rounded-lg text-white placeholder:text-[#7795E8] outline-none"
          />
        </div>

        {/* Button */}
        <button className="h-10 bg-[#FFC83D] rounded-lg text-sm font-bold text-[#1A1404]">
          Withdraw Funds
        </button>
      </div>
    </div>
  );
}
