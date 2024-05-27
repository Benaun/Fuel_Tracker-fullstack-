import { axiosWithAuth } from "@/api/interceptors";

export const carService = {
    async getCars() {
        const response = await axiosWithAuth.get('/cars')
        return response.data
    },
    async createCar(data) {
        const response = await axiosWithAuth.post('/cars', data)
        return response.data
    },

    async updateCar(id, data) {
        const response = await axiosWithAuth.put(`/cars/${id}`, data)
        return response.data
    },

    async deleteCar(id) {
        const response = await axiosWithAuth.delete(`/cars/${id}`)
        return response.data
    }
}