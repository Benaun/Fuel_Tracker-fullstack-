import Image from "next/image";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="font-main rounded-t fixed bottom-0 right-0 left-0 max-w-[430px] mx-auto bg-[#362D6C]">
            <section className="flex w-full p-4 justify-between items-center">
                <div className="w-[30px] h-[30px]">
                    <img
                        width={0}
                        height={0}
                        src="../../logo.png"
                        alt="Logo"
                        sizes="100vw"
                        className=" w-full h-auto rounded-full"
                    />
                </div>

                <h3 className=" text-sm text-center font-normal text-white">
                    &copy; 2024 Benaun | All Rights Reserved
                </h3>

                <div className="flex gap-2 md:gap-5">
                    <FaWhatsapp
                        size={23}
                        fill={"#fff"}
                        className="hover:fill-slate-500 ease-in duration-300 cursor-pointer"
                    />
                    <FaTelegramPlane
                        size={23}
                        fill={"#fff"}
                        className="hover:fill-slate-500 ease-in duration-300 cursor-pointer"
                    />
                </div>
            </section>
        </footer>
    )
}