import { LatestNewsType } from '@/types/dashboard';
import AnchorLink from '../ui/links/anchor-link';
import Card from '../ui/card';

interface LatestNewsProps {
  data: LatestNewsType[];
}

export default function LatestNews({ data }: LatestNewsProps) {
  return (
    <Card title="Latest News">
      <>
        {data.map((val, index) => {
          return (
            <div key={index} className="mb-6">
              <AnchorLink
                target="_blank"
                href={val.link ? val.link : ''}
                className="text-sm tracking-tighter text-gray-600 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                {val.news}
              </AnchorLink>
            </div>
          );
        })}
      </>
    </Card>
  );
}
