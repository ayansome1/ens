// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./dependencies/ReentrancyGuard.sol";
import "./interfaces/IERC721.sol";

contract ENSMarket is ReentrancyGuard {
	error IdListed();
	error IdNotListed();
	error NotSeller();
	error NotAdmin();
	error IncorrectPrice();
	error RoyaltyTransferFailed();
	error TransferFailed();

	struct ListedAssetStorage {
		uint256 tokenId;
		uint256 price;
		uint256 listTimeStamp;
		address seller;
		bool listed;
	}

	ListedAssetStorage[] private _listedAssetsArray;

	mapping(uint256 => ListedAssetStorage) private _tokenTolistedAssets;
	mapping(uint256 => uint256) private _tokenToindex;

	IERC721 private _ens;

	address private _admin;
	uint256 private _royalty;
	uint256 private _index;

	event AssetListed(
		address indexed seller,
		uint256 indexed tokenId,
		uint256 price,
		uint256 listTimeStamp
	);
	event AssetUnlisted(
		address indexed seller,
		uint256 indexed tokenId,
		uint256 unlistTimeStamp
	);
	event AssetBought(
		address indexed buyer,
		uint256 indexed tokenId,
		uint256 sellTimeStamp
	);

	constructor(address ens, uint256 royalty) {
		_ens = IERC721(ens);
		_royalty = royalty;
	}

	function listAsset(uint256 tokenId, uint256 price) external nonReentrant {
		ListedAssetStorage storage las = _tokenTolistedAssets[tokenId];
		if (las.listed) revert IdListed();

		_ens.safeTransferFrom(msg.sender, address(this), tokenId);

		las.seller = msg.sender;
		las.tokenId = tokenId;
		las.price = price;
		las.listTimeStamp = block.timestamp;
		las.listed = true;

		_listedAssetsArray.push(las);
		_tokenToindex[tokenId] = _index;
		++_index;

		emit AssetListed(msg.sender, tokenId, price, block.timestamp);
	}

	function unlistAsset(uint256 tokenId) external nonReentrant {
		ListedAssetStorage storage las = _tokenTolistedAssets[tokenId];
		if (!las.listed) revert IdNotListed();
		if (las.seller != msg.sender) revert NotSeller();

		_updateListing(tokenId);

		_ens.safeTransferFrom(address(this), msg.sender, tokenId);

		emit AssetUnlisted(msg.sender, tokenId, block.timestamp);
	}

	function buyAsset(uint256 tokenId) external payable nonReentrant {
		ListedAssetStorage storage las = _tokenTolistedAssets[tokenId];
		if (!las.listed) revert IdNotListed();
		if (msg.value != las.price) revert IncorrectPrice();

		address seller = las.seller;

		_updateListing(tokenId);

		_ens.safeTransferFrom(address(this), msg.sender, tokenId);

		uint256 royaltyShare = (msg.value * _royalty * 1e18) / 1e20;

		(bool success, ) = _admin.call{ value: royaltyShare }("");
		if (!success) revert RoyaltyTransferFailed();

		(success, ) = seller.call{ value: msg.value - royaltyShare }("");
		if (!success) revert TransferFailed();

		emit AssetBought(msg.sender, tokenId, block.timestamp);
	}

	function setAdmin(address admin) external {
		_onlyAdmin();
		_admin = admin;
	}

	function setRoyalty(uint256 royalty) external {
		_onlyAdmin();
		_royalty = royalty;
	}

	function getAdmin() external view returns (address) {
		return _admin;
	}

	function getENS() external view returns (address) {
		return address(_ens);
	}

	function getListing(
		uint256 tokenId
	) external view returns (ListedAssetStorage memory) {
		return _tokenTolistedAssets[tokenId];
	}

	function getAllListings()
		external
		view
		returns (ListedAssetStorage[] memory)
	{
		return _listedAssetsArray;
	}

	function getRoyalty() external view returns (uint256) {
		return _royalty;
	}

	function onERC721Received(
		address,
		address,
		uint256,
		bytes calldata
	) external pure returns (bytes4) {
		return this.onERC721Received.selector;
	}

	function _updateListing(uint256 tokenId) private {
		delete _tokenTolistedAssets[tokenId];

		_listedAssetsArray[_tokenToindex[tokenId]] = _listedAssetsArray[
			_listedAssetsArray.length - 1
		];
		_tokenToindex[
			_listedAssetsArray[_tokenToindex[tokenId]].tokenId
		] = _tokenToindex[tokenId];

		_listedAssetsArray.pop();
		--_index;
	}

	function _onlyAdmin() private view {
		if (msg.sender != _admin) revert NotAdmin();
	}
}
