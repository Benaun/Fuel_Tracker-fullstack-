import { useRouter } from "next/navigation"
import { IoLogOutOutline } from "react-icons/io5";
import { useMutation } from "@tanstack/react-query";
import { authService } from "@/services/auth.service";

export default function Logout() {
    const router = useRouter()
    const { mutate } = useMutation({
        mutationKey: ['logout'],
        mutationFn: () => authService.logout(),
        onSuccess: () => router.push('/auth')
    })
    return (
        <div
            className="flex gap-2"
            onClick={() => mutate()}
        >
            <IoLogOutOutline
                size={24}
                className="cursor-pointer hover:fill-slate-700"
            />
            Выйти
        </div>


    )
}   