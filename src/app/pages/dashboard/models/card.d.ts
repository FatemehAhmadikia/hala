declare namespace Card {
    interface Info {
        amount: string;
        currencyUnit: string;
        actions: Action[];
        cardNumber: string;
        bankLogoURL: string;
    }
    interface Action {
        title: string;
        logo: string;
    }
    interface BankInfo {
        department: string;
        cardNumber: string;
        amount: string;
        currencyUnit: string;
        expiredDate: string | Date;
    }
}
