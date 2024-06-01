'use client'

import { FormProvider, useForm } from "react-hook-form"
import UsersTable from "./users-table"
import UpdateUserForm from "./form/update-user-form"
import { useState } from "react";

export default function MainUsersPage() {
    const methods = useForm();
    const [isVisible, setisVisible] = useState(true);
    const toggleVisible = (value) => {
        setisVisible(value);
    };

    return (
        <FormProvider {...methods}>
            {isVisible
                ? <UsersTable isHidden={toggleVisible} />
                : <UpdateUserForm isHidden={toggleVisible}/>
            }
        </FormProvider>
    )
}