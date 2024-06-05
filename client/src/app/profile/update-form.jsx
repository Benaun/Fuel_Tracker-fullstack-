import { useForm } from "react-hook-form"
import Field from "@/components/ui/field"
import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { useAddData } from "./hooks/useAddProfileData"
import { useUpdateProfile } from "./hooks/useUpdateProfile"

export default function UpdateForm() {
    const { register, handleSubmit, reset } = useForm({
        mode: 'onchange'
    })
    useAddData(reset)
    const { updateProfile } = useUpdateProfile()
    const onSubmit = (data) => {
        const { password, ...rest } = data
        updateProfile({
            ...rest,
            password: password || undefined
        })
    }
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Heading title='Обновить профиль:' />
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
                    Обновить
                </Button>
            </div>
        </form>
    )
}