'use client'

import Footer from "./footer/footer"
import Header from "./header/header"

export default function Layout({ children }) {
    return (
        <main>
            <Header />
            <div className="flex my-24 mx-auto max-w-[430px] gap-4 justify-center relative">
                {children}
            </div>
            <Footer />
        </main>
    )
}