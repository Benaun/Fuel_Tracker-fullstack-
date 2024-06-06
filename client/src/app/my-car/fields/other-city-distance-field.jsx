import DistanceFieldItem from "./distance-field-item";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addToOther, clearOther, deleteOtherLast } from "@/redux/features/otherSlice";

export default function OtherCityField({ carValue }) {
    const [value, setValue] = useState('');
    const other = useAppSelector((state) => state.otherReducer.other);
    const dispatch = useAppDispatch()

    const otherAdd = () => {
        dispatch(addToOther(Number(value)))
        setValue('')
    }

    const otherDel = () => {
        dispatch(deleteOtherLast())
    }

    const otherClear = () => {
        dispatch(clearOther())
        setValue('')
    }

    const sum = other?.reduce((a, b) => a + b, 0)

    return (
        <DistanceFieldItem
            title={'Др.город'}
            number={sum * (carValue / 100)}
            value={value}
            changeText={setValue}
            handleActionAdd={otherAdd}
            handleActionDel={otherDel}
            kilometrs={other?.join(' + ')}
            handleActionClear={otherClear}
        />
    )
}