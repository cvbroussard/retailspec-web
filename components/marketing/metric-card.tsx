interface MetricCardProps {
  metric: string;
  description: string;
}

export function MetricCard({ metric, description }: MetricCardProps) {
  return (
    <div className="text-center p-8 border-t-2 border-sage">
      <p className="text-4xl sm:text-5xl font-semibold tracking-tight text-sage">{metric}</p>
      <p className="mt-3 text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
