import { axiosBasic } from "@/api/interceptors"
import { removeFromStorage, saveTokenStorage } from "./auth-token.service"

export const authService = {
    async main(type, data) {
        const response = await axiosBasic.post(`/auth/${type}`, data)

        if (response.data.accessToken) {
            saveTokenStorage(response.data.accessToken)
        }
        return response
    },

    async getNewToken() {
        const response = await axiosBasic.post('/auth/login/access-token')

        if (response.data.accessToken) {
            saveTokenStorage(response.data.accessToken)
        }
        
        return response
    },

    async logout() {
        const response = await axiosBasic.post('/auth/logout')

        if (response.data) {
            removeFromStorage()
        }

        return response
    }
}