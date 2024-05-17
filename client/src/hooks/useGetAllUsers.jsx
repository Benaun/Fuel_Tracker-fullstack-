import { editUserService } from "@/services/admin.service";
import { useQuery } from "@tanstack/react-query";

export function useGetAllUsers() {
    const { data, isLoading, isSuccess } = useQuery({
        queryKey: ['users'],
        queryFn: () => editUserService.getUsers()
    })

    return { data, isLoading, isSuccess }
}