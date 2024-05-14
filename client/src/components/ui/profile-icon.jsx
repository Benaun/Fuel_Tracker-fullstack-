import { FaRegUserCircle } from "react-icons/fa";

export default function ProfileIcon({ onClick }) {
    return <>
        <FaRegUserCircle
            size={25}
            className="cursor-pointer hover:fill-slate-700"
            onClick={onClick}
        />
    </>
}