import DistanceFieldItem from "./distance-field-item";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addToCity, deleteCityLast, clearCity } from "@/redux/features/citySlice";

export default function CityField({ carValue }) {
    const [value, setValue] = useState('');
    const city = useAppSelector((state) => state.cityReducer.city);
    const dispatch = useAppDispatch()

    const cityAdd = () => {
        dispatch(addToCity(Number(value)))
        setValue('')
    }

    const cityDel = () => {
        dispatch(deleteCityLast())
    }

    const cityClear = () => {
        dispatch(clearCity())
        setValue('')
    }

    const sum = city?.reduce((a, b) => a + b, 0)

    return (
        <DistanceFieldItem
            title={'Город'}
            number={sum * (carValue / 100)}
            value={value}
            changeText={setValue}
            handleActionAdd={cityAdd}
            handleActionDel={cityDel}
            kilometrs={city?.join(' + ')}
            handleActionClear={cityClear}

        />
    )
}