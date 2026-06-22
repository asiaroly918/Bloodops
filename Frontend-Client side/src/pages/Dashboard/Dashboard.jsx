import { useEffect, useState } from "react";
import Admin from "./Admin/Admin";
import Donor from "./Donor/Donor";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    setUser(data || null);
    setLoading(false);
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (!user) {
    return (
      <p className="text-center mt-10 text-red-500">
        Please login first
      </p>
    );
  }

  return (
    <div>
      {user.role === "admin" ? (
        <Admin user={user} />
      ) : (
        <Donor user={user} />
      )}
    </div>
  );
};

export default Dashboard;