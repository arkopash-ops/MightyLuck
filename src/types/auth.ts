export interface AuthPageProps {
    defaultTab: "login" | "signup";
    onClose: () => void;
}

export interface AuthMobileProps {
    defaultTab: "login" | "signup";
    onBack?: () => void;
}
