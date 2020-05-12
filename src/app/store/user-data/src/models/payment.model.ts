/**
 * Interface for payment page.
 *
 * @interface
 */
export interface CreditCard {
  company_name: string;
  last_four: string;
  first_six: string;
  expiration: string;
}

export interface Billing {
  amount: number;
  date: string;
  invoices: {
    fullMonth: number,
    proRata: number
  };
}

export interface Payment {
  billing: Billing;
  creditCard: CreditCard;
  event: SubscriptionEvent;
  subscriptionStatus: SubscriptionStatus;
  history: PaymentHistory;
  isPremium: boolean | null;
  loading?: {
    [s: string]: boolean;
  };
}

export enum  SubscriptionStatus {
  NULL = '',
  ACTIVE = 'Active',
  WARNING = 'Warning',
  INACTIVE = 'Inactive',
  CANCELED = 'Canceled',
  INEXISTENT = 'Inexistent',
  DEBIT = 'In Debit'
}

export enum SubscriptionEvent {
  NULL = '',
  NEW = 'NewSubscription',
  REMOVE = 'FinishSubscription',
  HISTORY = 'history'
}

export interface PaymentHistory {
  User: string;
  Product: string;
  Charges?: Charge[];
}

export interface Charge {
  Amount: number;
  ChargeDate: string;
  Detailed: ChargeDetails;
  FaturaID: number;
  FaturaURL: string;
  Resumed: {
    Full_Month: number;
    Pro_rata: number;
  };
  Status: string;
}

export interface ChargeDetails {
  Full_Month: {
    Items: ChargeItem[];
    New: number;
    Old: number;
    Total: number;
  };
  Pro_rata: {
    Items: ChargeItem[];
    Total: number;
  };
  Payment: CreditCard;
}

export interface ChargeItem {
  Amount: number;
  NumClients: number;
  Period: {
    Start: string;
    End: string;
  };
}


export const getEmptyCard = (): CreditCard => ({
  'company_name': '',
  'last_four': '',
  'first_six': '',
  'expiration': '',
});

export const getEmptyPaymentHistory = (): PaymentHistory => ({
  'User': '',
  'Product': '',
  'Charges': []
});

export const getEmptyBilling = (): Billing => ({
  'amount': 0,
  'date': '',
  'invoices': {
    'fullMonth': 0,
    'proRata': 0
  }
});

export const getEmptyPayment = (): Payment => ({
  'billing': getEmptyBilling(),
  'creditCard': getEmptyCard(),
  'event': SubscriptionEvent.NULL,
  'subscriptionStatus': SubscriptionStatus.NULL,
  'history': getEmptyPaymentHistory(),
  'isPremium': null,
});
