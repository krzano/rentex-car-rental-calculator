import {
  MIN_EXPERIENCED_DRIVER_YEARS,
  MIN_PREMIUM_CAR_RENTAL_YEARS,
} from "@/constants/data";
import { CarData } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface UserRentalDataState {
  estimatedKilometeres: number | null;
  drivingLicenseIssueDate: string | null;
  rentalPeriod: {
    startDate: string | null;
    endDate: string | null;
  };
}

export interface RentCarSliceState {
  selectedCar: CarData | null;
  userRentalData: UserRentalDataState;
  isPremiumCarRentalPossible: boolean;
  isInexperiencedDriver: boolean;
}

export interface SubmitRentalFormPayload {
  userRentalData: UserRentalDataState;
  driverYearsOfExperience: number;
}

const initialUserRentalDataState: UserRentalDataState = {
  estimatedKilometeres: null,
  drivingLicenseIssueDate: null,
  rentalPeriod: {
    startDate: null,
    endDate: null,
  },
};

const initialState: RentCarSliceState = {
  selectedCar: null,
  userRentalData: initialUserRentalDataState,
  isPremiumCarRentalPossible: true,
  isInexperiencedDriver: false,
};

const rentCarSlice = createSlice({
  name: "rentCar",
  initialState,
  reducers: {
    updateSelectedCar: (
      state,
      { payload }: PayloadAction<RentCarSliceState["selectedCar"]>,
    ) => {
      state.selectedCar = payload;
    },
    submitRentalForm: (
      state,
      { payload }: PayloadAction<SubmitRentalFormPayload>,
    ) => {
      state.userRentalData = payload.userRentalData;
      if (payload.driverYearsOfExperience < MIN_EXPERIENCED_DRIVER_YEARS) {
        state.isInexperiencedDriver = true;
      } else {
        state.isInexperiencedDriver = false;
      }
      if (payload.driverYearsOfExperience < MIN_PREMIUM_CAR_RENTAL_YEARS) {
        state.isPremiumCarRentalPossible = false;
      } else {
        state.isPremiumCarRentalPossible = true;
      }
    },
    resetUserRentalData: (state) => {
      state.userRentalData = initialUserRentalDataState;
      state.isInexperiencedDriver = initialState.isInexperiencedDriver;
      state.isPremiumCarRentalPossible =
        initialState.isPremiumCarRentalPossible;
    },
  },
});

export default rentCarSlice.reducer;

export const { updateSelectedCar, submitRentalForm, resetUserRentalData } =
  rentCarSlice.actions;
