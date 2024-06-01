import { HiOutlineUsers } from "react-icons/hi2";
import Icon from "../ui/icon";

export default function Users() {
    return (
        <Icon
            link={'/users'}
            title={'Users'}
        >
            <HiOutlineUsers size={24} className="cursor-pointer" />
        </Icon>
    )
}