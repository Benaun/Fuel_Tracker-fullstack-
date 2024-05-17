'use client'

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

export default function UsersTable() {
    const { data, isLoading } = useGetAllUsers();

    return (
        <div className="flex flex-wrap mx-auto w-full my-24 max-w-[430px] gap-4 justify-center">
            <Table>
                <TableCaption>
                    Таблица пользователей
                    <Link href={"/users/register"}>
                        <button>+</button>
                    </Link>
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
                        : data.map((item) => (
                            <TableRow
                                key={item.userId}
                                className="text-center"
                            >
                                <TableCell>{item.number}</TableCell>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.role}</TableCell>
                                <TableCell>********</TableCell>
                                <TableCell className="flex gap-1 justify-center">
                                    <span>Ed</span>
                                    <span>Del</span>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}