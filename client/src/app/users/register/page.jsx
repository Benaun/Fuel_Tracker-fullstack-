import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import UserLayout from "@/components/user-layout";
import AddUserForm from "./add-user-form";

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