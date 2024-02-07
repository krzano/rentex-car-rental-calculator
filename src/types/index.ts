export type CarCategory = "basic" | "standard" | "medium" | "premium";
export interface CarData {
  id: string;
  category: CarCategory;
  producer: string;
  model: string;
  img: string;
  location: string;
  averageFuelConsumption: number;
  availableCars: number;
}
export type CarList = CarData[];
