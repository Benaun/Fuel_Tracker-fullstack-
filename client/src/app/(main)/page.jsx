import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import CarsList from "./cars-list";
import UserLayout from "@/components/user-layout";


export const metadata = {
    title: 'Fuel Tracker',
    ...NO_INDEX_PAGE
}

export default function Home() {
    return <UserLayout>
        <CarsList />
    </UserLayout>
}