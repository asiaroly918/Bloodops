import { NavLink, useNavigate } from "react-router";

const Sidebar = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const activeClass = ({ isActive }) =>
    isActive ? "bg-red-500 text-white rounded-lg" : "";

  return (
    <div className="drawer-side">
      <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

      <aside className="relative w-64 min-h-full bg-base-100 border-r">
        {/* Logo */}
        <div className="p-6 border-b">
          <h2 className="text-2xl font-bold text-red-600">
            BlooDrops
          </h2>
        </div>

        {/* Menu */}
        <ul className="menu p-4 text-base-content">
          {user?.role === "donor" && (
            <>
              <li>
                <NavLink
                  to="/dashboard"
                  end
                  className={activeClass}
                >
                  Dashboard Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/my-donation-requests"
                  className={activeClass}
                >
                  My Donation Requests
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/create-donation-request"
                  className={activeClass}
                >
                  Create Donation Request
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/profile"
                  className={activeClass}
                >
                  Profile
                </NavLink>
              </li>
            </>
          )}
        </ul>

        {/* Logout Button */}
        <div className="absolute bottom-6 left-0 w-full px-4">
          <button
            onClick={handleLogout}
            className="btn btn-error w-full"
          >
            Logout
          </button>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;