const express = require("express");
const router = express.Router();

const {
  createDonationRequest,
  getMyDonationRequests,
  updateDonationRequestStatus,
  deleteDonationRequest,
  getSingleDonationRequest,
  donateToRequest,
  updateDonationRequest,
} = require("../controllers/donationRequestController");


const verifyToken = require("../middleware/verifyToken");
const DonationRequest = require("../models/DonationRequest");


// CREATE DONATION REQUEST
router.post(
  "/",
  createDonationRequest
);

// GET MY DONATION REQUESTS

router.get(
  "/",
  getMyDonationRequests
);

// GET SINGLE DONATION REQUEST
router.get(
  "/:id",
  getSingleDonationRequest
);


// DONATE REQUEST
router.patch(
  "/:id/status",
  verifyToken,
  donateToRequest
);


// UPDATE STATUS
router.patch(
  "/:id",
  updateDonationRequestStatus
);

// UPDATE REQUEST
router.put(
  "/:id",
  verifyToken,
  updateDonationRequest
);


// DELETE REQUEST
router.delete(
  "/:id",
  verifyToken,
  deleteDonationRequest
);



module.exports = router;