const express = require("express");
const router = express.Router();

const {
  createDonationRequest,
} = require("../controllers/donationRequestController");

// Create Donation Request
router.post("/", createDonationRequest);

module.exports = router;