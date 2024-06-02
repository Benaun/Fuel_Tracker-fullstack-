import { Heading } from "@/components/ui/heading"
import { useFormContext } from "react-hook-form"
import { Button } from "@/components/ui/button"
import Field from "@/components/ui/field"
import { useUpdateCar } from "../hooks/useUpdateCar"

export default function UpdateCarForm({ isHidden }) {
    const { register, reset, handleSubmit, watch } = useFormContext();
    const existedId = watch('carId')
    const { updateCar } = useUpdateCar(existedId)

    const onSubmit = (data) => {
        const { carId, ...rest } = data
        const dto = { ...rest }
        if (carId) {
            updateCar({ carId, data: dto })
        }
        reset({
            carId: undefined,
            model: '',
            city: '',
            track: '',
            otherCity: '',
        })
        isHidden(true)
    }

    return (
        <div className="flex min-h-screen mt-24 relative">
            <form
                className="max-w-sm mx-auto"
                onSubmit={handleSubmit(onSubmit)}
            >
                <Heading title='Обновить' />
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
                    placeholder={'Др.Город'}
                    fieldName={'otherCity'}
                    register={register}
                />
                <div className="flex justify-between">
                    <Button
                        type='submit'
                        className="w-5/12 bg-blue-700 hover:bg-blue-800"
                    >
                        Обновить
                    </Button>
                    <Button
                        className="w-5/12 bg-red-400 hover:bg-red-500"
                        onClick={() =>isHidden(true)}
                    >
                        Отменить
                    </Button>
                </div>

            </form>
        </div>
    )
}