import { request, gql } from 'graphql-request';
import { BigNumber } from 'ethers';

export const tokenIdToName = async (tokenId: BigNumber) => {
  const labelHash = tokenId.toHexString();
  const url = 'https://api.thegraph.com/subgraphs/name/ensdomains/ens';
  const GET_LABEL_NAME = gql`
  query{
    domains(first:1, where:{labelhash:"${labelHash}"}){
      labelName
    }
  }`;

  const data = await request(url, GET_LABEL_NAME);
  return data;
};

export const getExpiration = async (name: string) => {
  console.log(`subgraph name: ${name}`);
  const url = 'https://api.thegraph.com/subgraphs/name/ensdomains/ens';
  const GET_EXPIRATION = gql`
  query{
    registrations(
      where: { domain_: { name: "${name}" } }
      first: 1
      orderBy: expiryDate
      orderDirection: desc
    ) {
      expiryDate
    }
  }`;

  const data = await request(url, GET_EXPIRATION);
  return data;
};
