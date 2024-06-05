import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Skeleton } from "@/components/ui/skeleton"
import { useGetAllUsers } from "@/hooks/useGetAllUsers";
import Link from "next/link";
import { useDeleteUser } from "@/app/users/hooks/useDeleteUser";
import { FaUserSlash } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
import { LiaUserEditSolid } from "react-icons/lia";
import { useFormContext } from "react-hook-form";

export default function UsersTable({ isHidden }) {
    const { users, isLoading } = useGetAllUsers();
    const { deleteUser } = useDeleteUser();
    const { reset } = useFormContext();

    return (
        <div className="flex flex-wrap mx-auto w-full my-24 max-w-[430px] gap-4 justify-center">
            <Table>
                <TableCaption>
                    <div className="flex justify-center items-center gap-2">
                        Таблица пользователей
                        <Link
                            href={"/users/register"}
                            className="cursor-pointer"
                        >
                            <FaUserPlus
                                size={20}
                                fill="green"
                            />
                        </Link>
                    </div>
                </TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Поз</TableHead>
                        <TableHead>Имя</TableHead>
                        <TableHead>Роль</TableHead>
                        <TableHead>Пароль</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {isLoading
                        ? <TableRow>
                            <TableCell><Skeleton className="h-4 w-[32px]" /></TableCell>
                            <TableCell><Skeleton className="h-4 w-[57px]" /></TableCell>
                            <TableCell><Skeleton className="h-4 w-[57px]" /></TableCell>
                            <TableCell><Skeleton className="h-4 w-[60px]" /></TableCell>
                            <TableCell><Skeleton className="h-4 w-[60px]" /></TableCell>
                        </TableRow>
                        : users.map((item) => (
                            <TableRow
                                key={item.id}
                                className="text-center"
                            >
                                <TableCell>{item.number}</TableCell>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.role}</TableCell>
                                <TableCell>********</TableCell>
                                <TableCell className="flex gap-1 justify-center">
                                    <LiaUserEditSolid
                                        size={20}
                                        fill="orange"
                                        onClick={() =>{
                                            reset({
                                                id: item.id,
                                                number: item.number,
                                                name: item.name,
                                                role: item.role,
                                                password: ''
                                            });
                                            isHidden(false)
                                        }}
                                    />
                                    <FaUserSlash
                                        size={20}
                                        fill="red"
                                        onClick={() => deleteUser(item.userId)}
                                    />
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}