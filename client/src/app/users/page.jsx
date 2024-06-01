import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import UserLayout from "@/components/user-layout";
import MainUsersPage from ".";

export const metadata = {
    title: 'Пользователи',
    ...NO_INDEX_PAGE
}

export default function UsersPage() {
    return (
        <UserLayout>
            <MainUsersPage />
        </UserLayout>
    )
}