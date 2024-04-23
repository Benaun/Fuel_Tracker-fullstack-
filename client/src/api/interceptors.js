import axios from "axios";
import { getAccessToken, removeFromStorage } from "@/services/auth-token.service";
import { errorCatch } from "./errors";
import { authService } from "@/services/auth.service";

const options = {
    baseURL: 'http://localhost:4200/api',
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
}

const axiosBasic = axios.create(options)

const axiosWithAuth = axios.create(options)

axiosWithAuth.interceptors.request.use(config => {
    const accessToken = getAccessToken()

    if (config?.headers && accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config
})

axiosWithAuth.interceptors.response.use(
    config => config,
    async error => {
        const originalRequest = error.config

        if ((error?.response?.status === 401 ||
            errorCatch(error) === 'jwt expired' ||
            errorCatch(error) === 'jwt must be provided') &&
            error.config &&
            !error.config._isRetry) {
            originalRequest._isRetry = true
            try {
                await authService.getNewToken()
                return axiosWithAuth.request(originalRequest)
            } catch (error) {
                if (errorCatch(error) === 'jwt expired') removeFromStorage()
            }
        }
        throw error
    }
)

export {axiosBasic, axiosWithAuth}