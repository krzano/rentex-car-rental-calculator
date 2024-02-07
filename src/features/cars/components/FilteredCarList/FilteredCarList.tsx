import { useAppSelector } from "@/app/hooks";
import { FiltersState } from "../../carsSlice";
import CarCard from "../CarCard/CarCard";
import { CarList } from "@/types";

interface FilterCarsParams {
  allCars: CarList;
  filters: FiltersState;
}
const filterCars = ({
  allCars,
  filters: { category, location, producer },
}: FilterCarsParams) => {
  let filteredCars = allCars;
  if (category !== "all") {
    filteredCars = filteredCars.filter((car) => {
      return car.category.toLowerCase() === category.toLowerCase();
    });
  }
  if (location !== "all") {
    filteredCars = filteredCars.filter((car) => {
      return car.location.toLowerCase() === location.toLowerCase();
    });
  }
  if (producer !== "all") {
    filteredCars = filteredCars.filter((car) => {
      return car.producer.toLowerCase() === producer.toLowerCase();
    });
  }
  return filteredCars;
};

const FilteredCarList = () => {
  const allCars = useAppSelector((state) => state.cars.allCars);
  const filters = useAppSelector((state) => state.cars.filters);

  const filteredCars = filterCars({ allCars, filters });
  
  return (
    <section className="content-wrapper">
      <div className="mb-8 flex items-center gap-4">
        <hr className="w-8" />
        <p className="font-medium text-gray-400">
          {filteredCars.length} {filteredCars.length === 1 ? "car" : "cars"}{" "}
          found
        </p>
        <hr className="flex-grow" />
      </div>
      {filteredCars.length < 1 ? (
        <p className="text-2xl text-gray-500">
          No cars were found that meet the criteria
        </p>
      ) : (
        <div className="flex flex-wrap items-center justify-center gap-8 gap-y-10">
          {filteredCars.map((car) => (
            <CarCard key={car.id} carData={car} />
          ))}
        </div>
      )}
    </section>
  );
};
export default FilteredCarList;
