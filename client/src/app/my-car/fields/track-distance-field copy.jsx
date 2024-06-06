import DistanceFieldItem from "./distance-field-item";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addToTrack, clearTrack, deleteTrackLast } from "@/redux/features/trackSlice";

export default function TrackField({ carValue }) {
    const [value, setValue] = useState('');
    const track = useAppSelector((state) => state.trackReducer.track);
    const dispatch = useAppDispatch()

    const trackAdd = () => {
        dispatch(addToTrack(Number(value)))
        setValue('')
    }

    const trackDel = () => {
        dispatch(deleteTrackLast())
    }

    const trackClear = () => {
        dispatch(clearTrack())
        setValue('')
    }
    const sum = track?.reduce((a, b) => a + b, 0)

    return (
        <DistanceFieldItem
            title={'Трасса'}
            number={sum * (carValue / 100)}
            value={value}
            changeText={setValue}
            handleActionAdd={trackAdd}
            handleActionDel={trackDel}
            kilometrs={track?.join(' + ')}
            handleActionClear={trackClear}

        />
    )
}