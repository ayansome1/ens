import { FeaturedDomainType } from '@/types/home';
import Card from '../ui/card';
import AnchorLink from '../ui/links/anchor-link';
import { getDomains } from '../../../blockchain/ens-marketplace/apis/api';
import { SetStateAction, useState } from 'react';
import Input from '../ui/forms/input';
import Button from '../ui/button';

interface FeaturedDomainProps {
  domain: FeaturedDomainType;
}

export default function FeaturedDomain({ domain }: FeaturedDomainProps) {
  const [data, setData] = useState('thedefigod.eth');
  const [fetchedDomains, setFetchedDomains] = useState<any>({});
  const fetchDomain = async () => {
    const domains = await getDomains(data);
    setFetchedDomains(domains);
    console.log(domains);
  };
  const handleInput = (e: { target: { value: SetStateAction<string> } }) => {
    setData(e.target.value);
  };
  return (
    <Card title="Featured Domain">
      <>
        <AnchorLink target={'_blank'} href={domain.link} className="text-7xl">
          {domain.name}
        </AnchorLink>
        <Input
          type="text"
          placeholder="enter address ex. 879.eth"
          onChange={handleInput}
          value={data}
          className="mt-5"
        />

        <Button onClick={fetchDomain} className="mt-5">
          Get ENS collections
        </Button>
        <div className="mt-5">
          {fetchedDomains?.ownedNfts &&
            fetchedDomains.ownedNfts
              .map((val: { title: any }) => {
                return val.title;
              })
              .join(' , ')}
        </div>
      </>
    </Card>
  );
}
