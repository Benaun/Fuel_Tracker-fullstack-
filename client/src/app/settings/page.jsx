import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import Settings from "./settings";
import UserLayout from "@/components/user-layout";

export const metadata = {
    title: 'Настройки',
    ...NO_INDEX_PAGE
}

export default function SettingsPage() {
    return (
        <UserLayout>
            <Settings />
        </UserLayout>
    )
}