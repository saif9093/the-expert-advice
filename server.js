import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Stripe from 'stripe';

dotenv.config();

const app = express();
// Enable CORS for your frontend domain
app.use(cors());
app.use(express.json());

// Initialize Stripe with your Secret Key
// Make sure to add STRIPE_SECRET_KEY to your .env file
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder', {
  apiVersion: '2023-10-16',
});

app.post('/api/create-payment-intent', async (req, res) => {
  try {
    const { amount, currency = 'aed', paymentMethodId } = req.body;

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Stripe expects amounts in cents (or fils for AED)
      currency: currency,
      payment_method: paymentMethodId,
      confirm: true, // Confirm the payment immediately
      automatic_payment_methods: {
        enabled: true,
        allow_redirects: 'never'
      },
    });

    res.json({
      success: true,
      clientSecret: paymentIntent.client_secret,
      status: paymentIntent.status
    });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Make sure you have added STRIPE_SECRET_KEY to your .env file!`);
});
