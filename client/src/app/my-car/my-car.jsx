'use client'

import { FaWindowClose } from "react-icons/fa";
import CarItem from "@/components/ui/car-item";
import { useProfile } from "./hooks/useProfile";
import Link from "next/link";
import { Heading } from "@/components/ui/heading";
import { useRemoveCarFromUser } from "./hooks/useRemoveCarFromUser";
import { useRouter } from "next/navigation";
import DistanceFieldsList from "./distance-fields-list";

export default function MyCar() {
    const { data } = useProfile();
    const { removeCarFromUser } = useRemoveCarFromUser();
    const isUserCar = data?.user.userCars[0];
    const router = useRouter();
    console.log(data?.user)

    return <>
        <div className="flex flex-wrap mx-auto my-12 max-w-[430px] justify-center">
            {isUserCar?.model
                ?
                <div
                    className="max-w-md px-7 rounded bg-slate-300 overflow-hidden shadow-lg w-full relative pt-10"
                    key={isUserCar.carId}
                >
                    <CarItem item={isUserCar} className="w-full">
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
                    <DistanceFieldsList item={isUserCar} />
                </div>
                : <Link href={'/'}
                    className="mt-10">
                    <Heading title='Выберите авто...' />
                </Link>
            }
        </div>
    </>
}