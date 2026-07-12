const express = require("express");
const router = express.Router();

const {
  getAdminStats,
  getRecentRequests,
  getAllUsers,
  blockUser,
  unblockUser,
  makeVolunteer,
  makeAdmin,
  getAllDonationRequest,
} = require("../controllers/adminController");


// ADMIN STATS
router.get(
  "/stats",
  getAdminStats
);


// RECENT REQUESTS
router.get(
  "/recent-requests",
  getRecentRequests
);


// ALL USERS
router.get(
  "/users",
  getAllUsers
);


// BLOCK USER
router.patch(
  "/users/:id/block",
  blockUser
);


// UNBLOCK USER
router.patch(
  "/users/:id/unblock",
  unblockUser
);


// MAKE VOLUNTEER
router.patch(
  "/users/:id/make-volunteer",
  makeVolunteer
);


// MAKE ADMIN
router.patch(
  "/users/:id/make-admin",
  makeAdmin
);


// ALL BLOOD DONATION REQUESTS
router.get(
  "/all-donation-request",
  getAllDonationRequest
);


module.exports = router;