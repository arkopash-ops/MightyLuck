"use client";

import { useEffect } from "react";
import { TransactionModelProps } from "@/types/wallet";
import { transactions } from "@/data/wallet";

export default function TransactionModel({
  setModalHeight,
}: TransactionModelProps) {
  useEffect(() => {
    setModalHeight(520);
  }, [setModalHeight]);

  return (
    <div className="w-[460px] p-4 bg-[#0C1F56] rounded-2xl flex flex-col gap-4">
      {/* Header */}
      <div>
        <h3 className="text-white font-bold text-lg">Transaction History</h3>

        <p className="text-xs text-[#BBCAF3]">
          View your latest wallet activity
        </p>
      </div>

      {/* Transactions */}
      <div className="flex flex-col gap-2">
        {transactions.map((item, index) => (
          <div
            key={index}
            className="bg-[#112F82] rounded-xl p-4 flex items-center justify-between"
          >
            <div>
              <p className="text-white text-sm font-semibold">{item.type}</p>

              <p className="text-xs text-[#BBCAF3]">{item.date}</p>
            </div>

            <div className="text-right">
              <p className="text-white font-bold">{item.amount}</p>

              <span
                className={`text-xs ${
                  item.status === "Completed"
                    ? "text-green-400"
                    : "text-yellow-400"
                }`}
              >
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
