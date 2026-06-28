const express = require("express");
const router = express.Router();

const {
  getUser,
  updateUser,
} = require("../controllers/userController");

// Get user profile
router.get("/:id", getUser);

// Update user profile
router.put("/:id", updateUser);

module.exports = router;