import { Navigate, createBrowserRouter } from "react-router-dom";
import ErrorElement from "./ErrorElement/ErrorElement";
import BasePageLayout from "../layouts/BasePageLayout/BasePageLayout";
import Cars from "../features/cars/views/Cars";
import RentCar from "../features/rentCar/views/RentCar";
import { RoutePaths } from "@/constants/routes";

const router = createBrowserRouter([
  {
    path: RoutePaths.HOME,
    errorElement: <ErrorElement />,
    element: <BasePageLayout />,
    children: [
      { index: true, element: <Navigate to={RoutePaths.CARS} /> },
      {
        path: RoutePaths.CARS,
        element: <Cars />,
      },
      {
        path: `${RoutePaths.CARS}/:id`,
        element: <RentCar />,
      },
    ],
  },
]);

export default router;
