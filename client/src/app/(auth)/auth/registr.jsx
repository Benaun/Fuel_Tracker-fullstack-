'use client'

import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import Field from "@/components/ui/field"
import { useCreateUser } from "@/app/users/hooks/useCreateUser"

export default function Register() {
    const { register, handleSubmit, reset } = useForm({
        mode: 'onChange'
    })
    const { createUser } = useCreateUser()
    const onSubmit = (data) => { createUser(data), reset() }

    return (
        <div className="flex min-h-screen">
            <form
                className="max-w-sm m-auto"
                onSubmit={handleSubmit(onSubmit)}
            >
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
                    type={'string'}
                    placeholder={'Роль'}
                    fieldName={'role'}
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
                        Создать
                    </Button>
                </div>
            </form>
        </div>
    )
}