"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { countries } from "../../data/country";
import ReactCountryFlag from "react-country-flag";

export default function PhoneField() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex w-[350px] gap-[8px]">
      <div className="relative">
        {/* Country */}
        <button
          type="button"
          className="w-[121px] h-[40px] bg-[#112F82] rounded-[8px] px-[16px] flex items-center justify-between"
          onClick={() => setOpen(!open)}
        >
          <div className="flex items-center gap-[10px]">
            <div className="w-[20px] h-[20px] rounded-full overflow-hidden flex items-center justify-center">
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

            <span className="text-white text-[14px] font-semibold">
              {selectedCountry.dialCode}
            </span>
          </div>

          {open ? (
            <ChevronUp size={14} strokeWidth={1.5} className="text-[#A5B8EF]" />
          ) : (
            <ChevronDown
              size={14}
              strokeWidth={1.5}
              className="text-[#A5B8EF]"
            />
          )}
        </button>

        {/* dropdown */}
        {open && (
          <div className="absolute top-[48px] left-0 w-[121px] bg-[#112F82] rounded-[8px] overflow-hidden shadow-lg border border-[#173A98] z-50">
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

      {/* Number */}
      <input
        type="tel"
        placeholder="Phone Number"
        className="w-[221px] h-[40px] rounded-[8px] bg-[#112F82] px-[16px] text-[14px] font-semibold tracking-[0.02em] text-white placeholder:text-[#A5B8EF] outline-none"
      />
    </div>
  );
}
