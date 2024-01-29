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
}
