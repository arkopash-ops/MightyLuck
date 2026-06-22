import { AuthMobileProps } from "@/types/auth";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import PhoneField from "./PhoneField";

export default function AuthMobile({ defaultTab, onBack }: AuthMobileProps) {
  const [tab, setTab] = useState<"signup" | "login">(defaultTab);
  const [showPassword, setShowPassword] = useState(false);

  const inputClass = `w-full h-[50px] rounded-[8px] bg-[#112F82] px-4 text-[14px] font-semibold text-white placeholder:text-[#A5B8EF] outline-none`;

  return (
    <div className="min-h-screen bg-[#091741] overflow-x-hidden">
      {/* Header */}
      <div className="flex items-center gap-5 px-5 pt-3 pb-[30px] h-[92px]">
        <button
          className="w-[30px] h-[30px] flex items-center justify-center"
          onClick={onBack}
        >
          <Image
            src="/svg/navbar/back.svg"
            alt="back"
            width={20}
            height={15.77}
          />
        </button>
        <div className="flex gap-2 flex-1">
          <button
            onClick={() => setTab("signup")}
            className={`flex-1 h-[50px] rounded-lg text-sm font-bold ${
              tab === "signup"
                ? "bg-[#FFC83D] text-black"
                : "bg-[#1463FF] text-white"
            }`}
          >
            Join
          </button>
          <button
            onClick={() => setTab("login")}
            className={`flex-1 h-[50px] rounded-lg text-sm font-bold ${
              tab === "login"
                ? "bg-[#FFC83D] text-black"
                : "bg-[#1463FF] text-white"
            }`}
          >
            Log In
          </button>
        </div>
      </div>

      {/* Banner */}
      <div className="relative h-[170px] overflow-hidden">
        <Image
          src="/image/auth/3d-image.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="absolute left-1/2 top-1/2 -z-10 h-[281px] w-[281px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0051F1] blur-[62px]" />
          <div className="flex flex-col items-center gap-3">
            <h1 className="text-white text-[44px] font-extrabold">350%</h1>
            <div className="px-[17px] py-[8px] rounded-full bg-[#2BEA51]">
              <span className="text-[10px] font-extrabold text-[#051D09]">
                WELCOME PACKAGE
              </span>
            </div>
            <p className="w-[200px] text-center text-white text-[12px] font-bold leading-4">
              Boost your deposits with 350% in Bonus and 200 Free Spins
            </p>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="px-5 pt-5 pb-10">
        {tab === "signup" ? (
          <div className="flex flex-col gap-3">
            <input placeholder="User name" className={inputClass} />
            <div className="flex gap-2">
              <input placeholder="First Name" className={inputClass} />
              <input placeholder="Last Name" className={inputClass} />
            </div>
            <input placeholder="Email" className={inputClass} />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className={`${inputClass} pr-12`}
              />
              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A5B8EF]"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <PhoneField />
            <p className="text-[10px] text-center leading-[14px] text-[#BBCAF3] mt-1">
              By clicking &ldquo;Join Now&ldquo; I confirm that I&apos;m
              over 18 years old and agree to Mighty Luck T&C along with the
              Privacy Policy
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            <input placeholder="Email" className={inputClass} />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className={`${inputClass} pr-12`}
              />
              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A5B8EF]"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
        )}

        <div className="mt-8 flex flex-col gap-3">
          <button className="w-full h-[60px] rounded-lg bg-[#FFC83D] text-[16px] font-bold text-[#1A1404]">
            {tab === "signup" ? "Join with a 350% Bonus" : "Log In"}
          </button>
          <div className="flex justify-center items-center gap-2">
            <Image
              src="/svg/auth/support.svg"
              alt="support"
              width={16}
              height={16}
            />
            <span className="text-[12px] text-[#7795E8]">
              Having problems?
              <span className="text-[#FFC83D] ml-1">Contact support</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
