'use client'

import { FormProvider, useForm } from "react-hook-form"
import UsersTable from "./UsersTable"
import UpdateUserForm from "./form/update-user-form"
import { useState } from "react";

export default function Main() {
    const methods = useForm();

    const [showDetails, setShowDetails] = useState(true);

    const toggleShowDetails = (value) => {
        setShowDetails(value);
    };

    return (
        <FormProvider {...methods}>
            {showDetails
                ? <UsersTable isHidden={toggleShowDetails} />
                : <UpdateUserForm isHidden={toggleShowDetails}/>
            }
            <div className="flex flex-col gap-4">


            </div>
        </FormProvider>
    )
}