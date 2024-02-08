interface BlurCostInfoBoxProps {
  children: React.ReactNode;
}

const BlurCostInfoBox = ({ children }: BlurCostInfoBoxProps) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-center gap-8 rounded-lg bg-neutral-50/60 p-6 text-center text-lg font-medium backdrop-blur-sm">
      {children}
    </div>
  );
};
export default BlurCostInfoBox;
