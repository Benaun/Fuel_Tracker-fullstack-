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
import { Heading } from "@/components/Heading";
import { useGetAllUsers } from "@/hooks/useGetAllUsers";

export default function UsersTable() {
    const { data, isLoading } = useGetAllUsers();

    return (
        <div className="flex flex-wrap mx-auto w-full my-24 max-w-[430px] gap-4 justify-center">
            {isLoading
                ? <Heading title={'Данные загружаются...'} />
                : <Table>
                    <TableCaption>Таблица пользователей</TableCaption>
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
                        {data?.map((item) => (
                            <TableRow key={item.userId}>
                                <TableCell>{item.number}</TableCell>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.role}</TableCell>
                                <TableCell>********</TableCell>
                                <TableCell className="flex gap-1 justify-center">
                                    <span>Ed</span>
                                    <span>Del</span>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            }

        </div>
    )
}