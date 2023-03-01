import AnchorLink from '../ui/links/anchor-link';
import Card from '../ui/card';

interface TopTweetsProps {
  tweetlinks: string[];
}

export default function TopTweets({ tweetlinks }: TopTweetsProps) {
  return (
    <Card title="Top tweets">
      <>
        {tweetlinks.map((val, index) => {
          return (
            <div key={index} className="mb-6">
              <AnchorLink
                target="_blank"
                href={val}
                className="text-sm tracking-tighter text-gray-600 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                {val}
              </AnchorLink>
            </div>
          );
        })}
      </>
    </Card>
  );
}
