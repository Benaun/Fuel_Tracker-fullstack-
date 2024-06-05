import { IoLogOutOutline } from "react-icons/io5";
import { useLogout } from "@/hooks/useLogout";

export default function Logout() {
    const { logout } = useLogout()
    return (
        <div
            className="flex gap-2"
            onClick={() => logout()}
        >
            <IoLogOutOutline
                color={"#fff"}
                size={24}
                className="cursor-pointer"
            />
        </div>
    )
}   