import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { CheckCircle, Lock, Mail, MessageCircle, Smartphone, AlertCircle } from 'lucide-react';

// Initialize Stripe (will use fallback test key if env variable is missing)
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_TYooMQauvdEDq54NiTphI7jx');

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    city: '',
    amount: '',
    email: '',
    country: 'United Arab Emirates'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet.
      return;
    }

    setIsProcessing(true);
    setPaymentError(null);

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
       setIsProcessing(false);
       return;
    }

    // Creating a PaymentMethod to securely collect card details.
    // NOTE: To actually charge the card, you need a backend endpoint that creates a PaymentIntent
    // and returns the clientSecret, which you would then pass to stripe.confirmCardPayment()
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        address: {
          line1: formData.address,
          city: formData.city,
          country: formData.country === 'United Arab Emirates' ? 'AE' : 'US'
        }
      },
    });

    if (error) {
      setPaymentError(error.message || 'An error occurred while validating your card.');
      setIsProcessing(false);
    } else {
      try {
        // Send paymentMethod.id to your Node.js backend
        const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';
        
        const response = await fetch(`${API_URL}/api/create-payment-intent`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            amount: formData.amount,
            currency: 'aed',
            paymentMethodId: paymentMethod.id,
          }),
        });

        const paymentIntentResult = await response.json();

        if (paymentIntentResult.error) {
          setPaymentError(paymentIntentResult.error);
          setIsProcessing(false);
        } else if (paymentIntentResult.success) {
          setPaymentSuccess(true);
          setIsProcessing(false);
        } else {
          setPaymentError('Unexpected response from server.');
          setIsProcessing(false);
        }
      } catch (err) {
        setPaymentError('Could not connect to the payment server. Please try again.');
        setIsProcessing(false);
      }
    }
  };

  if (paymentSuccess) {
    return (
      <div className="bg-white rounded-2xl p-8 border border-green-100 shadow-xl text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-navy-900 mb-2">Payment Successful!</h3>
        <p className="text-gray-600 mb-6">
          Thank you. Your payment of {formData.amount} AED has been securely processed.
        </p>
        <button 
          onClick={() => setPaymentSuccess(false)}
          className="btn-primary"
        >
          Make Another Payment
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-xl sticky top-24">
      <div className="flex items-center justify-between mb-6 border-b pb-4">
        <h3 className="text-xl font-bold text-navy-900">Secure Payment Form</h3>
        <Lock className="w-5 h-5 text-green-600" />
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        
        {/* Name Fields */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Name: <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-navy-500 focus:border-navy-500"
              />
              <span className="text-xs text-gray-500 mt-1 block">First</span>
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-navy-500 focus:border-navy-500"
              />
              <span className="text-xs text-gray-500 mt-1 block">Last</span>
            </div>
          </div>
        </div>

        {/* Phone Field */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Phone:</label>
          <div className="flex border border-gray-300 rounded-md shadow-sm overflow-hidden focus-within:ring-1 focus-within:ring-navy-500 focus-within:border-navy-500">
            <div className="flex items-center px-3 bg-gray-50 border-r border-gray-300">
              <img src="https://flagcdn.com/w20/ae.png" alt="UAE" className="w-5 h-auto mr-1" />
              <span className="text-sm text-gray-600">▾</span>
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="050 123 4567"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 focus:outline-none"
            />
          </div>
        </div>

        {/* Address & City Field */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-navy-500 focus:border-navy-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">City:</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-navy-500 focus:border-navy-500"
            />
          </div>
        </div>

        {/* Transaction Amount Field */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Transaction Amount AED: <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="amount"
            required
            min="1"
            value={formData.amount}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-navy-500 focus:border-navy-500"
          />
        </div>

        {/* Stripe Section Wrapper */}
        <div className="pt-4 mt-2">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Stripe Credit Card <span className="text-red-500">*</span>
          </label>
          
          <div className="border border-gray-300 rounded-md bg-gray-50 p-4 space-y-4 shadow-sm">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            
            {/* Real Stripe Element */}
            <div className="bg-white p-3 border border-gray-300 rounded-md shadow-sm">
              <CardElement 
                options={{
                  style: {
                    base: {
                      fontSize: '16px',
                      color: '#424770',
                      '::placeholder': {
                        color: '#aab7c4',
                      },
                      fontFamily: '"Inter", system-ui, sans-serif'
                    },
                    invalid: {
                      color: '#9e2146',
                    },
                  },
                  hidePostalCode: true,
                }}
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Country/Territory</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
              >
                <option>United Arab Emirates</option>
                <option>United Kingdom</option>
                <option>United States</option>
                <option>Saudi Arabia</option>
                <option>Oman</option>
                <option>Qatar</option>
              </select>
            </div>
          </div>
        </div>

        {paymentError && (
          <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-md text-sm border border-red-100">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <p>{paymentError}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={!stripe || isProcessing}
          className="w-full bg-navy-900 hover:bg-navy-800 disabled:bg-navy-900/70 text-white font-bold py-3 px-4 rounded-md transition-colors mt-6 flex items-center justify-center gap-2 shadow-lg"
        >
          {isProcessing ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <Lock className="w-4 h-4" />
          )}
          {isProcessing ? 'Processing...' : `Pay ${formData.amount ? `${formData.amount} AED` : 'Now'}`}
        </button>

        <p className="text-xs text-center text-gray-500 mt-4 flex items-center justify-center gap-1">
          <Lock className="w-3 h-3 text-gray-400" /> Payments are secure and encrypted by Stripe
        </p>

      </form>
    </div>
  );
}

export default function PayByLink() {
  return (
    <div>
      {/* ── HERO ─────────────────────────────────── */}
      <section className="relative pt-24 pb-16 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            src="/pay-by-link-hero.png"
            alt="Secure Payment Banner"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
          <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-400/20 rounded-full px-4 py-1.5 mb-4">
            <Lock className="w-4 h-4 text-gold-400" />
            <span className="text-gold-300 text-sm font-medium">Secure Transactions</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Pay By Link
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Secure, Simple & Convenient Online Payments
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Information Column */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-display font-bold text-navy-900 mb-6">
                  Secure, Simple & Convenient Online Payments
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Welcome to our Pay By Link service — a secure and hassle-free way to complete payments for the services offered by Expert Advice. Our payment process is designed to provide convenience, transparency, and security, allowing you to make payments quickly from anywhere in the world.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  With Pay By Link, you can complete your transaction safely through a personalized payment link shared directly by our team.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-navy-900 mb-6 border-b pb-4">
                  How Pay By Link Works
                </h2>
                
                <div className="space-y-8">
                  {/* Step 1 */}
                  <div>
                    <h3 className="text-lg font-bold text-navy-900 mb-2">1. Receive Your Secure Payment Link</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Once your service details are confirmed, our team will generate a unique payment link specifically for your transaction.
                    </p>
                  </div>

                  {/* Step 2 */}
                  <div>
                    <h3 className="text-lg font-bold text-navy-900 mb-2">2. Get Notified</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      The payment link will be shared with you through your preferred communication channel such as:
                    </p>
                    <ul className="space-y-3 pl-2">
                      <li className="flex items-center gap-3 text-gray-700">
                        <Mail className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                        Email
                      </li>
                      <li className="flex items-center gap-3 text-gray-700">
                        <Smartphone className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                        SMS
                      </li>
                      <li className="flex items-center gap-3 text-gray-700">
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        WhatsApp or Messaging Apps
                      </li>
                    </ul>
                  </div>

                  {/* Step 3 */}
                  <div>
                    <h3 className="text-lg font-bold text-navy-900 mb-2">3. Click & Proceed to Payment</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Simply click on the secure payment link provided by our team. You will be redirected to a protected payment page where you can select your preferred payment method.
                    </p>
                  </div>

                  {/* Step 4 */}
                  <div>
                    <h3 className="text-lg font-bold text-navy-900 mb-2">4. Complete Your Transaction Securely</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Enter your payment details and complete the transaction through our secure payment gateway. Your information is protected using industry-standard security and encryption protocols.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Form Column with Stripe Context */}
            <div>
              <Elements stripe={stripePromise}>
                <CheckoutForm />
              </Elements>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
