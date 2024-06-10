import { BOARD_PAGES } from "@/config/pages-url.config";
import { authService } from "@/services/auth.service";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function useAuthUser() {
    const router = useRouter()
    const {mutate: auth, isPending: authPeding} = useMutation({
        mutationKey: ['auth'],
        mutationFn: (data) => authService.main(data),
        onSuccess() {
            toast.success('Вход выполнен!')
            router.push(BOARD_PAGES.HOME)
        },
        onError() {
            toast.error('Некорректные данные!')
        }
    })
    return { auth, authPeding}
}