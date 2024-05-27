import { carService } from "@/services/car.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUpdateCar(key) {
    const queryClient = useQueryClient()

    const { mutate: updateCar } = useMutation({
        mutationKey: ['update car', key],
        mutationFn: ({ id, data }) => carService.updateCar(id, data),
        onSuccess() {
            queryClient.invalidateQueries({
                queryKey: ['cars']
            })
        }
    })

    return { updateCar }
}