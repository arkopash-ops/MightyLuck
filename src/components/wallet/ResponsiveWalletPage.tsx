"use client";

import { useEffect, useState } from "react";
import MobileWalletPage from "./mobile/MobileWalletPage";
import WalletModel from "./WalletModel";

export default function ResponsiveWalletPage() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile === null) return null;

  return isMobile ? <MobileWalletPage /> : <WalletModel />;
}
