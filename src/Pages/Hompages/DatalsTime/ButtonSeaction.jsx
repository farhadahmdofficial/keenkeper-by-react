

const QuickCheckIn = ({handalTimeline}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 mt-6">
      <h4 className="font-bold text-sm mb-4">Quick Check-In</h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button onClick={handalTimeline}  className="flex items-center justify-center gap-2 py-3 bg-green-50 text-green-700 font-bold rounded-lg border border-green-100 hover:bg-green-100 transition">
          📞 Call
        </button>
        <button onClick={handalTimeline}  className="flex items-center justify-center gap-2 py-3 bg-blue-50 text-blue-700 font-bold rounded-lg border border-blue-100 hover:bg-blue-100 transition">
          💬 Text
        </button>
        <button onClick={handalTimeline} className="flex items-center justify-center gap-2 py-3 bg-purple-50 text-purple-700 font-bold rounded-lg border border-purple-100 hover:bg-purple-100 transition">
          🎥 Video
        </button>
      </div>
    </div>
  );
};

export default QuickCheckIn;