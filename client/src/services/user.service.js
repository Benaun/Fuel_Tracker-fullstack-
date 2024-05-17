import { axiosWithAuth } from "@/api/interceptors";

export const userService = {
    BASE_URL: '/user/profile',

    async getProfile() {
        const response = await axiosWithAuth.get(this.BASE_URL)
        return response.data
    },

    async update(data) {
        const response = await axiosWithAuth.put(this.BASE_URL, data)
        return response.data
    }
}