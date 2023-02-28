import { NewsType } from '@/types/dashboard';
import AnchorLink from '../ui/links/anchor-link';
import Card from '../ui/card';

interface FeaturedArticlesProps {
  data: NewsType[];
}

export default function FeaturedArticles({ data }: FeaturedArticlesProps) {
  return (
    <Card title="Featured articles">
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
