// convert this file to typescript
import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import {
  getDomains,
  getAllowanceStatus,
  approveAssetListing,
  listAsset,
  buyAsset,
  unlistAsset,
  setAdmin,
  setRoyalty,
  getAdmin,
  getENS,
  getRoyalty,
  getListing,
  getAllListings,
} from '../../api/blockchain/api';
import Button from '../ui/button/button';
// import Alert from '../ui/alert';
import toast from 'react-hot-toast';

// align buttons side by side with flex
const Marketplace = () => {
  const [owner, setOwner] = useState('');
  const [domains, setDomains] = useState([]);
  const [tokenId, setTokenId] = useState('');
  const [price, setPrice] = useState('');
  const [listings, setListings] = useState([]);
  // const [signer, setSigner] = (useState < ethers.Signer) | (null > null);
  // const [signer, setSigner] = (useState < ethers.Signer) | (null > null);
  const [signer, setSigner] = useState(null);
  // const [provider, setProvider] = (useState < Web3Provider) | (null > null);
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    const init = async () => {
      // const provider = new ethers.providers.Web3Provider(window.ethereum);
      // const signer = provider.getSigner();
      // setSigner(signer);

      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        setSigner(signer);

        // const web3Provider = new Web3Provider(window.ethereum);
        setProvider(provider);
      } else {
        alert('Please install MetaMask or another wallet provider.');
      }
    };

    init();
  }, []);

  const fetchDomains = async () => {
    if (!owner) return;
    const result = await getDomains(owner);
    console.log(result);
    setDomains(result);
  };

  const fetchOneListing = async () => {
    if (!signer) console.log('!signer');

    const listing = await getListing(
      signer,
      `51707645418839522512491285834276328267545241745200145458361391326977758492639`
    );
    console.log('singleListing', listing);
  };

  const fetchListings = async () => {
    if (!signer) {
      console.log('!signer');
      return;
    }

    const allListings = await getAllListings(signer);
    const y = ethers.utils.formatEther(allListings[0].price.toString());
    console.log('price', y)

    // console.log('singleListing', singleListing);

    console.log('allListings', allListings);
    setListings(allListings);
  };

  const handleApproveAssetListing = async () => {
    if (!signer) {
      alert('Please connect your wallet first.');
      return;
    }
    if (!signer || !tokenId) {
      toast.error('Here is your toast.');
      return;
    }
    const tokenIdBN = ethers.BigNumber.from(tokenId);
    await approveAssetListing(signer, tokenIdBN);
  };

  const handleListAsset = async () => {
    if (!signer || !tokenId || !price) return;
    console.log(`lisiting...`);
    const tokenIdBN = ethers.BigNumber.from(tokenId);
    const priceBN = ethers.utils.parseEther(price);
    await listAsset(signer, tokenIdBN, priceBN);
    fetchListings();
  };

  const handleBuyAsset = async () => {
    if (!signer || !tokenId || !price) return;
    console.log(`buying...`);
    const tokenIdBN = ethers.BigNumber.from(tokenId);
    const valueBN = ethers.utils.parseEther(price);
    await buyAsset(signer, tokenIdBN, valueBN);
    fetchListings();
  };

  const handleUnlistAsset = async () => {
    if (!signer || !tokenId) return;
    const tokenIdBN = ethers.BigNumber.from(tokenId);
    await unlistAsset(signer, tokenIdBN);
    fetchListings();
  };

  async function connectAccount() {
    if (!window.ethereum) {
      alert('Please install MetaMask or another wallet provider.');
      return;
    }

    try {
      // Request user to connect their account
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      // Set the signer
      const signer = provider.getSigner(accounts[0]);
      setSigner(signer);
      console.log('already connected to metamask');
    } catch (error) {
      console.error('Failed to connect account:', error);
    }
  }

  useEffect(() => {
    console.log('called');
    fetchListings();
    console.log('called after');
  }, []);

  return (
    <div>
      <h1>ENS Marketplace</h1>

      <div>
        <h2>Owned Domains</h2>
        <input
          type="text"
          value={owner}
          onChange={(e) => setOwner(e.target.value)}
          placeholder="Enter owner address or ENS name"
        />
        <button onClick={fetchDomains}>Fetch Domains</button>

        <ul>
          {domains?.ownedNfts &&
            domains.ownedNfts.map((domain, index) => (
              <li key={index}>
                <strong>{domain.title}</strong> - {domain.tokenId}
              </li>
            ))}
        </ul>
      </div>

      <div>
        <h2>Listings</h2>
        <ul>
          {listings &&
            listings.map((listing, index) => (
              <li key={index}>
                {listing.name} - {ethers.utils.formatEther(listing.price)} ETH
              </li>
            ))}
        </ul>
      </div>

      <div>
        <h2>Token ID</h2>
        <input
          type="text"
          value={tokenId}
          onChange={(e) => setTokenId(e.target.value)}
          placeholder="Enter token ID"
        />
      </div>

      <div>
        <h2>Price (in ETH)</h2>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Enter price"
        />
      </div>
      <div>
        <Button
          onClick={() => setIsExpand(!isExpand)}
          className="mt-4 w-full"
          shape="rounded"
        >
          Vote Now
        </Button>

        <Button
          size="large"
          shape="rounded"
          fullWidth={true}
          color="gray"
          className="mt-6 uppercase dark:bg-gray-800"
        >
          Remove
        </Button>
        <Button onClick={connectAccount}>Connect Account</Button>
        <Button onClick={handleApproveAssetListing}>
          Approve Asset Listing
        </Button>
        <Button onClick={handleListAsset}>List Asset</Button>
        <Button onClick={handleBuyAsset}>Buy Asset</Button>
        <Button onClick={handleUnlistAsset}>Unlist Asset</Button>
        <Button onClick={fetchListings}>Fetch Listings</Button>
        <Button onClick={fetchOneListing}>Fetch One Listing</Button>
      </div>
    </div>
  );
};

export default Marketplace;
