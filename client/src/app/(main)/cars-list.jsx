'use client'

import { useGetAllCars } from "@/hooks/useGetAllCars";
import CarItem from "../../components/ui/car-item";
import { useAddCarToUser } from "./hooks/useAddCarToUser";
import { useRouter } from "next/navigation";

export default function CarsList() {
    const { cars, isLoading } = useGetAllCars();
    const { addCarToUser } = useAddCarToUser();
    const router = useRouter()

    return (
        <section className="flex flex-col">
            <div className="flex flex-wrap justify-center my-20 gap-10">
                {cars?.map((item) =>
                    <CarItem
                        key={item.carId}
                        item={item}
                        handleClick={() => {
                            addCarToUser(item);
                            router.push('/my-car')
                        }}
                    />
                )}
            </div>
        </section>
        // <div className="flex flex-wrap mx-auto my-24 max-w-[430px] gap-4 justify-center">
        //     {cars ? cars.map(car => (
        //         <div
        //             className="max-w-sm rounded bg-slate-300 overflow-hidden shadow-lg w-full relative"
        //             key={car.carId}
        //         >
        //             <CarItem item={car}>
        //                 <RiAddBoxFill
        //                 className="absolute top-0 right-0 cursor-pointer"
        //                 size={25}
        //                 fill="green"
        //                     onClick={() => {
        //                         addCarToUser(car);
        //                         router.push('/my-car')
        //                     }}
        //                 />
        //             </CarItem>
        //         </div>
        //     )) : <div> Нет данных!</div>}
        // </div>
    )
}