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

    // deploy ENSMarket
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
    ).to.be.revertedWithCustomError(ensMarket, 'IdListed');
  });

  it('should let user buy listed asset', async () => {
    const user2 = users[1];
    let latestTimeStamp = await time.latest();
    const price = ethers.utils.parseEther('10');

    await expect(
      ensMarket.connect(user2).buyAsset(tokenId, { value: price.sub(1) })
    ).to.be.revertedWithCustomError(ensMarket, 'IncorrectPrice');

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
    ).to.be.revertedWithCustomError(ensMarket, 'IdNotListed');
  });

  it('should let defiGod list their other assets', async () => {
    const tokenId1 = `3753584128017934794834621713974738912906883384968821393324595841447768811401`;
    const tokenId2 = `100662936949842813861136395822027782542059385773253925197784418555734630537987`;
    const tokenId3 = `46724153188015965122445316861426301974083116446114404724576359122453119903965`;
    const tokenId4 = `27009337699446091010926601184539178365501909135890518460496767186362075422440`;
    const tokenId5 = `70788121386423669794599000745408992939210048856534642145168469880269210789039`;

    await ens.connect(defiGod).approve(ensMarket.address, tokenId1);
    await ens.connect(defiGod).approve(ensMarket.address, tokenId2);
    await ens.connect(defiGod).approve(ensMarket.address, tokenId3);
    await ens.connect(defiGod).approve(ensMarket.address, tokenId4);
    await ens.connect(defiGod).approve(ensMarket.address, tokenId5);

    const price = ethers.utils.parseEther('10');

    let latestTimeStamp = await time.latest();

    await expect(ensMarket.connect(defiGod).listAsset(tokenId1, price))
      .to.emit(ensMarket, 'AssetListed')
      .withArgs(defiGodAddress, tokenId1, price, latestTimeStamp + 1);

    latestTimeStamp = await time.latest();

    await expect(ensMarket.connect(defiGod).listAsset(tokenId2, price))
      .to.emit(ensMarket, 'AssetListed')
      .withArgs(defiGodAddress, tokenId2, price, latestTimeStamp + 1);

    latestTimeStamp = await time.latest();

    await expect(ensMarket.connect(defiGod).listAsset(tokenId3, price))
      .to.emit(ensMarket, 'AssetListed')
      .withArgs(defiGodAddress, tokenId3, price, latestTimeStamp + 1);

    latestTimeStamp = await time.latest();

    await expect(ensMarket.connect(defiGod).listAsset(tokenId4, price))
      .to.emit(ensMarket, 'AssetListed')
      .withArgs(defiGodAddress, tokenId4, price, latestTimeStamp + 1);

    latestTimeStamp = await time.latest();

    await expect(ensMarket.connect(defiGod).listAsset(tokenId5, price))
      .to.emit(ensMarket, 'AssetListed')
      .withArgs(defiGodAddress, tokenId5, price, latestTimeStamp + 1);
  });

  it('should retrieve all the listings', async () => {
    const listings = await ensMarket.getAllListings();
    expect(listings.length).to.equal(5);
  });
});
