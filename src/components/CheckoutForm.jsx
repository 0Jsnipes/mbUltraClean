import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.error(error);
    } else {
      console.log(paymentMethod);
      alert('Payment Successful!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement className="p-4 border mb-4" />
      <button type="submit" className="p-2 bg-blue-500 text-white">
        Pay Now
      </button>
    </form>
  );
}

export default CheckoutForm;
