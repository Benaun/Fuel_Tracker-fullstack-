import { authService } from "@/services/auth.service";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export function useLogout() {
    const router = useRouter();
    const { mutate: logout, isPending } = useMutation({
        mutationKey: ['logout'],
        mutationFn: () => authService.logout(),
        onSuccess() {
            router.push('/auth')
        }
    })
    return { logout, isPending }
}