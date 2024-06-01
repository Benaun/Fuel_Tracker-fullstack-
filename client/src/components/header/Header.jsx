'use client'

import Image from "next/image";
import Profile from "./profile";
import Icon from "../ui/icon";

export default function Header() {
    return (
        <header className="fixed z-10 rounded-b top-0 left-0 right-0 max-w-[430px] mx-auto justify-center bg-[#F1EBF5]">
            <section className="flex p-4 justify-between items-center">
                <Icon
                    link={'/'}
                >
                    <div className="w-[35px] cursor-pointer">
                        <Image
                            width={0}
                            height={0}
                            src="/logo.png"
                            alt="Logo"
                            sizes="100vw"
                            className=" w-full h-auto rounded-full"
                        />
                    </div>
                </Icon>
                <h2 className="text-2xl font-semibold">
                    Fuel Tracker
                </h2>
                <Profile />
            </section>
        </header>
    )
}