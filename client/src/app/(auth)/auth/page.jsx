import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import AuthMainPage from ".";

export const metadata = {
    title: 'Авторизация',
    ...NO_INDEX_PAGE
}

export default function AuthPage(){
    return <AuthMainPage />
}