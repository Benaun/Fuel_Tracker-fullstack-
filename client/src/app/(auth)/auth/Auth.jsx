'use client'

import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { useForm } from "react-hook-form"
import { useAuthUser } from "./useAuthUser"
import Field from "@/components/ui/field"
import Loader from "@/components/ui/loader"

export default function Auth() {
    const { register, handleSubmit, reset } = useForm({
        mode: 'onChange'
    })
    const { auth, authPeding } = useAuthUser()
    const onSubmit = (data) => { auth(data), reset() }

    return (
        <div className="flex min-h-screen">
            {authPeding ?
                <Loader />
                : <form
                    className="max-w-sm m-auto"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Heading title='Авторизация' />
                    <Field
                        type={'string'}
                        placeholder={'Позывной'}
                        fieldName={'number'}
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
                            Войти
                        </Button>
                    </div>
                </form>
            }

        </div>
    )
}