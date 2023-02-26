import type { NextPageWithLayout } from '@/types';
import { NextSeo } from 'next-seo';
import RootLayout from '@/layouts/_root-layout';
import LatestNews from '@/components/ui/latest-news';
import endpoints from '@/api/endpoints';
import { useQuery } from 'react-query';
import reactQueryKeys from '@/common/react-query-keys';
import { DashboardData } from '@/types/dashboard';

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
      <LatestNews data={data?.latest_news} />
    </>
  );
};

DashboardPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default DashboardPage;
