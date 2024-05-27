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
import { useProfile } from "@/app/settings/hooks/useProfile"
import Users from "./Users"
import Cars from "./Cars"

export default function Profile() {
    const { data } = useProfile()
    const userRole = data?.user.role;
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <ProfileIcon />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>
                    {data?.user.name} ({data?.user.number})
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                {userRole === 'ADMIN' &&
                    <>
                        <DropdownMenuItem>
                            <Cars />
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Users />
                        </DropdownMenuItem>
                    </>
                }
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