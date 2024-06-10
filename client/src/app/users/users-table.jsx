import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useGetAllUsers } from "@/hooks/useGetAllUsers";
import Link from "next/link";
import { useDeleteUser } from "@/app/users/hooks/useDeleteUser";
import { FaUserSlash } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
import { LiaUserEditSolid } from "react-icons/lia";
import { useFormContext } from "react-hook-form";
import Loader from "@/components/ui/loader";

export default function UsersTable({ isHidden }) {
    const { users, isPending } = useGetAllUsers();
    const { deleteUser } = useDeleteUser();
    const { reset } = useFormContext();

    return (
        <div className="flex mx-auto w-full max-w-[430px] gap-4 justify-center">
            {isPending
                ? <Loader />
                : <Table>
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
                        {users.map((item) => (
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
                                        onClick={() => {
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
            }
        </div>
    )
}