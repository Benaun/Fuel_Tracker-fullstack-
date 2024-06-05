import { carService } from "@/services/car.service"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

export function useCreateCar() {
    const queryClient = useQueryClient()
    const router = useRouter()
    const { mutate: createCar } = useMutation({
        mutationKey: ['create car'],
        mutationFn: () => carService.createCar(),
        onSuccess() {
            toast.success('Авто создано!')
            queryClient.invalidateQueries({
                queryKey: ['cars']
            })
            router.push('/cars')
        },
        onError() {
            toast.error('Что-то пошло не так...')
        }
    })
    return { createCar }
}