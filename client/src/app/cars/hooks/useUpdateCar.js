import { carService } from "@/services/car.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useUpdateCar() {
    const queryClient = useQueryClient()
    const { mutate: updateCar } = useMutation({
        mutationKey: ['update car'],
        mutationFn: ({ id, data }) => carService.updateCar(id, data),
        onSuccess() {
            toast.success('Данные обновлены!')
            queryClient.invalidateQueries({
                queryKey: ['cars']
            })
        },
        onError() {
            toast.error('Что-то пошло не так...')
        }
    })
    return { updateCar }
}