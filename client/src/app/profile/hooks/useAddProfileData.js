import { useEffect } from "react"
import { useProfile } from "./useProfile"

export function useAddData(reset) {
    const { data, isSuccess } = useProfile()
    useEffect(() => {
        if (isSuccess && data) {
            reset({
                number: data.user.number,
                name: data.user.name,
                password: data.user.password
            })
        }
    }, [isSuccess])
}