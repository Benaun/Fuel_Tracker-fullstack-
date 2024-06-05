import { useProfile } from "@/app/my-car/hooks/useProfile";
import Cars from "./cars";
import Users from "./users";
import MyCar from "./my-car";
import Home from "./home";
import Profile from "./profile";
import Logout from "./logout";

export default function Nav() {
    const { data } = useProfile();
    const userRole = data?.user.role;

    return (
        <nav className="flex w-[80%] p-4 mx-auto justify-between gap-10 items-center">
            <Home />
            {userRole === 'ADMIN'
                ? <>
                    <Cars />
                    <Users />
                </>
                : <MyCar />
            }
            <Profile />
            <Logout />
        </nav>
    )
}
