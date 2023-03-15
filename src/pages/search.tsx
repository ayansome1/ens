import { NextSeo } from 'next-seo';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import type { NextPageWithLayout } from '@/types';
import Search from '@/components/search/search';
import RetroSearch from '@/components/search/retro-search';
import RootLayout from '@/layouts/_root-layout';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

const SearchPage: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = () => {
  // render default create NFT component
  return (
    <>
      <NextSeo title="Explore NTF" description="ENS Gods" />

      <Search />
    </>
  );
};

SearchPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default SearchPage;
