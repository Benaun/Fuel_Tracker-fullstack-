import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import UserLayout from "@/components/user-layout";
import MainPage from ".";


export const metadata = {
    title: 'Fuel Tracker',
    ...NO_INDEX_PAGE
}

export default function Home() {
    return <UserLayout>
        <MainPage />
    </UserLayout>
}