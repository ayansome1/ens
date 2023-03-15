import type { NextPageWithLayout } from '@/types';
import RootLayout from '@/layouts/_root-layout';
import { NextSeo } from 'next-seo';
import Dashboard from '@/components/dashboard/dashboard';

const DashboardPage: NextPageWithLayout = () => {
  return (
    <>
      <NextSeo title="Dashboard" description="ENS Gods" />
      <Dashboard />
    </>
  );
};

DashboardPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default DashboardPage;
