import cn from 'classnames';
import { LatestNewsType } from '@/types/dashboard';
import AnchorLink from '../ui/links/anchor-link';

interface LatestNewsProps {
  data: LatestNewsType[];
}

export default function LatestNews({ data }: LatestNewsProps) {
  return (
    <div
      className={cn(
        'rounded-lg bg-white p-6 shadow-card dark:bg-light-dark sm:p-8'
      )}
    >
      <h3 className="mb-6 text-base font-medium uppercase">Latest News</h3>
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
    </div>
  );
}
