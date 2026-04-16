



const StatsSection = ({ selectedFriend }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Days Card */}
      <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
        <h3 className="text-2xl font-bold">{selectedFriend.days_since_contact}</h3>
        <p className="text-[10px] text-gray-500 uppercase tracking-wider">Days Since Contact</p>
      </div>
      {/* Goal Card */}
      <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
        <h3 className="text-2xl font-bold">10</h3>
        <p className="text-[10px] text-gray-500 uppercase tracking-wider">Goal</p>
      </div>
      {/* Next Due Card */}
      <div className="bg-white border border-gray-200 rounded-xl p-4 text-center ">
        <h3 className="text-2xl font-bold">2026-04-20 </h3>
        <p className="text-[10px] text-gray-500 uppercase">Next Due</p>
      </div>
    </div>
  );
};

export default StatsSection;