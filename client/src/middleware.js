import { NextResponse } from "next/server"
import { BOARD_PAGES } from "./config/pages-url.config"
import { REFRESH_TOKEN } from "./services/auth-token.service"

export async function middleware(request, response) {
    const { url, cookies } = request
    const refreshToken = cookies.get(REFRESH_TOKEN)?.value

    const isAuthPage = url.includes('/auth')

    if(isAuthPage && refreshToken) {
        return NextResponse.redirect(new URL(BOARD_PAGES.HOME, url))
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
    matcher: ['/i/:path*', '/auth/:path']
}