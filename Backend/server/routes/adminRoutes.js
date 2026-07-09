const express = require("express");

const router = express.Router();

const {
  getAdminStats,
  getRecentRequests,
} = require("../controllers/adminController");


// =========================
// ADMIN STATS
// GET /api/admin/stats
// =========================
router.get(
  "/stats",
  getAdminStats
);


// =========================
// RECENT REQUESTS
// GET /api/admin/recent-requests
// =========================
router.get(
  "/recent-requests",
  getRecentRequests
);


module.exports = router;