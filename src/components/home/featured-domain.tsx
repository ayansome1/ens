import Card from '../ui/card';

interface FeaturedDomainProps {
  domain: string;
}

export default function FeaturedDomain({ domain }: FeaturedDomainProps) {
  return (
    <Card title="Featured Domain">
      <div className="text-7xl">{domain}</div>
    </Card>
  );
}
