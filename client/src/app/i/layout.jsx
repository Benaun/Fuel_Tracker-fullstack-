import UserLayout from "@/components/user-layout/UserLayout";

export default function Layout({ children }) {
    return <UserLayout>
        {children}
    </UserLayout>
}