export interface RentCarSectionProps {
  children: React.ReactNode;
  title: string;
}

const RentCarSection = ({ children, title }: RentCarSectionProps) => {
  return (
    <section className="paper relative rounded-lg  p-4 sm:p-6">
      <h2 className="mb-8 text-2xl font-bold">{title}</h2>
      {children}
    </section>
  );
};
export default RentCarSection;
