import { BsCarFront } from "react-icons/bs";
import Icon from "../ui/icon";

export default function MyCar() {
    return (
        <Icon
            link={'/my-car'}
            title={'My car'}
        >
            <BsCarFront
                size={25}
                className="cursor-pointer hover:fill-slate-700"
            />
        </Icon>
    )
}