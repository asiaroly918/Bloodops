const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  avatar: { type: String, required: true },
  blood_group: { type: String, required: true },
  district: { type: String, required: true },
  upazila: { type: String, required: true },
  role: { type: String, default: "donor" },
  status: { type: String, default: "active" },
  password: { type: String, required: true }
}, 
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);