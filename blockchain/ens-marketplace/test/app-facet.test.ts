import { ethers, network } from 'hardhat';
import { expect } from 'chai';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { time } from '@nomicfoundation/hardhat-network-helpers';
import { ENSMarket, IERC721 } from '../typechain-types';

describe('ENSMarket test', () => {
  // variables
  const defiGodAddress: string = ethers.utils.getAddress(
    `0x45e6ddb1957afdca8e7771db855a998a1b861fd7`
  );
  const ensAddress: string = `0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85`;
  const tokenId = `55696125984586558013251814490845241837091415446836079729086429988079386944398`;

  let ensMarket: ENSMarket;
  let ens: IERC721;
  let defiGod: SignerWithAddress;
  let owner: SignerWithAddress;
  let users: SignerWithAddress[];
  let tx;

  before(async () => {
    [owner, ...users] = await ethers.getSigners();

    // deploy diamond, appfacet
    const ENSMarket = await ethers.getContractFactory('ENSMarket');
    ensMarket = await ENSMarket.deploy(ensAddress, 5);

    await network.provider.request({
      method: 'hardhat_impersonateAccount',
      params: [defiGodAddress],
    });
    defiGod = await ethers.getSigner(defiGodAddress);

    ens = await ethers.getContractAt('IERC721', ensAddress);
  });

  it('should let defiGod list their asset', async () => {
    let owner = await ens.ownerOf(tokenId);
    expect(owner).to.equal(defiGodAddress);

    await ens.connect(defiGod).approve(ensMarket.address, tokenId);

    const price = ethers.utils.parseEther('10');
    let latestTimeStamp = await time.latest();

    await expect(ensMarket.connect(defiGod).listAsset(tokenId, price))
      .to.emit(ensMarket, 'AssetListed')
      .withArgs(defiGodAddress, tokenId, price, latestTimeStamp + 1);

    owner = await ens.ownerOf(tokenId);
    expect(owner).to.equal(ensMarket.address);

    const listing = await ensMarket.getListing(tokenId);

    expect(listing.tokenId).to.equal(tokenId);
    expect(listing.price).to.equal(price);
    expect(listing.seller).to.equal(defiGodAddress);
    expect(listing.listed).to.be.true;

    await expect(
      ensMarket.connect(defiGod).listAsset(tokenId, price)
    ).to.be.revertedWith('Asset already listed');
  });

  it('should let user buy listed asset', async () => {
    const user2 = users[1];
    let latestTimeStamp = await time.latest();
    const price = ethers.utils.parseEther('10');

    await expect(
      ensMarket.connect(user2).buyAsset(tokenId, { value: price.sub(1) })
    ).to.be.revertedWith('Incorrect price');

    await expect(ensMarket.connect(user2).buyAsset(tokenId, { value: price }))
      .to.emit(ensMarket, 'AssetBought')
      .withArgs(user2.address, tokenId, latestTimeStamp + 1)
      .and.to.changeEtherBalances(
        [defiGod, user2],
        [price.mul('95').div('100'), price.mul(-1)]
      );

    const owner = await ens.ownerOf(tokenId);
    expect(owner).to.equal(user2.address);

    const listing = await ensMarket.getListing(tokenId);

    expect(listing.listed).to.be.false;
    expect(listing.seller).to.equal(ethers.constants.AddressZero);
    expect(listing.price).to.equal(0);
    expect(listing.tokenId).to.equal(0);

    await expect(
      ensMarket.connect(user2).buyAsset(tokenId, { value: price })
    ).to.be.revertedWith('Asset not listed');
  });
});
