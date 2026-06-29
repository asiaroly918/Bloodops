import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import bdGeocode from "../../../data/bdGeocode";


export default function CreateDonationRequest() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.status === "blocked") {
      alert("Your account is blocked.");
      navigate("/dashboard");
    }
  }, [navigate, user]);


  const [selectedDistrict, setSelectedDistrict] = useState("");

  const [formData, setFormData] = useState({
    requester_name: user?.name || "",
    requester_email: user?.email || "",
    recipient_name: "",
    recipient_district: "",
    recipient_upazila: "",
    hospital_name: "",
    full_address: "",
    blood_group: "",
    donation_date: "",
    donation_time: "",
    request_message: "",
  });

  const filteredUpazilas = bdGeocode.upazilas.filter(
    (upazila) => upazila.district_id === selectedDistrict
  );

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "recipient_district") {
      setSelectedDistrict(value);

      setFormData({
        ...formData,
        recipient_district: value,
        recipient_upazila: "",
      });

      return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const token = localStorage.getItem("token");

    const response = await fetch(
      "http://localhost:5000/api/donation-requests",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...formData,
          status: "pending",
        }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      alert("Donation Request Created Successfully!");
      navigate("/dashboard/my-donation-requests");
    } else {
      alert(data.message || "Failed to create request");
    }
  } catch (error) {
    console.log(error);
    alert("Something went wrong");
  }
};

  return (
    <div className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow">

      <h2 className="text-3xl font-bold mb-8 text-center">
        Create Donation Request
      </h2>

      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-5">

        <input
          className="input input-bordered w-full"
          value={formData.requester_name}
          readOnly
        />

        <input
          className="input input-bordered w-full"
          value={formData.requester_email}
          readOnly
        />

        <input
          type="text"
          name="recipient_name"
          placeholder="Recipient Name"
          className="input input-bordered w-full"
          value={formData.recipient_name}
          onChange={handleChange}
          required
        />

        <select
          name="recipient_district"
          className="select select-bordered w-full"
          value={formData.recipient_district}
          onChange={handleChange}
          required
        >
          <option value="">Select District</option>

          {bdGeocode.districts.map((district) => (
            <option key={district.id} value={district.id}>
              {district.name}
            </option>
          ))}
        </select>

        <select
          name="recipient_upazila"
          className="select select-bordered w-full"
          value={formData.recipient_upazila}
          onChange={handleChange}
          required
        >
          <option value="">Select Upazila</option>

          {filteredUpazilas.map((upazila) => (
            <option key={upazila.id} value={upazila.id}>
              {upazila.name}
            </option>
          ))}
        </select>

        <input
          type="text"
          name="hospital_name"
          placeholder="Hospital Name"
          className="input input-bordered w-full"
          value={formData.hospital_name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="full_address"
          placeholder="Full Address"
          className="input input-bordered w-full"
          value={formData.full_address}
          onChange={handleChange}
          required
        />

        <select
          name="blood_group"
          className="select select-bordered w-full"
          value={formData.blood_group}
          onChange={handleChange}
          required
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

        <input
          type="date"
          name="donation_date"
          className="input input-bordered w-full"
          value={formData.donation_date}
          onChange={handleChange}
          required
        />

        <input
          type="time"
          name="donation_time"
          className="input input-bordered w-full"
          value={formData.donation_time}
          onChange={handleChange}
          required
        />

        <textarea
          name="request_message"
          placeholder="Request Message"
          className="textarea textarea-bordered md:col-span-2"
          rows="5"
          value={formData.request_message}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="btn btn-primary md:col-span-2"
        >
          Create Donation Request
        </button>

      </form>
    </div>
  );
}