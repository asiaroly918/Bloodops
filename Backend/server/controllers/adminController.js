const User = require("../models/User");
const DonationRequest = require("../models/DonationRequest");


// =============================
// ADMIN STATS
// GET /api/admin/stats
// =============================
const getAdminStats = async (req, res) => {
  try {
    const totalDonors = await User.countDocuments({
      role: "donor",
    });

    const totalRequests =
      await DonationRequest.countDocuments();

    const pendingRequests =
      await DonationRequest.countDocuments({
        status: "pending",
      });

    const completedDonations =
      await DonationRequest.countDocuments({
        status: "done",
      });

    res.status(200).json({
      totalDonors,
      totalRequests,
      pendingRequests,
      completedDonations,
      totalFunding: 0,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// =============================
// RECENT BLOOD REQUESTS
// GET /api/admin/recent-requests
// =============================
const getRecentRequests = async (req, res) => {
  try {

    const requests =
      await DonationRequest.find()
        .sort({ createdAt: -1 })
        .limit(5);

    res.status(200).json(requests);

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};
// =============================
// GET ALL USERS
// GET /api/admin/users
// =============================
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });

    res.status(200).json(users);

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// =============================
// BLOCK USER
// PATCH /api/admin/users/:id/block
// =============================
const blockUser = async (req, res) => {
  try {
    await User.findByIdAndUpdate(
      req.params.id,
      { status: "blocked" }
    );

    res.status(200).json({
      success: true,
      message: "User blocked successfully",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// =============================
// UNBLOCK USER
// PATCH /api/admin/users/:id/unblock
// =============================
const unblockUser = async (req, res) => {
  try {
    await User.findByIdAndUpdate(
      req.params.id,
      { status: "active" }
    );

    res.status(200).json({
      success: true,
      message: "User unblocked successfully",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// =============================
// MAKE VOLUNTEER
// PATCH /api/admin/users/:id/make-volunteer
// =============================
const makeVolunteer = async (req, res) => {
  try {
    await User.findByIdAndUpdate(
      req.params.id,
      { role: "volunteer" }
    );

    res.status(200).json({
      success: true,
      message: "User promoted to volunteer",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// =============================
// MAKE ADMIN
// PATCH /api/admin/users/:id/make-admin
// =============================
const makeAdmin = async (req, res) => {
  try {
    await User.findByIdAndUpdate(
      req.params.id,
      { role: "admin" }
    );

    res.status(200).json({
      success: true,
      message: "User promoted to admin",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =============================
// ALL BLOOD DONATION REQUESTS
// GET /api/admin/all-donation-requests
// =============================
const getAllDonationRequest = async (req, res) => {
  try {

    const requests = await DonationRequest
      .find()
      .sort({ createdAt: -1 });

    res.status(200).json(requests);

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


// =============================
// EXPORTS
// =============================
module.exports = {
  getAdminStats,
  getRecentRequests,
  getAllUsers,
  blockUser,
  unblockUser,
  makeVolunteer,
  makeAdmin,
  getAllDonationRequest,
};