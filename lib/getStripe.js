import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
    if(!stripePromise) {
        stripePromise = loadStripe('pk_test_51Ld47BGte6rr9BdiiMsNqwpk1zhvUxdHVK3wgi7E3P8gnu3ljJhAjVdUmVCyJ6OQZoDgt9tFe0yjRK1mBi69PO7A00Fo1eSN8O');
    }

    return stripePromise;
}

export default getStripe;