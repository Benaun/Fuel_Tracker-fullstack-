import { HiOutlineUsers } from "react-icons/hi2";
import Icon from "@/components/ui/icon";

export default function Users() {
    return (
        <Icon
            link={'/users'}
        >
            <HiOutlineUsers
                color={"#fff"}
                size={24}
                className="cursor-pointer"
            />
        </Icon>
    )
}