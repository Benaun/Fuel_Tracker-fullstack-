import { axiosWithAuth } from "@/api/interceptors";

export const carService = {
    BASE_URL: '/cars',

    async getCars() {
        const response = await axiosWithAuth.get(this.BASE_URL)
        return response.data
    }
}