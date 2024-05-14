import Cookies from "js-cookie";

export const ACCESS_TOKEN = 'accessToken'
export const REFRESH_TOKEN = 'refreshToken'

export const getAccessToken = () => {
    const accessToken = Cookies.get(ACCESS_TOKEN)
    return accessToken || null
}

export const saveTokenStorage = (accessToken) => {
    Cookies.set(ACCESS_TOKEN, accessToken, {
        domain: 'localhost',
        sameSite: 'strict',
        expires: 1
    })
}

export const removeFromStorage = () => {
    Cookies.remove(ACCESS_TOKEN)
}