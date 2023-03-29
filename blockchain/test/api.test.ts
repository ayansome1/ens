import { ethers } from 'ethers';
import { ethers as hre_ethers, network } from 'hardhat';
import {
  approveAssetListing,
  listAsset,
  buyAsset,
  getDomains,
} from '../apis/api';
import { main } from '../scripts/ensMarket.deploy';

describe('API tests', () => {
  before(async () => {
    await main();
  });

  it('should retireve all the domains owned by an address', async () => {
    await getDomains('thedefigod.eth');
  });

  it('should list an asset', async () => {
    const defiGodAddress: string = ethers.utils.getAddress(
      `0x45e6ddb1957afdca8e7771db855a998a1b861fd7`
    );
    await network.provider.request({
      method: 'hardhat_impersonateAccount',
      params: [defiGodAddress],
    });
    const provider = new ethers.providers.JsonRpcProvider();
    const defiGod = provider.getSigner(defiGodAddress);

    const tokenId = ethers.BigNumber.from(
      `55696125984586558013251814490845241837091415446836079729086429988079386944398`
    );
    const price = ethers.utils.parseEther('10');

    await approveAssetListing(defiGod, tokenId);

    const tx = await listAsset(defiGod, tokenId, price);
    console.log('test', tx);
  });

  it('should buy an asset', async () => {
    const accounts = await hre_ethers.getSigners();
    const buyer = accounts[0];
    const tokenId = ethers.BigNumber.from(
      `55696125984586558013251814490845241837091415446836079729086429988079386944398`
    );
    const value = ethers.utils.parseEther('10');

    const tx = await buyAsset(buyer, tokenId, value);
    console.log('test2', tx);
  });

  it('should retrieve all the listings', async () => {});
});
