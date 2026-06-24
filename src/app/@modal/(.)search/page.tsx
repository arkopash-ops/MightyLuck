"use client";

import SearchModalContent from "@/components/search/SearchModalContent";

export default function SearchModal() {
  return (
    <div className="fixed inset-0 z-[100] bg-[#0C1733B2] backdrop-blur-[6px] flex items-center justify-center">
      <SearchModalContent />
    </div>
  );
}
