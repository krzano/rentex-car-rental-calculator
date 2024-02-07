import {
  configureStore,
  type Action,
  type ThunkAction,
} from "@reduxjs/toolkit";
import carsReducer from "../features/cars/carsSlice";
import rentCarReducer from "../features/rentCar/rentCarSlice";

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    rentCar: rentCarReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
