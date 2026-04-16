

const TimelineCard = ({ item }) => {




    const getIconDetails = (type) => {
        switch (type) {
            case 'Call':
                return { icon: '📞', color: 'text-green-600', bg: 'bg-green-50' };
            case 'Text':
                return { icon: '💬', color: 'text-blue-600', bg: 'bg-blue-50' };
            case 'Video':
                return { icon: '🎥', color: 'text-purple-600', bg: 'bg-purple-50' };
            default:
                return { icon: '📅', color: 'text-gray-600', bg: 'bg-gray-50' };
        }
    };

    const details = getIconDetails(item.type);

    return (
        <div className="bg-white border border-gray-200 rounded-2xl p-4 mb-4 shadow-sm flex items-center gap-4">
            {/* এখানে আইকনটি ডাইনামিক করা হয়েছে */}
            <div className={`w-12 h-12 ${details.bg} rounded-xl flex items-center justify-center text-xl`}>
                {details.icon}
            </div>

            <div>
                <h3 className="font-bold text-gray-800">
                    {item.type} with {item.name}
                </h3>
                <p className="text-xs text-gray-400">{item.date}</p>

                {/* একটি ছোট ব্যাজ যা টাইপটি দেখাবে */}
                <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full border mt-1 inline-block ${details.color} ${details.bg}`}>
                    {item.type}
                </span>
            </div>
        </div>)
    // আইকন এবং কালার সেট করার লজিক
    // const getStyle = (type) => {
    //     switch (type) {
    //         case 'Text': return { icon: '💬', bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-100' };
    //         case 'Video': return { icon: '🎥', bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-100' };
    //         case 'Call': return { icon: '📞', bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-100' };
    //         //   default: return { icon: '📅', bg: 'bg-gray-50', text: 'text-gray-600', border: 'border-gray-100' };
    //     }
    // };

    // const style = getStyle(item.type);

    // return (
    //     <div className="bg-white border border-gray-200 rounded-2xl p-4 mb-4 shadow-sm flex items-center gap-4">
    //         <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-xl">
    //             {item.type === 'Text' ? '💬' : item.type === 'Video' ? '🎥' : '📞'}
    //         </div>
    //         <div>
    //             <h3 className="font-bold">{item.type} with {item.name}</h3>
    //             <p className="text-xs text-gray-400">{item.date}</p>
    //         </div>
    //     </div>
    // );
};


export default TimelineCard;