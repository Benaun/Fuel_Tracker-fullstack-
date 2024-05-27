'use client'

import { Button } from "@/components/Button"
import { Heading } from "@/components/Heading"
import { useCreateCar } from "@/app/cars/hooks/useCreatCar"
import { useForm } from "react-hook-form"

export default function AddCarForm() {
    const { register, handleSubmit } = useForm({
        mode: 'onChange'
    })
    const { createCar } = useCreateCar()
    const onSubmit = (data) => { createCar(data) }

    return (
        <div className="flex min-h-screen mt-24">
            <form
                className="max-w-sm mx-auto"
                onSubmit={handleSubmit(onSubmit)}
            >
                <Heading title='Новый автомобиль' />
                <div className="mb-5">
                    <input type="string"
                        className="bg-gray-200 border border-gray-300 text-gray-900 text-md rounded-lg focus:outline-none block w-full p-2.5"
                        placeholder="Модель"
                        {...register('model',
                            {
                                require: 'model is reqired'

                            }
                        )}
                    />
                </div>
                <div className="mb-5">
                    <input type="string"
                        className="bg-gray-200 border border-gray-300 text-gray-900 text-md rounded-lg focus:outline-none block w-full p-2.5"
                        placeholder="Город"
                        {...register('city',
                            {
                                require: 'City is reqired'

                            }
                        )}
                    />
                </div>
                <div className="mb-5">
                    <input type="string"
                        className="bg-gray-200 border border-gray-300 text-gray-900 text-md rounded-lg focus:outline-none block w-full p-2.5"
                        placeholder="Трасса"
                        {...register('track',
                            {
                                require: 'Track is reqired'

                            }
                        )}
                    />
                </div>
                <div className="mb-5">
                    <input type="string"
                        className="bg-gray-200 border border-gray-300 text-gray-900 text-md rounded-lg focus:outline-none block w-full p-2.5"
                        placeholder="Др.город"
                        {...register('otherCity',
                            {
                                require: 'Other city is reqired'

                            }
                        )}
                    />
                </div>

                <div className="flex gap-7">
                    <Button
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Добавить
                    </Button>
                </div>
            </form>
        </div>
    )
}