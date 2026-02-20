import Link from "next/link";

interface CardProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
}

export function Card({ children, href, className = "" }: CardProps) {
  const base = `rounded-xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm transition-all duration-200 ${
    href ? "hover:shadow-md hover:border-sage hover:-translate-y-0.5" : ""
  } ${className}`;

  if (href) {
    return (
      <Link href={href} className={`block ${base}`}>
        {children}
      </Link>
    );
  }

  return <div className={base}>{children}</div>;
}
