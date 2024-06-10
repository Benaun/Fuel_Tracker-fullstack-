import { carService } from "@/services/car.service";
import { useQuery } from "@tanstack/react-query";

export function useGetAllCars() {
    const { data: cars, isPending } = useQuery({
        queryKey: ['cars'],
        queryFn: () => carService.getCars()
    })

    return { cars, isPending }
}