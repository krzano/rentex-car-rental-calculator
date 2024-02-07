import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { resetFilters, updateFilters } from "../../carsSlice";
import { MdWorkspacePremium } from "react-icons/md";

const Filters = () => {
  const dispatch = useAppDispatch();
  const allCars = useAppSelector((state) => state.cars.allCars);
  const filters = useAppSelector((state) => state.cars.filters);

  const uniqueProducerOptions = [
    "all",
    ...new Set(allCars.map((car) => car.producer.toLowerCase())),
  ];
  const uniqueCategoryOptions = [
    "all",
    ...new Set(allCars.map((car) => car.category.toLowerCase())),
  ];
  const uniqueLocationOptions = [
    "all",
    ...new Set(allCars.map((car) => car.location.toLowerCase())),
  ];

  return (
    <div className="grid gap-6">
      <div>
        <h2 className="mb-2 text-lg font-bold text-neutral-50">Category</h2>
        <div className="flex flex-wrap gap-2">
          {uniqueCategoryOptions.map((category) => (
            <button
              type="button"
              key={category}
              onClick={() => {
                dispatch(updateFilters({ category }));
              }}
              className={`paper flex min-w-14 items-center justify-center gap-1 rounded-full border px-3 py-2 font-bold capitalize transition-colors hover:bg-opacity-100 ${filters.category !== category ? "bg-opacity-20" : null}`}
            >
              {category === "premium" ? (
                <span>
                  <MdWorkspacePremium className="text-lg text-yellow-500" />
                </span>
              ) : (
                ""
              )}
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap gap-6 gap-y-8">
        <div className="max-w-60 flex-grow">
          <h2 className="mb-2 text-lg font-bold text-neutral-50">Producer</h2>
          <select
            name="producer"
            id="producer"
            className="shadow-natural focus w-full font-bold capitalize focus:ring-2 focus:ring-black"
            value={filters.producer}
            onChange={(e) => {
              dispatch(updateFilters({ producer: e.target.value }));
            }}
          >
            {uniqueProducerOptions.map((producer) => (
              <option key={producer} value={producer} className="capitalize">
                {producer}
              </option>
            ))}
          </select>
        </div>
        <div className="max-w-60 flex-grow">
          <h2 className="mb-2 text-lg font-bold text-neutral-50">Location</h2>
          <select
            name="location"
            id="location"
            className="shadow-natural w-full font-bold capitalize focus:ring-2 focus:ring-black"
            value={filters.location}
            onChange={(e) => {
              dispatch(updateFilters({ location: e.target.value }));
            }}
          >
            {uniqueLocationOptions.map((location) => (
              <option
                key={location}
                value={location}
                className="py-1 capitalize text-inherit"
              >
                {location}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-grow items-end justify-end">
          <button
            type="button"
            onClick={() => {
              dispatch(resetFilters());
            }}
            className="btn shadow-natural border-0 border-transparent"
          >
            clear filters
          </button>
        </div>
      </div>
    </div>
  );
};
export default Filters;
