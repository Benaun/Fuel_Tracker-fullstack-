'use client'

import { useGetAllCars } from "@/hooks/useGetAllCars";
import CarItem from "./car-item";
import { useAddCarToUser } from "./hooks/useAddCarToUser";
import { Button } from "@/components/ui/button";


export default function CarsList() {
    const { cars, isLoading } = useGetAllCars();
    const { addCarToUser } = useAddCarToUser();


    return (
        <div className="flex flex-wrap mx-auto my-24 max-w-[430px] gap-4 justify-center">
            {cars ? cars.map(car => (
                <div
                    className="max-w-sm rounded bg-slate-300 overflow-hidden shadow-lg w-full"
                    key={car.carId}
                >
                    <CarItem item={car}>
                        <Button onClick={() => addCarToUser(car)}>
                            Добавить
                        </Button>
                    </CarItem>
                </div>
            )) : <div> Нет данных!</div>}
        </div>
    )
}