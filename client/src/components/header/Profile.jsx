import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import ProfileIcon from "../ui/profile-icon"
import Logout from "./Logout"
import ProfileSettings from "./ProfileSettings"
import { useProfile } from "@/hooks/useProfile"

export default function Profile() {
    const { data } = useProfile()
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <ProfileIcon />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>
                    {data?.user.name}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <ProfileSettings />
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Logout />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )

}