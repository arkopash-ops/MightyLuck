"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { WithdrawModelProps } from "@/types/wallet";
import ReactCountryFlag from "react-country-flag";
import { countries } from "@/data/country";

const steps = [
  "Confirm personal details",
  "Upload identity document",
  "Upload proof of address",
];

export default function WithdrawModel({ setModalHeight }: WithdrawModelProps) {
  const [screen, setScreen] = useState<
    "verify" | "form" | "submitted" | "preview" | "withdraw"
  >("verify");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const [isRequestingWithdraw, setIsRequestingWithdraw] = useState(false);
  const [withdrawSuccess, setWithdrawSuccess] = useState(false);

  // country dropdown
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [openCountry, setOpenCountry] = useState(false);

  useEffect(() => {
    switch (screen) {
      case "verify":
        setModalHeight(576);
        break;

      case "form":
        setModalHeight(705);
        break;

      case "submitted":
        setModalHeight(590);
        break;

      case "preview":
        setModalHeight(703);
        break;

      case "withdraw":
        setModalHeight(660);
        break;
    }
  }, [screen, setModalHeight]);

  useEffect(() => {
    if (!isSubmitting) return;

    const timer = setTimeout(() => {
      setIsSubmitting(false);
      setIsVerified(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, [isSubmitting]);

  return (
    <>
      {screen === "verify" ? (
        <div className="w-[460px] h-[421px] p-4 bg-[#0C1F56] rounded-2xl flex flex-col items-center gap-4">
          {/* Header */}
          <div className="w-full flex flex-col gap-2">
            <h2 className="text-[20px] font-bold tracking-[0.02em] text-center text-white">
              Verify your account
            </h2>

            <p className="text-[12px] font-medium leading-4 tracking-[0.02em] text-center text-[#A5B8EF]">
              For security reasons, withdrawals are available only after KYC
              verification is completed.
            </p>
          </div>

          {/* Verification Steps */}
          <div className="w-full flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              {steps.map((step, index) => (
                <div
                  key={step}
                  className="h-[50px] px-[10px] rounded-lg bg-[#112F82] flex items-center"
                >
                  <div className="flex items-center gap-3 w-full">
                    <div className="w-[30px] h-[30px] rounded bg-[#1463FF] flex items-center justify-center">
                      <span className="text-[14px] font-extrabold text-white">
                        {index + 1}
                      </span>
                    </div>

                    <span className="text-[12px] font-bold tracking-[0.02em] text-white">
                      {step}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 mt-auto">
              <button
                onClick={() => setScreen("form")}
                className="w-full h-[50px] rounded-lg bg-[#FFC83D] text-[#1A1404] text-[16px] font-bold tracking-[0.02em] cursor-pointer transition hover:brightness-105"
              >
                Start Verification
              </button>

              <button className="w-full h-[50px] rounded-lg bg-[#112F82] text-[#D2DCF7] text-[16px] font-bold tracking-[0.02em] cursor-pointer transition hover:bg-[#173A98]">
                Preview verified withdrawal
              </button>
            </div>
          </div>
        </div>
      ) : screen === "form" ? (
        <div className="w-full max-w-[460px] h-[550px] p-4 pt-5 bg-[#0C1F56] rounded-2xl flex flex-col gap-5">
          {/* STEP 1 */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-medium tracking-[0.02em] text-[#BBCAF3]">
              1. Complete verification
            </p>

            <p className="text-[10px] font-semibold text-[#7795E8]">
              We need to verify your account before enabling withdrawals.
            </p>

            <div className="flex flex-col gap-3 mt-1">
              <input
                placeholder="First name"
                className="h-10 rounded-lg bg-[#112F82] px-4 text-sm text-white placeholder:text-[#A5B8EF] outline-none"
              />

              <input
                placeholder="Last name"
                className="h-10 rounded-lg bg-[#112F82] px-4 text-sm text-white placeholder:text-[#A5B8EF] outline-none"
              />

              <div className="flex gap-2">
                <input
                  placeholder="Date of birth"
                  className="flex-1 h-10 rounded-lg bg-[#112F82] px-4 text-sm text-white placeholder:text-[#A5B8EF] outline-none"
                />

                {/* Country Dropdown */}
                <div className="relative flex-1 min-w-0 bg-[#112F82] rounded-lg">
                  <button
                    type="button"
                    onClick={() => {
                      setOpenCountry((v) => !v);
                    }}
                    className="w-full h-10 px-4 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-1 min-w-0 flex-1">
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
                    <div className="absolute top-full mt-2 left-0 w-full z-[9999] bg-[#112F82] rounded-lg border border-[#173A98] shadow-lg overflow-y-auto max-h-[200px]">
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

          {/* STEP 2 */}

          <div className="flex flex-col gap-3">
            <p className="text-xs font-medium tracking-[0.02em] text-[#BBCAF3]">
              2. Upload documents
            </p>

            <input
              id="identity-upload"
              type="file"
              accept="image/*,.pdf"
              className="hidden"
            />

            <label
              htmlFor="identity-upload"
              className="h-[60px] rounded-[10px] bg-[#112F82] px-[10px] flex items-center gap-4 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-md bg-[#0C1F56] flex items-center justify-center">
                <Image
                  src="/svg/wallet/upload.svg"
                  alt="upload"
                  width={16}
                  height={16}
                />
              </div>

              <div className="flex flex-col items-start">
                <span className="text-sm font-bold text-white">
                  Identity document
                </span>

                <span className="text-xs text-[#A5B8EF]">
                  Passport, ID card, or driving license
                </span>
              </div>
            </label>

            <input
              id="address-upload"
              type="file"
              accept="image/*,.pdf"
              className="hidden"
            />

            <label
              htmlFor="address-upload"
              className="h-[60px] rounded-[10px] bg-[#112F82] px-[10px] flex items-center gap-4 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-md bg-[#0C1F56] flex items-center justify-center">
                <Image
                  src="/svg/wallet/upload.svg"
                  alt="upload"
                  width={16}
                  height={16}
                />
              </div>

              <div className="flex flex-col items-start">
                <span className="text-sm font-bold text-white">
                  Proof of address
                </span>

                <span className="text-xs text-[#A5B8EF]">
                  Utility bill or bank statement
                </span>
              </div>
            </label>
          </div>

          {/* Buttons */}
          <div className="mt-auto flex flex-col gap-3">
            <button
              onClick={() => {
                setIsVerified(false);
                setIsSubmitting(true);
                setScreen("submitted");
              }}
              className="h-[50px] rounded-lg bg-[#FFC83D] text-[#1A1404] text-base font-bold cursor-pointer transition hover:brightness-105"
            >
              Submit Verification
            </button>

            <button
              onClick={() => setScreen("verify")}
              className="h-[50px] rounded-lg bg-[#112F82] text-[#D2DCF7] text-base font-bold cursor-pointer transition hover:bg-[#173A98]"
            >
              Back
            </button>
          </div>
        </div>
      ) : screen === "submitted" ? (
        <div className="w-[460px] min-h-[411px] p-4 pt-5 bg-[#0C1F56] rounded-2xl flex flex-col items-center gap-5">
          {/* Icon */}
          <div className="w-full flex justify-center items-center h-[120px]">
            {isSubmitting ? (
              <div className="relative w-[120px] h-[120px] flex items-center justify-center">
                {/* Background circle */}
                <div className="absolute inset-0 rounded-full border-[3px] border-[#112F82]" />

                {/* Rotating Circle Animation */}
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 120 120"
                  className="absolute inset-0 animate-[spin_5s_linear_infinite]"
                >
                  <circle
                    cx="60"
                    cy="60"
                    r="58.5"
                    stroke="#1463FF"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="367.5"
                    strokeDashoffset="183.75"
                    strokeLinecap="round"
                  />
                </svg>

                {/* Glow */}
                <div className="absolute w-[100px] h-[100px] rounded-full bg-[#1463FF]/10 blur-xl animate-pulse" />

                {/* Inner Circle */}
                <div className="w-[70px] h-[70px] rounded-full bg-[#1463FF] absolute left-[25px] top-[25px] flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-white animate-pulse" />
                </div>
              </div>
            ) : (
              <div className="relative w-[120px] h-[120px] flex items-center justify-center">
                {/* Background circle */}
                <div className="absolute inset-0 rounded-full border-[3px] border-[#112F82]" />

                {/* Rotating Circle Animation */}
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 120 120"
                  className="absolute inset-0 animate-[spin_5s_linear_infinite]"
                >
                  <circle
                    cx="60"
                    cy="60"
                    r="58.5"
                    stroke="#1463FF"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="367.5"
                    strokeDashoffset="183.75"
                    strokeLinecap="round"
                  />
                </svg>

                <div className="w-[70px] h-[70px] rounded-full bg-[#1463FF] absolute left-[25px] top-[25px] flex items-center justify-center shadow-[0_0_20px_rgba(20,99,255,0.4)]">
                  <Image
                    src="/svg/wallet/check.svg"
                    alt="success"
                    width={24.25}
                    height={18.4}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Heading */}
          <div className="w-full flex flex-col gap-2">
            <h2 className="text-[20px] font-bold text-white text-center">
              {isSubmitting
                ? "Submitting verification..."
                : "Verification submitted"}
            </h2>

            <p className="text-[12px] text-[#A5B8EF] text-center leading-4">
              {isSubmitting
                ? "Please wait while we securely upload and process your verification documents."
                : "Your documents were received. Withdrawals will become available once the review is complete."}
            </p>
          </div>

          {/* Status Card */}
          <div className="w-full rounded-lg bg-[#112F82] p-4 flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-semibold text-[#A5B8EF]">
                Status
              </span>

              <div
                className={`px-2 py-1 rounded ${
                  isSubmitting ? "bg-[#0F3C8C]" : "bg-[#3E2A09]"
                }`}
              >
                <span
                  className={`text-[10px] font-semibold ${
                    isSubmitting ? "text-[#55B8FF]" : "text-[#FFC83D]"
                  }`}
                >
                  {isSubmitting ? "Processing..." : "Under review"}
                </span>
              </div>
            </div>

            <div className="border-t border-dashed border-[#193EA5]" />

            <div className="flex justify-between items-center">
              <span className="text-[10px] font-semibold text-[#A5B8EF]">
                Estimated review
              </span>

              <span className="text-[12px] font-bold text-white">
                {isSubmitting ? "--" : "24-48 hours"}
              </span>
            </div>
          </div>

          {/* Button */}
          <button
            disabled={isSubmitting}
            onClick={() => setScreen("preview")}
            className={`w-full h-[50px] rounded-lg text-[16px] font-bold transition ${
              isSubmitting
                ? "bg-[#2B4A9A] text-[#A5B8EF] cursor-not-allowed"
                : "bg-[#FFC83D] text-[#1A1404]"
            }`}
          >
            {isSubmitting ? "Please wait..." : "Preview verified state"}
          </button>
        </div>
      ) : screen === "preview" ? (
        <div className="w-[460px] min-h-[548px] bg-[#0C1F56] rounded-2xl p-4 pt-5 flex flex-col gap-4">
          {/* Balance */}
          <div className="bg-[#112F82] rounded-[10px] p-4 flex justify-between items-center">
            <div>
              <p className="text-xs text-[#A5B8EF] font-semibold">
                Available balance
              </p>

              <h2 className="text-white text-[20px] font-bold mt-1">
                $1,248.50
              </h2>
            </div>

            <div className="bg-[#09430B] px-2 py-1 rounded flex items-center gap-1">
              <Image
                src="/svg/wallet/check-green.svg"
                alt=""
                width={12}
                height={12}
              />

              <span className="text-[#1AFF20] text-[10px] font-semibold">
                Verified
              </span>
            </div>
          </div>

          {/* Method */}
          <div className="flex flex-col gap-2">
            <p className="text-xs text-[#BBCAF3]">
              1. Select withdrawal method
            </p>

            <div className="h-[40px] rounded-lg bg-[#112F82] px-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image
                  src="/svg/wallet/bitcoin.svg"
                  alt=""
                  width={16}
                  height={16}
                />

                <span className="text-white text-sm font-bold">Bitcoin</span>

                <span className="text-[10px] text-[#BBCAF3]">
                  (Min. withdraw $50)
                </span>
              </div>

              <Image
                src="/svg/sidebar/arrow-down.svg"
                alt=""
                width={14}
                height={14}
              />
            </div>
          </div>

          {/* Amount */}
          <div className="flex flex-col gap-2">
            <p className="text-xs text-[#BBCAF3]">2. Enter withdrawal amount</p>

            <div className="h-[40px] rounded-lg bg-[#112F82] px-4 flex items-center">
              <span className="text-white text-sm font-bold">$100</span>
            </div>

            <div className="space-y-3 text-[10px]">
              <div className="flex justify-between">
                <span className="text-[#7795E8]">Minimum withdrawal</span>

                <span className="text-white font-bold">$50</span>
              </div>

              <div className="border-t border-dashed border-[#193EA5]" />

              <div className="flex justify-between">
                <span className="text-[#7795E8]">Processing fee</span>

                <span className="text-white font-bold">Free</span>
              </div>

              <div className="border-t border-dashed border-[#193EA5]" />

              <div className="flex justify-between">
                <span className="text-[#7795E8]">Estimated arrival</span>

                <span className="text-white font-bold">1-24 hours</span>
              </div>
            </div>
          </div>

          {/* Wallet */}
          <div className="flex flex-col gap-2">
            <p className="text-xs text-[#BBCAF3]">
              3. Enter destination details
            </p>

            <div className="h-[40px] rounded-lg bg-[#112F82] px-4 flex items-center">
              <span className="text-sm text-[#A5B8EF] font-semibold">
                Bitcoin wallet address
              </span>
            </div>

            <p className="text-[10px] text-[#7795E8] leading-4">
              Withdrawals may be reviewed by our payments team before
              processing. Make sure the destination details are correct.
            </p>
          </div>

          {/* Button */}

          <button
            onClick={() => {
              if (withdrawSuccess) {
                setScreen("withdraw");
                return;
              }
              setIsRequestingWithdraw(true);

              setTimeout(() => {
                setIsRequestingWithdraw(false);
                setWithdrawSuccess(true);
              }, 2000);
            }}
            disabled={isRequestingWithdraw}
            className={`mt-auto h-[50px] rounded-lg font-bold text-base transition ${
              withdrawSuccess
                ? "bg-[#16A34A] text-white"
                : isRequestingWithdraw
                  ? "bg-[#2B4A9A] text-white cursor-not-allowed"
                  : "bg-[#FFC83D] text-[#1A1404]"
            }`}
          >
            {withdrawSuccess
              ? "Withdrawal Requested"
              : isRequestingWithdraw
                ? "Requesting..."
                : "Request Withdrawal"}
          </button>
        </div>
      ) : (
        <div className="w-[460px] h-[505px] bg-[#0C1F56] rounded-2xl px-4 py-5 flex flex-col items-center gap-[24px]">
          {/* Main info container */}
          <div className="w-full flex flex-col items-start p-0 gap-[20px]">
            {/* Circle / Icon part */}
            <div className="w-full h-[120px] flex justify-center items-center p-0 gap-[10px]">
              <div className="w-[120px] h-[120px] relative">
                {/* Background circle */}
                <div className="absolute inset-0 rounded-full border-[3px] border-[#112F82]" />

                {/* Rotating Circle Animation */}
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 120 120"
                  className="absolute inset-0 animate-[spin_5s_linear_infinite]"
                >
                  <circle
                    cx="60"
                    cy="60"
                    r="58.5"
                    stroke="#1463FF"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="367.5"
                    strokeDashoffset="183.75"
                    strokeLinecap="round"
                  />
                </svg>

                {/* Ellipse (Accent filled inner circle) */}
                <div className="w-[70px] h-[70px] rounded-full bg-[#1463FF] absolute left-[25px] top-[25px] flex items-center justify-center shadow-[0_0_20px_rgba(20,99,255,0.4)]">
                  <div className="w-[28.8px] h-[28.8px] flex items-center justify-center relative">
                    <Image
                      src="/svg/wallet/lock.svg"
                      alt="success"
                      width={24}
                      height={18}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Withdrawal requested text */}
            <div className="w-full flex flex-col items-center p-0 gap-2">
              <h2 className="w-full text-[20px] font-bold text-center text-white tracking-[0.02em] font-manrope leading-[27px]">
                Withdrawal requested
              </h2>

              <p className="w-full text-[12px] font-medium text-center text-[#A5B8EF] tracking-[0.02em] font-manrope leading-[16px]">
                Your withdrawal request was successfully submitted.
                <br />
                Our payments team is now reviewing it.
              </p>
            </div>

            {/* Status Card details */}
            <div className="w-full h-[138px] bg-[#112F82] rounded-[8px] px-4 py-2.5 flex flex-col justify-center gap-2">
              {/* Amount */}
              <div className="w-full h-4 flex justify-between items-center gap-3">
                <span className="text-[10px] font-semibold text-[#A5B8EF] tracking-[0.02em] font-manrope leading-3">
                  Amount
                </span>

                <span className="text-[12px] font-bold text-white tracking-[0.02em] font-manrope leading-4">
                  $100.00
                </span>
              </div>

              {/* Separator */}
              <div className="w-full border-t border-dashed border-[#193EA5]" />

              {/* Method */}
              <div className="w-full h-4 flex justify-between items-center gap-3">
                <span className="text-[10px] font-semibold text-[#A5B8EF] tracking-[0.02em] font-manrope leading-3">
                  Method
                </span>

                <span className="text-[12px] font-bold text-white tracking-[0.02em] font-manrope leading-4">
                  Bitcoin
                </span>
              </div>

              {/* Separator */}
              <div className="w-full border-t border-dashed border-[#193EA5]" />

              {/* Estimated arrival */}
              <div className="w-full h-4 flex justify-between items-center gap-3">
                <span className="text-[10px] font-semibold text-[#A5B8EF] tracking-[0.02em] font-manrope leading-3">
                  Estimated arrival
                </span>

                <span className="text-[12px] font-bold text-white tracking-[0.02em] font-manrope leading-4">
                  1-24 hours
                </span>
              </div>

              {/* Separator */}
              <div className="w-full border-t border-dashed border-[#193EA5]" />

              {/* Status */}
              <div className="w-full h-[22px] flex justify-between items-center gap-3">
                <span className="text-[10px] font-semibold text-[#A5B8EF] tracking-[0.02em] font-manrope leading-3">
                  Status
                </span>

                <div className="h-[22px] px-2 py-1 rounded bg-[#0C1F56] flex items-center justify-center">
                  <span className="text-[10px] font-semibold text-[#4886FF] tracking-[0.02em] font-manrope leading-3">
                    Pending review
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom container (Having problems? and Button) */}
          <div className="w-full h-[76px] flex flex-col items-center p-0 gap-3 mt-auto">
            {/* Contact support */}
            <div className="w-full h-3.5 flex justify-center items-center gap-2">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="6" r="5.5" stroke="#7795E8" strokeWidth="1" />
                <circle cx="6" cy="3.5" r="0.75" fill="#7795E8" />
                <line
                  x1="6"
                  y1="5.5"
                  x2="6"
                  y2="9"
                  stroke="#7795E8"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
              </svg>

              <span className="text-[10px] font-semibold text-[#7795E8] tracking-[0.02em] font-manrope leading-3">
                Having problems? <span className="text-[#FFD85A] font-bold">Contact support</span>
              </span>
            </div>

            {/* Join button */}
            <button
              onClick={() => setScreen("form")}
              className="w-full h-[50px] bg-[#112F82] rounded-[8px] flex items-center justify-center hover:bg-[#173A98] transition cursor-pointer text-[16px] font-bold text-[#D2DCF7] tracking-[0.02em] font-manrope leading-[22px]"
            >
              Back to withdrawal form
            </button>
          </div>
        </div>
      )}
    </>
  );
}
