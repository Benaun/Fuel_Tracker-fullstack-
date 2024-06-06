import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaPlus, FaMinus, FaRegTrashCan } from "react-icons/fa6";

export default function DistanceFieldItem({
    title,
    number,
    kilometrs,
    value,
    changeText,
    handleActionAdd,
    handleActionDel,
    handleActionClear
}) {
    return (
        <div className="flex flex-wrap items-center gap-2">
            <div className="flex w-full gap-2">
                <div className="flex gap-1">
                    <span className="w-[80px]">{title}:</span>
                    <Input
                        className="w-[40px]"
                        type='text'
                        maxLength="3"
                        value={value}
                        onChange={(e) => changeText(e.target.value.replace(/\D/gi, '').replace(/^0+/, ''))}
                        placeholder="0"
                    />
                </div>
                <div className="flex w-full items-center gap-16">
                    <div className="flex gap-2">
                        <FaPlus
                            className="cursor-pointer"
                            fill="green"
                            size={15}
                            onClick={handleActionAdd}
                        />
                        <FaMinus
                            className="cursor-pointer"
                            fill="red"
                            size={15}
                            onClick={handleActionDel}
                        />
                        <FaRegTrashCan
                            onClick={handleActionClear}
                            className="cursor-pointer"
                            size={15}
                        >
                            Clear
                        </FaRegTrashCan>
                    </div>
                    <span className="text-sm">Литры: {number ? number : 0} л.</span>
                </div>

            </div>
            <div className="flex w-full">
                <p className="text-[12px]">
                    Пробег:
                    <span> {kilometrs ? kilometrs : 0}</span>
                </p>
            </div>
        </div>
    )
}