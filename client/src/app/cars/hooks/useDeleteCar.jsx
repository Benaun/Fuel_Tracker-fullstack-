import { carService } from "@/services/car.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useDeleteCar() {
    const queryClient = useQueryClient();
    const { mutate: deleteCar } = useMutation({
        mutationKey: ['delete car'],
        mutationFn: (id) => carService.deleteCar(id),
        onSuccess() {
            toast.success('Авто удалено!')
            queryClient.invalidateQueries({
                queryKey: ['cars']
            })
        }
    })

    return { deleteCar }
}