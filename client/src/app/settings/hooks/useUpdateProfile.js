import { userService } from "@/services/user.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useUpdateProfile() {
    const queryClient = useQueryClient()
    const { mutate: updateProfile, isPending } = useMutation({
        mutationKey: ['update profile'],
        mutationFn: (data) => userService.update(data),
        onSuccess() {
            toast.success('Данные обновлены')
            queryClient.invalidate({ queryKey: ['profile'] })
        },
        onError() {
            toast.error('Что-то пошло не так...')
        }
    })
    return { updateProfile, isPending }
}