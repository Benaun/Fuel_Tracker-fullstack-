'use client'

import { Button } from "@/components/Button"
import { Heading } from "@/components/Heading"
import { BOARD_PAGES } from "@/config/pages-url.config"
import { authService } from "@/services/auth.service"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"

export default function Auth() {
    const [isLoginForm, setIsLoginForm] = useState(false)
    const { register, handleSubmit, reset } = useForm({
        mode: 'onChange'
    })
    const { push } = useRouter()
    const { mutate } = useMutation({
        mutationKey: ['auth'],
        mutationFn: (data) => authService.main('login', data),
        onSuccess() {
            toast.success('Вход выполнен!')
            reset()
            push(BOARD_PAGES.HOME)
        },
        onError() {
            toast.error('Некорректные данные!')
        }
    })

    const onSubmit = (data) => { mutate(data) }

    return (
        <div className="flex min-h-screen">
            <form
                className="max-w-sm m-auto"
                onSubmit={handleSubmit(onSubmit)}
            >
                <Heading title='Авторизация' />
                <div className="mb-5">
                    <input type="string"
                        className="bg-gray-200 border border-gray-300 text-gray-900 text-md rounded-lg focus:outline-none block w-full p-2.5"
                        placeholder="Позывной"
                        {...register('number',
                            {
                                require: 'Number is reqired'

                            }
                        )}
                    />
                </div>
                <div className="mb-5">
                    <input type="password"
                        className="bg-gray-200 border border-gray-300 text-gray-900 text-md rounded-lg focus:outline-none block w-full p-2.5"
                        placeholder="Пароль"
                        {...register('password',
                            {
                                require: 'Password is reqired'

                            }
                        )}
                    />
                </div>

                <div className="flex gap-7">
                    <Button
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={() => setIsLoginForm(true)}
                    >
                        Войти
                    </Button>

                    <Button
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={() => setIsLoginForm(false)}
                    >
                        Регистрация
                    </Button>
                </div>
            </form>
        </div>
    )
}