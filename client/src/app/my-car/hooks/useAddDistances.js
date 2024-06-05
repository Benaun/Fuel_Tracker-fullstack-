import { userService } from "@/services/user.service";
import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast";

export function useAddDistances() {
    const queryClient = useQueryClient();

    const { mutate: addCityDistance } = useMutation({
        mutationKey: ['add city distance'],
        mutationFn: (data) => userService.addCityDistance(data),
        onSuccess() {
            toast.success("Успешно")
            queryClient.invalidateQueries({
                queryKey: ['users']
            })
        },
        onError() {
            toast.error('Что-то пошло не так...')
        }
    })

    // const { mutate: addTrackDistance } = useMutation({
    //     mutationKey: ['add track distance'],
    //     mutationFn: (data) => userService.addTrackDistance(data),
    //     onSuccess() {
    //         toast.success("Успешно")
    //         queryClient.invalidateQueries({
    //             queryKey: ['users']
    //         })
    //     },
    //     onError() {
    //         toast.error('Что-то пошло не так...')
    //     }
    // })

    // const { mutate: addOtherCitykDistance } = useMutation({
    //     mutationKey: ['add otherCity distance'],
    //     mutationFn: (data) => userService.addOtherCityDistance(data),
    //     onSuccess() {
    //         toast.success("Успешно")
    //         queryClient.invalidateQueries({
    //             queryKey: ['users']
    //         })
    //     },
    //     onError() {
    //         toast.error('Что-то пошло не так...')
    //     }
    // })

    return { addCityDistance }
}