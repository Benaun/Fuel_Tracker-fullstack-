import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import UserLayout from "@/components/user-layout";
import AddCarForm from "./add-car-form";

export const metadata = {
    title: 'Новая тачка',
    ...NO_INDEX_PAGE
}

export default function NewCarPage() {
    return (
        <UserLayout>
            <AddCarForm />
        </UserLayout>
    )
}