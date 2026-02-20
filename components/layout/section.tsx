interface SectionProps {
  children: React.ReactNode;
  variant?: "default" | "sage" | "gray" | "dark";
  /** @deprecated Use variant="sage" instead */
  alternate?: boolean;
  className?: string;
  id?: string;
}

const variantClasses = {
  default: "",
  sage: "bg-sage-50",
  gray: "bg-gray-50",
  dark: "bg-gray-900 text-white",
};

export function Section({ children, variant, alternate = false, className = "", id }: SectionProps) {
  const resolvedVariant = variant ?? (alternate ? "sage" : "default");

  return (
    <section
      id={id}
      className={`py-20 sm:py-24 lg:py-32 ${variantClasses[resolvedVariant]} ${className}`}
    >
      {children}
    </section>
  );
}
