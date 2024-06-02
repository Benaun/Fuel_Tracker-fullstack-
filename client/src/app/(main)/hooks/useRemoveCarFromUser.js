import { userService } from "@/services/user.service";
import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast";

export function useRemoveCarFromUser() {
    const queryClient = useQueryClient();
    const { mutate: removeCarFromUser } = useMutation({
        mutationKey: ['remove car from user'],
        mutationFn: () => userService.removeCarFromUser(),
        onSuccess() {
            toast.success("Авто удалено")
            queryClient.invalidateQueries({
                queryKey: ['users']
            })
        },
        onError() {
            toast.error('Что-то пошло не так...')
        }
    })
    return { removeCarFromUser }
}