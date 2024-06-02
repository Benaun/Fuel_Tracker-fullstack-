'use client'

import { Button } from "@/components/ui/button";
import CarItem from "./car-item";
import CarsList from "./cars-list";
import { useProfile } from "./hooks/useProfile"
import { useRemoveCarFromUser } from "./hooks/useRemoveCarFromUser";

export default function MainPage() {
    const { data } = useProfile();
    const { removeCarFromUser } = useRemoveCarFromUser()
    const userCar = data?.user.userCars[0];
    if (userCar?.model) {
        return (
            <div className="flex flex-wrap mx-auto my-24 max-w-[430px] gap-4 justify-center">
                <div
                    className="max-w-sm rounded bg-slate-300 overflow-hidden shadow-lg w-full"
                    key={userCar.carId}
                >
                    <CarItem item={userCar}>
                        <Button onClick={() => removeCarFromUser()}>
                            Удалить
                        </Button>
                    </CarItem>
                </div>
            </div>
        )
    } else {
        return (
            <CarsList />
        )
    }
}

