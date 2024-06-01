export default function CarItem({ item }) {
    return (
        <>
            <div className="flex items-center justify-center my-2">
                <div className="font-bold text-xl">{item.model}</div>
            </div>
            <div className="px-1 flex justify-center gap-3">
                <div
                    className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                    <span>Город: </span> <span>{item.city}</span>
                </div>
                <div
                    className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                    <span>Трасса: </span> <span>{item.track}</span>
                </div>
                <div
                    className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                    <span>Др.гор: </span> <span>{item.otherCity}</span>
                </div>
            </div>
        </>
    )
}