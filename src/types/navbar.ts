export interface NavbarProp {
    onLogin: () => void;
    onJoin: () => void;
    onLogoutModalChange?: (open: boolean) => void;
}
