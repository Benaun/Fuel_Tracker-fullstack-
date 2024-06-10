import { NextResponse } from "next/server"
import { REFRESH_TOKEN } from "./services/auth-token.service"
import { parseJwt } from "./lib/utils"
import { ADMIN_ID } from "./constants/seo.constants"

export async function middleware(request) {
    const { url, cookies } = request
    const refreshToken = cookies.get(REFRESH_TOKEN)?.value

    const isAuthPage = url.includes('/auth')
    const isUsersPage = url.includes('/users')
    const isCarsPage = url.includes('/cars')

    if(isAuthPage && refreshToken) {
        return NextResponse.redirect(new URL('/', url))
    }
    if((isUsersPage || isCarsPage) && refreshToken) {
        const parseJWT = parseJwt(refreshToken)
        if(parseJWT.id == ADMIN_ID) {
            return NextResponse.next()
        }
        return NextResponse.redirect(new URL('/', url))
    }
    if(isAuthPage) {
        return NextResponse.next()
    }
    if(!refreshToken) {
        return NextResponse.redirect(new URL('/auth', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/', '/profile', '/auth/:path', '/cars', '/users', '/my-car']
}