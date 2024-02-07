import { RoutePaths } from "@/constants/routes";
import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const error = useRouteError();
  let errorMessage = "Something went wrong...";
  if (isRouteErrorResponse(error) && error.status === 404) {
    errorMessage = "Page not found...";
  }
  return (
    <div className="flex h-svh w-svw flex-col items-center justify-center gap-6 font-bold">
      <h1 className="text-5xl">Error</h1>
      <hr className="w-28" />
      <h2 className="text-3xl">{errorMessage}</h2>
      <Link to={RoutePaths.HOME} className="btn">
        back home
      </Link>
    </div>
  );
};
export default ErrorElement;
