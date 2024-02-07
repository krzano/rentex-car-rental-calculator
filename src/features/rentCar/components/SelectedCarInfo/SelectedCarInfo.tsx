import { MdWorkspacePremium } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { FaCar } from "react-icons/fa";
import Chip from "@/components/Chip/Chip";
import getMultipliedDailyPrice from "@/utils/getMultipliedDailyPrice";
import { useAppSelector } from "@/app/hooks";
import { Link } from "react-router-dom";
import InfoBox from "./components/InfoBox/InfoBox";
import { RoutePaths } from "@/constants/routes";

const SelectedCarInfo = () => {
  const selectedCar = useAppSelector((state) => state.rentCar.selectedCar);

  if (!selectedCar) return null;

  const {
    availableCars,
    averageFuelConsumption,
    category,
    img,
    location,
    model,
    producer,
  } = selectedCar;

  return (
    <div className="flex flex-wrap gap-4">
      <div className="w-40 flex-grow overflow-hidden rounded-md border">
        <img
          src={img}
          alt={`${producer} ${model}`}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="grid flex-grow gap-3">
        <div className=" flex items-center justify-between gap-2">
          <h3 className="text-xl">
            {producer} {model}
          </h3>
          <span>
            <Chip
              label={category}
              icon={
                category === "premium" ? (
                  <MdWorkspacePremium className="text-base text-yellow-500" />
                ) : undefined
              }
            />
          </span>
        </div>
        <hr />
        <div className="flex flex-wrap gap-2">
          <InfoBox
            icon={<FaLocationDot />}
            title="Location"
            displayedValue={location}
          />
          <InfoBox
            icon={<BsFillFuelPumpFill />}
            title="Fuel info"
            displayedValue={
              <>
                {averageFuelConsumption}{" "}
                <span className="text-sm">L/100km</span>
              </>
            }
          />
          <InfoBox
            icon={<FaCar />}
            title="availability"
            displayedValue={`${availableCars} ${availableCars === 1 ? "car" : "cars"}`}
          />
        </div>
        <hr />
        <div className="flex items-center justify-between gap-4">
          <p className="text-lg font-bold">
            {getMultipliedDailyPrice(category)}zł{" "}
            <span className="text-base text-gray-500">/day</span>
          </p>
          <Link className="btn px-4" to={RoutePaths.CARS}>
            Change car
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SelectedCarInfo;
