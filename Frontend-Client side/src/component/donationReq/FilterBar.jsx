function FilterBar({ selectedBloodGroup, setSelectedBloodGroup, selectedDistrict, setSelectedDistrict }) {
  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 p-6 mb-10 shadow-sm flex flex-col md:flex-row gap-5 items-end">
      <div className="w-full md:w-1/3">
        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
          Filter Blood Group
        </label>
        <select
          value={selectedBloodGroup}
          onChange={(e) => setSelectedBloodGroup(e.target.value)}
          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-rose-500 outline-none transition"
        >
          <option value="">All Groups</option>
          {bloodGroups.map((group) => (
            <option key={group} value={group}>{group}</option>
          ))}
        </select>
      </div>

      <div className="w-full md:w-1/3">
        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
          Filter District
        </label>
        <input
          type="text"
          placeholder="e.g. Dhaka, Chittagong"
          value={selectedDistrict}
          onChange={(e) => setSelectedDistrict(e.target.value)}
          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-rose-500 outline-none transition"
        />
      </div>

      {(selectedBloodGroup || selectedDistrict) && (
        <button
          onClick={() => {
            setSelectedBloodGroup('');
            setSelectedDistrict('');
          }}
          className="text-sm font-semibold text-rose-600 hover:text-rose-700 pb-3 transition self-start md:self-auto"
        >
          Clear Filters
        </button>
      )}
    </div>
  );
}

export default FilterBar;