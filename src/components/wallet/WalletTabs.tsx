"use client";

import { useState } from "react";

import DepositModel from "./desktop/DepositModel";
import BonusModel from "./desktop/BonusModel";
import WithdrawModel from "./desktop/WithdrawModel";
import TransactionModel from "./desktop/TransactionModel";
import { WalletTabsProps } from "@/types/wallet";

const tabs: string[] = ["Deposit", "Bonuses", "Withdraw", "Transactions"];

export default function WalletTabs({ setModalHeight }: WalletTabsProps) {
  const [activeTab, setActiveTab] = useState("Deposit");

  const renderTabContent = () => {
    switch (activeTab) {
      case "Deposit":
        return <DepositModel setModalHeight={setModalHeight} />;
      case "Bonuses":
        return <BonusModel setModalHeight={setModalHeight} />;
      case "Withdraw":
        return <WithdrawModel setModalHeight={setModalHeight} />;
      case "Transactions":
        return <TransactionModel setModalHeight={setModalHeight} />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-4 gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`h-[30px] rounded-md text-[12px] font-bold transition-colors cursor-pointer tracking-[0.02em]
              ${
                activeTab === tab
                  ? "bg-[#1463FF] text-white font-bold"
                  : "bg-[#112F82] text-[#A5B8EF] font-semibold"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-4 flex justify-center md:justify-start">{renderTabContent()}</div>
    </div>
  );
}
