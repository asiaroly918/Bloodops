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
// EXPORTS
// =============================
module.exports = {
  getAdminStats,
  getRecentRequests,
};