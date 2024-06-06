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
                        key={item.id}
                        item={item}
                        handleClick={() => {
                            addCarToUser(item);
                            router.push('/my-car')
                        }}
                    />
                )}
            </div>
        </section>
    )
}