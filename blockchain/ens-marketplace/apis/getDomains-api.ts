import { Alchemy, Network, OwnedNftsResponse } from 'alchemy-sdk';
// import * as dotenv from 'dotenv';
// dotenv.config();

// const API_KEY = process.env.ALCHEMY_API_KEY;
// https://eth-mainnet.g.alchemy.com/v2/ak-uT206i3YhKLvy59yozmo234bLg_cO

const config = {
  apiKey: `buuPeJ8weSXsONMHxhaveGUETDKP6d8I`,
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(config);

export const getDomainsApi = async (
  owner: string
): Promise<OwnedNftsResponse> => {
  console.log('owner', owner);
  // Get all NFTs
  const nfts = await alchemy.nft.getNftsForOwner(owner, {
    contractAddresses: [`0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85`],
  });
  // Print NFTs
  console.log(nfts);

  return nfts;
};
