const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  uid: { type: String, required: true, unique: true }, // Firebase UID
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  avatar: { type: String, required: true },
  blood_group: { type: String, required: true },
  district: { type: String, required: true },
  upazila: { type: String, required: true },
  role: { type: String, default: 'donor' },
  status: { type: String, default: 'active' }
}, { timestamps: true });

module.exports = mongoose.Schema.models.User || mongoose.model('User', UserSchema);