

const TimelineCard = ({ item }) => {
  // আইকন এবং কালার সেট করার লজিক
  const getStyle = (type) => {
    switch (type) {
      case 'Text': return { icon: '💬', bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-100' };
      case 'Video': return { icon: '🎥', bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-100' };
      case 'Call': return { icon: '📞', bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-100' };
      default: return { icon: '📅', bg: 'bg-gray-50', text: 'text-gray-600', border: 'border-gray-100' };
    }
  };

  const style = getStyle(item.type);

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 mb-4 shadow-sm flex items-center gap-4 transition-all hover:shadow-md">
      {/* Icon Box */}
      <div className={`${style.bg} ${style.border} border w-12 h-12 rounded-xl flex justify-center items-center text-xl`}>
        {style.icon}
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="font-bold text-gray-800 text-lg">
          {item.type} with <span className="text-gray-900">{item.name}</span>
        </h3>
        <div className="flex flex-col text-xs text-gray-400 mt-0.5">
          <span>{item.name}</span>
          <span>{item.date || new Date().toLocaleString()}</span>
        </div>
        
        {/* Type Badge */}
        <span className={`inline-block mt-2 px-3 py-0.5 rounded-full text-[10px] font-bold uppercase ${style.bg} ${style.text} border ${style.border}`}>
          {item.type}
        </span>
      </div>
    </div>
  );
};


export default TimelineCard;