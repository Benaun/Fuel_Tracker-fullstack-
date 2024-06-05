import Image from "next/image"
import cn from 'clsx'

export default function CarItem({ item, className, handleClick, children }) {
    return (
        <div
            className={cn("flex flex-col w-5/12 rounded-lg bg-gray-200 cursor-pointer", className)}
            onClick={handleClick}
        >
            <Image
                src={`/cars/${item.model}.jpg`}
                width={0}
                height={0}
                alt="Image"
                sizes="100vh"
                priority
                className="w-auto h-auto rounded-t-lg"
            />
            <div className="flex flex-col items-center">
                <div className="font-bold text-md">
                {item.model}
                </div>
                <div className="flex justify-center flex-wrap text-xs gap-1 mb-2">
                    <p><span className="font-bold">Город: </span>{item.city}</p>
                    <p><span className="font-bold">Трасса: </span>{item.track}</p>
                    <p><span className="font-bold">Др.город: </span>{item.otherCity}</p>
                </div>
            </div>
            {children}
        </div>
    )
}