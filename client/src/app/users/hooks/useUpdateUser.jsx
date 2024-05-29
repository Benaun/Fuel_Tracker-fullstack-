import { userService } from "@/services/user.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useUpdateUser(key) {
    const queryClient = useQueryClient()

    const { mutate } = useMutation({
        mutationKey: ['update user', key],
        mutationFn: ({ userId, data }) => userService.updateUser(userId, data),
        onSuccess() {
            queryClient.invalidateQueries({
                queryKey: ['users']
            })
            toast.success('Пользователь обновлен')
        }
    })

    return { mutate }
}