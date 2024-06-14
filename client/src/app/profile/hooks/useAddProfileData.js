import { useEffect } from "react"
import { useProfile } from "./useProfile"

export function useAddData(reset) {
    const { profile, isSuccess } = useProfile()
    useEffect(() => {
        if (isSuccess && profile) {
            reset({
                number: profile.user.number,
                name: profile.user.name,
                password: profile.user.password
            })
        }
    }, [isSuccess])
}