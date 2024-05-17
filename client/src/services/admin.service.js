import { axiosWithAuth } from "@/api/interceptors";

export const editUserService = {
    BASE_URL: '/users',

    async getUsers() {
        const response = await axiosWithAuth.get(this.BASE_URL)
        return response.data
    },

    async createUser(data){
        const response = await axiosWithAuth.post(this.BASE_URL, data)
        return response.data
    },

    async updateUser(id, data) {
        const response = await axiosWithAuth.put(`${this.BASE_URL}/${id}`, data)
        return response.data
    },

    async deleteUser(id){
        const response = await axiosWithAuth.delete(`${this.BASE_URL}/${id}`)
        return response.data
    }
}
export const editCarsService = {
    BASE_URL: '/cars',

    async getCars() {
        const response = await axiosWithAuth.get(this.BASE_URL)
        return response.data
    },

    async createCar(data) {
        const response = await axiosWithAuth.post(this.BASE_URL, data)
        return response.data
    },

    async updateCar(id, data) {
        const response = await axiosWithAuth.put(`${this.BASE_URL}/${id}`, data)
        return response.data
    },

    async deleteCar(id) {
        const response = await axiosWithAuth.delete(`${this.BASE_URL}/${id}`)
        return response.data
    }
}
