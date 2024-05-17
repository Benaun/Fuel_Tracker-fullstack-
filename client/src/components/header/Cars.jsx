import Link from "next/link";
import { BsCarFront } from "react-icons/bs";

export default function Cars() {
    return (
        <Link
            href={'/cars'}
            className="flex gap-2 items-center"
        >
            <BsCarFront size={24} className="cursor-pointer" />
            Cars
        </Link>
    )
}