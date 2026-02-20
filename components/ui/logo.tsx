import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export function Logo({ variant = "light", className = "" }: LogoProps) {
  const isDark = variant === "dark";
  const diagonal = isDark ? "bg-white" : "bg-gray-900";
  const sage = "bg-sage";
  const textColor = isDark ? "text-white" : "text-gray-900";

  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Quad grid mark — 20px (balanced ratio with 16px text) */}
      <div className="grid grid-cols-2 gap-[2px] w-5 h-5 flex-shrink-0">
        <div className={`${diagonal} rounded-[2px]`} />
        <div className={`${sage} rounded-[2px]`} />
        <div className={`${sage} opacity-60 rounded-[2px]`} />
        <div className={`${diagonal} rounded-[2px]`} />
      </div>
      <span className={`text-base font-semibold tracking-tight leading-none ${textColor}`}>
        RetailSpec
      </span>
    </Link>
  );
}
