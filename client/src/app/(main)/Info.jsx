'use client'

import { useGetAllCars } from "@/hooks/useGetAllCars";

export default function Info() {
    const { data, isLoading } = useGetAllCars()

    return (
        <div className="flex flex-wrap mx-auto my-24 max-w-[430px] gap-4 justify-center">
            {data ? data.map(car => (
                <div
                    className="max-w-sm rounded bg-slate-300 overflow-hidden shadow-lg w-full" 
                    key={car.carId}
                >
                    <div className="flex items-center justify-center my-2">
                        <div className="font-bold text-xl">{car.model}</div>
                    </div>
                    <div className="px-1 flex justify-center gap-3">
                        <div
                            className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                        >
                            <span>Город: </span> <span>{car.city}</span>
                        </div>
                        <div
                            className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                        >
                            <span>Трасса: </span> <span>{car.track}</span>
                        </div>
                        <div
                            className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                        >
                            <span>Др.гор: </span> <span>{car.otherCity}</span>
                        </div>
                    </div>
                </div>
            )) : <div> Нет данных!</div>}
        </div>


    )
}