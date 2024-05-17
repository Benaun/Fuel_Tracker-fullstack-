import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import Auth from "./Auth";

export const metadata = {
    title: 'Авторизация',
    ...NO_INDEX_PAGE
}

export default function AuthPage(){
    return <Auth />
}