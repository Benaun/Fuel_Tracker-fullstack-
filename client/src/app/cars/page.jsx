import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import UserLayout from "@/components/user-layout";
import MainCarsPage from ".";

export const metadata = {
    title: 'Автомобили',
    ...NO_INDEX_PAGE
}

export default function CarsPage() {
    return <UserLayout>
        <MainCarsPage />
    </UserLayout>
}