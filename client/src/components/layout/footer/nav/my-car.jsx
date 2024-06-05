import { BsCarFront } from "react-icons/bs";
import Icon from "@/components/ui/icon";

export default function MyCar() {
    return (
        <Icon
            link={'/my-car'}
        >
            <BsCarFront
                fill={"#fff"}
                size={25}
                className="cursor-pointer"
            />
        </Icon>
    )
}