import { BsCarFront } from "react-icons/bs";
import Icon from "@/components/ui/icon";

export default function Cars() {
    return (
        <Icon
            link={'/cars'}
        >
            <BsCarFront
                fill={"#fff"} 
                size={25}
                className="cursor-pointer"
            />
        </Icon>
    )
}
