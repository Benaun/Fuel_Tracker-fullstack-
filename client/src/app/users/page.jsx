import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import UserLayout from "@/components/UserLayout";
import UsersTable from "./UsersTable";

export const metadata = {
    title: 'Пользователи',
    ...NO_INDEX_PAGE
}

export default function UsersPage() {
    return (
        <UserLayout>
            <UsersTable />
        </UserLayout>
    )
}