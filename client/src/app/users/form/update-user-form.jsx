
import { useFormContext } from "react-hook-form"
import { useUpdateUser } from "../hooks/useUpdateUser"
import { Button } from "@/components/ui/button"
import Field from "@/components/ui/field"
import { Heading } from "@/components/ui/heading"

export default function UpdateUserForm({ isHidden }) {
    const { register, reset, handleSubmit, watch } = useFormContext()
    const existedId = watch('userId')
    const { updateUser} = useUpdateUser(existedId)

    const onSubmit = (data) => {
        const { userId, password, ...rest } = data
        const dto = {
            ...rest,
            password: password || undefined
        }
        if (userId) {
            updateUser({ userId, data: dto })
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
                        Обновить
                    </Button>
                </div>
            </form>
        </div>
    )
}