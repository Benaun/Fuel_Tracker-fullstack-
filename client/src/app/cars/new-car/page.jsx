import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import AddCarForm from "./add-car-form";
import Layout from "@/components/layout/main-layout";

export const metadata = {
    title: 'Новая тачка',
    ...NO_INDEX_PAGE
}

export default function NewCarPage() {
    return (
        <Layout>
            <AddCarForm />
        </Layout>
    )
}