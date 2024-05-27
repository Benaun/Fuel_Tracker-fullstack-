import { userService } from "@/services/user.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUpdateUser(key) {
    const queryClient = useQueryClient()

    const { mutate } = useMutation({
        mutationKey: ['update user', key],
        mutationFn: ({ id, data }) => userService.updateUser(id, data),
        onSuccess() {
            queryClient.invalidateQueries({
                queryKey: ['users']
            })
        }
    })

    return { mutate }
}