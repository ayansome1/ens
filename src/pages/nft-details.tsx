import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { NextSeo } from 'next-seo';
import type { NextPageWithLayout } from '@/types';
import NftDetails from '@/components/nft/nft-details';
import { nftData } from '@/data/static/single-nft';
import MinimalNFTDetails from '@/components/nft/minimal-nft-details';
import RetroNFTDetails from '@/components/nft/retro-nft-details';
import ClassicNFTDetails from '@/components/nft/classic-nft-details';
import RootLayout from '@/layouts/_root-layout';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

const NFTDetailsPage: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = () => {
  return <MinimalNFTDetails product={nftData} />;
};

NFTDetailsPage.getLayout = function getLayout(page) {
  return <RootLayout contentClassName="!pb-0">{page}</RootLayout>;
};

export default NFTDetailsPage;
