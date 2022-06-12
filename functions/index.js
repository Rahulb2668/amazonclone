const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("Stripe Secret Key");

//Api

//App config

const app = express();
//Middlewares

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
//Api routes

app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  console.log(paymentIntent);
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//Listen

exports.api = functions.https.onRequest(app);
// http://localhost:5001/clone-1b72b/us-central1/api
