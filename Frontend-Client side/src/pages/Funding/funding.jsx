import { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
);

const Funding = () => {
  const [showModal, setShowModal] = useState(false);
  const [amount, setAmount] = useState("");

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Funding Page
        </h1>

        <button
          className="btn btn-primary"
          onClick={() => setShowModal(true)}
        >
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

      {/* Modal */}

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">

          <div className="bg-base-100 p-6 rounded-lg w-96">

            <h2 className="text-2xl font-bold mb-4">
              Give Funding
            </h2>

            <input
              type="number"
              placeholder="Enter Amount"
              className="input input-bordered w-full mb-4"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />

            {amount > 0 && (
              <Elements stripe={stripePromise}>
                <CheckoutForm amount={amount} />
              </Elements>
            )}

              <button
                className="btn mt-3 w-full"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>

          </div>
      )}
      
    </div>
  );
};

export default Funding;