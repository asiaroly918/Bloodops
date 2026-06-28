const mongoose = require("mongoose");

const donationRequestSchema = new mongoose.Schema(
  {
    requester_name: {
      type: String,
      required: true,
    },

    requester_email: {
      type: String,
      required: true,
    },

    recipient_name: {
      type: String,
      required: true,
    },

    recipient_district: {
      type: String,
      required: true,
    },

    recipient_upazila: {
      type: String,
      required: true,
    },

    hospital_name: {
      type: String,
      required: true,
    },

    full_address: {
      type: String,
      required: true,
    },

    blood_group: {
      type: String,
      required: true,
    },

    donation_date: {
      type: String,
      required: true,
    },

    donation_time: {
      type: String,
      required: true,
    },

    request_message: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["pending", "inprogress", "done", "canceled"],
      default: "pending",
    },

    donor_name: {
      type: String,
      default: "",
    },

    donor_email: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "DonationRequest",
  donationRequestSchema
);