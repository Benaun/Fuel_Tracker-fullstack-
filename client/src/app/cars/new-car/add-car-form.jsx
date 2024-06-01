'use client'

import { Heading } from "@/components/ui/heading"
import { useCreateCar } from "@/app/cars/hooks/useCreatCar"
import { useForm } from "react-hook-form"
import Field from "@/components/ui/field"
import { Button } from "@/components/ui/button"

export default function AddCarForm() {
    const { register, handleSubmit, reset } = useForm({
        mode: 'onChange'
    })
    const { createCar } = useCreateCar()
    const onSubmit = (data) => { createCar(data), reset() }

    return (
        <div className="flex min-h-screen mt-24">
            <form
                className="max-w-sm mx-auto"
                onSubmit={handleSubmit(onSubmit)}
            >
                <Heading title='Новый автомобиль' />
                <Field
                    type={'string'}
                    placeholder={'Модель'}
                    fieldName={'model'}
                    register={register}
                />

                <Field
                    type={'string'}
                    placeholder={'Город'}
                    fieldName={'city'}
                    register={register}
                />

                <Field
                    type={'string'}
                    placeholder={'Трасса'}
                    fieldName={'track'}
                    register={register}
                />

                <Field
                    type={'string'}
                    placeholder={'Др.город'}
                    fieldName={'otherCity'}
                    register={register}
                />

                <div className="flex justify-center">
                    <Button
                        className="w-full bg-blue-700 hover:bg-blue-800"
                    >
                        Подтвердить
                    </Button>
                </div>
            </form>
        </div>
    )
}