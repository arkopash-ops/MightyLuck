"use client";

import { useState } from "react";

import DepositModel from "./DepositModel";
import BonusModel from "./BonusModel";
import WithdrawModel from "./WithdrawModel";
import TransactionModel from "./TransactionModel";

const tabs: string[] = ["Deposit", "Bonuses", "Withdraw", "Transactions"];

interface WalletTabsProps {
  setModalHeight: (height: number) => void;
}

export default function WalletTabs({ setModalHeight }: WalletTabsProps) {
  const [activeTab, setActiveTab] = useState("Deposit");

  const renderTabContent = () => {
    switch (activeTab) {
      case "Deposit":
        return <DepositModel setModalHeight={setModalHeight} />;
      case "Bonuses":
        return <BonusModel />;
      case "Withdraw":
        return <WithdrawModel />;
      case "Transactions":
        return <TransactionModel />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="grid grid-cols-4 gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`h-[30px] rounded-md text-[12px] font-bold transition-colors cursor-pointer
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

      <div className="mt-4">{renderTabContent()}</div>
    </div>
  );
}
