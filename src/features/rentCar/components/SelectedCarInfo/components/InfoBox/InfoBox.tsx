export interface InfoBoxProps {
  icon: React.ReactElement;
  title: string;
  displayedValue: React.ReactNode;
}

const InfoBox = ({ icon, title, displayedValue }: InfoBoxProps) => {
  return (
    <div className="flex flex-grow flex-col rounded-lg border bg-white px-3 pb-2 pt-3">
      <span className="mb-1">{icon}</span>
      <p className="text-sm font-medium text-gray-400 first-letter:uppercase">
        {title}
      </p>
      <p className="text-lg font-bold">{displayedValue}</p>
    </div>
  );
};
export default InfoBox;
