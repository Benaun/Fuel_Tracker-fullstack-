import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import UserLayout from "@/components/user-layout";
import MyCar from "./my-car";

export const metadata = {
    title: 'Мой авто',
    ...NO_INDEX_PAGE
}

export default function MyCarPage() {
    return (
        <UserLayout>
            <MyCar />
        </UserLayout>
    )
}