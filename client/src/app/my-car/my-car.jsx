'use client'

import { FaWindowClose } from "react-icons/fa";
import CarItem from "@/components/ui/car-item";
import { useProfile } from "./hooks/useProfile";
import Link from "next/link";
import { Heading } from "@/components/ui/heading";
import { useRemoveCarFromUser } from "./hooks/useRemoveCarFromUser";
import { useRouter } from "next/navigation";

export default function MyCar() {
    const { data } = useProfile();
    const { removeCarFromUser } = useRemoveCarFromUser();
    const isUserCar = data?.user.userCars[0];
    const router = useRouter()

    return <>
        <div className="flex flex-wrap mx-auto my-24 max-w-[430px] gap-4 justify-center">
            {isUserCar?.model
                ? <div
                    className="max-w-md px-7 rounded bg-slate-300 overflow-hidden shadow-lg w-full relative"
                    key={isUserCar.carId}
                >
                    <CarItem item={isUserCar}>
                        <FaWindowClose
                            className="absolute top-0 right-0 cursor-pointer"
                            size={20}
                            fill="red"
                            onClick={() => {
                                removeCarFromUser(isUserCar);
                                router.push('/')
                            }}>
                        </FaWindowClose>
                    </CarItem>
                </div>
                : <Link href={'/'}>
                    <Heading title='Выберите авто...' />
                </Link>
            }
        </div>
    </>
}