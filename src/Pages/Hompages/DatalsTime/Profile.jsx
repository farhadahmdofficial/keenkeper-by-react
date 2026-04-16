




const ProfileCard = ({ friend }) => {
    return (
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col items-center text-center space-y-3 h-full">
            <img
                className="w-24 h-24 rounded-full object-cover border-4 border-gray-50"
                src={friend.picture}
                alt={friend.name}
            />
            <div>
                <h2 className="text-xl font-bold text-gray-800">{friend.name}</h2>
                <p className="text-sm text-gray-500">{friend.email}</p>
            </div>

            {/* Dynamic Status Badge */}
            <span className={`px-4 py-1 rounded-full text-xs font-bold text-white uppercase ${friend.status === 'on-track' ? 'bg-[#244D3F]' : 'bg-orange-400'
                }`}>
                {friend.status}
            </span>

            <p className="text-sm text-gray-600 px-4">{friend.bio}</p>

            {/* Tags */}
            <div className="flex gap-2 flex-wrap justify-center">
                {friend.tags.map((tag, i) => (
                    <span key={i} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase">
                        {tag}
                    </span>
                ))}
            </div>

            {/* Action Buttons */}
            <div className="w-full space-y-2 pt-4">
                <button className="w-full py-2 bg-gray-50 hover:bg-gray-100 text-sm rounded-lg border border-gray-200">⏰ Snooze 2 Weeks</button>
                <button className="w-full py-2 bg-orange-50 hover:bg-orange-100 text-orange-700 text-sm rounded-lg border border-orange-100">📦 Archive</button>
                <button className="w-full py-2 bg-red-50 hover:bg-red-100 text-red-600 text-sm rounded-lg border border-red-100">🗑️ Delete</button>
            </div>
        </div>
    );
};



export default ProfileCard;