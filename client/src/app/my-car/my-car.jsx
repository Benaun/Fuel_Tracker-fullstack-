'use client'

import { FaWindowClose } from "react-icons/fa";
import CarItem from "@/components/ui/car-item";
import { useProfile } from "./hooks/useProfile";
import Link from "next/link";
import { Heading } from "@/components/ui/heading";
import { useRemoveCarFromUser } from "./hooks/useRemoveCarFromUser";
import { useRouter } from "next/navigation";
import DistanceFieldsList from "./distance-fields-list";
import Loader from "@/components/ui/loader";

export default function MyCar() {
    const { data, isPending } = useProfile();
    const { removeCarFromUser } = useRemoveCarFromUser();
    const isUserCar = data?.user.userCars[0];
    const router = useRouter();

    return <>
        <div className="flex mx-auto max-w-[430px] justify-center">
            {isPending
                ? <Loader />
                : (isUserCar?.model
                    ?
                    <div
                        className="max-w-md px-7 rounded overflow-hidden shadow-lg w-full relative"
                        key={isUserCar.carId}
                    >
                        <CarItem item={isUserCar} className="w-full" isFull={true}>
                            <FaWindowClose
                                className="absolute right-2 cursor-pointer"
                                size={20}
                                color="red"
                                onClick={() => {
                                    removeCarFromUser(isUserCar);
                                    router.push('/')
                                }}>
                            </FaWindowClose>
                        </CarItem>
                        <DistanceFieldsList />
                    </div>
                    : <Link href={'/'}
                        className="mt-10">
                        <Heading title='Выберите авто...' />
                    </Link>
                )
            }
        </div>
    </>
}