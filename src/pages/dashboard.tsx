import type { NextPageWithLayout } from '@/types';
import { NextSeo } from 'next-seo';
import RootLayout from '@/layouts/_root-layout';
import LatestNews from '@/components/dashboard/latest-news';
import endpoints from '@/api/endpoints';
import { useQuery } from 'react-query';
import reactQueryKeys from '@/common/react-query-keys';
import { DashboardData } from '@/types/dashboard';
import FeaturedDomain from '@/components/dashboard/featured-domain';
import Newsletter from '@/components/dashboard/newsletter';
import FeaturedArticles from '@/components/dashboard/featured-articles';
import TopTweets from '@/components/dashboard/top-tweets';
import Podcasts from '@/components/dashboard/podcasts';

const DashboardPage: NextPageWithLayout = () => {
  const { isLoading, error, data } = useQuery<DashboardData>(
    reactQueryKeys.DASHBOARD_DATA,
    () => fetch(endpoints.dashboard).then((res) => res.json()),
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
      <NextSeo title="Dashboard" description="ENS HQ" />

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

DashboardPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default DashboardPage;
