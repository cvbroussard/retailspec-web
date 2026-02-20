interface MetricCardProps {
  metric: string;
  description: string;
}

export function MetricCard({ metric, description }: MetricCardProps) {
  return (
    <div className="text-center p-6">
      <p className="text-3xl sm:text-4xl font-semibold text-sage">{metric}</p>
      <p className="mt-2 text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
