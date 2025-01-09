import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../components/CheckoutForm';

const stripePromise = loadStripe('your-public-key-here');

function Payment() {
  return (
    <div className="bg-purple-gradient flex flex-col items-center justify-center min-h-screen p-10">
      <h2 className="text-4xl font-bold text-purple-900 mb-6">Payment</h2>
      <div className="w-full max-w-md p-6 bg-white shadow-md rounded-md">
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
}

export default Payment;
