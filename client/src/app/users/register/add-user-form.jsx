'use client'

import { Heading } from "@/components/ui/heading"
import { useForm } from "react-hook-form"
import { useCreateUser } from "../hooks/useCreateUser"
import { Button } from "@/components/ui/button"
import Field from "@/components/ui/field"

export default function AddUserForm() {
    const { register, handleSubmit, reset } = useForm({
        mode: 'onChange'
    })
    const { createUser } = useCreateUser()
    const onSubmit = (data) => { createUser(data), reset() }

    return (
        <div className="flex min-h-screen mt-24">
            <form
                className="max-w-sm mx-auto"
                onSubmit={handleSubmit(onSubmit)}
            >
                <Heading title='Новый пользователь' />
                <Field
                    type={'string'}
                    placeholder={'Позывной'}
                    fieldName={'number'}
                    register={register}
                />
                <Field
                    type={'string'}
                    placeholder={'Имя'}
                    fieldName={'name'}
                    register={register}
                />
                <Field
                    type={'password'}
                    placeholder={'Пароль'}
                    fieldName={'password'}
                    register={register}
                />
                <div className="flex justify-center">
                    <Button
                        className="w-full bg-blue-700 hover:bg-blue-800"
                    >
                        Добавить
                    </Button>
                </div>
            </form>
        </div>
    )
}