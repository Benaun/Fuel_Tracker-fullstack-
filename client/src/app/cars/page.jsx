import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import MainCarsPage from ".";
import Layout from "@/components/layout/main-layout";

export const metadata = {
    title: 'Автомобили',
    ...NO_INDEX_PAGE
}

export default function CarsPage() {
    return <Layout>
        <MainCarsPage />
    </Layout>
}