import { userService } from "@/services/user.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useUpdateUser() {
    const queryClient = useQueryClient()
    const { mutate: updateUser } = useMutation({
        mutationKey: ['update user'],
        mutationFn: ({ id, data }) => userService.updateUser(id, data),
        onSuccess() {
            queryClient.invalidateQueries({
                queryKey: ['users']
            })
            toast.success('Пользователь обновлен')
        }
    })
    return { updateUser }
}