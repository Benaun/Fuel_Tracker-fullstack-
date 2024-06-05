'use client'

import Footer from "./footer/footer"
import Header from "./header/header"

export default function Layout({ children }) {
    return (
        <main>
            <Header />
            <div className="flex flex-wrap mx-auto max-w-[430px] gap-4 justify-center">
                {children}
            </div>
            <Footer />
        </main>
    )
}