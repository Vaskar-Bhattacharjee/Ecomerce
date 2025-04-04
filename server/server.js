const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT;
const stripe = require('stripe')(process.env.STRIPE_KEY);


const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:5173', // Your frontend URL
  methods: ['POST', 'GET']
}));
app.post('/create-payment-intent', async (req, res) => {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(req.body.amount * 100),
      currency: 'usd',
    });
    res.json({ clientSecret: paymentIntent.client_secret });
  });
app.listen(port, () => {
    console.log(`server is running on port ${port}`)
});