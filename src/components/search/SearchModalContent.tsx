"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

import SearchSidebar from "./SearchSidebar";
import SearchContent from "./SearchContent";

export default function SearchModalContent() {
  const router = useRouter();

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => router.back()}
        className="absolute top-[4.8px] -right-[30px] w-[24px] h-[24px] flex items-center justify-center"
      >
        <Image
          src="/svg/search/close.svg"
          alt="close"
          width={14.4}
          height={14.4}
        />
      </button>

      <div className="w-[1056px] h-[636px] rounded-[20px] bg-[#091741] p-6">
        <div className="flex gap-5 h-full">
          <SearchSidebar />

          <SearchContent />
        </div>
      </div>
    </div>
  );
}
