import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import MainUsersPage from ".";
import Layout from "@/components/layout/main-layout";

export const metadata = {
    title: 'Пользователи',
    ...NO_INDEX_PAGE
}

export default function UsersPage() {
    return (
        <Layout>
            <MainUsersPage />
        </Layout>
    )
}