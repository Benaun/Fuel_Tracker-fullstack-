import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import CarsList from "./cars-list";
import Layout from "@/components/layout/main-layout";

export const metadata = {
    title: 'Fuel Tracker',
    ...NO_INDEX_PAGE
}

export default function Home() {
    return <Layout>
        <CarsList />
    </Layout>
}