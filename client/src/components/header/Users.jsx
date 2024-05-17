import Link from "next/link";
import { HiOutlineUsers } from "react-icons/hi2";

export default function Users() {
    return (
        <Link
            href={'/users'}
            className="flex gap-2 items-center"
        >
            <HiOutlineUsers size={24} className="cursor-pointer" />
            Users
        </Link>
    )
}