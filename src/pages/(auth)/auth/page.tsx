import LeftBanner from "@/components/auth/LeftBanner";
import RightBanner from "@/components/auth/RightBanner";

interface AuthPageProps {
  defaultTab: "login" | "signup";
  onClose: () => void;
}

export default function AuthPage({ defaultTab, onClose }: AuthPageProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#192033B2] backdrop-blur-[16px]"
      onClick={onClose}
    >
      <div
        className="relative w-[730px] h-[546px] flex rounded-[16px] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <LeftBanner />

        <RightBanner defaultTab={defaultTab} />
      </div>
    </div>
  );
}
