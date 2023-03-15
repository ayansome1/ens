import AnchorLink from '../ui/links/anchor-link';
import Card from '../ui/card';
import { PodcastType } from '@/types/home';

interface PodcastsProps {
  data: PodcastType[];
}

export default function Podcasts({ data }: PodcastsProps) {
  return (
    <Card title="Podcasts">
      <>
        {data.map(({ title, link, date }, index) => {
          return (
            <div key={index} className="mb-6">
              <AnchorLink
                target="_blank"
                href={link}
                className="text-sm tracking-tighter text-gray-600 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                {title} | {date}
              </AnchorLink>
            </div>
          );
        })}
      </>
    </Card>
  );
}
