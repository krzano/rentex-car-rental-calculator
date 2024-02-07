import { CarCategory, CarList } from "@/types";
import defaultCarImg from "@/assets/images/cars/defaultCar.jpg";
import c19img from "@/assets/images/cars/c19.jpg";

export const FUEL_PRICE = 6.34;
export const BASE_PRICE_PER_DAY = 100;
export const BASE_PRICE_MULTIPLIER: {
  [key in CarCategory]: number;
} = {
  basic: 1,
  standard: 1.3,
  medium: 1.6,
  premium: 2,
};
export const MIN_EXPERIENCED_DRIVER_YEARS = 5;
export const MIN_PREMIUM_CAR_RENTAL_YEARS = 3;
export const MIN_CARS_NUMBER_TO_AVOID_AVAILABILITY_FEE = 3;
export const INEXPERIENCED_DRIVER_FEE_RATE = 0.2;
export const LIMITED_AVAILABILITY_FEE_RATE = 0.15;
export const TAX_RATE = 0.23;
export const CAR_LIST: CarList = [
  {
    id: "c1",
    category: "basic",
    producer: "Fiat",
    model: "Panda",
    img: defaultCarImg,
    averageFuelConsumption: 5.0,
    availableCars: 7,
    location: "Rzeszów",
  },
  {
    id: "c2",
    category: "basic",
    producer: "Fiat",
    model: "500",
    img: defaultCarImg,
    averageFuelConsumption: 4.9,
    availableCars: 4,
    location: "Kraków",
  },
  {
    id: "c3",
    category: "basic",
    producer: "Skoda",
    model: "Fabia",
    img: defaultCarImg,
    averageFuelConsumption: 4.6,
    availableCars: 6,
    location: "Wrocław",
  },
  {
    id: "c4",
    category: "basic",
    producer: "Skoda",
    model: "Citigo",
    img: defaultCarImg,
    averageFuelConsumption: 4.5,
    availableCars: 2,
    location: "Kraków",
  },
  {
    id: "c6",
    category: "standard",
    producer: "Ford",
    model: "Focus",
    img: defaultCarImg,
    averageFuelConsumption: 6.1,
    availableCars: 9,
    location: "Rzeszów",
  },
  {
    id: "c7",
    category: "standard",
    producer: "Ford",
    model: "Fiesta",
    img: defaultCarImg,
    averageFuelConsumption: 5.4,
    availableCars: 10,
    location: "Kraków",
  },
  {
    id: "c8",
    category: "standard",
    producer: "Hyundai",
    model: "i30",
    img: defaultCarImg,
    averageFuelConsumption: 5.8,
    availableCars: 11,
    location: "Wrocław",
  },
  {
    id: "c9",
    category: "standard",
    producer: "Hyundai",
    model: "i20",
    img: defaultCarImg,
    averageFuelConsumption: 5.2,
    availableCars: 12,
    location: "Kraków",
  },
  {
    id: "c11",
    category: "medium",
    producer: "Toyota",
    model: "Camry",
    img: defaultCarImg,
    averageFuelConsumption: 6.9,
    availableCars: 2,
    location: "Kraków",
  },
  {
    id: "c12",
    category: "medium",
    producer: "Toyota",
    model: "Corolla",
    img: defaultCarImg,
    averageFuelConsumption: 6.0,
    availableCars: 1,
    location: "Kraków",
  },
  {
    id: "c13",
    category: "medium",
    producer: "Kia",
    model: "Optima",
    img: defaultCarImg,
    averageFuelConsumption: 7.1,
    availableCars: 4,
    location: "Kraków",
  },
  {
    id: "c14",
    category: "medium",
    producer: "Kia",
    model: "Ceed",
    img: defaultCarImg,
    averageFuelConsumption: 6.2,
    availableCars: 7,
    location: "Kraków",
  },
  {
    id: "c17",
    category: "premium",
    producer: "Audi",
    model: "A8",
    img: defaultCarImg,
    averageFuelConsumption: 8.6,
    availableCars: 8,
    location: "Warszawa",
  },
  {
    id: "c19",
    category: "premium",
    producer: "Fiat",
    model: "125p",
    img: c19img,
    averageFuelConsumption: 8.8,
    availableCars: 1,
    location: "Rzeszów",
  },
];
