import { authService } from "@/services/auth.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function useCreateUser () {
    const queryClient = useQueryClient();
    const router = useRouter();
    const {mutate: createUser } = useMutation({
        mutationKey: ['create user'],
        mutationFn: (data) => authService.register(data),
        onSuccess() {
            toast.success('Пользователь создан!')
            queryClient.invalidateQueries({
                queryKey: ['users']
            })
            router.push('/users')
        },
        onError() {
            toast.error('Что-то пошло не так...')
        }
    })
    return { createUser }
}
