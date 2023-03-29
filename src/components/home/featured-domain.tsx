import { FeaturedDomainType } from '@/types/home';
import Card from '../ui/card';
import AnchorLink from '../ui/links/anchor-link';

import { getDomains } from '../../../blockchain/ens-marketplace/apis/api';

//'/Users/ayan/projects/ens/blockchain/ens-marketplace/apis/api.ts'

interface FeaturedDomainProps {
  domain: FeaturedDomainType;
}

export default function FeaturedDomain({ domain }: FeaturedDomainProps) {
  const fetchDomain = async () => {
    const domains = await getDomains('thedefigod.eth');
    console.log(domains);
  };
  return (
    <Card title="Featured Domain">
      <>
        <AnchorLink target={'_blank'} href={domain.link} className="text-7xl">
          {domain.name}
        </AnchorLink>
        <button onClick={fetchDomain}>test me</button>
      </>
    </Card>
  );
}