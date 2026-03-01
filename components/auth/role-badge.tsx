interface RoleBadgeProps {
  role: string;
}

export function RoleBadge({ role }: RoleBadgeProps) {
  if (role === "prospect") {
    return (
      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-sage text-white uppercase tracking-wider">
        Prospect
      </span>
    );
  }

  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-sage-light text-sage uppercase tracking-wider">
      Guest
    </span>
  );
}
