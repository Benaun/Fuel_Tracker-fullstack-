import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import AddUserForm from "./add-user-form";
import Layout from "@/components/layout/main-layout";

export const metadata = {
    title: 'Добавить пользователя',
    ...NO_INDEX_PAGE
}

export default function AddUserPage() {
    return (
        <Layout>
            <AddUserForm />
        </Layout>
    )
}