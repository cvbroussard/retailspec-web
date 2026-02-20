import Link from "next/link";

interface CardProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
}

export function Card({ children, href, className = "" }: CardProps) {
  const base = `rounded-xl border border-gray-200 bg-white p-6 sm:p-8 transition-colors ${
    href ? "hover:border-sage" : ""
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
