import { Alchemy, Network, OwnedNftsResponse } from 'alchemy-sdk';

const API_KEY = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY as string;
const ensAddress = process.env.NEXT_PUBLIC_ENS_ADDRESS_MAINNET as string;

const config = {
  apiKey: API_KEY,
  // network: Network.ETH_MAINNET,
  network: Network.ETH_GOERLI, // TODO: Configure this based on .env variable
};
const alchemy = new Alchemy(config);

export const getDomainsApi = async (
  owner: string
): Promise<OwnedNftsResponse> => {
  // Get all NFTs
  const nfts = await alchemy.nft.getNftsForOwner(owner, {
    contractAddresses: [ensAddress],
  });
  // Print NFTs
  console.log(nfts);

  return nfts;
};
