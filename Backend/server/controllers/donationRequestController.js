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

module.exports = {
  createDonationRequest,
};