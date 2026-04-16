

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
           
            <div className={`w-12 h-12 ${details.bg} rounded-xl flex items-center justify-center text-xl`}>
                {details.icon}
            </div>

            <div>
                <h3 className="font-bold text-gray-800">
                    {item.type} with {item.name}
                </h3>
                <p className="text-xs text-gray-400">{item.date}</p>

                
                <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full border mt-1 inline-block ${details.color} ${details.bg}`}>
                    {item.type}
                </span>
            </div>
        </div>)
  
    
    

    
};


export default TimelineCard;