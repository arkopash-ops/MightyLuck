"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import ReactCountryFlag from "react-country-flag";

import { countries } from "@/data/country";
import { bonusOptions, paymentOption } from "@/data/wallet";
import { useRouter } from "next/navigation";

interface DepositModelProps {
  setModalHeight: (height: number) => void;
}

export default function DepositModel({ setModalHeight }: DepositModelProps) {
  const MIN_USD = 10;
  const MAX_USD = 1000000;

  const amounts = [30, 50, 100];

  const MIN_CUSTOM = 30;
  const MAX_CUSTOM = 2500;

  const router = useRouter();

  // bonus dropdown
  const [openBonus, setOpenBonus] = useState(false);
  const [selectedBonusId, setSelectedBonusId] = useState(bonusOptions[0].id);

  // payment dropdown
  const [openPayment, setOpenPayment] = useState(false);
  const [selectedPaymentId, setSelectedPaymentId] = useState(
    paymentOption[0].id,
  );

  // card steps
  const [cardStep, setCardStep] = useState<"address" | "payment">("address");

  // deposit step
  const [depositStep, setDepositStep] = useState<"form" | "processing">("form");

  // select payment amount
  const [selectedAmount, setSelectedAmount] = useState<number>(30);
  const [customAmount, setCustomAmount] = useState("");

  // USD to BTC
  const [usd, setUsd] = useState("10");

  // country dropdown
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [openCountry, setOpenCountry] = useState(false);

  useEffect(() => {
    if (depositStep === "processing") {
      setModalHeight(532);
    } else if (selectedPaymentId === "card" && cardStep === "payment") {
      setModalHeight(647);
    } else {
      setModalHeight(633);
    }
  }, [depositStep, selectedPaymentId, cardStep, setModalHeight]);

  const selectedBonus = bonusOptions.find((o) => o.id === selectedBonusId)!;

  const selectedPayment = paymentOption.find(
    (o) => o.id === selectedPaymentId,
  )!;

  const usdToBtc = (usd: number): number => {
    const BTC_PER_USD = 0.000016;
    return usd * BTC_PER_USD;
  };

  const handleUSDChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value === "") {
      setUsd("");
      return;
    }

    const numeric = Number(value);

    if (!isNaN(numeric) && numeric <= MAX_USD) {
      setUsd(value);
    }
  };

  const handleUSDBlur = () => {
    const numeric = Number(usd);

    if (isNaN(numeric)) {
      setUsd(String(MIN_USD));
      return;
    }

    if (numeric < MIN_USD) {
      setUsd(String(MIN_USD));
      return;
    }

    if (numeric > MAX_USD) {
      setUsd(String(MAX_USD));
      return;
    }
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value === "") {
      setCustomAmount("");
      return;
    }

    const numeric = Number(value);

    if (!isNaN(numeric) && numeric <= MAX_CUSTOM) {
      setCustomAmount(value);
      setSelectedAmount(0);
    }
  };

  const handleCustomAmountBlur = () => {
    if (customAmount === "") return;

    const numeric = Number(customAmount);

    if (numeric < MIN_CUSTOM) {
      setCustomAmount(String(MIN_CUSTOM));
      return;
    }

    if (numeric > MAX_CUSTOM) {
      setCustomAmount(String(MAX_CUSTOM));
    }
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <div
        className={`w-[460px] p-4 bg-[#0C1F56] rounded-2xl flex-col relative ${
          depositStep === "form" ? "flex" : "hidden"
        }`}
      >
        {/* bonus selection */}
        <p className="mb-2 text-[12px] font-semibold text-[#BBCAF3] tracking-[0.02em]">
          1. Select a Bonus
        </p>

        <div className="mb-3 relative w-full">
          {/* Trigger */}
          <button
            type="button"
            onClick={() => {
              setOpenBonus((v) => !v);
              setOpenPayment(false);
              setOpenCountry(false);
            }}
            className="w-full h-10 px-4 bg-[#112F82] rounded-lg border border-[#1463FF] flex items-center justify-between cursor-pointer"
          >
            <div className="flex items-center gap-3 min-w-0 flex-1">
              <Image
                src={selectedBonus.activeLogo}
                alt={selectedBonus.title}
                width={16}
                height={16}
              />

              <span className="truncate text-[14px] font-bold text-white leading-[19px] tracking-[0.02em]">
                {selectedBonus.title}
              </span>
            </div>

            <Image
              src="/svg/sidebar/arrow-down.svg"
              alt="arrow"
              width={14}
              height={14}
              className={`shrink-0 transition-transform duration-200 ${
                openBonus ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown */}
          {openBonus && (
            <div className="absolute left-0 top-[48px] z-50 w-full overflow-hidden rounded-xl border border-[#1463FF] bg-[#0C1F56] shadow-xl">
              {/* HEADER */}
              <div className="flex items-center px-4 py-[10px] h-[40px] bg-[#112F82] border-b border-[#1D4EBC]">
                <p className="text-[12px] font-bold text-white tracking-[0.02em]">
                  Choose one bonus on next deposits
                </p>
              </div>

              {/* OPTIONS */}
              {bonusOptions.map((item, index) => {
                const isActive = selectedBonusId === item.id;

                const isLast = index === bonusOptions.length - 1;

                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setSelectedBonusId(item.id);
                      setOpenBonus(false);
                    }}
                    className={`flex items-center justify-start gap-3 px-4 py-[10px] h-[52px] w-full text-left transition cursor-pointer
                      ${isActive ? "bg-[#1463FF]" : "bg-[#112F82] hover:bg-[#0F2A70]"}
                      ${isLast ? "rounded-b-lg h-[36px]" : ""}
                    `}
                  >
                    <Image
                      src={isActive ? item.activeLogo : item.logo}
                      alt={item.title}
                      width={16}
                      height={16}
                    />

                    <div className="flex flex-col gap-[2px]">
                      <span
                        className={`text-[12px] font-bold tracking-[0.02em] ${
                          isActive ? "text-white" : "text-[#A5B8EF]"
                        }`}
                      >
                        {item.title}
                      </span>

                      {item.subtitle && (
                        <span
                          className={`text-[10px] tracking-[0.02em] ${
                            isActive ? "text-white" : "text-[#A5B8EF]"
                          }`}
                        >
                          {item.subtitle}
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* payment method selection */}
        <p className="mb-2 text-[12px] font-semibold text-[#BBCAF3] tracking-[0.02em]">
          2. Select a Payment Method
        </p>

        <div className="mb-3 relative w-full">
          {/* Trigger */}
          <button
            type="button"
            onClick={() => {
              setOpenPayment((v) => !v);
              setOpenBonus(false);
              setOpenCountry(false);
            }}
            className="w-full h-10 px-4 bg-[#112F82] rounded-lg border border-[#1463FF] flex items-center justify-between cursor-pointer"
          >
            <div className="flex items-center gap-2 min-w-0 flex-1">
              <div className="flex items-center gap-1 shrink-0">
                {selectedPayment.activeLogos ? (
                  selectedPayment.activeLogos.map((logo, index) => (
                    <Image
                      key={index}
                      src={logo}
                      alt={selectedPayment.title}
                      width={16}
                      height={16}
                    />
                  ))
                ) : (
                  <Image
                    src={selectedPayment.activeLogo!}
                    alt={selectedPayment.title}
                    width={16}
                    height={16}
                  />
                )}
              </div>

              <div className="flex items-center gap-2 min-w-0">
                <span className="text-[14px] font-bold text-white leading-[19px] tracking-[0.02em] whitespace-nowrap">
                  {selectedPayment.title}
                </span>

                {selectedPayment.subtitle && (
                  <span className="text-[10px] text-[#7795E8] leading-[14px] tracking-[0.02em] truncate">
                    {selectedPayment.subtitle}
                  </span>
                )}
              </div>
            </div>

            <Image
              src="/svg/sidebar/arrow-down.svg"
              alt="arrow"
              width={14}
              height={14}
              className={`shrink-0 transition-transform duration-200 ${
                openPayment ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown */}
          {openPayment && (
            <div className="absolute left-0 top-[48px] z-50 w-full overflow-hidden rounded-xl border border-[#1463FF] bg-[#0C1F56] shadow-xl">
              {/* HEADER */}
              <div className="flex items-center px-4 py-[10px] h-[40px] bg-[#112F82] border-b border-[#1D4EBC]">
                <p className="text-[12px] font-bold text-white tracking-[0.02em]">
                  Choose payment option for deposits
                </p>
              </div>

              {/* OPTIONS */}
              {paymentOption.map((item) => {
                const isActive = selectedPaymentId === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setSelectedPaymentId(item.id);
                      setOpenPayment(false);
                    }}
                    className={`flex items-center justify-start gap-3 px-4 py-[10px] h-[52px] w-full text-left transition cursor-pointer
                      ${isActive ? "bg-[#1463FF]" : "bg-[#112F82] hover:bg-[#0F2A70]"}
                    `}
                  >
                    <div className="flex items-center gap-1">
                      {item.logos ? (
                        (isActive ? item.activeLogos : item.logos).map(
                          (logo, index) => (
                            <Image
                              key={index}
                              src={logo}
                              alt={item.title}
                              width={20}
                              height={20}
                            />
                          ),
                        )
                      ) : (
                        <Image
                          src={isActive ? item.activeLogo : item.logo}
                          alt={item.title}
                          width={20}
                          height={20}
                        />
                      )}
                    </div>

                    <div className="flex flex-col gap-[2px]">
                      <span
                        className={`text-[12px] font-bold tracking-[0.02em] ${
                          isActive ? "text-white" : "text-[#A5B8EF]"
                        }`}
                      >
                        {item.title}
                      </span>

                      {item.subtitle && (
                        <span
                          className={`text-[10px] tracking-[0.02em] ${
                            isActive ? "text-white" : "text-[#A5B8EF]"
                          }`}
                        >
                          {item.subtitle}
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {selectedPaymentId === "crypto" && (
          <>
            {/* warning */}
            <div className="mb-3 flex items-start gap-2">
              <Image
                src="/svg/wallet/warning.svg"
                alt="warning"
                width={12}
                height={12}
                className="mt-[1px] shrink-0"
              />

              <p className="flex-1 text-[10px] font-medium leading-[14px] tracking-[0.02em] text-[#7795E8]">
                Only deposit BC via the Bitcoin network. Deposit of other assets
                or from other networks will be lost.
              </p>
            </div>

            {/* amount calculator */}
            <div className="mb-3 flex flex-col gap-2">
              <p className="text-[12px] font-semibold tracking-[0.02em] text-[#BBCAF3]">
                3. Calculate the amount you want to deposit
              </p>

              <div className="flex items-center gap-2">
                {/* USD */}
                <div className="flex items-center w-[186px] h-10 px-4 bg-[#112F82] rounded-lg overflow-hidden">
                  <div className="flex items-center gap-2 w-full">
                    <Image
                      src="/svg/wallet/dollar.svg"
                      alt="USD"
                      width={16}
                      height={16}
                      className="shrink-0"
                    />

                    <input
                      type="number"
                      min={MIN_USD}
                      value={usd}
                      onChange={handleUSDChange}
                      onBlur={handleUSDBlur}
                      className="w-full bg-transparent outline-none text-white text-[14px] font-bold leading-[19px] tracking-[0.02em] appearance-none"
                    />
                  </div>
                </div>

                {/* Swap Button */}
                <button
                  type="button"
                  className="w-10 h-10 rounded-lg bg-[#1463FF] flex items-center justify-center shrink-0"
                >
                  <Image
                    src="/svg/wallet/swap.svg"
                    alt="swap"
                    width={40}
                    height={40}
                  />
                </button>

                {/* BTC */}
                <div className="flex items-center w-[186px] h-10 px-4 bg-[#112F82] rounded-lg">
                  <div className="flex items-center gap-2 w-full">
                    <Image
                      src="/svg/wallet/bitcoin-1.svg"
                      alt="BTC"
                      width={16}
                      height={16}
                      className="shrink-0"
                    />

                    <div className="flex-1 overflow-x-auto whitespace-nowrap scrollbar-hide">
                      <span className="text-white text-[14px] font-bold leading-[19px] tracking-[0.02em]">
                        {usdToBtc(Number(usd)).toFixed(5)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-[12px] font-semibold tracking-[0.02em] text-[#BBCAF3]">
                4. BTC Deposit Address
              </p>

              <div className="flex items-center h-10 px-4 bg-[#112F82] rounded-lg">
                <input
                  type="text"
                  placeholder="bc1q7ndh47hf93rdhuhef873hheufhe447..."
                  className="flex-1 bg-transparent outline-none text-[14px] font-semibold leading-[19px] tracking-[0.02em] text-white placeholder:text-[#7795E8]"
                />

                <div className="flex items-center gap-3 ml-3 shrink-0">
                  <button type="button" className="cursor-pointer">
                    <Image
                      src="/svg/wallet/copy.svg"
                      alt="Copy Address"
                      width={16}
                      height={16}
                    />
                  </button>

                  <button type="button" className="cursor-pointer">
                    <Image
                      src="/svg/wallet/scan.svg"
                      alt="Scan QR"
                      width={16}
                      height={16}
                    />
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        {selectedPaymentId === "card" && cardStep === "address" && (
          <>
            <div className="flex flex-col gap-3 w-full">
              <p className="text-[12px] font-semibold leading-4 tracking-[0.02em] text-[#BBCAF3]">
                3. Enter your address
              </p>

              {/* Warning */}
              <div className="flex items-start gap-2">
                <Image
                  src="/svg/wallet/warning.svg"
                  alt="warning"
                  width={12}
                  height={12}
                  className="mt-[1px] shrink-0"
                />

                <p className="text-[10px] font-medium leading-[14px] tracking-[0.02em] text-[#7795E8]">
                  Please fill up your address details before completing your
                  deposit. This information is required for credit card
                  deposits.
                </p>
              </div>

              {/* Form */}
              <div className="flex flex-col gap-3 w-full">
                {/* Address */}
                <div className="h-10 px-4 bg-[#112F82] rounded-lg flex items-center">
                  <input
                    type="text"
                    placeholder="Address"
                    className="w-full bg-transparent outline-none text-[14px] font-semibold text-white placeholder:text-[#A5B8EF]"
                  />
                </div>

                {/* City + Postal Code */}
                <div className="flex gap-2">
                  <div className="flex-1 h-10 px-4 bg-[#112F82] rounded-lg flex items-center">
                    <input
                      type="text"
                      placeholder="City"
                      className="w-full bg-transparent outline-none text-[14px] font-semibold text-white placeholder:text-[#A5B8EF]"
                    />
                  </div>

                  <div className="flex-1 h-10 px-4 bg-[#112F82] rounded-lg flex items-center">
                    <input
                      type="text"
                      placeholder="Postal Code"
                      className="w-full bg-transparent outline-none text-[14px] font-semibold text-white placeholder:text-[#A5B8EF]"
                    />
                  </div>
                </div>

                {/* State + Country */}
                <div className="flex gap-2">
                  <div className="flex-1 h-10 px-4 bg-[#112F82] rounded-lg flex items-center">
                    <input
                      type="text"
                      placeholder="State"
                      className="w-full bg-transparent outline-none text-[14px] font-semibold text-white placeholder:text-[#A5B8EF]"
                    />
                  </div>

                  {/* Country Dropdown */}
                  <div className="relative flex-1 px-4 bg-[#112F82] rounded-lg">
                    <button
                      type="button"
                      onClick={() => {
                        setOpenCountry((v) => !v);
                        setOpenBonus(false);
                        setOpenPayment(false);
                      }}
                      className="w-full h-10 px-4 bg-[#112F82] rounded-lg flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-[20px] h-[20px] rounded-full overflow-hidden flex items-center justify-center flex-none">
                          <ReactCountryFlag
                            countryCode={selectedCountry.iso2.toUpperCase()}
                            svg
                            style={{
                              width: "28px",
                              height: "28px",
                              objectFit: "cover",
                            }}
                          />
                        </div>

                        <span className="text-[12px] font-bold tracking-[0.02em] text-white truncate">
                          {selectedCountry.name}
                        </span>
                      </div>

                      <Image
                        src="/svg/sidebar/arrow-down.svg"
                        alt="arrow"
                        width={14}
                        height={14}
                        className={`shrink-0 transition-transform duration-200 ${
                          openCountry ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {openCountry && (
                      <div className="absolute bottom-full mb-2 left-0 w-full z-[9999] bg-[#112F82] rounded-lg border border-[#173A98] shadow-lg overflow-y-auto max-h-[200px]">
                        {countries.map((country) => (
                          <button
                            key={country.iso2}
                            type="button"
                            onClick={() => {
                              setSelectedCountry(country);
                              setOpenCountry(false);
                            }}
                            className="w-full h-[40px] px-4 flex items-center gap-2 hover:bg-[#173A98]"
                          >
                            <div className="w-[20px] h-[20px] rounded-full overflow-hidden flex items-center justify-center flex-none">
                              <ReactCountryFlag
                                countryCode={country.iso2.toUpperCase()}
                                svg
                                style={{
                                  width: "28px",
                                  height: "28px",
                                  objectFit: "cover",
                                }}
                              />
                            </div>
                            <span className="text-white text-[12px] font-semibold truncate">
                              {country.name}
                            </span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {selectedPaymentId === "card" && cardStep === "payment" && (
          <div className="flex flex-col gap-2 w-full">
            <p className="text-[12px] font-semibold leading-4 tracking-[0.02em] text-[#BBCAF3]">
              3. Select an amount
            </p>

            <div className="grid grid-cols-4 gap-2">
              {amounts.map((amount) => {
                const active = selectedAmount === amount;

                return (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => {
                      setSelectedAmount(amount);
                      setCustomAmount("");
                    }}
                    className={`h-10 rounded-lg flex items-center justify-center cursor-pointer
                    ${active ? "bg-[#173EAD] border-2 border-[#1463FF]" : "bg-[#112F82]"}`}
                  >
                    <span
                      className={`text-[14px] tracking-[0.02em]
                      ${active ? "text-white font-bold" : "text-[#A5B8EF] font-semibold"}`}
                    >
                      ${amount}
                    </span>
                  </button>
                );
              })}

              {/* Custom Amount Field */}
              <div className="h-10 px-4 bg-[#112F82] rounded-lg flex items-center">
                <input
                  type="text"
                  min={MIN_CUSTOM}
                  max={MAX_CUSTOM}
                  placeholder="Custom..."
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  onBlur={handleCustomAmountBlur}
                  className="w-full bg-transparent outline-none text-[14px] font-semibold text-white placeholder:text-[#A5B8EF]"
                />
              </div>
            </div>

            <p className="text-[12px] font-semibold text-[#BBCAF3] tracking-[0.02em]">
              4. Enter your payment details
            </p>

            <div className="h-10 px-4 bg-[#112F82] rounded-lg flex items-center">
              <input
                type="text"
                placeholder="Card Number"
                className="w-full bg-transparent outline-none text-[14px] font-semibold text-white placeholder:text-[#A5B8EF]"
              />
            </div>

            <div className="flex gap-2">
              <div className="flex-1 h-10 px-4 bg-[#112F82] rounded-lg flex items-center">
                <input
                  type="text"
                  placeholder="Exp."
                  className="w-full bg-transparent outline-none text-[14px] font-semibold text-white placeholder:text-[#A5B8EF]"
                />
              </div>

              <div className="flex-1 h-10 px-4 bg-[#112F82] rounded-lg flex items-center">
                <input
                  type="text"
                  placeholder="CVV"
                  className="w-full bg-transparent outline-none text-[14px] font-semibold text-white placeholder:text-[#A5B8EF]"
                />
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Image
                src="/svg/wallet/warning.svg"
                alt="warning"
                width={12}
                height={12}
                className="mt-[1px] shrink-0"
              />

              <p className="text-[10px] font-medium leading-[14px] tracking-[0.02em] text-[#7795E8]">
                Warning message about fees or anything else relevant at this
                stage.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* process */}
      <div
        className={`w-[460px] bg-[#0C1F56] rounded-2xl px-4 py-5 flex-col gap-4 ${
          depositStep === "processing" ? "flex" : "hidden"
        }`}
      >
        {/* Status Text */}
        <p className="text-center text-[14px] font-semibold leading-[19px] tracking-[0.02em] text-[#A5B8EF]">
          Your transaction is in progress and pending confirmation from the
          blockchain.
        </p>

        {/* Icons */}
        <div className="flex items-center justify-center gap-[10px] h-[120px]">
          <div className="w-10 h-10 flex items-center justify-center">
            <Image
              src="/svg/wallet/crown-light.svg"
              alt="bitcoin"
              width={40}
              height={40}
            />
          </div>

          <div className="w-10 h-10 flex items-center justify-center">
            <Image
              src="/svg/wallet/crown-light.svg"
              alt="arrow"
              width={40}
              height={40}
            />
          </div>

          <div className="w-10 h-10 flex items-center justify-center">
            <Image
              src="/svg/wallet/crown-dark.svg"
              alt="wallet"
              width={40}
              height={40}
            />
          </div>
        </div>

        {/* Confirmation Text */}
        <p className="text-center text-[14px] font-semibold leading-[19px] tracking-[0.02em] text-[#A5B8EF]">
          1 confirmation is required for deposits to be credited.
          <br />
          Want to know how many confirmations this transaction has?
          <br />
          Please{" "}
          <a href="#" className="text-[#FFC83D] hover:underline">
            click here
          </a>
          .
        </p>
      </div>

      {/* Button */}
      <div
        className={`${
          depositStep === "processing" ? "hidden" : "flex"
        } flex-col items-center`}
      >
        {selectedPaymentId === "crypto" && (
          <button
            onClick={() => setDepositStep("processing")}
            className="w-[300px] h-[50px] bg-[#FFC83D] rounded-lg text-[#1A1404] text-[14px] font-bold cursor-pointer"
          >
            I have completed my deposit
          </button>
        )}

        {selectedPaymentId === "card" && (
          <button
            onClick={() => {
              if (cardStep === "address") {
                setCardStep("payment");
              } else {
                setDepositStep("processing");
              }
            }}
            className="w-[300px] h-[50px] bg-[#FFC83D] rounded-lg text-[#1A1404] text-[14px] font-bold cursor-pointer"
          >
            {cardStep === "address"
              ? "Continue"
              : `Deposit $${selectedAmount === 0 ? customAmount || 0 : selectedAmount}`}
          </button>
        )}
      </div>

      <div
        className={`flex flex-col items-center gap-3
        ${
          depositStep === "processing"
            ? "flex items-center justify-center"
            : "hidden"
        }`}
      >
        <button
          onClick={() => router.back()}
          className="w-[300px] h-[50px] bg-[#FFC83D] rounded-lg text-[#1A1404] text-[14px] font-bold cursor-pointer"
        >
          Go To Games
        </button>

        <div className="flex items-start gap-2">
          <Image
            src="/svg/wallet/question.svg"
            alt="warning"
            width={12}
            height={12}
            className="mt-[1px] shrink-0"
          />

          <p className="text-[10px] text-[#7795E8]">
            Having Problem?{" "}
            <a href="#" className="text-[#FFC83D] hover:underline">
              Contact support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
