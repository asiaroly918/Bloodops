const DonationRequest = require("../models/DonationRequest");

// CREATE DONATION REQUEST
const createDonationRequest = async (req, res) => {
  try {
    const donationRequest = await DonationRequest.create({
      requester_name: req.body.requester_name,
      requester_email: req.body.requester_email,
      recipient_name: req.body.recipient_name,
      recipient_district: req.body.recipient_district,
      recipient_upazila: req.body.recipient_upazila,
      hospital_name: req.body.hospital_name,
      full_address: req.body.full_address,
      blood_group: req.body.blood_group,
      donation_date: req.body.donation_date,
      donation_time: req.body.donation_time,
      request_message: req.body.request_message,
      status: "pending",
    });

    res.status(201).json({
      success: true,
      message: "Donation request created successfully",
      donationRequest,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET MY DONATION REQUESTS
const getMyDonationRequests = async (req, res) => {
  try {
    const { email } = req.query;

    const requests = await DonationRequest.find({
      requester_email: email,
    }).sort({ createdAt: -1 });

    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// UPDATE DONATION REQUEST STATUS
const updateDonationRequestStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updatedRequest = await DonationRequest.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updatedRequest) {
      return res.status(404).json({
        success: false,
        message: "Donation request not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Status updated successfully",
      updatedRequest,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// DELETE DONATION REQUEST
const deleteDonationRequest = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedRequest = await DonationRequest.findByIdAndDelete(id);

    if (!deletedRequest) {
      return res.status(404).json({
        success: false,
        message: "Donation request not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Donation request deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//DONATE TO REQUEST
const donateToRequest = async (req, res) => {
  try {
    const { id } = req.params;
    const { donor_name, donor_email } = req.body;

    const request = await DonationRequest.findById(id);

    if (!request) {
      return res.status(404).json({
        success: false,
        message: "Donation request not found",
      });
    }

    request.status = "inprogress";
    request.donor_name = donor_name;
    request.donor_email = donor_email;

    await request.save();

    res.status(200).json({
      success: true,
      message: "Donation confirmed successfully",
      request,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// GET SINGLE DONATION REQUEST
const getSingleDonationRequest = async (req, res) => {
  try {
    const { id } = req.params;

    const donationRequest = await DonationRequest.findById(id);

    if (!donationRequest) {
      return res.status(404).json({
        success: false,
        message: "Donation request not found",
      });
    }

    res.status(200).json({
      success: true,
      donationRequest,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// UPDATE DONATION REQUEST
const updateDonationRequest = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedRequest = await DonationRequest.findByIdAndUpdate(
      id,
      {
        requester_name: req.body.requester_name,
        requester_email: req.body.requester_email,
        recipient_name: req.body.recipient_name,
        recipient_district: req.body.recipient_district,
        recipient_upazila: req.body.recipient_upazila,
        hospital_name: req.body.hospital_name,
        full_address: req.body.full_address,
        blood_group: req.body.blood_group,
        donation_date: req.body.donation_date,
        donation_time: req.body.donation_time,
        request_message: req.body.request_message,
      },
      { new: true, runValidators: true }
    );

    if (!updatedRequest) {
      return res.status(404).json({
        success: false,
        message: "Donation request not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Donation request updated successfully",
      updatedRequest,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


module.exports = {
  createDonationRequest,
  getMyDonationRequests,
  updateDonationRequestStatus,
  deleteDonationRequest,
  getSingleDonationRequest,
  updateDonationRequest,
  donateToRequest,
};