import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import UserLayout from "@/components/UserLayout";
import CarsTable from "./CarsTable";

export const metadata = {
    title: 'Автомобили',
    ...NO_INDEX_PAGE
}

export default function CarsPage() {
    return <UserLayout>
        <CarsTable />
    </UserLayout>
}