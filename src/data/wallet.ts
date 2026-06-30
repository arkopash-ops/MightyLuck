import { Bonus } from "@/types/bonus";

export const bonusOptions: Bonus[] = [
  {
    id: "reload",
    title: "150% Reload Bonus + 30 Free Spins",
    subtitle: "(Min. Deposit $10)",
    logo: "/svg/wallet/gift.svg",
    activeLogo: "/svg/wallet/gift-1.svg",
  },
  {
    id: "welcome",
    title: "350% Welcome Bonus",
    subtitle: "45x PT - Min. Dep. $20",
    logo: "/svg/wallet/star.svg",
    activeLogo: "/svg/wallet/star-1.svg",
  },
  {
    id: "crypto",
    title: "500% Crypto Bonus",
    subtitle: "45x PT - Min. Dep. $20",
    logo: "/svg/wallet/bonus.svg",
    activeLogo: "/svg/wallet/bonus-1.svg",
  },
  {
    id: "none",
    title: "I will deposit without bonus",
    subtitle: "",
    logo: "/svg/wallet/block.svg",
    activeLogo: "/svg/wallet/block-1.svg",
  },
];

export const paymentOption = [
  {
    id: "crypto",
    title: "Bitcoin",
    subtitle: "(Min. Deposit $10)",
    logo: "/svg/wallet/bitcoin.svg",
    activeLogo: "/svg/wallet/bitcoin-1.svg",
  },
  {
    id: "card",
    title: "Credit Card",
    subtitle: "(Min. Deposit $30 - Max. Deposit $2,500)",
    logos: ["/svg/wallet/visa.svg", "/svg/wallet/master-card.svg"],
    activeLogos: ["/svg/wallet/visa-1.svg", "/svg/wallet/master-card-1.svg"],
  },
];

export const bonuses = [
  {
    title: "150% Reload Bonus + 30 Free Spins",
    minDeposit: "$30",
    maxCashout: "40x",
    maxAmount: "$30",
    wager: "10x",
  },
  {
    title: "175% Reload Bonus + 30 Free Spins",
    minDeposit: "$50",
    maxCashout: "50x",
    maxAmount: "$80",
    wager: "15x",
  },
  {
    title: "200% High Roller Bonus",
    minDeposit: "$100",
    maxCashout: "60x",
    maxAmount: "$200",
    wager: "20x",
  },
];

export const withdrawMethods = [
  {
    id: "crypto",
    title: "Crypto Wallet",
    logo: "/svg/wallet/bitcoin.svg",
    activeLogo: "/svg/wallet/bitcoin-1.svg",
  },
  {
    id: "bank",
    title: "Bank Transfer",
    logo: "/svg/wallet/visa.svg",
    activeLogo: "/svg/wallet/visa-1.svg",
  },
  {
    id: "upi",
    title: "UPI",
    logo: "/svg/wallet/scan.svg",
    activeLogo: "/svg/wallet/scan-1.svg",
  },
];

export const transactions = [
  {
    type: "Deposit",
    amount: "+$100",
    status: "Completed",
    date: "Jun 25, 2026",
  },
  {
    type: "Withdrawal",
    amount: "-$50",
    status: "Pending",
    date: "Jun 24, 2026",
  },
  {
    type: "Bonus",
    amount: "+$25",
    status: "Completed",
    date: "Jun 23, 2026",
  },
];