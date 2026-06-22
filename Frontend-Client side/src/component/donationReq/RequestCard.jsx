function RequestCard({ request, isLoggedIn }) {
  const { _id, recipientName, district, upazila, bloodGroup, donationDate, donationTime } = request;

  const handleViewDetails = () => {
    if (!isLoggedIn) {
      window.location.href = '/login'; // Redirects if logged out
    } else {
      window.location.href = `/donation-requests/${_id}`; // Navigates if logged in
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition flex flex-col justify-between overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-bold text-slate-900 text-lg tracking-tight truncate max-w-[160px]">
              {recipientName}
            </h3>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-0.5">Recipient</p>
          </div>
          <span className="inline-flex flex-col items-center justify-center bg-rose-50 text-rose-700 font-extrabold px-3 py-1.5 rounded-xl border border-rose-100 min-w-[48px]">
            <span className="text-lg leading-none">{bloodGroup}</span>
          </span>
        </div>

        <div className="space-y-3 pt-3 border-t border-slate-100">
          {/* Location */}
          <div className="flex items-center gap-2.5 text-sm text-slate-600">
            <svg className="w-4 h-4 text-slate-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            </svg>
            <span className="truncate">{upazila}, {district}</span>
          </div>

          {/* Date */}
          <div className="flex items-center gap-2.5 text-sm text-slate-600">
            <svg className="w-4 h-4 text-slate-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{donationDate}</span>
          </div>

          {/* Time */}
          <div className="flex items-center gap-2.5 text-sm text-slate-600">
            <svg className="w-4 h-4 text-slate-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{donationTime}</span>
          </div>
        </div>
      </div>

      {/* Button Action */}
      <div className="px-6 pb-6 pt-2 bg-slate-50/50 border-t border-slate-100">
        <button
          onClick={handleViewDetails}
          className="w-full bg-white hover:bg-rose-600 text-slate-700 hover:text-white font-semibold py-2.5 px-4 rounded-xl border border-slate-200 hover:border-rose-600 transition shadow-sm text-center text-sm"
        >
          View Details
        </button>
      </div>
    </div>
  );
}

export default RequestCard;