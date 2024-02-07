import { CAR_LIST } from "@/constants/data";
import { useParams } from "react-router-dom";
import CarNotFound from "../components/CarNotFound/CarNotFound";
import SelectedCarInfo from "../components/SelectedCarInfo/SelectedCarInfo";
import RentCarSection from "../components/RentCarSection/RentCarSection";
import RentalForm from "../components/RentalForm/RentalForm";
import CostSummary from "../components/CostSummary/CostSummary";
import { useEffect } from "react";
import { useAppDispatch } from "@/app/hooks";
import { updateSelectedCar } from "../rentCarSlice";

const RentCar = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const carId = params.id;
  const selectedCar = CAR_LIST.find((car) => car.id === carId);

  useEffect(() => {
    dispatch(updateSelectedCar(selectedCar ? selectedCar : null));
  }, []);

  if (!selectedCar) return <CarNotFound />;
  return (
    <>
      <div className="content-wrapper grid grid-cols-1 items-start gap-6 pb-10 md:grid-cols-2">
        <div className="grid gap-6 md:mt-3">
          <RentCarSection title="Selected car">
            <SelectedCarInfo />
          </RentCarSection>
          <RentCarSection title="Rental form">
            <RentalForm />
          </RentCarSection>
        </div>
        <div className="md:h-screen">
          <div className="sticky top-28">
            <RentCarSection title="Cost summary">
              <CostSummary />
            </RentCarSection>
          </div>
        </div>
      </div>
    </>
  );
};

export default RentCar;
