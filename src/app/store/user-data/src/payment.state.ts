import { getEmptyPayment, getEmptyPaymentHistory, Payment, PaymentHistory } from './models/payment.model';

export const Key = 'payment';

export interface State {
  payment: Payment;
  history: PaymentHistory;
  creditcard: {
    saving: boolean;
    failed: string;
  };
}

const initialPayment = getEmptyPayment();
const initialHistory = getEmptyPaymentHistory();

export const initialState: State = {
  payment: initialPayment,
  history: initialHistory,
  creditcard: {
    saving: false,
    failed: ''
  }
};
