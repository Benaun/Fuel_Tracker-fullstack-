'use client'

import { Button } from "@/components/Button"
import { Heading } from "@/components/Heading"
import { useFormContext } from "react-hook-form"
import { useUpdateUser } from "../hooks/useUpdateUser"


export default function UpdateUserForm({isHidden}) {
    const { register, reset, handleSubmit, watch } = useFormContext()
    const existedId = watch('userId')
    const { mutate } = useUpdateUser(existedId)

    const onSubmit = (data) => {
        const { userId, password, ...rest } = data
        const dto = {
            ...rest,
            password: password || undefined
        }
        if (userId) {
            mutate({ userId, data: dto })
        }

        reset({
            userId: undefined,
            number: '',
            name: '',
            role: '',
            password: '',
        })
        isHidden(true)
    }

    return (
        <div className="flex min-h-screen mt-24">
            <form
                className="max-w-sm mx-auto"
                onSubmit={handleSubmit(onSubmit)}
            >
                <Heading title='Обновить' />
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
                    <input type="string"
                        className="bg-gray-200 border border-gray-300 text-gray-900 text-md rounded-lg focus:outline-none block w-full p-2.5"
                        placeholder="Имя"
                        {...register('name',
                            {
                                require: 'Name is reqired'

                            }
                        )}
                    />
                </div>
                <div className="mb-5">
                    <input type="string"
                        className="bg-gray-200 border border-gray-300 text-gray-900 text-md rounded-lg focus:outline-none block w-full p-2.5"
                        placeholder="Роль"
                        {...register('role',
                            {
                                require: 'Role is reqired'

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
                        type='submit'
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Обновить
                    </Button>
                </div>
            </form>
        </div>
    )
}