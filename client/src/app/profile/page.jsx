import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import Profile from "./profile";
import Layout from "@/components/layout/main-layout";

export const metadata = {
    title: 'Настройки',
    ...NO_INDEX_PAGE
}

export default function ProfilePage() {
    return (
        <Layout>
            <Profile />
        </Layout>
    )
}