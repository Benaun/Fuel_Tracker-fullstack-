import Link from "next/link";

export default function Icon({ title, link, children }) {
    return (
        <Link
            href={link}
            className="flex gap-2 items-center"
        >
            {children}
            {title}
        </Link>
    )
}