import { NextSeo } from 'next-seo';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import type { NextPageWithLayout } from '@/types';
// import Search from '@/components/search/search';
import RootLayout from '@/layouts/_root-layout';
import Marketplace from '@/components/marketplace/marketplace';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

const MarketplacePage: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = () => {
  // render default create NFT component
  return (
    <>
      <NextSeo title="Marketplace" description="ENS Gods" />
      <Marketplace />
    </>
  );
};

MarketplacePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default MarketplacePage;
