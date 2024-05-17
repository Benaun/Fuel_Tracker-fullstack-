import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import UserLayout from "@/components/UserLayout";
import AddUserForm from "./AddUserForm";

export const metadata = {
    title: 'Добавить пользователя',
    ...NO_INDEX_PAGE
}

export default function AddUserPage() {
    return (
        <UserLayout>
            <AddUserForm />
        </UserLayout>
    )
}