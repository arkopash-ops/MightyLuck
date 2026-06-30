export interface DepositBonus {
    id: string;
    title: string;
    subtitle: string;
    logo: string;
    activeLogo: string;
}

export interface Bonus {
    id: number;
    code: string;
    title: string;
    minDeposit: string;
    maxCashout: string;
    maxAmount: string;
    wager: string;
}
