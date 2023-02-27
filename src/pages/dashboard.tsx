import type { NextPageWithLayout } from '@/types';
import { NextSeo } from 'next-seo';
import RootLayout from '@/layouts/_root-layout';
import LatestNews from '@/components/dashboard/latest-news';
import endpoints from '@/api/endpoints';
import { useQuery } from 'react-query';
import reactQueryKeys from '@/common/react-query-keys';
import { DashboardData } from '@/types/dashboard';
import FeaturedDomain from '@/components/dashboard/featured-domain';

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

  return (
    <>
      <NextSeo title="Dashboard" description="ENS HQ" />

      <div>
        <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-3">
          <LatestNews data={data.latest_news} />
          <div className="grid grid-cols-1 gap-4">
            <FeaturedDomain domain={data.featured_domain} />
            <LatestNews data={data?.latest_news} />
          </div>
          <div className="grid grid-cols-1 gap-4">
            <LatestNews data={data?.latest_news} />
            <LatestNews data={data?.latest_news} />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <LatestNews data={data?.latest_news} />
          <LatestNews data={data?.latest_news} />
        </div>
      </div>
    </>
  );
};

DashboardPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default DashboardPage;
