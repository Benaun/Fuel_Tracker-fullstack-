import { userService } from "@/services/user.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useUpdateProfile() {

    const queryClient = useQueryClient()

    const { mutate, isPending } = useMutation({
        mutationKey: ['update profile'],
        mutationFn: (data) => userService.update(data),
        onSuccess() {
            toast.success('Данные обновлены')
            queryClient.invalidate({ queryKey: ['profile'] })
        }
    })

    return { mutate, isPending }
}