import { BsCarFront } from "react-icons/bs";
import Icon from "../ui/icon";

export default function Cars() {
    return (
        <Icon
            link={'/cars'}
            title={'cars'}
        >
            <BsCarFront
                size={25}
                className="cursor-pointer hover:fill-slate-700"
            />
        </Icon>
    )
}
