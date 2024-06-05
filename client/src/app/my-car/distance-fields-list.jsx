import { useState } from "react";
import DistanceFieldItem from "./distance-field-item";
import { useAddDistances } from "./hooks/useAddDistances";

export default function DistanceFieldsList({ item }) {
    const [valueCity, setValueCity] = useState('');
    const [valueTrack, setValueTrack] = useState('');
    const [valueOtherCity, setValueOtherCity] = useState('');
    const { addCityDistance } = useAddDistances()

    const cityAdd = () => {
        if (valueCity.trim().length) {
            console.log(valueCity)
            setValueCity('')
        }
    }
    return (
        <div className="flex flex-col gap-5 mt-10 mb-4">
            <DistanceFieldItem
                title={'Город'}
                number={item.city}
                value={valueCity}
                changeText={setValueCity}
                handleActionAdd={cityAdd}
            />
            <DistanceFieldItem
                title={'Трасса'}
                number={item.track}
                value={valueTrack}
                changeText={setValueTrack}
            />
            <DistanceFieldItem
                title={'Др.город'}
                number={item.otherCity}
                value={valueOtherCity}
                changeText={setValueOtherCity}
            />
        </div>
    )
}