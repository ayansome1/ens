import { FeaturedDomainType } from '@/types/home';
import Card from '../ui/card';
import AnchorLink from '../ui/links/anchor-link';

interface FeaturedDomainProps {
  domain: FeaturedDomainType;
}

export default function FeaturedDomain({ domain }: FeaturedDomainProps) {
  return (
    <Card title="Featured Domain">
      <AnchorLink target={'_blank'} href={domain.link} className="text-7xl">
        {domain.name}
      </AnchorLink>
    </Card>
  );
}
