export interface ChipProps {
  icon?: React.ReactElement;
  label: React.ReactNode;
}
const Chip = ({ icon, label }: ChipProps) => {
  return (
    <div className="inline-flex items-center justify-center gap-1 rounded-full border bg-white px-2.5 py-1.5 text-xs">
      {icon ? <span>{icon}</span> : null}
      <span className=" font-medium text-gray-700 first-letter:capitalize">
        {label}
      </span>
    </div>
  );
};
export default Chip;
