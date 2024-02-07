import Chip from "@/components/Chip/Chip";
import getMultipliedDailyPrice from "../../../../utils/getMultipliedDailyPrice";
import { BsFuelPumpFill } from "react-icons/bs";
import { MdWorkspacePremium } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CarData } from "@/types";
import { RoutePaths } from "@/constants/routes";
import defaultCarImg from "@/assets/images/cars/defaultCar.jpg";

export interface CarCardProps {
  carData: CarData;
}

const CarCard = ({
  carData: {
    id,
    producer,
    model,
    img,
    availableCars,
    averageFuelConsumption,
    category,
    location,
  },
}: CarCardProps) => {
  return (
    <article className="paper w-64 overflow-hidden rounded-lg border  ">
      <div className="relative h-48 border-b">
        <img
          src={img}
          alt={`${producer} ${model}`}
          className="h-full w-full object-cover"
        />
        <div className="absolute right-2 top-2">
          <Chip
            label={category}
            icon={
              category === "premium" ? (
                <MdWorkspacePremium className="text-base text-yellow-500" />
              ) : undefined
            }
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 p-4">
        <h3 className="text-xl font-medium">
          {producer} {model}
        </h3>
        <div className="flex flex-wrap gap-2">
          <Chip icon={<FaLocationDot />} label={location} />
          <Chip
            icon={<BsFuelPumpFill />}
            label={`${averageFuelConsumption} L/100km`}
          />
        </div>
        <p className="text-lg font-bold">
          {getMultipliedDailyPrice(category)}zł{" "}
          <span className="text-base text-gray-500">/day</span>
        </p>
        <p>
          Available cars: <span className="font-bold">{availableCars}</span>
        </p>
      </div>
      <Link
        to={`${RoutePaths.CARS}/${id}`}
        className="btn block rounded-none border-0 border-t px-2 py-2 text-center font-medium capitalize"
      >
        Rent Now
      </Link>
    </article>
  );
};

export default CarCard;
