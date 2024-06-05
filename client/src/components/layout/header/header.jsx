import Image from "next/image";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import Icon from "@/components/ui/icon";

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
                            loading="eager"
                            className=" w-full h-auto rounded-full"
                        />
                    </div>
                </Icon>
                <h2 className="text-2xl font-semibold">
                    Fuel Tracker
                </h2>
                <div className="flex gap-2 md:gap-5">
                    <FaWhatsapp
                        size={25}
                        fill={"#16a34a"}
                        className="hover:fill-green-900 ease-in duration-300 cursor-pointer"
                    />
                    <FaTelegramPlane
                        size={26}
                        fill={"#0284c7"}
                        className="hover:fill-sky-900 ease-in duration-300 cursor-pointer"
                    />
                </div>
            </section>
        </header>
    )
}