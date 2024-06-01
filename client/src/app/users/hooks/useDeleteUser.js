import { userService } from "@/services/user.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useDeleteUser() {
    const queryClient = useQueryClient();
    const { mutate: deleteUser } = useMutation({
        mutationKey: ['delete user'],
        mutationFn: (id) => userService.deleteUser(id.toString()),
        onSuccess() {
            queryClient.invalidateQueries({
                queryKey: ['users']
            })
            toast.success('Пользователь удален')
        }
    })
    return { deleteUser }
}