const Funding = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Funding Page
        </h1>

        <button className="btn btn-primary">
          Give Fund
        </button>
      </div>

      <div className="overflow-x-auto bg-base-100 rounded-lg shadow">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Donor Name</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td colSpan="4" className="text-center py-10">
                No funding history found
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Funding;