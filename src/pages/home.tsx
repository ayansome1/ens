import type { NextPageWithLayout } from '@/types';
import { NextSeo } from 'next-seo';
import RootLayout from '@/layouts/_root-layout';
import LatestNews from '@/components/home/latest-news';
import endpoints from '@/api/endpoints';
import { useQuery } from 'react-query';
import reactQueryKeys from '@/common/react-query-keys';
import { HomeData } from '@/types/home';
import FeaturedDomain from '@/components/home/featured-domain';
import Newsletter from '@/components/home/newsletter';
import FeaturedArticles from '@/components/home/featured-articles';
import TopTweets from '@/components/home/top-tweets';
import Podcasts from '@/components/home/podcasts';

const Home: NextPageWithLayout = () => {
  const { isLoading, error, data } = useQuery<HomeData>(
    reactQueryKeys.HOME_DATA,
    () => fetch(endpoints.home).then((res) => res.json()),
    {
      staleTime: Infinity,
    }
  );

  if (!data) {
    return <></>;
  }
  const {
    latest_news,
    featured_domain,
    featured_articles,
    top_tweets,
    podcasts,
  } = data;

  return (
    <>
      <NextSeo title="Home" description="ENS HQ" />

      <div>
        <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-3">
          <LatestNews data={latest_news} />
          <div className="grid grid-cols-1 gap-4">
            <FeaturedDomain domain={featured_domain} />
            <FeaturedArticles data={featured_articles} />
          </div>
          <div className="grid grid-cols-1 gap-4">
            <Newsletter />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <TopTweets tweetlinks={top_tweets} />
          <Podcasts data={podcasts} />
        </div>
      </div>
    </>
  );
};

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default Home;
