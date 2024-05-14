import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import Info from "./Info";

export const metadata = {
    title: 'Fuel Tracker',
    ...NO_INDEX_PAGE
}

export default function UserPanel(){
    return <Info/>
}