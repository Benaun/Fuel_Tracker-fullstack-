'use client'

import { useGetAllCars } from "@/hooks/useGetAllCars";
import CarItem from "../../components/ui/car-item";
import { useAddCarToUser } from "./useAddCarToUser";
import Loader from "@/components/ui/loader";

export default function CarsList() {
    const { cars, isPending } = useGetAllCars();
    const { addCarToUser } = useAddCarToUser();

    return (
        <section className="flex flex-col">
            <div className="flex flex-wrap justify-center gap-10">
                {isPending
                    ? <Loader />
                    : (cars?.map((item) =>
                        <CarItem
                            key={item.id}
                            item={item}
                            handleClick={() => {
                                addCarToUser(item);
                            }}
                        />
                    ))
                }

            </div>
        </section>
    )
}