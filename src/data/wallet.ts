import { Bonus, DepositBonus } from "@/types/bonus";

export const bonusOptions: DepositBonus[] = [
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

export const bonuses: Bonus[] = [
  {
    id: 1,
    code: "PROMO2026",
    title: "150% Reload Bonus + 30 Free Spins",
    minDeposit: "$30",
    maxCashout: "40x",
    maxAmount: "$30",
    wager: "10x",
  },
  {
    id: 2,
    code: "RELOAD175",
    title: "175% Reload Bonus + 30 Free Spins",
    minDeposit: "$50",
    maxCashout: "50x",
    maxAmount: "$80",
    wager: "15x",
  },
  {
    id: 3,
    code: "HIGH200",
    title: "200% High Roller Bonus",
    minDeposit: "$100",
    maxCashout: "60x",
    maxAmount: "$200",
    wager: "20x",
  },
];

export const transactions = [
  {
    type: "Deposit",
    date: "Bitcoin — Today, 14:32",
    amount: "+$100.00",
    status: "Confirming",
    icon: "/svg/wallet/bitcoin-b.svg",
  },
  {
    type: "Withdraw",
    date: "Bitcoin — Today, 10:12",
    amount: "-$250.00",
    status: "Pending review",
    icon: "/svg/wallet/bitcoin-b.svg",
  },
  {
    type: "Deposit",
    date: "Ethereum — Today, 09:05",
    amount: "+$320.00",
    status: "Completed",
    icon: "/svg/wallet/bitcoin-b.svg",
  },
  {
    type: "Bonus",
    date: "RELOAD150 — Yesterday, 19:45",
    amount: "+$75.00",
    status: "Active",
    icon: "/svg/wallet/gift-b.svg",
  },
  {
    type: "Withdraw",
    date: "Bank Transfer — Yesterday, 18:20",
    amount: "-$500.00",
    status: "Completed",
    icon: "/svg/wallet/bank-b.svg",
  },
  {
    type: "Deposit",
    date: "USDT — Yesterday, 16:08",
    amount: "+$150.00",
    status: "Completed",
    icon: "/svg/wallet/bitcoin-b.svg",
  },
  {
    type: "Bonus",
    date: "WELCOME100 — Yesterday, 13:25",
    amount: "+$100.00",
    status: "Completed",
    icon: "/svg/wallet/gift-b.svg",
  },
  {
    type: "Withdraw",
    date: "Bitcoin — Jun 28, 21:14",
    amount: "-$120.00",
    status: "Pending review",
    icon: "/svg/wallet/bitcoin-b.svg",
  },
  {
    type: "Deposit",
    date: "Litecoin — Jun 28, 15:50",
    amount: "+$80.00",
    status: "Completed",
    icon: "/svg/wallet/bitcoin-b.svg",
  },
  {
    type: "Bonus",
    date: "CASHBACK25 — Jun 27, 20:10",
    amount: "+$25.00",
    status: "Completed",
    icon: "/svg/wallet/gift-b.svg",
  },
  {
    type: "Deposit",
    date: "Bank Transfer — Jun 27, 11:35",
    amount: "+$600.00",
    status: "Completed",
    icon: "/svg/wallet/bank-b.svg",
  },
  {
    type: "Withdraw",
    date: "Ethereum — Jun 26, 22:18",
    amount: "-$75.00",
    status: "Completed",
    icon: "/svg/wallet/bitcoin-b.svg",
  },
  {
    type: "Bonus",
    date: "VIP20 — Jun 26, 17:42",
    amount: "+$20.00",
    status: "Active",
    icon: "/svg/wallet/gift-b.svg",
  },
  {
    type: "Deposit",
    date: "Bitcoin — Jun 25, 09:15",
    amount: "+$250.00",
    status: "Completed",
    icon: "/svg/wallet/bitcoin-b.svg",
  },
  {
    type: "Withdraw",
    date: "Bank Transfer — Jun 24, 14:30",
    amount: "-$1,000.00",
    status: "Completed",
    icon: "/svg/wallet/bank-b.svg",
  },
];
