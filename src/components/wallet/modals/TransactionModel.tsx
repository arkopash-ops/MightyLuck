"use client";

import { useEffect, useState } from "react";
import { TransactionModelProps } from "@/types/wallet";
import { transactions } from "@/data/wallet";
import Image from "next/image";

const tabs = ["All", "Deposit", "Withdraw", "Bonus"];

export default function TransactionModel({
  setModalHeight,
}: TransactionModelProps) {
  const [activeTab, setActiveTab] = useState("All");

  useEffect(() => {
    setModalHeight(669);
  }, [setModalHeight]);

  const filteredTransactions =
    activeTab === "All"
      ? transactions
      : transactions.filter((item) => item.type === activeTab);

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-[#073208] text-[#00E806]";

      case "Confirming":
      case "Pending review":
        return "bg-[#3E2A09] text-[#FFBF1F]";

      case "Active":
        return "bg-[#1463FF] text-white";

      default:
        return "bg-[#112F82] text-[#A5B8EF]";
    }
  };

  return (
    <div className="w-[460px] h-[514px] bg-[#0C1F56] rounded-2xl px-4 py-5 flex flex-col gap-4">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <h2 className="text-sm font-bold tracking-[0.02em] text-white">
          Transactions
        </h2>

        <p className="text-xs font-medium tracking-[0.02em] text-[#A5B8EF]">
          Recent wallet activity
        </p>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-4 gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`h-[30px] rounded-md text-xs font-semibold tracking-[0.02em] transition
              ${
                activeTab === tab
                  ? "bg-[#1463FF] text-white"
                  : "bg-[#112F82] text-[#A5B8EF]"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Transactions */}
      <div className="flex-1 overflow-y-auto pr-1 flex flex-col gap-2 custom-scrollbar">
        {filteredTransactions.map((item, index) => (
          <div
            key={index}
            className="h-[62px] bg-[#112F82] rounded-lg px-4 py-[10px] flex items-center justify-between gap-3 transition hover:bg-[#1463FF] cursor-pointer"
          >
            {/* Left */}
            <div className="flex items-center gap-3 flex-1">
              <div className="w-10 h-10 rounded-lg bg-[#0C1F56] flex items-center justify-center">
                <Image src={item.icon} alt={item.type} width={16} height={16} />
              </div>

              <div className="flex flex-col justify-center gap-1 flex-1">
                <p className="text-sm font-bold tracking-[0.02em] text-white">
                  {item.type}
                </p>

                <p className="text-[10px] font-semibold tracking-[0.02em] text-[#BBCAF3]">
                  {item.date}
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col items-end gap-1">
              <p
                className={`text-xs font-bold tracking-[0.02em]
                  ${
                    item.amount.startsWith("+")
                      ? "text-[#00E806]"
                      : "text-white"
                  }`}
              >
                {item.amount}
              </p>

              <div
                className={`px-2 py-1 rounded-md text-[10px] font-semibold tracking-[0.02em] ${getStatusStyle(
                  item.status,
                )}`}
              >
                {item.status}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
