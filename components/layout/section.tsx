interface SectionProps {
  children: React.ReactNode;
  alternate?: boolean;
  className?: string;
  id?: string;
}

export function Section({ children, alternate = false, className = "", id }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 sm:py-24 lg:py-32 ${alternate ? "bg-gray-50" : ""} ${className}`}
    >
      {children}
    </section>
  );
}
