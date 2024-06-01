'use client'

import { useGetAllCars } from "@/hooks/useGetAllCars";
import CarItem from "./car-item";

export default function CarsList() {
    const { cars, isLoading } = useGetAllCars()

    return (
        <div className="flex flex-wrap mx-auto my-24 max-w-[430px] gap-4 justify-center">
            {cars ? cars.map(car => (
                <div
                    className="max-w-sm rounded bg-slate-300 overflow-hidden shadow-lg w-full"
                    key={car.carId}
                >
                    <CarItem item={car} />
                </div>
            )) : <div> Нет данных!</div>}
        </div>


    )
}