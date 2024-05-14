import { axiosWithAuth } from "@/api/interceptors";

class EditUsersService {
    BASE_URL = 'admin/profile/users'

    async getUsers() {
        const response = await axiosWithAuth.get(this.BASE_URL)
        return response
    }

    async createUser(data){
        const response = await axiosWithAuth.post(this.BASE_URL, data)
        return response
    }

    async updateUser(id, data) {
        const response = await axiosWithAuth.put(`${this.BASE_URL}/${id}`, data)
        return response
    }

    async deleteUser(id){
        const response = await axiosWithAuth.delete(`${this.BASE_URL}/${id}`)
        return response
    }
}

class EditCarsService {
    BASE_URL = 'admin/profile/cars'

    async getCars() {
        const response = await axiosWithAuth.get(this.BASE_URL)
        return response
    }

    async createCar(data) {
        const response = await axiosWithAuth.post(this.BASE_URL, data)
        return response
    }

    async updateCar(id, data) {
        const response = await axiosWithAuth.put(`${this.BASE_URL}/${id}`, data)
        return response
    }

    async deleteCar(id) {
        const response = await axiosWithAuth.delete(`${this.BASE_URL}/${id}`)
        return response
    }
}

export const editUsersService = new EditUsersService()
export const editCarsService = new EditCarsService()