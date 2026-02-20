import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  type = "button",
  disabled,
}: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium transition-all duration-150";

  const variants = {
    primary: "bg-sage text-white shadow-sm hover:bg-sage-hover hover:shadow-md active:translate-y-[1px]",
    secondary: "border border-gray-300 text-gray-700 hover:border-sage hover:text-sage hover:shadow-sm",
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
    <button type={type} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
