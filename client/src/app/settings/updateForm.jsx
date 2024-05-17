import { Button } from "@/components/Button"
import { Heading } from "@/components/Heading"
import { useAddData } from "@/hooks/useAddData"
import { useUpdateProfile } from "@/hooks/useUpdateProfile"
import { useForm } from "react-hook-form"

export default function UpdateForm() {
    const { register, handleSubmit, reset } = useForm({
        mode: 'onchange'
    })
    useAddData(reset)
    const { mutate } = useUpdateProfile()
    const onSubmit = (data) => {
        const { password, ...rest } = data
        mutate({
            ...rest,
            password: password || undefined
        })
    }
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
        >
            <Heading title='Обновить профиль:' />
            <div className="mb-5">
                <input type="string"
                    className="bg-gray-200 border border-gray-300 text-gray-900 text-md rounded-lg focus:outline-none block w-full p-2.5"
                    placeholder="Позывной"
                    {...register('number')}
                />
            </div>
            <div className="mb-5">
                <input type="string"
                    className="bg-gray-200 border border-gray-300 text-gray-900 text-md rounded-lg focus:outline-none block w-full p-2.5"
                    placeholder="Имя"
                    {...register('name')}
                />
            </div>
            <div className="mb-5">
                <input type="password"
                    className="bg-gray-200 border border-gray-300 text-gray-900 text-md rounded-lg focus:outline-none block w-full p-2.5"
                    placeholder="Пароль"
                    {...register('password')}
                />
            </div>

            <div className="flex gap-7">
                <Button
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Обновить
                </Button>
            </div>
        </form>
    )
}