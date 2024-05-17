import Footer from "./Footer";
import Header from "./header/Header";


export default function UserLayout({ children }) {
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