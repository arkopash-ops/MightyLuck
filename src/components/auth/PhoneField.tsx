"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { countries } from "../../data/country";
import ReactCountryFlag from "react-country-flag";

export default function PhoneField() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex w-full h-[50px] gap-[8px] items-flex-start">
      <div className="relative flex-none">
        {/* Country selector — w-[121px] h-[50px] */}
        <button
          type="button"
          className="w-[121px] h-[50px] bg-[#112F82] rounded-[8px] px-[16px] flex items-center gap-[10px]"
          onClick={() => setOpen(!open)}
        >
          {/* Flag — 20x20 */}
          <div className="w-[20px] h-[20px] flex-none rounded-full overflow-hidden flex items-center justify-center">
            <ReactCountryFlag
              countryCode={selectedCountry.iso2.toUpperCase()}
              svg
              style={{ width: "28px", height: "28px", objectFit: "cover" }}
            />
          </div>

          {/* Dial code */}
          <span className="text-white text-[14px] font-semibold leading-[19px] tracking-[0.02em] flex-none">
            {selectedCountry.dialCode}
          </span>

          {/* Chevron — 14x14 */}
          <div className="w-[14px] h-[14px] flex items-center justify-center flex-none ml-auto">
            {open ? (
              <ChevronUp
                size={14}
                strokeWidth={1.5}
                className="text-[#A5B8EF]"
              />
            ) : (
              <ChevronDown
                size={14}
                strokeWidth={1.5}
                className="text-[#A5B8EF]"
              />
            )}
          </div>
        </button>

        {/* Dropdown */}
        {open && (
          <div className="absolute top-[58px] left-0 w-[121px] bg-[#112F82] rounded-[8px] overflow-hidden shadow-lg border border-[#173A98] z-50">
            {countries.map((country) => (
              <button
                key={country.iso2}
                type="button"
                onClick={() => {
                  setSelectedCountry(country);
                  setOpen(false);
                }}
                className="w-full h-[40px] px-4 flex items-center gap-3 hover:bg-[#173A98]"
              >
                <div className="w-[20px] h-[20px] rounded-full overflow-hidden flex items-center justify-center">
                  <ReactCountryFlag
                    countryCode={country.iso2.toUpperCase()}
                    svg
                    style={{
                      width: "20px",
                      height: "20px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <span className="text-white text-sm">{country.dialCode}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Phone input — flex-1 h-[50px], grows to fill remaining width */}
      <input
        type="tel"
        placeholder="Phone Number"
        className="flex-1 h-[50px] rounded-[8px] bg-[#112F82] px-[16px] text-[14px] font-semibold leading-[19px] tracking-[0.02em] text-white placeholder:text-[#A5B8EF] outline-none"
      />
    </div>
  );
}
