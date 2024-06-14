import { userService } from "@/services/user.service";
import { useQuery } from "@tanstack/react-query";

export function useProfile() {
    const { data: profile, isLoading, isSuccess } = useQuery({
        queryKey: ['profile'],
        queryFn: () => userService.getProfile()
    })
    return { profile, isLoading, isSuccess }
}