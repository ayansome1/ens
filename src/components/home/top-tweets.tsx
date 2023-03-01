import AnchorLink from '../ui/links/anchor-link';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import Card from '../ui/card';

interface TopTweetsProps {
  tweetlinks: string[];
}

export default function TopTweets({ tweetlinks }: TopTweetsProps) {
  return (
    <Card title="Top tweets">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
        {tweetlinks.map((val, index) => {
          return (
            <TwitterTweetEmbed
              tweetId={val}
              key={val}
              placeholder="Loading tweet..."
            />
          );
        })}
      </div>
    </Card>
  );
}
