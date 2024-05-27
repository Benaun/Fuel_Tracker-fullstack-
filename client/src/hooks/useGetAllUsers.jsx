import { userService } from "@/services/user.service";
import { useQuery } from "@tanstack/react-query";

export function useGetAllUsers() {
    const { data, isLoading, isSuccess } = useQuery({
        queryKey: ['users'],
        queryFn: () => userService.getUsers()
    })

    return { data, isLoading, isSuccess }
}