import { userService } from "@/services/user.service";
import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast";

export function useAddCarToUser() {
    const queryClient = useQueryClient();
    const { mutate: addCarToUser } = useMutation({
        mutationKey: ['add car to user'],
        mutationFn: (data) => userService.addCarToUser(data),
        onSuccess() {
            toast.success("Авто выбрано")
            queryClient.invalidateQueries({
                queryKey: ['users']
            })
        },
        onError() {
            toast.error('Что-то пошло не так...')
        }
    })
    return { addCarToUser }
}