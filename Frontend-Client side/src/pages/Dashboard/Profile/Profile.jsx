import { useState } from "react";


export default function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    avatar: user?.avatar || "",
    blood_group: user?.blood_group || "",
    district: user?.district || "",
    upazila: user?.upazila || "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `http://https://bloodops.vercel.app/api/users/${user._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("user", JSON.stringify(data));
        alert("Profile updated successfully!");
        setIsEditing(false);
      } else {
        alert(data.message || "Failed to update profile");
      }
    } catch (error) {
      alert("Something went wrong");
      console.log(error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">My Profile</h2>

      <form onSubmit={handleSave} className="space-y-4">

        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          disabled={!isEditing}
          className="input input-bordered w-full"
        />

        <input
          name="email"
          value={formData.email}
          disabled
          className="input input-bordered w-full"
        />

        <input
          name="avatar"
          value={formData.avatar}
          onChange={handleChange}
          disabled={!isEditing}
          className="input input-bordered w-full"
        />

        <input
          name="blood_group"
          value={formData.blood_group}
          onChange={handleChange}
          disabled={!isEditing}
          className="input input-bordered w-full"
        />

        <input
          name="district"
          value={formData.district}
          onChange={handleChange}
          disabled={!isEditing}
          className="input input-bordered w-full"
        />

        <input
          name="upazila"
          value={formData.upazila}
          onChange={handleChange}
          disabled={!isEditing}
          className="input input-bordered w-full"
        />

        {!isEditing ? (
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setIsEditing(true)}
          >
            Edit Profile
          </button>
        ) : (
          <button type="submit" className="btn btn-success">
            Save Changes
          </button>
        )}

      </form>
    </div>
  );
}