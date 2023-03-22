import dotenv from 'dotenv';
dotenv.config();
import fs from 'fs';
import hre, { ethers } from 'hardhat';
import { ENSMarket, ENSMarket__factory } from '../typechain-types';

export const main = async () => {
  const ensAddressMainnet: string = process.env.ENS_ADDRESS_MAINNET as string;
  const ensAddressGoerli: string = process.env.ENS_ADDRESS_GOERLI as string;
  const royalty: string = process.env.ROYALTY as string;

  if (!Boolean(ensAddressMainnet) || !Boolean(ensAddressGoerli)) {
    console.error('ENS addresses not set in the .env file');
    process.exit(1);
  }
  if (!Boolean(royalty)) {
    console.error('Royalty not set in the .env file');
    process.exit(1);
  }

  await hre.run('compile');

  const ENSMarketFactory: ENSMarket__factory = await ethers.getContractFactory(
    'ENSMarket'
  );
  const ENSMarket: ENSMarket = await ENSMarketFactory.deploy(
    ensAddressMainnet,
    royalty
  );

  await ENSMarket.deployed();

  console.log(`ENSMarket deployed to: ${ENSMarket.address}`);
  console.log(`Transaction hash: ${ENSMarket.deployTransaction.hash}`);

  /**
   * @summary A build folder will be created in the root directory of the project
   * where the ABI, network name, chainId and the deployed address will be saved inside a JSON file.
   */
  try {
    fs.mkdirSync('./build/deployments', { recursive: true });
  } catch (err) {
    console.error(err);
  }

  const address: string = ENSMarket.address;
  const res = await ENSMarket.provider.getNetwork();
  const network: {} = {
    chainId: res.chainId,
    name: res.name,
  };
  const abi: [] = JSON.parse(String(ENSMarket.interface.format('json')));

  const output = {
    address,
    network,
    abi,
  };

  try {
    fs.writeFileSync(
      './build/deployments/ENSMarket.json',
      JSON.stringify(output, null, 2)
    );
  } catch (err) {
    console.error(err);
  }
};

if (require.main === module) {
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}
