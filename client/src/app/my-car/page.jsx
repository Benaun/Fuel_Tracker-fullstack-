import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import MyCar from "./my-car";
import Layout from "@/components/layout/main-layout";

export const metadata = {
    title: 'Мой авто',
    ...NO_INDEX_PAGE
}

export default function MyCarPage() {
    return (
        <Layout>
            <MyCar />
        </Layout>
    )
}