import { Input } from "@/components/ui/input";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function DistanceFieldSection({ title, number }) {
    const [value, setValue] = useState('');
    const handleChange = (e) => {
        const newValue = e.target.value.replace(/\D/gi, '').replace(/^0+/, '');
        setValue(newValue);
    };
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
                <div className="flex gap-1 items-center">
                    <span className="w-[80px]">{title}:</span>
                    <Input
                    className="w-[40px]"
                        type='text'
                        maxlength="3"
                        value={value}
                        onChange={handleChange}
                        placeholder="0"
                    />
                </div>
                <div className="flex gap-2">
                    <FaPlus
                    className="cursor-pointer"
                        fill="green"
                        size={15}
                    />
                    <FaMinus
                    className="cursor-pointer"
                        fill="red"
                        size={15}
                    />
                </div>
            </div>

            <span className="text-sm">Литры: {number} л.</span>
        </div>
    )
}