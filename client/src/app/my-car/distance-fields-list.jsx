import CityField from "./fields/city-distance-field";
import TrackField from "./fields/track-distance-field copy";
import OtherCityField from "./fields/other-city-distance-field";
import { useProfile } from "./hooks/useProfile";

export default function DistanceFieldsList() {
    const { data } = useProfile();
    const isUserCar = data?.user.userCars[0];

    return (
        <div className="flex flex-col gap-5 mt-10 mb-4">
            <CityField carValue={isUserCar.city}/>
            <TrackField carValue={isUserCar.track} />
            <OtherCityField carValue={isUserCar.otherCity}/>
        </div>
    )
}