export interface CostComponentProps {
  cost: number;
  showPlus?: boolean;
  text: string;
  isTotal?: boolean;
}

const CostComponent = ({
  cost,
  showPlus,
  text,
  isTotal,
}: CostComponentProps) => {
  return (
    <div
      className={`grid grid-cols-[1fr,_auto] items-end gap-2 ${isTotal ? "text-xl font-bold" : "text-sm font-medium text-gray-400"}`}
    >
      <p>{text}</p>
      <p className="">
        {showPlus && "+ "}
        {cost.toFixed(2)} zł
      </p>
    </div>
  );
};
export default CostComponent;
