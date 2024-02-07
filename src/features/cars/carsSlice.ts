import { CAR_LIST } from "@/constants/data";
import { CarList } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface FiltersState {
  category: string;
  location: string;
  producer: string;
}

export interface CarsInitialState {
  allCars: CarList;
  filters: FiltersState;
}

const initialFilters: FiltersState = {
  category: "all",
  location: "all",
  producer: "all",
};

const initialState: CarsInitialState = {
  allCars: CAR_LIST,
  filters: initialFilters,
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    updateFilters: (
      state,
      { payload }: PayloadAction<Partial<FiltersState>>,
    ) => {
      return { ...state, filters: { ...state.filters, ...payload } };
    },
    resetFilters: (state) => {
      state.filters = initialFilters;
    },
  },
});

export const { updateFilters, resetFilters } = carsSlice.actions;

export default carsSlice.reducer;
