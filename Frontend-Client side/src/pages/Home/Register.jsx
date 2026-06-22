import { useState, useEffect } from "react";

const Register = () => {
const [formData, setFormData] = useState({
    name: "",
    email: "",
    avatar: "",
    bloodGroup: "",
    district: "",
    upazila: "",
    password: "",
    confirmPassword: "",
  });

  const [districts, setDistricts] = useState([]);
  const [allUpazilas, setAllUpazilas] = useState([]);
  const [upazilas, setUpazilas] = useState([]);
  const [showPassword, setShowPassword] = useState(false);

  // input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // district change → upazila filter
  const handleDistrictChange = (e) => {
    const selectedDistrict = e.target.value;

    setFormData({
      ...formData,
      district: selectedDistrict,
      upazila: "",
    });

    const filtered = allUpazilas.filter(
      (u) => u.district === selectedDistrict
    );

    setUpazilas(filtered);
  };

  // submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Register Data:", formData);
    alert("Registration successful!");
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">
        Register as Donor
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="input input-bordered w-full"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="input input-bordered w-full"
        />

        {/* Blood Group */}
        <select
          name="bloodGroup"
          value={formData.bloodGroup}
          onChange={handleChange}
          className="select select-bordered w-full"
        >
          <option value="">Select Blood Group</option>
          <option>A+</option>
          <option>A-</option>
          <option>B+</option>
          <option>B-</option>
          <option>AB+</option>
          <option>AB-</option>
          <option>O+</option>
          <option>O-</option>
        </select>

        {/* District */}
        <select
          name="district"
          value={formData.district}
          onChange={handleDistrictChange}
          className="select select-bordered w-full"
        >
          <option value="">Select District</option>
          {districts.map((d, i) => (
            <option key={i} value={d}>
              {d}
            </option>
          ))}
        </select>

        {/* Upazila */}
        <select
          name="upazila"
          value={formData.upazila}
          onChange={handleChange}
          className="select select-bordered w-full"
        >
          <option value="">Select Upazila</option>
          {upazilas.map((u, i) => (
            <option key={i} value={u.name}>
              {u.name}
            </option>
          ))}
        </select>

        {/* Password */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="input input-bordered w-full"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-sm"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        {/* Confirm Password */}
        <input
          type={showPassword ? "text" : "password"}
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="input input-bordered w-full"
        />

        <button className="btn btn-error w-full">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;