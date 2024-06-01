'use client'

import { FormProvider, useForm } from "react-hook-form";
import { useState } from "react";
import CarsTable from "./cars-table";
import UpdateCarForm from "./form/update-car-form";

export default function MainCarsPage() {
    const methods = useForm();
    const [isVisible, setisVisible] = useState(true);
    const toggleVisible = (value) => {
        setisVisible(value);
    };

    return (
        <FormProvider {...methods}>
            {isVisible
                ? <CarsTable isHidden={toggleVisible} />
                : <UpdateCarForm isHidden={toggleVisible}/>
            }
        </FormProvider>
    )
}