const Admin = () => {
return (
    <div className="p-6">

      {/* Page Title */}
    <h1 className="text-3xl font-bold mb-8">
        Admin Dashboard
    </h1>

      {/* Stats Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-gray-500">Total Donors</h3>
        <p className="text-3xl font-bold text-red-600">120</p>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-gray-500">Total Requests</h3>
        <p className="text-3xl font-bold text-blue-600">45</p>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-gray-500">Pending Requests</h3>
        <p className="text-3xl font-bold text-yellow-500">12</p>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-gray-500">Completed Donations</h3>
        <p className="text-3xl font-bold text-green-600">80</p>
        </div>

    </div>

      {/* Recent Requests Table */}
    <div className="mt-10 bg-white shadow rounded-lg p-6">

        <h2 className="text-xl font-bold mb-4">
        Recent Blood Requests
        </h2>

        <div className="overflow-x-auto">

        <table className="table w-full">

            <thead>
            <tr>
                <th>Recipient</th>
                <th>Blood Group</th>
                <th>District</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
            </thead>

            <tbody>

            <tr>
                <td>John Doe</td>
                <td>A+</td>
                <td>Dhaka</td>
                <td>
                <span className="badge badge-warning">
                    Pending
                </span>
                </td>
                <td>
                <button className="btn btn-sm btn-success">
                    Approve
                </button>
                </td>
            </tr>

            <tr>
                <td>Alice</td>
                <td>O-</td>
                <td>Chattogram</td>
                <td>
                <span className="badge badge-warning">
                    Pending
                </span>
                </td>
                <td>
                <button className="btn btn-sm btn-success">
                    Approve
                </button>
                </td>
            </tr>

            </tbody>

        </table>

        </div>

    </div>

    </div>
  );
};

export default Admin;
