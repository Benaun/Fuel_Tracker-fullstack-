import Link from "next/link";
import { CiSettings } from "react-icons/ci";

export default function ProfileSettings() {
    return (
        <Link
            href={'/i/settings'}
            className="flex gap-2 items-center"
        >
            <CiSettings size={24} className="cursor-pointer" />
            Настройки
        </Link>
    )
}