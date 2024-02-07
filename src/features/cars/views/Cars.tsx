import Filters from "../components/Filters/Filters";
import FilteredCarList from "../components/FilteredCarList/FilteredCarList";

const Cars = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-sky-600 to-indigo-800 p-4 shadow-lg">
        <div className="content-wrapper grid gap-10">
          <header>
            <h1 className="mb-4 text-5xl font-bold text-neutral-50">
              Rentex car rental
            </h1>
            <p className="max-w-96 text-xl font-medium text-blue-200 opacity-90">
              Choose the{" "}
              <span className="font-bold text-neutral-50">
                ideal car for you
              </span>{" "}
              to travel anywhere and anytime
            </p>
          </header>
          <Filters />
        </div>
      </div>
      <FilteredCarList />
    </>
  );
};

export default Cars;
