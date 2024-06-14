'use client'

import Auth from ".";
import Register from "./registr";
import { useState } from "react";

export default function AuthMainPage() {
    const [visible, setVisible] = useState(false)
    return (
        <>
            <button
                onClick={() => setVisible(!visible)}
                className=" text-slate-50">
                asd
            </button>
            {!visible
                ? <Auth />
                : <Register />
            }
        </>
    )
}