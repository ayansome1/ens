import type { NextPageWithLayout } from '@/types';
import { NextSeo } from 'next-seo';
import RootLayout from '@/layouts/_root-layout';
import LatestNews from '@/components/ui/latest-news';

const DashboardPage: NextPageWithLayout = () => {
  return (
    <>
      <NextSeo title="Dashboard" description="ENS HQ" />
      <LatestNews />
    </>
  );
};

DashboardPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default DashboardPage;
