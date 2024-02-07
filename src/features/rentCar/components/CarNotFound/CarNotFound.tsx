import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { RoutePaths } from "@/constants/routes";

const CarNotFound = () => {
  return (
    <div className="content-wrapper flex h-96 flex-col items-center justify-center gap-6 p-6">
      <h2 className="text-center text-5xl font-bold">Car not found...</h2>
      <Link to={RoutePaths.HOME} className="btn">
        <IoMdArrowRoundBack className="text-xl" />
        Back to car list
      </Link>
    </div>
  );
};
export default CarNotFound;
