import { carService } from "@/services/car.service";
import { useQuery } from "@tanstack/react-query";

export function useGetAllCars() {
    const { data, isLoading, isSuccess } = useQuery({
        queryKey: ['cars'],
        queryFn: () => carService.getCars()
    })

    return { data, isLoading, isSuccess }
}