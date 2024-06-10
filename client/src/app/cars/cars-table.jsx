import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useGetAllCars } from "@/hooks/useGetAllCars";
import { useDeleteCar } from "@/app/cars/hooks/useDeleteCar";
import { FaCarBurst } from "react-icons/fa6";
import { MdOutlineCarCrash } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { useFormContext } from "react-hook-form";
import { useCreateCar } from "./hooks/useCreatCar";
import Loader from "@/components/ui/loader";

export default function CarsTable({ isHidden }) {
    const { cars, isPending } = useGetAllCars();
    const { createCar } = useCreateCar()
    const { reset: editCar } = useFormContext();
    const { deleteCar } = useDeleteCar();

    return (
        <div className="flex w-full justify-center">
            {isPending
                ? <Loader />
                : <Table>
                    <TableCaption>
                        <div className="flex justify-center gap-2">
                            Таблица автомобилей
                            <div
                                className="flex items-center"
                                onClick={() => createCar()}
                            >
                                <FaCar
                                    fill="green"
                                    size={20}
                                />
                                <CiCirclePlus
                                    fill="green"
                                    size={15}
                                />
                            </div>
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
                        {cars?.map((car) => (
                            <TableRow
                                key={car.id}
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
                                        onClick={() => {
                                            editCar({
                                                id: car.id,
                                                model: car.model,
                                                city: car.city,
                                                track: car.track,
                                                otherCity: car.otherCity
                                            });
                                            isHidden(false)
                                        }}
                                    />
                                    <FaCarBurst
                                        size={20}
                                        fill="red"
                                        onClick={() => deleteCar(car.id)}
                                    />
                                </TableCell>
                            </TableRow>
                        ))
                        }
                    </TableBody>
                </Table>
            }

        </div>
    )
}