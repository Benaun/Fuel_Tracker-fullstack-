'use client'

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Skeleton } from "@/components/ui/skeleton";
import { useGetAllCars } from "@/hooks/useGetAllCars";
import Link from "next/link";
import { useDeleteCar } from "@/app/cars/hooks/useDeleteCar";
import { FaCarBurst } from "react-icons/fa6";
import { MdOutlineCarCrash } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";

export default function CarsTable() {
    const { cars, isLoading } = useGetAllCars();
    const { deleteCar } = useDeleteCar()

    return (
        <div className="flex flex-wrap mx-auto w-full my-24 max-w-[430px] gap-4 justify-center">
            <Table>
                <TableCaption>
                    <div className="flex justify-center gap-2">
                        Таблица автомобилей
                        <Link
                            href={"/cars/new-car"}
                            className="flex items-center cursor-pointer"
                        >
                            <FaCar
                                fill="green"
                                size={20}
                            />
                            <CiCirclePlus
                                fill="green"
                                size={15}
                            />
                        </Link>
                    </div>
                </TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Модель</TableHead>
                        <TableHead>Город</TableHead>
                        <TableHead>Трасса</TableHead>
                        <TableHead>Др.город</TableHead>
                        <TableHead>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {isLoading
                        ? <TableRow>
                            <TableCell><Skeleton className="h-4 w-[57px]" /></TableCell>
                            <TableCell><Skeleton className="h-4 w-[42px]" /></TableCell>
                            <TableCell><Skeleton className="h-4 w-[50px]" /></TableCell>
                            <TableCell><Skeleton className="h-4 w-[67px]" /></TableCell>
                            <TableCell><Skeleton className="h-4 w-[53px]" /></TableCell>
                        </TableRow>
                        : cars?.map((car) => (
                            <TableRow
                                key={car.carId}
                                className="text-center"
                            >
                                <TableCell>{car.model}</TableCell>
                                <TableCell>{car.city}</TableCell>
                                <TableCell>{car.track}</TableCell>
                                <TableCell>{car.otherCity}</TableCell>
                                <TableCell className="flex gap-2 justify-center">
                                    <MdOutlineCarCrash
                                        fill="orange"
                                        size={20}
                                    />
                                    <FaCarBurst
                                        size={20}
                                        fill="red"
                                        onClick={() => deleteCar(car.carId)}
                                    />
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}