const express = require("express");

const router = express.Router();


const {
  createPaymentIntent,
  createFunding,
  getAllFundings,
} = require("../controllers/fundingController");



// ================================
// CREATE PAYMENT INTENT
// POST /api/funding/create-payment-intent
// ================================

router.post(
  "/create-payment-intent",
  createPaymentIntent
);



// ================================
// SAVE FUNDING
// POST /api/funding
// ================================

router.post(
  "/",
  createFunding
);



// ================================
// GET ALL FUNDINGS
// GET /api/funding
// ================================

router.get(
  "/",
  getAllFundings
);



module.exports = router;