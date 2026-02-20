import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
}

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  type = "button",
}: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium transition-colors";

  const variants = {
    primary: "bg-sage text-white hover:bg-sage-hover",
    secondary: "border border-gray-300 text-gray-700 hover:border-sage hover:text-sage",
    ghost: "text-gray-600 hover:text-sage",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
