import { CiSettings } from "react-icons/ci";
import Icon from "../ui/icon";

export default function ProfileSettings() {
    return (
        <Icon
            link={'/settings'}
            title={'Настройки'}
        >
            <CiSettings size={24} className="cursor-pointer" />
        </Icon>
    )
}