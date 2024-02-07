import { useAppSelector } from "@/app/hooks";
import {
  FUEL_PRICE,
  INEXPERIENCED_DRIVER_FEE_RATE,
  LIMITED_AVAILABILITY_FEE_RATE,
  MIN_CARS_NUMBER_TO_AVOID_AVAILABILITY_FEE,
  MIN_PREMIUM_CAR_RENTAL_YEARS,
  TAX_RATE,
} from "@/constants/data";
import dayjs from "dayjs";
import getMultipliedDailyPrice from "@/utils/getMultipliedDailyPrice";
import CostComponent from "./components/CostComponent/CostComponent";
import { CarData } from "@/types";
import BlurCostInfoBox from "./components/BlurCostInfoBox/BlurCostInfoBox";

interface CalculateRentalDaysParams {
  rentStartDate: string;
  rentEndDate: string;
}

interface CalculatePriceParams {
  estimatedKilometeres: number;
  isInexperiencedDriver: boolean;
  rentStartDate: string;
  rentEndDate: string;
  availableCars: number;
  averageFuelConsumtion: number;
  category: CarData["category"];
}

const calculateRentalDays = ({
  rentStartDate,
  rentEndDate,
}: CalculateRentalDaysParams) => {
  const startDate = dayjs(rentStartDate);
  const endDate = dayjs(rentEndDate);
  const rentalDays = endDate.diff(startDate, "days");
  return rentalDays;
};

const calculatePrice = ({
  estimatedKilometeres,
  isInexperiencedDriver,
  rentStartDate,
  rentEndDate,
  availableCars,
  averageFuelConsumtion,
  category,
}: CalculatePriceParams) => {
  const basePricePerDay = getMultipliedDailyPrice(category);
  const rentalDays = calculateRentalDays({ rentStartDate, rentEndDate });
  const baseRentalPrice = basePricePerDay * rentalDays;

  let subtotal = baseRentalPrice;
  let inexperiencedDriverExtraFee;
  let limitedAvailabilityExtraFee;

  if (isInexperiencedDriver) {
    inexperiencedDriverExtraFee = subtotal * INEXPERIENCED_DRIVER_FEE_RATE;
    subtotal += inexperiencedDriverExtraFee;
  }
  if (availableCars < MIN_CARS_NUMBER_TO_AVOID_AVAILABILITY_FEE) {
    limitedAvailabilityExtraFee = subtotal * LIMITED_AVAILABILITY_FEE_RATE;
    subtotal += limitedAvailabilityExtraFee;
  }

  const estimatedFuelCost =
    (estimatedKilometeres / 100) * averageFuelConsumtion * FUEL_PRICE;

  subtotal += estimatedFuelCost;

  const taxAmount = subtotal * TAX_RATE;
  const total = subtotal + taxAmount;

  return {
    total,
    subtotal,
    priceComponents: {
      baseRentalPrice,
      rentalDays,
      estimatedFuelCost,
      inexperiencedDriverExtraFee,
      limitedAvailabilityExtraFee,
      taxAmount,
    },
  };
};

const CostSummary = () => {
  const selectedCar = useAppSelector((state) => state.rentCar.selectedCar);
  const isInexperiencedDriver = useAppSelector(
    (state) => state.rentCar.isInexperiencedDriver,
  );
  const isPremiumCarRentalPossible = useAppSelector(
    (state) => state.rentCar.isPremiumCarRentalPossible,
  );
  const {
    estimatedKilometeres,
    drivingLicenseIssueDate,
    rentalPeriod: { startDate, endDate },
  } = useAppSelector((state) => state.rentCar.userRentalData);

  if (!selectedCar) return null;

  if (
    !estimatedKilometeres ||
    !drivingLicenseIssueDate ||
    !startDate ||
    !endDate
  )
    return (
      <>
        <BlurCostInfoBox>
          <h3>
            Fill out the form and press the{" "}
            <span className="font-bold">Calculate</span> button to see the cost
            summary
          </h3>
        </BlurCostInfoBox>
        <div className="min-h-32" />
      </>
    );

  const {
    total,
    subtotal,
    priceComponents: {
      baseRentalPrice,
      rentalDays,
      estimatedFuelCost,
      inexperiencedDriverExtraFee,
      limitedAvailabilityExtraFee,
      taxAmount,
    },
  } = calculatePrice({
    estimatedKilometeres,
    isInexperiencedDriver,
    rentStartDate: startDate,
    rentEndDate: endDate,
    availableCars: selectedCar.availableCars,
    averageFuelConsumtion: selectedCar.averageFuelConsumption,
    category: selectedCar.category,
  });

  return (
    <>
      {!isPremiumCarRentalPossible && selectedCar.category === "premium" ? (
        <BlurCostInfoBox>
          <h3>
            <span>Premium</span> cars cannot be rented to a driver who has held
            a license for less than {MIN_PREMIUM_CAR_RENTAL_YEARS} years. To proceed, choose a car from
            categories such as <span className="font-bold">Basic, </span>
            <span className="font-bold">Standard</span> or{" "}
            <span className="font-bold">Medium</span>
          </h3>
        </BlurCostInfoBox>
      ) : null}
      <div className="grid gap-3">
        <CostComponent
          cost={baseRentalPrice}
          text={`Base rental price for
        ${rentalDays} ${rentalDays === 1 ? "day" : "days"}`}
        />
        {inexperiencedDriverExtraFee && (
          <CostComponent
            cost={inexperiencedDriverExtraFee}
            showPlus
            text="Extra fee (little driving experience)"
          />
        )}
        {limitedAvailabilityExtraFee && (
          <CostComponent
            cost={limitedAvailabilityExtraFee}
            showPlus
            text="Extra fee (limited car availability)"
          />
        )}
        <CostComponent
          cost={estimatedFuelCost}
          showPlus
          text={`Estimated fuel cost for ${estimatedKilometeres} ${estimatedKilometeres === 1 ? "kilometer" : "kilometers"}`}
        />
        <hr />
        <CostComponent cost={subtotal} text="Subtotal (net cost)" />
        <CostComponent
          cost={taxAmount}
          showPlus
          text={`Tax (${TAX_RATE * 100}%)`}
        />
        <hr />
        <CostComponent isTotal cost={total} text="Total (gross)" />
      </div>
    </>
  );
};
export default CostSummary;
