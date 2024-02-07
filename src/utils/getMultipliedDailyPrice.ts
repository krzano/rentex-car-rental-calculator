import { CarData } from "@/types";
import { BASE_PRICE_MULTIPLIER, BASE_PRICE_PER_DAY } from "../constants/data";

const getMultipliedDailyPrice = (carCategory: CarData["category"]) => {
  return BASE_PRICE_PER_DAY * BASE_PRICE_MULTIPLIER[carCategory];
};

export default getMultipliedDailyPrice;
