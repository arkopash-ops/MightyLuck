"use client";

import { useState } from "react";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import PhoneField from "./PhoneField";

interface RightBannerProps {
  defaultTab: "login" | "signup";
}

export default function RightBanner({ defaultTab }: RightBannerProps) {
  const [tab, setTab] = useState<"signup" | "login">(defaultTab);
  const [showPassword, setShowPassword] = useState(false);

  const inputStyle = `h-[40px] rounded-[8px] bg-[#112F82] px-[16px] text-[14px] font-semibold tracking-[0.02em] text-white placeholder:text-[#A5B8EF] outline-none`;

  return (
    <div className="relative w-[390px] h-[546px] rounded-r-[16px] bg-[#091741] overflow-hidden px-5 py-6">
      {/* Blue Glow */}
      <div className="absolute top-[-145px] left-1/2 -translate-x-1/2 w-[173px] h-[173px] rounded-full bg-[#1463FF] blur-[40px]" />

      {/* main content */}
      <div className="relative z-10 w-[350px] flex flex-col gap-[16px]">
        {/* logo */}
        <div className="w-[350px] h-[25.54px] flex justify-center">
          <Image
            src="/svg/navbar/horizontal-logo.svg"
            alt="logo"
            width={145}
            height={26}
          />
        </div>

        {/* Tabs */}
        <div className="w-[350px] h-[40px] flex items-center gap-[8px]">
          <button
            onClick={() => setTab("signup")}
            className={`w-[171px] h-[40px] px-[30px] py-[10px] flex items-center justify-center rounded-[8px] text-[14px] leading-[19px] font-bold tracking-[0.02em] transition-colors
                ${
                  tab === "signup"
                    ? "bg-[#FFC83D] text-[#000000]"
                    : "bg-[#1463FF] text-[#FFFFFF]"
                }`}
          >
            Join
          </button>

          <button
            onClick={() => setTab("login")}
            className={`w-[171px] h-[40px] px-[30px] py-[10px] flex items-center justify-center rounded-[8px] text-[14px] leading-[19px] font-bold tracking-[0.02em] transition-colors
                ${
                  tab === "login"
                    ? "bg-[#FFC83D] text-[#000000]"
                    : "bg-[#1463FF] text-[#FFFFFF]"
                }`}
          >
            Log In
          </button>
        </div>

        {/* Form */}
        {tab === "signup" ? (
          <div className="w-[350px] h-[248px] flex flex-col gap-[12px]">
            {/* username */}
            <input
              placeholder="User name"
              className={`w-[350px] ${inputStyle}`}
            />

            {/* first name + last name */}
            <div className="w-[350px] flex gap-[8px]">
              <input
                placeholder="First Name"
                className={`w-[171px] ${inputStyle}`}
              />

              <input
                placeholder="Last Name"
                className={`w-[171px] ${inputStyle}`}
              />
            </div>

            {/* email */}
            <input placeholder="Email" className={`w-[350px] ${inputStyle}`} />

            {/* password */}
            <div className="relative w-[350px]">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className={`w-[350px] h-[40px] rounded-[8px] bg-[#112F82] px-[16px] pr-[48px] text-[14px] font-semibold tracking-[0.02em] text-white placeholder:text-[#A5B8EF] outline-none`}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-[16px] top-1/2 -translate-y-1/2 text-[#A5B8EF]"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* phone number */}
            <PhoneField />
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {/* email */}
            <input placeholder="Email" className={`w-[350px] ${inputStyle}`} />

            {/* password */}
            <div className="relative w-[350px]">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className={`w-[350px] h-[40px] rounded-[8px] bg-[#112F82] px-[16px] pr-[48px] text-[14px] font-semibold tracking-[0.02em] text-white placeholder:text-[#A5B8EF] outline-none`}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-[16px] top-1/2 -translate-y-1/2 text-[#A5B8EF]"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
        )}

        {/* Terms */}
        {tab === "signup" && (
          <p className="text-[10px] leading-[14px] text-[#BBCAF3]">
            By clicking “Join Now” I confirm that I’m over 18 years old and
            agree to Mighty Luck T&C along with the Privacy Policy
          </p>
        )}
      </div>

      {/* Action Section */}
      <div className="mt-8 w-[350px] h-[78px] flex flex-col gap-[12px]">
        {/* Button */}
        <button className="w-[350px] h-[50px] rounded-[8px] bg-[#FFC83D] flex items-center justify-center px-[30px] text-[14px] font-bold leading-[19px] tracking-[0.02em] text-[#1A1404]">
          {tab === "signup" ? "Join with a 350% Bonus" : "Log In"}
        </button>

        {/* Support */}
        <div className="flex flex-row items-center gap-2 w-[350px] h-4">
          <Image
            src="/svg/auth/support.svg"
            alt="support"
            width={16}
            height={16}
            className="w-4 h-4 flex-none"
          />

          <span className="text-[10px] leading-[14px] font-medium tracking-[0.02em] text-[#7795E8] whitespace-nowrap">
            Having problems?{" "}
            <span className="text-[#FFC83D] cursor-pointer hover:underline">
              Contact support
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
