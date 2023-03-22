import dotenv from 'dotenv';
dotenv.config();
import { BigNumber, ethers } from 'ethers';
import {
  abi as ENSMarketAbi,
  address as ensMarketAddress,
} from '../build/deployments/ENSMarket.json';
import { abi as ENSAbi } from '../build/dependencies/ENS.json';

const ensAddress = process.env.ENS_ADDRESS_MAINNET as string;

const ensMarketInstance = new ethers.Contract(ensMarketAddress, ENSMarketAbi);
const ensNft = new ethers.Contract(ensAddress, ENSAbi);

export const approve = async (
  signer: ethers.Signer,
  tokenId: BigNumber
): Promise<any> => {
  const tx = await ensNft.connect(signer).approve(ensMarketAddress, tokenId);
  const receipt = await tx.wait();
  console.log('receipt', receipt);

  return receipt;
};

export const listAsset = async (
  signer: ethers.Signer,
  tokenId: BigNumber,
  price: BigNumber
): Promise<any> => {
  const tx = await ensMarketInstance.connect(signer).listAsset(tokenId, price);
  const receipt = await tx.wait();
  console.log('receipt', receipt);

  return receipt;
};

export const buyAsset = async (
  signer: ethers.Signer,
  tokenId: BigNumber,
  value: BigNumber
): Promise<any> => {
  const tx = await ensMarketInstance
    .connect(signer)
    .buyAsset(tokenId, { value: value });
  const receipt = await tx.wait();
  console.log('receipt', receipt);

  return receipt;
};

export const unlistAsset = async (
  signer: ethers.Signer,
  tokenId: BigNumber
): Promise<any> => {
  const tx = await ensMarketInstance.connect(signer).unlistAsset(tokenId);
  const receipt = await tx.wait();
  console.log('receipt', receipt);

  return receipt;
};

export const setAdmin = async (
  signer: ethers.Signer,
  admin: string
): Promise<any> => {
  const tx = await ensMarketInstance.connect(signer).setAdmin(admin);
  const receipt = await tx.wait();

  return receipt;
};

export const setRoyalty = async (
  signer: ethers.Signer,
  royalty: BigNumber
): Promise<any> => {
  const tx = await ensMarketInstance.connect(signer).setRoyalty(royalty);
  const receipt = await tx.wait();

  return receipt;
};

export const getAdmin = async (): Promise<any> => {
  const admin = await ensMarketInstance.getAdmin();
  console.log('admin', admin);

  return admin;
};

export const getENS = async (): Promise<any> => {
  const ens = await ensMarketInstance.getENS();
  console.log('ens', ens);

  return ens;
};

export const getRoyalty = async (): Promise<any> => {
  const royalty = await ensMarketInstance.getRoyalty();
  console.log('royalty', royalty);

  return royalty;
};

export const getListing = async (tokenId: BigNumber): Promise<any> => {
  const listing = await ensMarketInstance.getListing(tokenId);
  console.log('listing', listing);

  return listing;
};
