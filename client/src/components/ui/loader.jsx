import Image from "next/image";

export default function Loader() {
    return <>
        <Image
            width={0}
            height={0}
            src="/logo.png"
            alt="Logo"
            sizes="100vw"
            priority={true}
            loading="eager"
            className=" w-auto h-auto rounded-full animate-spin"
        />
    </>
}
