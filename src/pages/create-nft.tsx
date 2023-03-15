import type { NextPageWithLayout } from '@/types';
import { NextSeo } from 'next-seo';
import RootLayout from '@/layouts/_root-layout';
import CreateNFTRetro from '@/components/create-nft/create-nft-retro';
import CreateNFT from '@/components/create-nft/create-nft';

const CreateNFTPage: NextPageWithLayout = () => {
  return (
    <>
      <NextSeo title="Create NFT" description="ENS Gods" />
      <CreateNFT />
    </>
  );
};

CreateNFTPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default CreateNFTPage;
