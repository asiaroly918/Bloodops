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

  // Filter করার জন্য District ID
  const [selectedDistrictId, setSelectedDistrictId] = useState("");

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

  // District ID অনুযায়ী Upazila Filter
  const filteredUpazilas = bdGeocode.upazilas.filter(
    (upazila) => upazila.district_id === selectedDistrictId
  );

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "recipient_district") {
      const districtId =
        e.target.options[e.target.selectedIndex].dataset.id;

      setSelectedDistrictId(districtId);

      setFormData({
        ...formData,
        recipient_district: value, // Name Save হবে
        recipient_upazila: "",
      });

      return ;
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

        setFormData({
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

        setSelectedDistrictId("");

        navigate("/dashboard/my-donation-requests");
      } else {
        alert(data.message || "Failed to create request");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };
      return(
        
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Create Donation Request
      </h2>

      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-5">

        {/* Requester Name */}
        <input
          className="input input-bordered w-full"
          value={formData.requester_name}
          readOnly
        />

        {/* Requester Email */}
        <input
          className="input input-bordered w-full"
          value={formData.requester_email}
          readOnly
        />

        {/* Recipient Name */}
        <input
          type="text"
          name="recipient_name"
          placeholder="Recipient Name"
          className="input input-bordered w-full"
          value={formData.recipient_name}
          onChange={handleChange}
          required
        />

        {/* District */}
        <select
          name="recipient_district"
          className="select select-bordered w-full"
          value={formData.recipient_district}
          onChange={handleChange}
          required
        >
          <option value="">Select District</option>

          {bdGeocode.districts.map((district) => (
            <option
              key={district.id}
              value={district.name}
              data-id={district.id}
            >
              {district.name}
            </option>
          ))}
        </select>

        {/* Upazila */}
        <select
          name="recipient_upazila"
          className="select select-bordered w-full"
          value={formData.recipient_upazila}
          onChange={handleChange}
          required
        >
          <option value="">Select Upazila</option>

          {filteredUpazilas.map((upazila) => (
            <option
              key={upazila.id}
              value={upazila.name}
            >
              {upazila.name}
            </option>
          ))}
        </select>

        {/* Hospital */}
        <input
          type="text"
          name="hospital_name"
          placeholder="Hospital Name"
          className="input input-bordered w-full"
          value={formData.hospital_name}
          onChange={handleChange}
          required
        />

        {/* Address */}
        <input
          type="text"
          name="full_address"
          placeholder="Full Address"
          className="input input-bordered w-full"
          value={formData.full_address}
          onChange={handleChange}
          required
        />

        {/* Blood Group */}
        <select
          name="blood_group"
          className="select select-bordered w-full"
          value={formData.blood_group}
          onChange={handleChange}
          required
        >
          <option value="">Select Blood Group</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>

        {/* Donation Date */}
        <input
          type="date"
          name="donation_date"
          className="input input-bordered w-full"
          value={formData.donation_date}
          onChange={handleChange}
          required
        />

        {/* Donation Time */}
        <input
          type="time"
          name="donation_time"
          className="input input-bordered w-full"
          value={formData.donation_time}
          onChange={handleChange}
          required
        />

        {/* Message */}
        <textarea
          name="request_message"
          placeholder="Request Message"
          className="textarea textarea-bordered md:col-span-2"
          rows={5}
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