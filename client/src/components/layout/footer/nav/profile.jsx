import { CiSettings } from "react-icons/ci";
import Icon from "@/components/ui/icon";

export default function Profile() {
    return (
        <Icon
            link={'/profile'}
        >
            <CiSettings
                fill={"#fff"}
                size={24}
                className="cursor-pointer"
            />
        </Icon>
    )
}