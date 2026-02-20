import { Card } from "@/components/ui/card";

interface Feature {
  title: string;
  description: string;
  href?: string;
}

interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 3 | 4;
}

const columnClasses = {
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
};

export function FeatureGrid({ features, columns = 3 }: FeatureGridProps) {
  return (
    <div className={`grid gap-6 ${columnClasses[columns]}`}>
      {features.map((feature) => (
        <Card key={feature.title} href={feature.href}>
          <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
          <p className="mt-2 text-gray-600 leading-relaxed">{feature.description}</p>
        </Card>
      ))}
    </div>
  );
}
