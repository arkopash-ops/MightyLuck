"use client";

import { useEffect, useState } from "react";
import DesktopSearchPage from "@/components/search/desktop/DesktopSearchPage";
import MobileSearchPage from "@/components/search/mobile/MobileSearchPage";

export default function ResponsiveSearchPage() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <MobileSearchPage /> : <DesktopSearchPage />;
}
