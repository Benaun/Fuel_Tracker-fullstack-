import { GrHome } from "react-icons/gr";
import Icon from "@/components/ui/icon";

export default function Home() {
    return (
        <Icon
            link={'/'}
        >
            <GrHome
                color={"#fff"}
                size={25}
                className="cursor-pointer"
            />
        </Icon>
    )
}