"use client";

import { useState } from "react";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import PhoneField from "./PhoneField";
import { useAppDispatch } from "@/redux/hooks";
import { loginSuccess } from "@/redux/slices/authSlice";
import { useRouter } from "next/navigation";
import { login, signup } from "@/lib/auth";

interface RightBannerProps {
  defaultTab: "login" | "signup";
  onClose?: () => void;
}

export default function RightBanner({ defaultTab, onClose }: RightBannerProps) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [tab, setTab] = useState<"signup" | "login">(defaultTab);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [signupForm, setSignupForm] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
  });

  const inputStyle = `h-[40px] rounded-[8px] bg-[#112F82] px-[16px] text-[14px] font-semibold tracking-[0.02em] text-white placeholder:text-[#A5B8EF] outline-none`;

  const handleLogin = () => {
    setError("");
    const user = login(loginForm.email, loginForm.password);
    if (!user) {
      setError("Invalid email or password.");
      return;
    }
    dispatch(loginSuccess(user));
    onClose?.();
    router.push("/");
  };

  const handleSignup = () => {
    setError("");
    const { username, firstName, lastName, email, password } = signupForm;
    if (!username || !firstName || !lastName || !email || !password) {
      setError("Please fill all fields.");
      return;
    }
    const user = signup({ ...signupForm });
    if (!user) {
      setError("Email already registered.");
      return;
    }
    dispatch(loginSuccess(user));
    onClose?.();
    router.push("/");
  };

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
            onClick={() => {
              setTab("signup");
              setError("");
            }}
            className={`w-[171px] h-[40px] px-[30px] py-[10px] flex items-center justify-center rounded-[8px] text-[14px] font-bold tracking-[0.02em] ${tab === "signup" ? "bg-[#FFC83D] text-black" : "bg-[#1463FF] text-white"}`}
          >
            Join
          </button>

          <button
            onClick={() => {
              setTab("login");
              setError("");
            }}
            className={`w-[171px] h-[40px] px-[30px] py-[10px] flex items-center justify-center rounded-[8px] text-[14px] font-bold tracking-[0.02em] ${tab === "login" ? "bg-[#FFC83D] text-black" : "bg-[#1463FF] text-white"}`}
          >
            Log In
          </button>
        </div>

        {/* Form */}
        {tab === "signup" ? (
          <div className="w-[350px] flex flex-col gap-[12px]">
            {/* username */}
            <input
              placeholder="User name"
              className={`w-[350px] ${inputStyle}`}
              value={signupForm.username}
              onChange={(e) =>
                setSignupForm((p) => ({ ...p, username: e.target.value }))
              }
            />

            {/* first name + last name */}
            <div className="w-[350px] flex gap-[8px]">
              <input
                placeholder="First Name"
                className={`w-[171px] ${inputStyle}`}
                value={signupForm.firstName}
                onChange={(e) =>
                  setSignupForm((p) => ({ ...p, firstName: e.target.value }))
                }
              />

              <input
                placeholder="Last Name"
                className={`w-[171px] ${inputStyle}`}
                value={signupForm.lastName}
                onChange={(e) =>
                  setSignupForm((p) => ({ ...p, lastName: e.target.value }))
                }
              />
            </div>

            {/* email */}
            <input
              placeholder="Email"
              className={`w-[350px] ${inputStyle}`}
              value={signupForm.email}
              onChange={(e) =>
                setSignupForm((p) => ({ ...p, email: e.target.value }))
              }
            />

            {/* password */}
            <div className="relative w-[350px]">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className={`w-[350px] h-[40px] rounded-[8px] bg-[#112F82] px-[16px] pr-[48px] text-[14px] font-semibold tracking-[0.02em] text-white placeholder:text-[#A5B8EF] outline-none`}
                value={signupForm.password}
                onChange={(e) =>
                  setSignupForm((p) => ({ ...p, password: e.target.value }))
                }
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
            <input
              placeholder="Email"
              className={`w-[350px] ${inputStyle}`}
              value={loginForm.email}
              onChange={(e) =>
                setLoginForm((p) => ({ ...p, email: e.target.value }))
              }
            />

            {/* password */}
            <div className="relative w-[350px]">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className={`w-[350px] h-[40px] rounded-[8px] bg-[#112F82] px-[16px] pr-[48px] text-[14px] font-semibold tracking-[0.02em] text-white placeholder:text-[#A5B8EF] outline-none`}
                value={loginForm.password}
                onChange={(e) =>
                  setLoginForm((p) => ({ ...p, password: e.target.value }))
                }
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

        {error && <p className="text-[12px] text-red-400">{error}</p>}
      </div>

      {/* Action Section */}
      <div className="mt-4 w-[350px] flex flex-col gap-[12px]">
        {/* Button */}
        <button
          onClick={tab === "signup" ? handleSignup : handleLogin}
          className="w-[350px] h-[50px] rounded-[8px] bg-[#FFC83D] flex items-center justify-center text-[14px] font-bold tracking-[0.02em] text-[#1A1404]"
        >
          {tab === "signup" ? "Join with a 350% Bonus" : "Log In"}
        </button>

        {/* Support */}
        <div className="flex items-center gap-2">
          <Image
            src="/svg/auth/support.svg"
            alt="support"
            width={16}
            height={16}
            className="flex-none"
          />

          <span className="text-[10px] text-[#7795E8]">
            Having problems?{" "}
            <span className="text-[#FFC83D] cursor-pointer">
              Contact support
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
