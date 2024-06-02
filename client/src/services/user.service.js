import { axiosWithAuth } from "@/api/interceptors";

export const userService = {
    async getProfile() {
        const response = await axiosWithAuth.get('/user/profile')
        return response.data
    },

    async update(data) {
        const response = await axiosWithAuth.put('/user/profile', data)
        return response.data
    },

    async getUsers() {
        const response = await axiosWithAuth.get('/users')
        return response.data
    },

    async updateUser(id, data) {
        const response = await axiosWithAuth.put(`/users/${id}`, data)
        return response.data
    },

    async addCarToUser(data) {
        const response = await axiosWithAuth.put('/users', data)
        return response.data
    },

    async removeCarFromUser() {
        const response = await axiosWithAuth.put('/users')
        return response.data
    },

    async deleteUser(id){
        const response = await axiosWithAuth.delete(`/users/${id}`)
        return response.data
    }
}